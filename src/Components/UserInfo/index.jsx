import React, { useState } from 'react'
import "./style.css"
import{ Row, Col, Image,Typography, Space, Button,} from 'antd'
import { profile } from "../../Assets/img";
import { BsChevronDown } from "react-icons/bs";

const Index = ({name,message,photo,time,onClick}) => {
 
  const [status,setStatus] =useState(false)
  const [src,setSrc ] = useState(photo)

  const Show = () => setStatus(true);
  const Hidden = () => setStatus(false);
  const imageErrorHandler = () => setSrc(profile);


   return (
   <Row 
   width='100'
   align= 'middle'
   className='UserInfo'
   style={{backgroundColor: status && 'rgb(240, 242, 245)'}}
   onMouseOver={Show}
   onMouseOut={Hidden}
   onClick={onClick}
   >
    <Col  span={5}>
    <Image
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
                preview={false}
                src={src}
                onError={imageErrorHandler}
              />
    </Col>
    <Col span={14}>
      <Typography.Title level={5} >{name}</Typography.Title >
      <Typography.Text  level={5}>{message}</Typography.Text >
    
    </Col>
    <Col span={5}>
      <Space   
      direction = "vertical"
      size={0}
      style={{display:'flex', alignItems:'flex-end'}}
      >
           <Typography.Text  code>{time}</Typography.Text > 
           {status ? (
            <Button type='text' icon={<BsChevronDown />}></Button>
           ):(
            <Button type='link' style={{ color: "transparent" }}></Button>
           )}
       {
        
       }
      </Space>
    </Col>

      
   </Row>
  )
}

export default Index
