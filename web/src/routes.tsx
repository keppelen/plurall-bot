import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Login from './pages/login';

const PrivateRoute = ({...rest}: any) => {
    const isAuthenticated = localStorage.getItem('token') ? true : false
  
    if(isAuthenticated)
      return <Route {...rest}/>
    else
      return <Route path='/login' element={<Login/>}/> // idk how to fix it yet '-'
  
}

const AppRoutes:React.FC = () => {
    return (
        <Routes>
            <PrivateRoute path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    )
}

export default AppRoutes