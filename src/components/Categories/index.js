import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getcategories } from '../../States/action-creaters';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import Popup from './popup';




const CategoryPage = () => {
 
        const [search, setsearch] = useState("")
       
        const dispatch =useDispatch();
        const getSomeValue = (user) => user;
        const user=  useSelector(getSomeValue) ;
        const  userId= user.user.userid;
        const  usercategory= user.category;

        const [filteredCountries, setfilteredCountries] = useState([usercategory])
        const [isOpen, setIsOpen] = useState(false);

        const openPopup = () => {
          setIsOpen(true);
        };
          const closePopup = () => {
            setIsOpen(false);
          };

        console.log("categories", usercategory)
    
      useEffect(() => {
             fetchcategories();
      }, [])

      useEffect(() => {
          const result= usercategory.filter((category)=>{
                 return  category.title.toLowerCase().match(search.toLowerCase())
          })
          setfilteredCountries(result)
      }, [search])
      

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
            setfilteredCountries(categories.categories)

            
        } catch (error) {
            console.error('Error during fetch:', error);
            alert("Error occured")
        }
      }


      const columns = [
        {
          name: 'ID',
          selector: row => row._id,
        },
        {
          name: 'Title',
          selector: row => row.title,
          sortable: true,
        },
        {
          name: 'Action',
          cell: row =>  
          <div className='flex gap-2'>
            <button   onClick={openPopup}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>
            </button>

            <button   onClick={""}><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            </button>
          </div>
        },
      
      ];

   


  return (
    <div className="container mx-auto ">
      <div className=' mt-9 justify-center bg-gray-100'>
          <DataTable
           title={"Categories list"} 
           fixedHeader 
           fixedHeaderScrollHeight='800px'
           columns={columns}  
           data={filteredCountries}
           selectableRows 
           pagination
           actions={<Link to='/addcategory' className='border p-3 text-lg rounded-lg'>Add new Category</Link>}
           subHeader
           subHeaderComponent={ <input type='text' placeholder='Seach here' onChange={(e)=>setsearch(e.target.value)} value={search} className='w-1/4 border p-3 outline-none rounded-lg'/>}
           />
         </div>
         <Popup isOpen={isOpen} closePopup={closePopup} />
    </div>
    
  );
};

export default CategoryPage;
