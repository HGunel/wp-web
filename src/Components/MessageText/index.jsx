import React, {useState} from 'react'
import './style.css'
import { CheckOutlined,SmileOutlined } from '@ant-design/icons'
import {Row,Col,Button,Typography, Space} from 'antd'


const Index = ({message,time,status,user}) => {

    const [smile,setSmile]=useState(false)
    const show = ()=> setSmile(true)
   const hidden = () => setSmile(false)

    const Status=(status)=>{
        switch(status){
              case 3:return <> <CheckOutlined style={{color:"blue"}}/> <CheckOutlined style={{transform:"translateX(-8px)", color:"blue"}}/></>;
              case 2:return <> <CheckOutlined/> <CheckOutlined style={{transform:"translateX(-8px)"}}/></>;
              case 1:return <CheckOutlined/>;

          }
    }
  return (
   <>
   {
    user ?
    <Row align='middle'   className='MessageTextRight'>
        <Col className='emoji'>
          { smile && <Button shape='circle' icon={<SmileOutlined />}/>}
        </Col>
        <Col className='text' onMouseOver={show} onMouseOut={hidden}>
            <Space direction='vertical' align='end'>
            <Typography.Text>{message}</Typography.Text> 
            <Typography.Text italic>{time} {Status(status)} </Typography.Text> 
         </Space>
        </Col>
    </Row>
    :
    <Row align='middle'  className='MessageTextLeft'>
   
    <Col className='text'>
        <Space style={{width:"100%"}} direction='vertical' >
        <Typography.Text style={{marginLeft:10}}>{message}</Typography.Text> 
        <Typography.Text style={{float:"right"}} italic>{time} {Status(status)} </Typography.Text> 
     </Space>
    </Col>
    <Col className='emoji'>
       { smile && <Button shape='circle' icon={<SmileOutlined />}/>}
    </Col>
</Row>
   }
   </>
  )
}

export default Index
