import React, {useEffect, useState} from 'react';
import {Button, Form, Input} from "antd";
import useLocalStorage from "../hooks/useLocalStorage";

export const MessageEditor = ({onAddMessage, receiver}) => {
    const [value, setValue] = useLocalStorage("drafts", {});
    const onSubmit = () => {
        onAddMessage(value);
        setValue("");
    };
    // useEffect(() => {
    //     setValue("");
    // }, [receiver]);

    const onChangeInput = (e) => {
        let newValue = {...value};
        newValue[receiver.id] = e.target.value;
        setValue(newValue);
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
                    data-testid="chat-input"
                    placeholder={"Type Your message here"}
                    onKeyDown={onInputKeyDown}
                    rows={4}
                    onChange={onChangeInput}
                    value={value[receiver.id] || ""}/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" onClick={onSubmit} type="primary">
                    Send Message
                </Button>
            </Form.Item>
        </div>
    )
};