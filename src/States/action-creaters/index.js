export const loginSuccess =(token)=>{
    return (dispatch)=>{
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: token
        })
    }
};