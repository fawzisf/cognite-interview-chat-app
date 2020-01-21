import React, {useEffect, useState} from 'react';
import {Avatar, List} from "antd";
import {MessageEditor} from "./MessageEditor";


export const ChatPanel = ({user}) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([]);
    }, [user]);

    return (
        <div style={{border: "1px solid #e8e8e8",}}>
            {
                user ?
                    <>
                        <h1>Chatting to {user.name}</h1>
                        <div style={{minHeight: 200, padding: 20}}>
                            <List

                                size="small"
                                // header={<div>Header</div>}
                                // footer={<div>Footer</div>}
                                dataSource={messages}
                                renderItem={item => <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar>EC</Avatar>}
                                        title={<a href="https://ant.design">{"Evan"}</a>}
                                        description={item.message}
                                    />
                                </List.Item>}
                            />
                        </div>
                        <MessageEditor onAddMessage={(v) => {
                            console.log(v);

                            setMessages([...messages, {id: messages.length, message: v}]);
                            console.log(messages);
                        }
                        }/>
                    </>
                    :
                    <h1 style={{textAlign: "center",}}>
                        Pick A USER TO START CHATTING
                    </h1>

            }

        </div>
    )

};