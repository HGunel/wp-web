import React, { useState } from "react";
import "./style.css";
import { profile_2 } from "../../Assets/img";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Row,
  Typography,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { Content } from "antd/es/layout/layout";

const Index = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate()
  const [formDom] = Form.useForm()


  const onFinish = (values) => {

    console.log(values);
    const { confirmPassword, _password } = values
    if (confirmPassword === _password) {
      console.log("duzdur");
      const url = "https://aticiliqkursu.az/v2.0.0//signup.php"
      const data = {...values, photo: "profile.png"}

      axios.post(url, data).then(res => {
        if (res.status===200 && res.data.data?.id ) {
          messageApi.open({ type: 'success', content: 'Registration successfully' });
          formDom.resetFields()
          setTimeout(() => navigate(process.env.REACT_APP_Login), 1000);
        } else {
          messageApi.open({ type: 'error', content: "Bu email adressi artiq istifade olunub " });
        }
      })

    } else {
      console.log("sehvdir");
      formDom.setFields([
        {
          name: "_password",
          errors: ['xahish edirik parolu duzgun yazin']
        },
        {
          name: "confirmPassword",
          errors: ['xahish edirik parolu duzgun yazin']
        }
      ])
    }


  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };







  return (
    <Layout className='Layout'>
      {contextHolder}
      <Content className='Content'>
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={9}></Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={6}>
            <Form

              className='register-form'
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              form={formDom}



            >
              <Form.Item name='profile_png_2'>
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
                name='fullName'
                rules={[
                  {
                    required: true,
                    message: "Please input your Fullname!",
                  },
                ]}
              >
                <Input
                  size='large'
                  prefix={<AiOutlineUser className='prefix' />}
                  placeholder='Fullname'
                  bordered={false}
                  className='input'
                />
              </Form.Item>

              <Form.Item
                name="email"

                rules={[
                  {
                    required: true,
                    message: 'Please input your email!'
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
                  }


                ]}
              >
                <Input.Password
                  value=""
                  size='large'
                  prefix={<AiOutlineLock className='prefix' />}
                  placeholder='Password'
                  bordered={false}
                  className='input'
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!'
                  }


                ]}
              >
                <Input.Password
                  value=""
                  size='large'
                  prefix={<AiOutlineLock className='prefix' />}
                  placeholder=' Confirm Password'
                  bordered={false}
                  className='input'
                />
              </Form.Item>

              <Form.Item name='upload' valuePropName='fileList'>
                <Upload
                  name='photo'
                  action='/upload.do'
                  listType='picture'
                  multiple={false}
                >
                  <Button
                    color='rgb(49, 175, 145);'
                    htmlType='button'
                    size='large'
                    type='primary'
                    className='upload-button'
                    icon={<UploadOutlined />}
                  >
                    Upload a photo
                  </Button>
                </Upload>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  size='large'
                  className='register-button-reg'
                >

                  Register
                </Button>

                <Typography.Title
                  level={5}
                  style={{ fontWeight: "400" }}
                >
                  Not registered?
                  <Link
                    to={process.env.REACT_APP_Login}
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
  );
};


export default Index;
