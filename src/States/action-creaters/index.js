export const loginSuccess =(token, success)=>{
    return (dispatch)=>{
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: token, success
        })
    }
};

export const getuserdetails =(user)=>{
    return (dispatch)=>{
        dispatch({
            type: 'USER_SUCCESS',
            payload: user
        })
    }
};