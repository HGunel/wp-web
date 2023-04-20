import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Index = ({ children }) => {
    // const navigate = useNavigate();
    useEffect(() => {
//   if (!localStorage.getItem('user')) navigate(process.env.REACT_APP_Login)
    }, [])

    if (!localStorage.getItem('user')) return <Navigate to={process.env.REACT_APP_Login} />
    else return (children) 
}

export default Index
