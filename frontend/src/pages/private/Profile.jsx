import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import FormPerson from '../../components/private/FormPerson'
import { getPerson } from "../../app/middleware/payloadQuestions"
import ViewPerson from "../../components/private/ViewPerson"

const Profile = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { isLoading, myPerson, error } = useSelector(state => state.person)
    const [edit, setEdit] = useState(false)

    const editProfile = (e) => {
        setEdit(e)
    }

    useEffect(() => {
        dispatch(getPerson(user.uid));
    }, []);

    return (
        <Fragment>
            
            <div className="d-flex justify-content-center mt-3">
                {edit && <FormPerson person={myPerson} editProfile={editProfile} />}
                {myPerson && !edit &&
                    <>
                        <ViewPerson person={myPerson} editProfile={editProfile} />
                    </>
                }
                {isLoading && <h1>Cargando...</h1>}
                {error && <h1>Error {error}</h1>}
            </div>
        </Fragment >
    )
}

export default Profile
