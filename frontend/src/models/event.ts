interface BaseWebEvent {
    id: string;
    type: string;
    context: string;
    payload: object;
    timestamp: string;
}
export type WebEvent = BaseWebEvent;
