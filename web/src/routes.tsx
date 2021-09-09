import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Admin from './pages/adm';
import AdminAdd from './pages/adm/add';
import AdmList from './pages/adm/list';
import Dashboard from './pages/dashboard';
import HowToSolve from './pages/how-to-solve';
import Info from './pages/info';
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
            <Route exact path='/info' component={Info}/>
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            <PrivateRoute exact path='/dashboard/how/:id/:name' component={HowToSolve}/>
            <PrivateRoute exact path='/dashboard/which-task/:id/:name' component={WhichTask}/>
            <PrivateRoute exact path='/dashboard/solve/:bookid/:bookname/:taskid/:taskname' component={Solving}/>
            <Route exact path='/paodeforma' component={Admin}/>
            <Route exact path='/paodeforma/add' component={AdminAdd}/>
            <Route exact path='/paodeforma/list' component={AdmList}/>
        </Switch>
    )
}

export default AppRoutes