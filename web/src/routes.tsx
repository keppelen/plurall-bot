import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard';
import HowToSolve from './pages/how-to-solve';
import Login from './pages/login';
import WhichTask from './pages/which-task';

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
            <Route path='/dashboard/how/:id/:name' element={<HowToSolve/>}/>
            <Route path='/dashboard/which-task/:id/:name' element={<WhichTask/>}/>
        </Routes>
    )
}

export default AppRoutes