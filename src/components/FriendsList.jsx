import React from 'react';
import {List} from "antd";

const friends = [
    {
        name: "Fawzi",
        id: 1,
    },
    {
        name: "Evan Charlton",
        id: 2,
    },
    {
        name: "Teddy The Bear",
        id: 3,
    },
    {
        name: "Sheldon Cooper",
        id: 4,
    },


];
export const FriendsList = ({selectedUser, onChangeUser}) => {

    return (
        <List
            size="large"
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={friends}
            renderItem={item => <List.Item onClick={() => {
                onChangeUser(item)
            }}
                                           className={`friends-item ${selectedUser && selectedUser.id === item.id && "friends-selected"}`}>{item.name}</List.Item>}
        />
    )
};