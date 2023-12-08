import React, { useEffect, useState } from 'react'
import Login from '../login/login';
import { useDispatch,useSelector } from 'react-redux';
import { getuserdetails } from '../../States/action-creaters';

const Accountupdate = () => {

      //   const selector=useSelector();
const getSomeValue = (user) => user.user;
// console.log('selector', useSelector((state)=>state))
   const {Email,name,_id}= useSelector(getSomeValue)
    const [credentials, setCredentials] = useState({name:"",  Email: '' });
    console.log(useSelector(getSomeValue))
    console.log("id", _id)

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      try {
        const response =await fetch(`http://localhost:5000/api/auth/updateuserinfo/6567207891173c1258e59c13`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ Email: credentials.Email, password: credentials.password }), 
        });
        const json=await response.json()
        if (json.success) {
            console.log(json)
        }
      } catch (error) {
        
      }
    }

  return (
  
          <div className='container max-w-md m-auto mt-8'>
        <div class="bg-white overflow-hidden shadow rounded-lg border">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                Edit User Profile
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
                This is some information about the user.
            </p>
        </div>
        <form onSubmit={handleOnSubmit}>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div class="sm:divide-y sm:divide-gray-200">
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Full name
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input
                        onChange={handleChange}
                        value={credentials.name}
                        type="name"
                        name="name" 
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                        placeholder="name"
                        required
                    />
                    </dd>
                  
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Email
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          
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
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Phone number
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        (123) 456-7890
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        123 Main St<br/>
                        Anytown, USA 12345
                    </dd>
                </div>

                <div>
                <button
          type="submit"
          className="text-white   focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-pink-600"
        >
          Login
        </button>
                </div>
                
            </div>
        </div>
        </form>
    </div>
        </div>

  )
}

export default Accountupdate
