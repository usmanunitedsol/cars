import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';




const CategoryPage = () => {
 

      const dispatch =useDispatch();
      const getSomeValue = (user) => user;
      const user=  useSelector(getSomeValue) ;
      const  userId= user.user.userid;
                
 

      useEffect(() => {
             fetchcategories();
      }, [])

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
            
        } catch (error) {
            console.error('Error during fetch:', error);
            alert("Error occured")
        }
      }
      

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6">Categories</h1>
      
        <div className="mt-4 flex justify-between">
          <button onClick={""}>
            Previous
          </button>
          <span>
            Page{' '}
            <strong>
                  1
            </strong>{' '}
          </span>
          <button onClick={""}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
