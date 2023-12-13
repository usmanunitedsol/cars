
const initialState={
    Email:"",
    name:"",
    user_id:"",
    error:null,
}

const userreducer=(user=initialState,action)=>{
    
    console.log(user)  
    if (action.type==='USER_SUCCESS')
    {
        
        console.log("payload",action.payload)
        user =  {
            ...user,
            Email:action.payload.Email,
            name:action.payload.name,
            user_id:action.payload._id,
            error:null,
        }
        console.log('redux user:', {
            user
        });

        return user  
     
        }
    else{
        return user;
    }
}

export default userreducer;