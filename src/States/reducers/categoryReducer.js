
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
        const categoryArray = action.payload.category;
        const updatearray= categoryArray.map((category)=>({            
                title:category.title,
                user:category.user,
                error:null,
        }))
        console.log('redux car:', {
            updatearray
        });

        return updatearray  
        }
    else{
        return category;}
}

export default   categoryreducer;