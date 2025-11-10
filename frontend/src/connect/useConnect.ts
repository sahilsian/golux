import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "./connectStore.ts";
import {clearError, createConnection, removeConnection} from "./connectSlice.ts";

export const useAppDispatch =
    () =>
        useDispatch<AppDispatch>();
export const useAppSelector =
    <T>(selector: (state: RootState) => T) =>
        useSelector(selector)

const useConnect = () => {
    const dispatch = useAppDispatch();
    const { connection, status, error } = useAppSelector(state => state.connect);

    const connect = (url: string) =>
        dispatch(createConnection(url));

    const disconnect = () => dispatch(removeConnection());

    const clearConnectionError = () => dispatch(clearError());

    return {
        connection,
        status,
        error,
        connect,
        disconnect,
        clearConnectionError
    }

}

export default useConnect;