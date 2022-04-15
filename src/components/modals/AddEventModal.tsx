import React, {FC} from 'react';
import EventForm from "../forms/EventForm";
import {IEvent} from "../../models/IEvent";
import {Modal} from "antd";

interface AddEventModalProps {
    title: string,
    className: string,
    isOpen: boolean,
    onCancel: () => void,
    submitEvent: (event: IEvent) => void
}
const AddEventModal: FC<AddEventModalProps> = ({title, className, isOpen, onCancel, submitEvent}) => {
    return (
        <Modal title={title}
               className={className}
               visible={isOpen}
               onCancel={onCancel}
               footer={null}
        >
            <EventForm submit={submitEvent} />
        </Modal>
    );
};

export default AddEventModal;