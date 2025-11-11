import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../reducers/system/systemStore.ts";
import {clearError, createConnection, removeConnection} from "../reducers/system/systemSlice.ts";

export const useAppDispatch =
    () =>
        useDispatch<AppDispatch>();
export const useAppSelector =
    <T>(selector: (state: RootState) => T) =>
        useSelector(selector)

const useSystem = () => {
    const dispatch = useAppDispatch();
    const { connection, status, error } = useAppSelector(state => state.system);

    const connect = (url: string) =>
        dispatch(createConnection(url));

    const disconnect = () => dispatch(removeConnection());

    const clearConnectionError = () => dispatch(clearError());

    return {
        connection,
        status,
        error,
        createConnection: connect,
        disconnect,
        clearConnectionError
    }

}

export default useSystem;