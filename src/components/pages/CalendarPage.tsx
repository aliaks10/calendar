import React, {FC, useEffect, useState} from 'react';
import {Layout, Button} from "antd";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IEvent} from "../../models/IEvent";
import AddEventModal from "../modals/AddEventModal";
import EventCalendar from "../EventCalendar";

const CalendarPage: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {addEvent, fetchEvents, fetchGuests} = useActions();

    const {events} = useTypedSelector(state => state.events);
    const {username} = useTypedSelector(state => state.auth);

    useEffect(() => {
        fetchGuests(username);
        fetchEvents(username);
    }, []);

    const submitEvent = (event: IEvent) => {
        addEvent(event, username);
        setIsOpen(false);
    };

    return (
        <Layout.Content className="flex-content">
            <EventCalendar events={events}/>
            <Button type="primary" onClick={() => setIsOpen(true)}>Add Event</Button>
            <AddEventModal
                title="Add Event"
                className="calendar-modal"
                isOpen={isOpen}
                onCancel={() => setIsOpen(false)}
                submitEvent={submitEvent}
            />
        </Layout.Content>
    );
};

export default CalendarPage;