import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getcardetails, getcategories } from '../../States/action-creaters';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import Popup from './popup';
import Carpopup from './popup';




const Cars = () => {
 
        const [search, setsearch] = useState("")
      
       
        const dispatch =useDispatch();
        const getSomeValue = (user) => user;
        const user=  useSelector(getSomeValue) ;
        const  userId= user.user.userid;
        const  usercategory= user.category;
        const car=user.car

        console.log("test car" , car)

        const [filteredcar, setfilteredcar] = useState([car])
        const [isOpen, setIsOpen] = useState(false);
        const [deletecategory, setdeletecategory] = useState(false);
        const [categoryid, setcategoryid] = useState()
        const [Categories, setCategory] = useState(""); 
        const [updatecategory, setupdatecategory] = useState(false)

        // const openPopup = async (catid) => {
        //   setcategoryid(catid)
        //   setIsOpen(true);
        // };
        
        //   const closePopup =async () => {
        //     try {
   
        //       const response = await fetch(`http://localhost:5000/api/cars/updatecategory/${categoryid}`, {
        //         method: 'PUT',
        //         headers: {
        //           'Content-Type': 'application/json',
        //           // Add any additional headers if needed
        //         },
        //         body: JSON.stringify({title:Categories.title}),
        //       });
          
        //       if (!response.ok) {
        //         // Handle non-successful responses
        //         console.error(`HTTP error! Status: ${response.status}`);
        //         return;
        //       }

        //       console.log("test res",response)
          
        //       const json = await response.json();
        //       console.log("updated",json);
        //       if (json) {
        //         console.log(json);
        //         alert("Successfully updated");
        //         setupdatecategory(true)
        //         setCategory({title:""})
           
        //       } else {
        //         console.error('Update failed:', json.error); // Log the specific error from the server
        //         alert("update failed")
        //       }
        //     } catch (error) {
        //       console.error('Error during fetch:', error);
        //       alert("Error occured")
        //     }
         
        //     setIsOpen(false);
        //   };

        const handleCategoryChange = (e) => {
          setCategory(e.target.value)
        }
        console.log("categories", Categories)

        const ondelete =async (catid) => {
        //   try {
        //     const response =await fetch (`http://localhost:5000/api/cars/deletecategory/${catid}`,{
        //         method:'DELETE',
        //         headers:{
        //             'Content-Type': 'application/json',
        //         },
        //     })

        //     if(!response.ok){
        //         // Handle non-successful responses
        //         console.error(`HTTP error! Status: ${response.status}`);
        //         return;
        //     }
               
        //     alert("Category deleted")
        //       setdeletecategory(true)

            
        // } catch (error) {
        //     console.error('Error during fetch:', error);
        //     alert("Error occured")
        // }
        };
    
      // useEffect(() => {
      //        fetchcar();

             
      // }, [])

      useEffect(() => {
          const result= car.filter((cars)=>{
                 return   Categories === '' || (cars.category && cars.category.toLowerCase() === Categories.toLowerCase()) || (Categories==='allcategory' && cars )
               
          })
          setfilteredcar(result)
          console.log(result)
      }, [ Categories])

      

      useEffect(() => {
        const result= car.filter((cars)=>{
               return  cars.car.toLowerCase().match(search.toLowerCase());
        })
        setfilteredcar(result)
        console.log(result)
    }, [search])
      

     


      const columns = [
        {
          name: 'Category',
          selector: row => row.category || 'NONE',
        },
        {
          name: 'CAR',
          selector: row => row.car,
          sortable: true,
        },

        {
          name: 'COLOUR',
          selector: row => row.color,
          sortable: true,
        },
        
        {
          name: 'MAKE',
          selector: row => row.make,
          sortable: true,
        },
        {
          name: 'MODEL',
          selector: row => row.model,
          sortable: true,
        },
        {
          name: 'Registrantion Number',
          selector: row => row.registration_num ,
          sortable: true, 
        },

        {
          name: 'Action',
          cell: row =>  
          <div className='flex gap-2'>
            <button   > 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>
            </button>

            <button  ><svg
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
           title={"Car list"} 
           fixedHeader 
           fixedHeaderScrollHeight='800px'
           columns={columns}  
           data={filteredcar}
           selectableRows 
           pagination
           actions={
            <>
               <div className='flex gap-6'>
                <select className='outline-none border text-lg rounded-lg px-2 hover:cursor-pointer'  onChange={handleCategoryChange}>
                     <option value="allcategory" className='cursor-pointer'  selected>ALL Category</option>
                  {
                    usercategory.map((item)=>(
                      <option  value={item.title}  key={item._id}>{item.title}</option>
                    ))
                    
                  }              
                </select>
              <Link to='/AddCar' className='border p-3 text-lg rounded-lg'>Add new Car</Link>
              </div>
          
            </>
          }
           subHeader
           subHeaderComponent={ <input type='text' placeholder='Seach here' onChange={(e)=>setsearch(e.target.value)} value={search} className='w-1/4 border p-3 outline-none rounded-lg'/>}
           />
         </div>
         <Carpopup  />
    </div>
    
  );
};

export default Cars;
