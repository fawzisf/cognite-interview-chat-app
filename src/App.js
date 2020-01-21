import React, {useState} from 'react';
import './App.css';
import {Avatar, Col, Dropdown, Layout, Row} from 'antd';
import {UserDropdown} from "./components/UserDropdown";
import logo from './logo.svg';
import {FriendsList} from "./components/FriendsList";
import {ChatPanel} from "./components/ChatPanel";

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
                            <a className="ant-dropdown-link" href="#">
                                <Avatar
                                    style={{
                                        backgroundColor: '#001529',
                                        fontSize: 30
                                    }}
                                    size="large"
                                >
                                    EC
                                </Avatar>
                            </a>
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
                        <ChatPanel user={selectedUser}/>
                    </Col>
                </Row>
            </Content>
            <Footer style={{textAlign: 'center'}}>Cognite Interview chat App</Footer>
        </Layout>
    );
}

export default App;
