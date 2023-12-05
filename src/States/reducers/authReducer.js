
const initialState={
    isAuthenticated:false,
    token:null,
    error:null,
}

const reducer=(state=initialState,action)=>{

    console.log(action.success)
    

    if (action.type==='LOGIN_SUCCESS')
    {
        
        console.log("payload",action.payload)
        state =  {
            ...state,
            isAuthenticated:action.success,
            token:action.payload,
            error:null,
        }
        console.log('New state after login:', {
           state
        });

        return state    
        }
    else{
        return state;
    }
}

export default reducer;