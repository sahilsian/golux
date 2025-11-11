
// Runtime router for dispatching events to the correct components
import type {baseWebEvent} from "../../../models/webEvents/baseWebEvent.ts";
import {eventBus} from "./eventBus.ts";

const handlers: Record<string, (event: any) => void> = {
    "system.initialize": (e) => console.log("System initialized!", e),
};
const runtimeRouter = () => {
    eventBus.on("*", (event: baseWebEvent) => {
        const handler = handlers[event.type];
        if(handler) {
            handler(event);
        } else {
            console.warn(`No handler for event type: ${event.type}`);
        }
    })
}

export default runtimeRouter;