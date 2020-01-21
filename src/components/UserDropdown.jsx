import {Menu, Icon} from "antd";
import React from 'react';

export const UserDropdown = (
    <Menu>
        <Menu.Item style={{padding: '5px 20px'}}>
            <div onClick={() => {
            }}>
                <Icon type="logout"/>
                Logout
            </div>
        </Menu.Item>
    </Menu>
);