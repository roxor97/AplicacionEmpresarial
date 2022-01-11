import { useEffect } from "react"
import { useDispatch , useSelector  } from "react-redux"
import { loggedAction } from "../actions/AuthorActions"
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { publicNavbar } from "../utils/NavbarList"
import { Fragment } from "react"
import { app } from "../service/firebase"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const PublicLayout = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(loggedAction(user.multiFactor.user.email,
                    user.multiFactor.user.displayName,
                    user.multiFactor.user.uid,
                    user.multiFactor.user.photoURL))
                navigate("/private/QuestionsPage")
            }
        })
    }, [])

    return (
        <Fragment>
            <Navbar elements={publicNavbar} />
            <div className="scroll">
                <Outlet />
            </div>
            <Footer />
        </Fragment>
    )
}

export default PublicLayout
