// High level macro event for running the application
import { RegisterBaseWebEvent } from "../../models/webEvents/decorator.ts";
import type {baseWebEvent} from "../../models/webEvents/baseWebEvent.ts";

export interface SystemInitializePayload {
    environment?: "development" | "staging" | "production";
    configUrl?: string;
    autoConnect?: boolean;
}
@RegisterBaseWebEvent("system.initialize")
class SystemInitialize implements baseWebEvent<SystemInitializePayload> {
    id: string;
    seq: number;
    readonly window: string;
    type: string;
    origin: "client" | "server";
    status: "ok" | "ack" | "error";
    session: string;
    payload: SystemInitializePayload;
    timestamp?: number;

    constructor(payload: SystemInitializePayload, session?: string) {
        this.id = crypto.randomUUID();
        this.seq = 0;
        this.window = "system";
        this.type = "system.initialize";
        this.origin = "client";
        this.status = "ok";
        this.session = session ?? crypto.randomUUID();
        this.payload = payload;
        this.timestamp = Date.now();
    }
}

export default SystemInitialize