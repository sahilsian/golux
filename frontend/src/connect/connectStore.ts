import {configureStore} from "@reduxjs/toolkit";
import connectReducer from "./connectSlice";

// Manage the connection state with connectReducer
export const connectStore = configureStore({
    reducer: {
        connect: connectReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            // ignore the hub connection because signalR cannot be serialized into JSON
            ignoredActions: ['connect/setConnected', 'connect/createConnection/fulfilled'],
            ignoredPaths: ['connect.connected', 'connect.connection']
        }
    })
});

// Returns the main state of the connection store
export type RootState = ReturnType<typeof connectStore.getState>;
// Returns the dispatch function of the connection store
export type AppDispatch = typeof connectStore.dispatch;
