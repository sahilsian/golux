import {configureStore} from "@reduxjs/toolkit";
import systemReducer from "./systemSlice.ts";

// Manage the connection state with connectReducer
export const systemStore = configureStore({
    reducer: {
        system: systemReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            // ignore the hub connection because signalR cannot be serialized into JSON
            ignoredActions: ['system/setConnected', 'system/createConnection/fulfilled'],
            ignoredPaths: ['system.connected', 'system.connection']
        }
    })
});

// Returns the main state of the connection store
export type RootState = ReturnType<typeof systemStore.getState>;
// Returns the dispatch function of the connection store
export type AppDispatch = typeof systemStore.dispatch;
