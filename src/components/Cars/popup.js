import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getcardetails } from '../../States/action-creaters';

const Carpopup = ({ isOpen, closePopup ,setupdatecar,updatecar }) => {

      const getSomeValue = (user) => user;
  
      const user=  useSelector(getSomeValue) ;
  
      console.log("cars test43", user.car)
      const  userId= user.user.userid;
      const  usercategory= user.category;
      const dispatch =useDispatch();
      const [error, seterror] = useState("")
      const handleChange = (e) => {
        setupdatecar({ ...updatecar, [e.target.name]: e.target.value });
        };
  const handleOnSubmit = async (e) => {}
  return (
    <div>
        <div className="flex items-center justify-center h-screen">

{isOpen && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-10">
    <div className="bg-white p-8 rounded shadow-md">
                  <div className="mb-5 flex gap-3  items-center">
                    <label htmlFor="car" className="w-1/3 mb-2 text-sm font-medium text-gray-900 ">
                        Name
                    </label>
                    <input
                        onChange={handleChange}
                        value={updatecar.car}
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
              

                    <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 hover:cursor-pointer' name='category' value={updatecar.category}     onChange={handleChange}>
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
                        value={updatecar.model}
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
                        value={updatecar.color}
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
                        value={updatecar.registration_num}
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
                        value={updatecar.make}
                        type="text"
                        name="make" 
                        id="make"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                        placeholder="Car Make"
                        required
                    />
                    </div>

              <button
        onClick={closePopup}
        className="bg-red-500 text-white py-2 px-4 rounded focus:outline-none"
      >
        Save
      </button>
              </div>

    </div>

)}
</div>
    </div>
  )
}

export default Carpopup
