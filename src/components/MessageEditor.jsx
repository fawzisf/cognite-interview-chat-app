import React, {useState} from 'react';
import {Button, Form, Input} from "antd";

export const MessageEditor = ({onAddMessage}) => {
    const [value, onChangeValue] = useState("");
    const onSubmit = () => {
        onAddMessage(value);
        onChangeValue("");
    };

    const onChangeInput = (e) => {
        onChangeValue(e.target.value)
    };

    const onInputKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            onSubmit();
        }
    };

    return (
        <div style={{padding: 10}}>
            <Form.Item>
                <Input.TextArea
                    placeholder={"Type Your message here"}
                    onKeyDown={onInputKeyDown}
                    rows={4}
                    onChange={onChangeInput}
                    value={value}/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" onClick={onSubmit} type="primary">
                    Send Message
                </Button>
            </Form.Item>
        </div>
    )
};