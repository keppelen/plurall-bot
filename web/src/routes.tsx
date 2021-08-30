import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
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
      return <Redirect to={{ pathname: "/login"}} />
}

const AppRoutes:React.FC = () => {
    return (
        <Switch>
            <PrivateRoute exact path='/' component={Dashboard}/>
            <Route exact path='/login' component={Login}/>
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            <PrivateRoute exact path='/dashboard/how/:id/:name' component={HowToSolve}/>
            <PrivateRoute exact path='/dashboard/which-task/:id/:name' component={WhichTask}/>
            <PrivateRoute exact path='/dashboard/solve/:bookid/:bookname/:taskid/:taskname' component={Solving}/>
        </Switch>
    )
}

export default AppRoutes