
const initialState={
    Email:"",
    name:"",
    error:null,
}

const userreducer=(user=initialState,action)=>{

    console.log(action.success)
    

    if (action.type==='USER_SUCCESS')
    {
        
        console.log("payload",action.payload)
        user =  {
            ...user,
            Email:action.payload.Email,
            name:action.payload.name,
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