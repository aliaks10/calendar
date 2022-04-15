import {
    EventActionEnum,
    SetEventErrorAction,
    SetEventIsLoadingAction,
    SetEventsAction,
    SetGuestsAction
} from "./types";
import {AppDispatch} from "../store";
import {IUser} from "../../models/IUser";
import {IEvent} from "../../models/IEvent";
import {filterEventsByUsername} from "../../utils/GeneralHelper";
import UserService from "../../services/UserService";

export const EventActionCreators = {
    setEvents: (events: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload: events}),
    setGuests: (guests: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload: guests}),
    setEventIsLoading: (isLoading: boolean): SetEventIsLoadingAction => ({type: EventActionEnum.SET_EVENT_IS_LOADING, payload: isLoading}),
    setEventError: (error: string): SetEventErrorAction => ({type: EventActionEnum.SET_EVENT_ERROR, payload: error}),
    fetchEvents: (username: string) => (dispatch: AppDispatch) => {
        dispatch(EventActionCreators.setEventIsLoading(true));
        try {
            const events = localStorage.getItem("events") || "[]";
            const parsedEvents = JSON.parse((events)) as IEvent[];
            dispatch(EventActionCreators.setEvents(filterEventsByUsername(parsedEvents, username)));
        } catch (e) {
            dispatch(EventActionCreators.setEventError("Error while fetching events"));
        } finally {
            dispatch(EventActionCreators.setEventIsLoading(false));
        }
    },
    fetchGuests: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers();
            const filteredGuests = response.data.filter(x => x.username !== username);
            dispatch(EventActionCreators.setGuests(filteredGuests));
        } catch (e) {
            dispatch(EventActionCreators.setEventError("Error while fetching guests"));
        }
    },
    addEvent: (event: IEvent, username: string) => (dispatch: AppDispatch) => {
        dispatch(EventActionCreators.setEventIsLoading(true));
        try {
            const events = localStorage.getItem("events") || "[]";
            const parsedEvents = JSON.parse((events)) as IEvent[];
            parsedEvents.push(event);
            localStorage.setItem("events", JSON.stringify(parsedEvents));
            dispatch(EventActionCreators.setEvents(filterEventsByUsername(parsedEvents, username)));
        } catch (e) {
            dispatch(EventActionCreators.setEventError("Error while adding new event"));
        }
    }
};