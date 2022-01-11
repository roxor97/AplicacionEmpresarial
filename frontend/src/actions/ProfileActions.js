import Swal from "sweetalert2";

export const CREATE_PROFILE = "CREATE PROFILE";
export const CREATE_PROFILE_SUCCESS = "CREATE PROFIL SUCCESS";
export const CREATE_PROFILE_ERROR = "CREATE PROFILE ERROR";

export const START_GET_PROFILE = "START GET PROFILE";
export const GET_PROFILE_SUCCESSFUL = "GET PROFILE SUCCESSFUL";
export const GET_PROFILE_ERROR = "GET PROFILE ERROR";

export const START_EDITING_PROFILE = "START EDITING PROFILE";
export const EDITED_PROFILE_SUCCESS = "EDITED PROFILE SUCCESS";
export const EDITED_PROFILE_ERROR = "EDITED PROFILE ERROR";

const URL_BASE = "http://localhost:8080";

const descargarPerfil = () => ({
  type: START_GET_PROFILE,
  payload: true,
});

const descargarPerfilExito = (perfil) => ({
  type: GET_PROFILE_SUCCESSFUL,
  payload: perfil,
});

const descargarPerfilError = (estado) => ({
  type: GET_PROFILE_ERROR,
  payload: estado,
});


export function obtenerPerfilAction(userId) {
  return async (dispatch) => {
    dispatch(descargarPerfil());

    try {
      const response = await fetch(`${URL_BASE}/get/user/${userId}`);
      const data = await response.json();
      dispatch(descargarPerfilExito(data));
    } catch (error) {
      console.log(error);
      dispatch(descargarPerfilError(true));
    }
  };
}



const crearPerfil = () => ({
  type: CREATE_PROFILE,
  payload: true,
});

const agregarPerfilExito = (perfil) => ({
  type: CREATE_PROFILE_SUCCESS,
  payload: perfil,
});

const agregarPerfilError = (estado) => ({
  type: CREATE_PROFILE_ERROR,
  payload: estado,
});


export function crearNuevoPerfilAction(perfil) {
  return async (dispatch) => {
    dispatch(crearPerfil());

    try {
      const profile = await fetch(`${URL_BASE}/create/user`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(perfil),
      });

      dispatch(agregarPerfilExito(profile));
    } catch (error) {
      console.log(error);
      dispatch(agregarPerfilError(true));
    }
  };
}


const editarPerfil = () => ({
  type: START_EDITING_PROFILE,
});

const editarPerfilExito = (producto) => ({
  type: EDITED_PROFILE_SUCCESS,
  payload: producto,
});

const editarPerfilError = () => ({
  type: EDITED_PROFILE_ERROR,
  payload: true,
});

export function editarPerfilAction(perfil) {
  return async (dispatch) => {
    dispatch(editarPerfil());

    try {
      await fetch(`${URL_BASE}/user/${perfil.id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(perfil),
      });

      dispatch(editarPerfilExito(perfil));
      Swal.fire(
        "Actualizado",
        "Tu perfil ha sido actualizado correctamente",
        "success"
      );
    } catch (error) {
      console.log(error);
      dispatch(editarPerfilError());

      Swal.fire({
        icon: "error",
        tittle: "Error",
        text: "Hubo un error al actualizar tu perfil",
      });
    }
  };
}
