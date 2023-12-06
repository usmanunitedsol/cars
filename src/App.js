import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navmenu from './components/headerWeb/Navmenu';
import Home from './components/Home';
import Login from './components/login/login';
import Register from './components/register/register';
import Account from './components/profile/Account';
import Accountupdate from './components/profile/Accountupdate';

function App() {
  return (
    <>
    <Router>  
    <Navmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Account" element={<Account/>}/>
        <Route path="/Accountupdate" element={<Accountupdate/>}/>
      </Routes>  
    </Router>
    </>
  );
}

export default App;
