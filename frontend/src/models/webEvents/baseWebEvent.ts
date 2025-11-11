export abstract class baseWebEvent<T=any> {
    abstract id: string;
    abstract seq: number;
    abstract window: string;
    abstract type: string;
    abstract payload: T;
    abstract origin: "client" | "server";
    abstract session: string;
    abstract status: "ok" | "ack" | "error";
    // The run function is optional. Runtime orchestration is bad practice, but it's useful for testing without a socket.
    abstract run?: Promise<void> | void;
    // Optional timestamp, but mostly not optional
    abstract timestamp?: number;
}