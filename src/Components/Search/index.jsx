import React from 'react'
import './style.css'
import { ArrowLeftOutlined ,SearchOutlined } from '@ant-design/icons'
import {  Row, Col,  Button, Input ,} from 'antd';
import { useState } from 'react'
import { BiFilter } from "react-icons/bi";
const Index = () => {
  const [icon, setIcon] =useState(true)
  return (
    <Row width="100%" align="middle" style={{ height: 45, backgroundColor: "white" }}>
    <Col span={20} >  
    <Input style={{backgroundColor:"#F0F2F5"}} placeholder="Search or start new chat"
     prefix={icon?<SearchOutlined />:<ArrowLeftOutlined/>}
     onFocus={()=>setIcon(!true)}
     onBlur={()=>setIcon(true)}
      />
    </Col>
    <Col span={4} style={{textAlign:"center"}}>
      <Button icon={<BiFilter size={25} />} />
    </Col>
  </Row>
  )
}

export default Index
