export const loginSuccess =(token, success)=>{
    return (dispatch)=>{
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: token, success
        })
    }
};