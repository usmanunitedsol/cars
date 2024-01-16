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

export const getcardetails =(car)=>{
    return (dispatch)=>{
        dispatch({
            type: 'CAR_SUCCESS',
            payload: car
        })
    }
};

export const getcategories =(categories)=>{
    return (dispatch)=>{
        dispatch({
            type: 'CATEGORIES_SUCCESS',
            payload: categories
        })
    }
};
export const logoutuser =()=>{
    return (dispatch)=>{
        dispatch({
            type: 'logoutuser',
        })
    }
};

