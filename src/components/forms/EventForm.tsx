import React, {ChangeEvent, FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {Moment} from "moment";
import {IEvent} from "../../models/IEvent";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {RulesHelper} from "../../utils/RulesHelper";
const {Option} = Select;

interface EventFormProps {
    submit: (event: IEvent) => void,
}

const initialEvent: IEvent = {
    title: "", date: "", guest: "", author: ""
};

const EventForm: FC<EventFormProps> = ({submit}) => {
    const [event, setEvent] = useState<IEvent>(initialEvent);
    const [date, setDate] = useState<Moment | null>(null);

    const {guests} = useTypedSelector(state => state.events);
    const {username} = useTypedSelector(state => state.auth);

    const [form] = Form.useForm();

    const handleSelectChange = (value: string) => {
        setEvent({...event, guest: value});
    };

    const handleDateChoose = (date: Moment | null, dateString: string) => {
        setEvent({...event, date: dateString});
        setDate(date);
    };

    const submitForm = () => {
        submit({...event, author: username});
        form.resetFields();
    };

    return (
        <Form form={form} onFinish={submitForm}>
            <Form.Item
                label="Title"
                name="title"
                rules={[RulesHelper.required("Title field can not be empty")]}
            >
                <Input
                    type="text"
                    value={event.title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEvent({...event, title: e.target.value})}
                />
            </Form.Item>
            <Form.Item
                label="Date"
                name="date"
                rules={[
                        RulesHelper.required("Date field can not be empty")
                    ]}
            >
                <DatePicker onChange={handleDateChoose} value={date}/>
            </Form.Item>
            <Form.Item
                label="Guest"
                name="guest"
                rules={[RulesHelper.required("Guest field can not be empty")]}
            >
                <Select
                    className="w-150"
                    showSearch
                    value={event.guest}
                    onChange={handleSelectChange}
                >
                    {guests.map(guest => <Option key={guest.username}
                                                 value={guest.username}>{guest.username}</Option>)}
                </Select>
            </Form.Item>
            <Row justify="center">
                <Form.Item>
                    <Button type="primary" htmlType="submit">Add</Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;