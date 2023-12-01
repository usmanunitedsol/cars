import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navmenu from './components/headerWeb/Navmenu';
import Home from './components/Home';
import Login from './components/login/login';
import Register from './components/register/register';
function App() {
  return (
    <>
    <Router>  
    <Navmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>  
    </Router>
    </>
  );
}

export default App;
