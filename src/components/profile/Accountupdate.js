import React, { useEffect, useState } from 'react'
import Login from '../login/login';
import { useDispatch,useSelector } from 'react-redux';
import { getuserdetails } from '../../States/action-creaters';


const Accountupdate = () => {
    const dispatch =useDispatch();
      //   const selector=useSelector();
const getSomeValue = (user) => user.user;
// console.log('selector', useSelector((state)=>state))
   const {Email,name,address,phonenumber,userid}= useSelector(getSomeValue)
    const [credentials, setCredentials] = useState({name:name,  Email: Email,address:address,phonenumber:phonenumber});
    const isAuthenticated = useSelector((user) => user.auth.isAuthenticated);
    console.log(useSelector(getSomeValue))
   

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    
      const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
           
          const response = await fetch(`http://localhost:5000/api/auth/updateuserinfo/${userid}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if needed
            },
            body: JSON.stringify({name: credentials.name, Email: credentials.Email,address:credentials.address ,phonenumber:credentials.phonenumber}),
          });
      
          if (!response.ok) {
            // Handle non-successful responses
            console.error(`HTTP error! Status: ${response.status}`);
            return;
          }
      
          const json = await response.json();
          console.log("cheeck here",json);
          if (json) {
            console.log(json);
            dispatch(getuserdetails(json.user));
            alert("Successfully updated");
          } else {
            console.error('Update failed:', json.error); // Log the specific error from the server
            alert("update failed")
          }
        } catch (error) {
          console.error('Error during fetch:', error);
          alert("Error occured")
        }
      };

      function getCookie(cookieName) {
        // Split the cookies into an array of key-value pairs
        const cookies = document.cookie.split(';');
    
        // Loop through the cookies to find the one with the specified name
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
    
            // Check if the cookie starts with the specified name
            if (cookie.startsWith(cookieName + '=')) {
                // Extract and return the cookie value
                return cookie.substring(cookieName.length + 1);
            }
        }
    
        // Return null if the cookie with the specified name is not found
        return null;
    }
      
      const auth_token=getCookie('auth_token');
  return (
    <>
    { isAuthenticated ? (
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
                        type="text"
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
                        disabled
                    />
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Phone number
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          
                    <input
                        onChange={handleChange}
                        value={credentials.phonenumber}
                        type="text"
                        name="phonenumber" 
                        id="phonenumber"
                        minLength={11}
                        maxLength={11}
                        pattern="[0-9]"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                        placeholder="phonenumber"
                      
                    />
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input
                        onChange={handleChange}
                        value={credentials.address}
                        type="text"
                        name="address" 
                        id="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                        placeholder="address"
                      
                    />
                    </dd>
                </div>

                <div className='text-center'>
                <button
          type="submit"
          className="text-white my-8  focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-pink-600"
        >
          Update information
        </button>
                </div>
                
            </div>
        </div>
        </form>
    </div>
        </div>):( <Login/> )}
        </>
  )
}

export default Accountupdate