import {IEvent} from "../models/IEvent";

export const filterEventsByUsername = (events: IEvent[], username: string) => {
    return events.filter(x => x.author === username || x.guest === username);
};