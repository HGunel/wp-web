import React from 'react'
import './style.css'
import { Input, Button, Row, Col, } from 'antd';
import { BsEmojiSmile } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";


const Index = ({smile}) => {
  return (
    // <Input.Group>
      <Row align="middle">
        <Col style={{width:40}}>
          <Button onClick={smile} type='text'  icon={<BsEmojiSmile size={24} />} />
        </Col>

        <Col style={{width:40}}>
          <Button type='text' icon={<AiOutlinePaperClip size={28} />} />
        </Col>

        <Col style={{width:'calc(100% - 120px)'}}>
          <Input placeholder="message... " />
        </Col>

        <Col   style={{width:40}}>  
          <Button type='text' icon={<BiMicrophone size={25} />} />
        </Col>




      </Row>
    // </Input.Group>
  )
}

export default Index
