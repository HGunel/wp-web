import React from 'react'
import "./style.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import Chat from "./Chat"
import Login from "./Login"
import Signin from "./Signin"
import { Authentication, Islog } from '../Components';


const Index = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="chat" element={<Authentication><  Chat /></Authentication>} />
        <Route path="*" element={<Navigate to={"process.env.REACT_APP_404"} />} />
        <Route path='/login' element={<Islog><Login /></Islog>} />
        <Route path='/signin' element={<Islog><Signin /></Islog>} />
        <Route path="404" element={
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" href={process.env.REACT_APP_CHAT}>Back Home</Button>}
          />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default Index
