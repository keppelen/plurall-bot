import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Login from './pages/login';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
