import React, { useEffect, useState } from 'react'
import Login from '../login/login';

const Account = () => {
  const [state, setState] = useState(false)
  const[user,setUSer]=useState({});
   // console.log('selector', useSelector((state)=>state))
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
      const authsuccess = getCookie('success');
      const auth_token=getCookie('auth_token');


      useEffect (() => {
        const getuserdetails=async ()=>{
          try {
            const response =await fetch('http://localhost:5000/api/auth/getuser',{
              method:'POST',
              headers:{
                'Content-Type':'application/json',
                'auth-token':auth_token,
              },
            });

            const json=await response.json().then((res=>{
              console.log("user info here",res)
              if(res.data) setState(true)
              setUSer(res.user)
              console.log("user state",res.user)
            }))

            // console.log("user info here",json)
         } catch (error) {
           console.error(error.message);
         }
        }
        getuserdetails();
     
      }, [state])
      
  return (
    <>
    
    {console.log("inner ",user)}
        <div className='container max-w-md m-auto mt-8'>
        <div class="bg-white overflow-hidden shadow rounded-lg border">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                User Profile
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
                This is some information about the user.
            </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Full name
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {user.name}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Email
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          
                        {user.Email}
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
            </dl>
        </div>
    </div>
        </div>
       
    </>
  
  )
}

export default Account
