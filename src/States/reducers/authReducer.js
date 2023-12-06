
const initialState={
    isAuthenticated:false,
    token:null,
    error:null,
}

const reducer=(state=initialState,action)=>{

   
    

    if (action.type==='LOGIN_SUCCESS')
    {
        
     
        state =  {
            ...state,
            isAuthenticated:action.success,
            token:action.payload,
            error:null,
        }
   
        return state    
        }
    else{
        return state;
    }
}

export default reducer;