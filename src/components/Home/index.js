import React from 'react'
import Registerecars from './Registerecars'
import { useDispatch,useSelector } from 'react-redux';
import Login from '../login/login';

const Home = () => {
  const getSomeValue = (user) => user.user;
  const isAuthenticated = useSelector((user) => user.auth.isAuthenticated);
  console.log("authenticate", isAuthenticated)
  return (
    <div>
        {  isAuthenticated ? <Registerecars/> : <Login/>}
    </div>
  )
}

export default Home
