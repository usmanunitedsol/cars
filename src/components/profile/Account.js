import React, { useEffect, useState } from 'react'
import Login from '../login/login';
import { useDispatch,useSelector } from 'react-redux';
import { getuserdetails } from '../../States/action-creaters';
import Home from '../Home';

const Account = () => {
  const [state, setState] = useState(false)
  const dispatch =useDispatch();
  const getSomeValue = (user) => user;

   const user=  useSelector(getSomeValue) 



      
  return (
    <>
   { console.log("usertest",user.auth.isAuthenticated)}
    {user.auth.isAuthenticated===true ? (
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
                      {user.user.name}
                    </dd> 
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Email
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          
                        {user.user.Email}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Phone number
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.user.phonenumber ? user.user.phonenumber: "NIL"}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.user.address ? user.user.address: "NIL"}
                    </dd>
                </div>
            </dl>
        </div>
    </div>
        </div>
    )
   : (<Login/>)}
       
    </>
  
  )
}

export default Account
