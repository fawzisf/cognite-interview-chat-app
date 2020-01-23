import React, {useState} from 'react';
import './App.css';
import {Avatar, Col, Dropdown, Layout, Row} from 'antd';
import {UserDropdown} from "./components/UserDropdown";
import logo from './logo.svg';
import {FriendsList} from "./components/FriendsList";
import {ChatPanel} from "./components/ChatPanel";
import {CurrentUser} from "./data/user";

const {Header, Content, Footer} = Layout;

function App() {
    const [selectedUser, setSelectedUser] = useState(null);
    return (
        <Layout style={{background: "white"}}>
            <Header>

                <Row>
                    <Col span={4}>
                        <img alt={"Cognite Logo"} width={"100%"} src={logo}/>
                    </Col>

                    <Col offset={18} span={2}>
                        <Dropdown overlay={UserDropdown}>
                            <div className="ant-dropdown-link">
                                <Avatar
                                    style={{
                                        backgroundColor: '#001529',
                                        fontSize: 30
                                    }}
                                    size="large"
                                >
                                    {CurrentUser.initials}
                                </Avatar>
                            </div>
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
            <Content style={{padding: '0 50px', marginTop: 50}}>
                <Row gutter={8}>
                    <Col span={8}>
                        <FriendsList onChangeUser={setSelectedUser} selectedUser={selectedUser}/>
                    </Col>
                    <Col span={16}>
                        {
                            selectedUser ?
                                <ChatPanel user={selectedUser}/>
                                :
                                <h1 style={{textAlign: "center", padding: 12}}>
                                    Pick A USER TO START CHATTING
                                </h1>
                        }

                    </Col>
                </Row>
            </Content>
            <Footer style={{textAlign: 'center'}}>Cognite Interview chat App</Footer>
        </Layout>
    );
}

export default App;
