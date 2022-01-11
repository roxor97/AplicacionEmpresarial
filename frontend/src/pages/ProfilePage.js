import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerPerfilAction, crearNuevoPerfilAction, editarPerfilAction } from "../actions/ProfileActions";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile.profile);
  const loading = useSelector((state) => state.profile.loading);
  const error = useSelector((state) => state.profile.error);

  const auth = useSelector((state) => state.auth);

  const [sinCambios, setSinCambios] = useState(true)

  const [profileInfo, setProfileInfo] = useState({
    nombre: "",
    apellido: "",
  });

  useEffect(() => {
    const cargarPerfil = () => {
      dispatch(obtenerPerfilAction(auth.uid));
    };
    cargarPerfil();
  }, [dispatch]);

  useEffect(() => {
    setProfileInfo({
      nombre: profile.nombres,
      apellido: profile.apellidos,
    });
  }, [profile]);

  
  const onChangeFormulario = (e) => {
    setSinCambios(false)

    setProfileInfo({
      ...profileInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitGuardarCambios = (e) => {
    e.preventDefault();

    if (profile.id === null) {

      const profileCreate = {
        userId: auth.uid,
        nombres: profileInfo.nombre,
        apellidos: profileInfo.apellido,
        correo: auth.email,
      };

      dispatch(crearNuevoPerfilAction(profileCreate));
    } else {
      const profileUpdate = {
        id: profile.id,
        userId: auth.uid,
        nombres: profileInfo.nombre,
        apellidos: profileInfo.apellido,
        correo: auth.email,
      };

      dispatch(editarPerfilAction(profileUpdate));
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h1 className="text-center mb-4 font-weight-bold">
              Perfil de usuario
            </h1>

            <form onSubmit={submitGuardarCambios}>
              <div className="form-group">
                <label>Nombres</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombres"
                  name="nombre"
                  value={profileInfo.nombre}
                  onChange={onChangeFormulario}
                />
              </div>

              <div className="form-group">
                <label>Apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellidos"
                  name="apellido"
                  value={profileInfo.apellido}
                  onChange={onChangeFormulario}
                />
              </div>

              <div className="form-group">
                <label>Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo"
                  name="correo"
                  value={auth.email}
                  readOnly={true}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-5"
                disabled={sinCambios}
              >
                Guardar Cambios
              </button>
            </form>

            {loading ? (
              <p className="p2 mt-4 text-center">Cargando...</p>
            ) : null}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                Se presentó un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
