import {Menu, Icon} from "antd";
import React from 'react';

export const UserDropdown = (
    <Menu>
        <Menu.Item style={{padding: '5px 20px'}}>
            <a href="#" onClick={() => {
            }}>
                <Icon type="logout"/>
                Logout
            </a>
        </Menu.Item>
    </Menu>
);