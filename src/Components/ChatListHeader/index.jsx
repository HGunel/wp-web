import React from 'react'
import './style.css'
import { SyncOutlined, WechatOutlined, MoreOutlined } from '@ant-design/icons'
import { Layout, Row, Col, Image, Button, Typography, Popover } from 'antd';
const { Header } = Layout;
const Index = ({ photo, fullname, email }) => {


    const _menu_ = [
        { title: "New group", },
        { title: "New community", onClick: null },
        { title: "Starred messages", onClick: null },
        { title: "Select chats", onClick: null },
        { title: "Setting", onClick: null },
        {
            title: "Log out", onClick: () => {
                localStorage.clear();
                window.open(process.env.REACT_APP_Login, '_parent')
            } },

    ]

    return (
        <Header style={{ backgroundColor: "#F0F2F5", paddingInline: 0 }}>
            <Row align={'middle'} justify="space-between" width="100%">
                <Col span={1}>
                    <Image
                        width={50}
                        height={50}
                        style={{ borderRadius: "50px" }}
                        preview={false}
                        src={photo}
                    />
                </Col>
                <Col span={12} style={{ height: 60, justifyContent: "center", display: "flex", flexDirection: 'column' }}

                >
                    <Typography.Title level={5} >{fullname} </Typography.Title >
                    <Typography.Text level={5}>{email}</Typography.Text >


                </Col>

                <Col style={{
                    display: "flex",
                    justifyContent: "flex-end",

                }} span={4} >
                    <Button type="text" shape="circle" icon={<SyncOutlined />} />
                    <Button type="text" shape="circle" icon={<WechatOutlined />} />

                    <Popover
                        placement="bottomRight"
                        trigger="click"
                        content={_menu_.map(({ title, onClick }, ind) => (
                            <Button
                                type='text'
                                style={{ display: "block", width: "100%", textAlign: "left" }}
                                key={ind}
                                onClick={onClick}
                                >
                                  {title}
                            </Button>
                        )


                        )}

                    >
                        <Button type="text" shape="circle" icon={<MoreOutlined />} />
                    </Popover>
                </Col>
            </Row>
        </Header>

    )
}

export default Index