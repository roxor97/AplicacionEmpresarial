import React, {useEffect} from 'react'
import {  useDispatch } from "react-redux"
import {loggedAction,logoutAction} from "../../actions/AuthorActions"
import { useNavigate } from "react-router-dom"
import { app } from "../../service/firebase"


const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

	if(app.auth().currentUser){
		setTimeout(()=>{
			app.auth().signOut()
			dispatch(logoutAction())
			navigate("/")
		},1000)
	}

	useEffect(()=>{
        app.auth().onAuthStateChanged((user)=>{
            if(user){
                dispatch(loggedAction(user.multiFactor.user.email , 
                    user.multiFactor.user.displayName,
                    user.multiFactor.user.uid,
                    user.multiFactor.user.photoURL))
                }else{
                    navigate("/")
                }
        })
      },[dispatch, navigate])
	
    return (
        <div>
            Usted ha cerrado sesión satisfactoriamente.
        </div>
    )
}

export default Logout
