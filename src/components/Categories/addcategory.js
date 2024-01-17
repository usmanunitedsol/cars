import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const Addcategory = () => {
    const [Categories, setCategory] = useState({  title: ''});
    const getSomeValue = (user) => user;
    const user=  useSelector(getSomeValue) ;
    const  userId= user.user.userid;
    const handleChange = (e) => {
        setCategory({ ...Categories, [e.target.name]: e.target.value });
      };

      const handleOnSubmit = async (e) => {
     
        e.preventDefault();
        try {
          const response = await fetch(`http://localhost:5000/api/cars/addCategory?userId=${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(Categories),
          });
    
         const json=await response.json()
    
          if (json) {
            console.log(json)
            alert('category added successfully')
            setCategory({title:""});

          } else {
            console.error('category add failed');
            alert(`Error: ${json.error}`)
          }
        } catch (error) {
          console.error('Error during sign-up:', error.message);
          alert(`Error during sign-up`)
        }
      };

  return (
    <div className='container mx-auto p-10'>
              <form onSubmit={handleOnSubmit} className="max-w-sm mt-40 mx-auto">

                    <div className="mb-5">
                    <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 ">
                        Category 
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
                    type="submit"
                    className="text-white   focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-pink-600"
                    >
                    Add category
                    </button>

</form>
    </div>
  )
}

export default Addcategory
