import React, {FC, ReactNode} from 'react';
import {Calendar} from "antd";
import DateConstants from "../constants/DateConstants";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";

interface EventCalendarProps {
    events: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = ({events}) => {

    const dateCellRender = (value: Moment): ReactNode => {
        const dayEvents = events.filter(x => x.date === value.format(DateConstants.DATE_FORMAT));
        return dayEvents.map((event, index) =>
            <div className="date-cell" key={event.title + index}>{event.title}</div>);
    };

    return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;