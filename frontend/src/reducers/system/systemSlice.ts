import * as signalR from "@microsoft/signalr";
import {createAsyncThunk, type ActionReducerMapBuilder, type PayloadAction, createSlice} from "@reduxjs/toolkit";
import {type WritableDraft } from "immer";
import {eventBus} from "../../core/system/bus/eventBus.ts";
import SystemInitialize from "../../events/system/initialize.ts";

// Union of statuses that the slice handles
export type Statuses = 'connecting' | 'connected' | 'idle' | 'disconnected' | 'error'

// State type for the slice
interface SystemState {
    connection: signalR.HubConnection | null;
    status: Statuses;
    error: string | null;
}

// Initial state for the slice
const initialState: SystemState = {
    connection: null,
    status: 'idle',
    error: null,
};

// Check if the connection is active
const isConnectionActive = (connection: signalR.HubConnection | null): boolean => {
    return connection?.state === signalR.HubConnectionState.Connected ||
        connection?.state === signalR.HubConnectionState.Connecting;
};


// Thunk for creating a signalR connection with the provided URL. Updates the redux state accordingly.
export const createConnection =
    createAsyncThunk<
        signalR.HubConnection,
        string,
        { state: { system: SystemState } }
    >(
    'system/createConnection',
    async (url: string, { getState, rejectWithValue }) => {
        const state = getState() as { system: SystemState };

        // stop existing connection if it already exists
        if(isConnectionActive(state.system.connection) && state.system.connection !== null) {
            try {
                await state.system.connection.stop();
            } catch (error) {
                console.error('Failed to stop existing connection:', error);
            }
        }
        try {
            // bootstrapping the connection
            const newConnection = new signalR.HubConnectionBuilder()
                .withUrl(url)
                .withAutomaticReconnect()
                .build();

            await newConnection.start();
            eventBus.attachConnection(newConnection);
            eventBus.emit(new SystemInitialize({ environment: "development" }));

            return newConnection;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
    );

// Thunk for removing the signalR connection. Updates the redux state accordingly.
export const removeConnection =
    createAsyncThunk<
        void,
        void,
        { state: { system: SystemState } }
    >(
    'system/removeConnection',
    async (_, { getState, rejectWithValue}) => {
        const state = getState() as { system: SystemState };

        // stop the current connection
        if(state.system.connection) {
            try {
                await state.system.connection.stop();
            }  catch (error) {
                console.error('Failed to stop connection:', error);
                return rejectWithValue((error as Error).message);
            }
        }
    }
)

// Action creators for updating the redux state based on the status of the connection
// set connecting state
const setConnectingState = (state: WritableDraft<SystemState>) => {
    state.status = 'connecting';
    state.error = null;
};
// set a connected state
const setConnectedState = (state: WritableDraft<SystemState>, connection: signalR.HubConnection) => {
    state.status = 'connected';
    state.connection = connection;
};
// set a error state
const setErrorState = (state: WritableDraft<SystemState>, errorMessage: string) => {
    state.status = 'error';
    state.error = errorMessage;
};
// set a disconnected state
const setDisconnectedState = (state: WritableDraft<SystemState>) => {
    state.status = 'disconnected';
    state.connection = null;
};
// clear error state
const clearErrorState = (state: WritableDraft<SystemState>) => {
    state.error = null;
};

// Slice for managing the connection state. Uses the thunks defined above in conjunction with the action creators to update the redux state.
        export const systemSlice = createSlice({
            name: 'system',
            initialState,
            reducers: {
                clearError: clearErrorState
            },
            extraReducers: (builder:ActionReducerMapBuilder<SystemState>) => {
                builder
                    .addCase(createConnection.pending, setConnectingState)
                    .addCase(createConnection.fulfilled, (state: WritableDraft<SystemState>, action:PayloadAction<signalR.HubConnection>) => {
                        setConnectedState(state, action.payload);
                    })
                    .addCase(createConnection.rejected, (state: WritableDraft<SystemState>, action) => {
                        setErrorState(state, action.payload as string);
                    })
                    .addCase(removeConnection.rejected, (state, action) => {
                        setErrorState(state, action.payload as string);
                    })
                    .addCase(removeConnection.fulfilled, setDisconnectedState);
    }
})

// Action creators for updating the redux state
export const { clearError } = systemSlice.actions;
export default systemSlice.reducer;