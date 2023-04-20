import React from 'react'
import "./style.css"
import { DownSquareOutlined} from '@ant-design/icons'
import {  Row, Col,  Button,} from 'antd';
const Index = ({count}) => {
  return (
    <Row width='100%' align={'middle'} style={{height:45, backgroundColor:"white"}}> 
    <Col span={20}>
      <Button style={{textAlign:"left"}} type='text' block icon={<DownSquareOutlined />}>Arxiv</Button>
    </Col>
    <Col span={4} style={{textAlign:"center"}}>{count}</Col>
   </Row>

  )
}

export default Index
