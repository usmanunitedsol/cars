
const initialState=[
    {
    title:"",
    user:"",
    }
]

const categoryreducer=(category=initialState,action)=>{

    console.log(action.success)
    

    if (action.type==='CATEGORIES_SUCCESS')
    {
        
       console.log("payload category",action.payload)
     const  category= action.payload.categories;
       const newCategory= category.map((item)=>({  
                id:item._id, 
                title:item.title,
                user:item.user,
                error:null,  }));

        console.log('redux categoryes:',  {newCategory});

        return newCategory  
        }
        else if(action.type=='logoutuser')
        {
            category =  initialState
    
            return category   
        }

       else{
        return category;
       }
}

export default   categoryreducer;