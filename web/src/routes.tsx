import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard';
import HowToSolve from './pages/how-to-solve';
import Login from './pages/login';
import Solving from './pages/solving';
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
            <PrivateRoute path='*' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <PrivateRoute path='/dashboard' element={<Dashboard/>}/>
            <PrivateRoute path='/dashboard/how/:id/:name' element={<HowToSolve/>}/>
            <PrivateRoute path='/dashboard/which-task/:id/:name' element={<WhichTask/>}/>
            <PrivateRoute path='/dashboard/solve/:bookid/:bookname/:taskid/:taskname' element={<Solving/>}/>
        </Routes>
    )
}

export default AppRoutes