import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { privateNavbar } from "../utils/NavbarList"
import { app } from "../service/firebase"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loggedAction } from "../actions/AuthorActions"

const PrivateLayout = () => {

    const state = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(loggedAction(user.multiFactor.user.email,
                    user.multiFactor.user.displayName,
                    user.multiFactor.user.uid,
                    user.multiFactor.user.photoURL))
            } else {
                navigate("/")
            }
        })
    }, [dispatch, navigate])

    return (
        <>
            {state.user
                ? (<div>
                    <Navbar elements={privateNavbar} />
                    <div className="scroll">
                        <Outlet />
                    </div>
                    <Footer />
                </div>)
                :
                null}
        </>

    )
}

export default PrivateLayout
