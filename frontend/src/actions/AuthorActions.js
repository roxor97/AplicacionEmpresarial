import actionsTypesAuth from "./actionsTypes/ActionsTypesAuth"

export const loginAction = (email,name,uid,photo,id,apellido) => {
    return{
        type: actionsTypesAuth.LOGIN,
        payload: {email,name,uid,photo,id,apellido}
    }
}


export const logoutAction =()=>{
    return{
        type : actionsTypesAuth.LOGOUT,
        payload: null
    }
}

export const loggedAction =(email,name,uid,photo,id,apellido)=>{
    return{
        type : actionsTypesAuth.LOGGED,
        payload: {email,name,uid,photo,id,apellido}
    }
}