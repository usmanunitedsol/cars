import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getcardetails } from '../../States/action-creaters';


const AddCar = () => {
    const [newcar, setnewcar] = useState({  car: '', category:'',color:'',make:'',model:'',registration_num
:''});
    const getSomeValue = (user) => user;

    const user=  useSelector(getSomeValue) ;

    console.log("cars test43", user.car)
    const  userId= user.user.userid;
    const  usercategory= user.category;
    const dispatch =useDispatch();
    const [error, seterror] = useState("")
    const handleChange = (e) => {
        setnewcar({ ...newcar, [e.target.name]: e.target.value });
      };

    //   const handleCategoryChange = (e) => {
    //     setCategory(e.target.value)
    //   }

      const handleOnSubmit = async (e) => {
     
        e.preventDefault();

         // Check if category is selected
            if (!newcar.category || newcar.category === 'allcategory') {
                // alert('Please select a valid category.');
                seterror("Please select a valid category.")
                return;
            }

        console.log("new car", newcar)

        try {
          const response = await fetch(`http://localhost:5000/api/cars/addcar?userId=${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...newcar, car: newcar.car, category: newcar.category , color: newcar.color , make: newcar.make , model: newcar.model, registration_num: newcar.registration_num, }),
          });
    
         const cars=await response.json()
    
          if (!cars.error) {
            console.log(cars)
            seterror("")
            alert('Car added successfully')
            setnewcar({car: '', category:'',color:'',make:'',model:'',registration_num
            :''});
            dispatch(getcardetails([...user.car, cars.cars]));  
 
          } else {
            console.error(cars.error, 'Car add failed');
            alert(`Error: ${cars.error}`)
          }
        } catch (error) {
          console.error('Error during car addition:', error.message);
          alert(`Error during car addition`)
        }
      };

  return (
    <div className='container mx-auto p-10'>
              <form onSubmit={handleOnSubmit} className="max-w-lg mt-40 mx-auto">
                      
                           <h2 className='py-4 text-xl text-red-600'> {!newcar.category && error }</h2>

                    <div className="mb-5 flex gap-3  items-center">
                    <label htmlFor="car" className="w-1/3 mb-2 text-sm font-medium text-gray-900 ">
                        Name
                    </label>
                    <input
                        onChange={handleChange}
                        value={newcar.car}
                        type="text"
                        name="car" 
                        id="car"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                        placeholder="Car Name"
                        required
                    />
                    </div>

                    <div className="mb-5 flex gap-3  items-center">
                    <label htmlFor="Email" className="w-1/3 mb-2 text-sm font-medium text-gray-900 ">
                         Category
                    </label>
                    {/* <input
                        onChange={handleChange}
                        value={Categories.title}
                        type="text"
                        name="title" 
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                        placeholder="Car Category"
                        required
                    /> */}

                    <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 hover:cursor-pointer' name='category' value={newcar.category}     onChange={handleChange}>
                        <option value="allcategory"  className='cursor-pointer'  selected >Select Category</option>
                    {
                        usercategory.map((item)=>(
                        <option  value={item.title} key={item._id} >{item.title}</option>
                        ))
                        
                    }              
                   </select>
                    </div>

                    <div className="mb-5 flex gap-3 align-middle justify-center items-center">
                    <label htmlFor="Model" className="w-1/3 mb-2 text-sm font-medium text-gray-900 ">
                        Model
                    </label>
                    <input
                        onChange={handleChange}
                        value={newcar.model}
                        type="text"
                        name="model" 
                        id="model"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                        placeholder="Car Name"
                        required
                    />
                    </div>

                    <div className="mb-5 flex gap-3 align-middle justify-center items-center">
                    <label htmlFor="Email" className="w-1/3 mb-2 text-sm font-medium text-gray-900 ">
                        Color
                    </label>
                    <input
                        onChange={handleChange}
                        value={newcar.color}
                        type="text"
                        name="color" 
                        id="color"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                        placeholder="Car Name"
                        required
                    />
                    </div>

                    <div className="mb-5 flex gap-3 align-middle justify-center items-center">
                    <label htmlFor="Email" className="w-1/3 mb-2 text-sm font-medium text-gray-900 ">
                        Registrantion Number
                    </label>
                    <input
                        onChange={handleChange}
                        value={newcar.registration_num}
                        type="text"
                        name="registration_num" 
                        id="registration_num"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                        placeholder="Car Registrantion"
                        required
                    />
                    </div>

                    <div className="mb-5 flex gap-3 align-middle justify-center items-center">
                    <label htmlFor="Email" className="w-1/3 mb-2 text-sm font-medium text-gray-900 ">
                        Make
                    </label>
                    <input
                        onChange={handleChange}
                        value={newcar.make}
                        type="text"
                        name="make" 
                        id="make"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                        placeholder="Car Make"
                        required
                    />
                    </div>

                              
                    <button
                    type="submit"
                    className="text-white   focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-pink-600"
                    >
                    Add Car
                    </button>

</form>
    </div>
  )
}

export default AddCar
