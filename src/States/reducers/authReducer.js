
const initialState={
    isAuthenticated:false,
    token:null,
    error:null,
}

const reducer=(state=initialState,action)=>{

    if (action.type==='LOGIN_SUCCESS')
    {
        return {
            ...state,
            isAuthenticated:true,
            token:action.payload.token,
            error:null
        }
    }
    else{
        return state;
    }
}

export default reducer;