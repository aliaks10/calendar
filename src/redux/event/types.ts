import {IUser} from "../../models/IUser";
import {IEvent} from "../../models/IEvent";

export const enum EventActionEnum {
    SET_GUESTS = "SET_GUESTS",
    SET_EVENTS = "SET_EVENTS",
    SET_EVENT_ERROR = "SET_EVENT_ERROR",
    SET_EVENT_IS_LOADING = "SET_EVENT_IS_LOADING",
}

export interface EventState {
    events: IEvent[];
    guests: IUser[];
    isLoading: boolean;
    error: string;
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IEvent[];
}

export interface SetGuestsAction {
    type: EventActionEnum.SET_GUESTS;
    payload: IUser[];
}

export interface SetEventErrorAction {
    type: EventActionEnum.SET_EVENT_ERROR;
    payload: string
}

export interface SetEventIsLoadingAction {
    type: EventActionEnum.SET_EVENT_IS_LOADING;
    payload: boolean
}

export type EventAction =
    SetEventsAction
    | SetGuestsAction
    | SetEventIsLoadingAction
    | SetEventErrorAction