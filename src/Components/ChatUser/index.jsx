import React, { useState } from 'react'
import "./style.css"
import { Row, Col, Image, Typography, Space, Button, Popover, } from 'antd'
import { MoreOutlined, SearchOutlined } from '@ant-design/icons'
import { profile } from "../../Assets/img";

const _menu_=["Info","Contact"]

const Index = ({ search, name, status, photo }) => {

  const [src, setSrc] = useState(photo)

  const imageErrorHandler = () => setSrc(profile);
  const onError = () => {setSrc(src)}

  return (
    <Row
      width='100'
      align='middle'
      className='ChatUser'

    >
      <Col style={{ width: "60" }} >
        <Image
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
          preview={false}
          src={src}
          onError={imageErrorHandler}
        />
      </Col>
      <Col style={{ width: "calc(100% - 140px)" }}  >
        <Typography.Title level={5} >{name}</Typography.Title >
        <Typography.Text level={5} >{status}</Typography.Text >

      </Col>
      <Col style={{ width: 80 }} >
        <Space
          direction="horizontal"
          size={0}
          style={{ paddingInline: 5, display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button onClick={search} type="text" shape="circle" icon={<SearchOutlined />} />

          <Popover placement="bottomRight"  trigger="click" content={
            _menu_.map((val,ind)=> <Button style={{textAlign:"left"}} type='text' block key={ind}>{val}</Button>)
          } 
          
          >
            <Button type="text" shape="circle" icon={<MoreOutlined />} />
          </Popover>
        </Space>
      </Col>


    </Row>
  )
}

export default Index
