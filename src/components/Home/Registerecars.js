import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getcardetails } from '../../States/action-creaters';

const Registerecars = () => {
  const dispatch =useDispatch();
  const getSomeValue = (user) => user;
   const user=  useSelector(getSomeValue) ;
  const  userId= user.user.userid;

  const car=user.car
 
  console.log(car.length);

   
 
  
  return (
    <div className='container  m-auto mt-8'>
        <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="max-w-3xl w-full mx-auto p-6 bg-white rounded-md shadow-md">
            <h1 class="text-4xl font-extrabold mb-8 text-indigo-600">Car Dashboard</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-indigo-500 text-white p-6 rounded-md shadow-md">
                    <h2 class="text-lg font-semibold mb-2">Total Registered Cars</h2>
                    <p class="text-3xl font-bold">{car.length}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Registerecars
