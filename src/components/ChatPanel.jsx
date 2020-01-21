import React, {useEffect, useState} from 'react';
import {Avatar, List, Empty} from "antd";
import {MessageEditor} from "./MessageEditor";
import {CurrentUser} from "../data/user";


export const ChatPanel = ({user}) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([]);
    }, [user]);

    const onAddMessage = (value) => {
        setMessages([...messages, {id: messages.length, message: value, sender: CurrentUser}]);
    };

    return (
        <div style={{border: "1px solid #e8e8e8",}}>
            {
                user ?
                    <>
                        <h1 style={{padding: 10}}>Chatting to {user.name}</h1>
                        <div style={{minHeight: 200, padding: 20}}>
                            <List locale={{emptyText: <Empty description={"No messages yet, start chatting now."}/>}}
                                  size="small"
                                  dataSource={messages}
                                  renderItem={item => <List.Item>
                                      <List.Item.Meta
                                          avatar={<Avatar>{item.sender.initials}</Avatar>}
                                          title={<div>{item.sender.name}</div>}
                                          description={item.message}
                                      />
                                  </List.Item>}
                            />
                        </div>
                        <MessageEditor onAddMessage={onAddMessage}/>
                    </>
                    :
                    <h1 style={{textAlign: "center", padding: 12}}>
                        Pick A USER TO START CHATTING
                    </h1>

            }

        </div>
    )

};