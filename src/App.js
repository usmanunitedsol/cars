import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navmenu from './components/headerWeb/Navmenu';
import Home from './components/Home';
import Login from './components/login/login';
import Register from './components/register/register';
import Account from './components/profile/Account';
import Accountupdate from './components/profile/Accountupdate';
import Categories from './components/Categories/index'
import { useSelector } from 'react-redux';

function App() {
  const getSomeValue = (user) => user.user;
  const isAuthenticated = useSelector((user) => user.auth.isAuthenticated);
  console.log("isAuthenticated:", isAuthenticated);
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
        <Route path='/Categories' element={<Categories/>} />
      </Routes>  
    </Router>
    </>
  );
}

export default App;
