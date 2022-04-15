import {EventActionEnum, EventAction, EventState} from "./types";
import {IUser} from "../../models/IUser";
import {IEvent} from "../../models/IEvent"

const initialState: EventState = {
    events: [] as IEvent[],
    guests: [] as IUser[],
    isLoading: false,
    error: "",
};

export const EventReducer = (state = initialState, action: EventAction): EventState => {
    switch (action.type) {
        case EventActionEnum.SET_EVENTS:
            return {...state, events: action.payload};
        case EventActionEnum.SET_GUESTS:
            return {...state, guests: action.payload};
        case EventActionEnum.SET_EVENT_IS_LOADING:
            return {...state, isLoading: action.payload};
        case EventActionEnum.SET_EVENT_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
};