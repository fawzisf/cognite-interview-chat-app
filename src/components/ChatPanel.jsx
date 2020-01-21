import React, {useState} from 'react';
import {List} from "antd";
import {MessageEditor} from "./MessageEditor";


export const ChatPanel = ({user}) => {
    const [messages, setMessages] = useState([]);

    return (
        <div style={{border: "1px solid #e8e8e8", height: "74vh"}}>
            {
                user ?
                    <>
                        <h1>Chatting to {user.name}</h1>
                        <List
                            size="small"
                            // header={<div>Header</div>}
                            // footer={<div>Footer</div>}
                            dataSource={messages}
                            renderItem={item => <List.Item>{item.message}</List.Item>}
                        />
                        <MessageEditor onAddMessage={(v) => {
                            messages.push({message: v, id: messages.length})
                            setMessages(messages);
                        }
                        }/>
                    </>
                    :
                    <h1 style={{position: "relative", top: "50%", textAlign: "center", transform: "translateY(-50%)"}}>
                        Pick A USER TO START CHATTING
                    </h1>

            }

        </div>
    )

};