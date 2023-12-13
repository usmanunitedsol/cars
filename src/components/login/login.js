import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link ,useNavigate} from 'react-router-dom';
import { getuserdetails, loginSuccess } from '../../States/action-creaters';
const Login = () => {
  const [credentials, setCredentials] = useState({  Email: '', password: '' });
  const navigate = useNavigate()
  const dispatch = useDispatch();

  
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const setAuthCookie = (token,success) => {
    // Set the authentication data in a cookie
    document.cookie = `auth_token=${token};  path=/`;
    document.cookie = `success=${success};  path=/`;
  };
  const handleOnSubmit = async (e) => {

 
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  Email: credentials.Email, password: credentials.password }),
      });

     const json=await response.json()

      if (json.success) {
        console.log(json)
        alert('Login successfully')
        setAuthCookie(json.authData,json.success);
        dispatch(loginSuccess(json.authData, json.success));
        dispatch(getuserdetails(json.userDetail));
        navigate('/')
      } else {
        console.error('Sign-up failed');
        alert(`Error: ${json.error}`)
      }
    } catch (error) {
      console.error('Error during sign-up:', error.message);
      alert(`Error during sign-up`)
    }
  };

  

  return (
    <div className='login_form'>
     <form onSubmit={handleOnSubmit} className="max-w-sm mt-40 mx-auto">

        <div className="mb-5">
          <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 ">
            Your Email
          </label>
          <input
            onChange={handleChange}
            value={credentials.Email}
            type="email"
            name="Email" 
            id="Email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
            Your password
          </label>
          <input
            onChange={handleChange}
            value={credentials.password}
            type="password"
            name="password" 
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            required
            minLength={5}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        
            />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white   focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-pink-600"
        >
          Login
        </button>

        <Link to="/register" className="text-gray-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none ">
          Dont have account?
        </Link>
      </form>

    </div>
  )
}

export default Login
