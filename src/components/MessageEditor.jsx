import React, {useState} from 'react';
import {Button, Form, Input} from "antd";

export const MessageEditor = ({onAddMessage}) => {
    const [value, onChangeValue] = useState("");
    const onSubmit = () => {
        onAddMessage(value);
    };
    return (
        <div style={{padding:10}}>
            <Form.Item>
                <Input.TextArea rows={4} onChange={e=>{onChangeValue(e.target.value)}} value={value}/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" onClick={onSubmit} type="primary">
                   Send Message
                </Button>
            </Form.Item>
        </div>
    )
}