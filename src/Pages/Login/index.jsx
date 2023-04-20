import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import { profile_2 } from "../../Assets/img";
import { Link, useNavigate } from "react-router-dom";
import { MdAlternateEmail } from 'react-icons/md';

import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Row,
  Typography,
  message,
} from "antd";
import {  AiOutlineLock } from "react-icons/ai";
import { Content } from "antd/es/layout/layout";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const Index = () => {
  
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage();
  const Redirect = useNavigate()


  const onFinish = (values) => {
       const url = "https://aticiliqkursu.az/v2.0.0//signin.php"
       axios.post(url,values).then(({data,status})=>{
        if(status===200 && data.data.id){
        localStorage.setItem("user", "%salam%"+ btoa (JSON.stringify(data.data)) + "%salam%")
        Redirect(process.env.REACT_APP_CHAT)
        }else{
          messageApi.open({ type: 'error', content:data.data })
        }
       })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <> 
       {contextHolder}
    <Layout className='Layout' >
      <Content className='Content-reg' >
        <Row>
          <Col xs={2} sm={4} md={6} lg={9} xl={9}> </Col>
          <Col xs={20} sm={16} md={12} lg={6} xl={6}>
            <Form
               className='login-form'
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              form={form}

            >
              <Form.Item >
                <Image
                  className='image'
                  width={100}
                  height={100}
                  preview={false}
                  style={{ borderRadius: "50%" }}
                  src={profile_2}
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!'
                  },
                  {
                      type:"email",
                      message:"Please write correct information"
                  }
                ]}
              >
                <Input 
                 size='large'
                 prefix={<MdAlternateEmail className='prefix' />}
                 type='email'
                 placeholder='Email'
                 bordered={false}
                 className='input'
                  />
              </Form.Item>

              <Form.Item
                name="_password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!'
                  },
                  {
                    min:7,
                    message: 'Please write 7 characters'
                  }
                ]}
              >
                <Input.Password
                  size='large'
                  prefix={<AiOutlineLock className='prefix' />}
                  bordered={false}
                  className="input"
                />
              </Form.Item>

              <Form.Item 
              {...tailLayout}
               style={{ textAlign: "center" }}
               >
                <Button
                 size='large'
                 type="primary"
                  htmlType="submit"
                  className='login-button'
                  >
                    
                  Login
                </Button>

                <Typography.Title level={5} style={{ fontWeight: "400" }}>
                    Not registered?
                    <Link
                      to={process.env.REACT_APP_CHAT}
                      style={{ padding: "2px" }}
                    >
                      Create an Account
                    </Link>
                  </Typography.Title>

              </Form.Item>
            </Form>
          </Col>
          <Col xs={2} sm={4} md={6} lg={9} xl={9}></Col>

        </Row>
      </Content>
    </Layout>
    </>
  );
};


export default Index;
