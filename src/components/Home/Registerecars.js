import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getcardetails, getcategories } from '../../States/action-creaters';

const Registerecars = () => {
  const dispatch =useDispatch();
  const getSomeValue = (user) => user;
   const user=  useSelector(getSomeValue) ;
  const  userId= user.user.userid;

  const car=user.car
 
  console.log(car.length);
  
  useEffect(() => {
    fetchcar();
    fetchcategories();

    
}, [])
   
  const fetchcar = async ()=>{
    try {
        const response =await fetch (`http://localhost:5000/api/cars/fetchcars?userId=${userId}`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })

        if(!response.ok){
            // Handle non-successful responses
            console.error(`HTTP error! Status: ${response.status}`);
            return;
        }

        const cars=await response.json();
        console.log("categories here",cars.cars);
        dispatch(getcardetails(cars.cars));        
        // dispatch(getcategories(categories));


        
    } catch (error) {
        console.error('Error during fetch:', error);
        alert("Error occured")
    }
  }

  const fetchcategories = async ()=>{
    try {
        const response =await fetch (`http://localhost:5000/api/cars/fetchcategories?userId=${userId}`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })

        if(!response.ok){
            // Handle non-successful responses
            console.error(`HTTP error! Status: ${response.status}`);
            return;
        }

        const categories=await response.json();
        console.log("categories here",categories);

        dispatch(getcategories(categories));
        

        
    } catch (error) {
        console.error('Error during fetch:', error);
        alert("Error occured")
    }
  }
  
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
