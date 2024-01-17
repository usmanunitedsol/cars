import React, { useState } from 'react';

const Popup = ({ isOpen, closePopup ,setCategory,Categories }) => {

    const handleChange = (e) => {
        setCategory({...Categories,[e.target.name]: e.target.value });
      };
//   const closePopup = () => {
//     setIsOpen(false);
//   };

  

  return (
    <div className="flex items-center justify-center h-screen">

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded shadow-md">
          <div className="mb-5">
                    <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 ">
                       Edit Category 
                    </label>
                    <input
                        onChange={handleChange}
                        value={Categories.title}
                        type="text"
                        name="title" 
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                        placeholder="Category"
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
  );
};

export default Popup;
