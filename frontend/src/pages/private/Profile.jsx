import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../app/middleware/payloadQuestions";
import ViewUser from "../../components/private/ViewUser";
import FormUser from "../../components/private/FormUser";

const Profile = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { isLoading, myUser, error } = useSelector((state) => state.user);

  const [edit, setEdit] = useState(false);

  const editProfile = (e) => {
    setEdit(e);
  };

  useEffect(() => {
    dispatch(getUser(user.uid));
  }, []);

  return (
    <Fragment>
      <div className="container-profile">
        {edit && <FormUser user={myUser} editProfile={editProfile} />}
        {myUser && !edit && (
          <h1>
            <ViewUser user={myUser} editProfile={editProfile} />
          </h1>
        )}
        {isLoading && <h1>Cargando...</h1>}
        {error && <h1>Error {error}</h1>}
      </div>
    </Fragment>
  );
};

export default Profile;
