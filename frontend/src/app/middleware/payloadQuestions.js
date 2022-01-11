import {
  myQuestionsLoadSucces,
  myQuestionsLoading,
  myQuestionsLoadError,
  myQuestionDelete,
} from "../../actions/MyQuestionsActions";

import {
  questionsLoading,
  questionsLoadSuccess,
  questionsLoadError,
} from "../../actions/QuestionsActions";
import {
  oneQuestionLoadSuccess,
  oneQuestionLoadError,
  oneQuestionsLoading,
  oneQuestionsDeleteAnswer,
} from "../../actions/OneQuestionActions";
import {
  myPersonLoadSuccess,
  myPersonLoading,
  myPersonLoadError,
} from "../../actions/MyPersonActions";
import axios from "axios";
import { loginAction } from "../../actions/AuthorActions";

const API_URL = "https://questions-app1997.herokuapp.com";

export const loadAllQuestion = () => (dispatch) => {
  dispatch(questionsLoading());

  const options = {
    method: "GET",
    url: `${API_URL}/questions/getAll`,
    headers: { "Content-Type": "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      dispatch(questionsLoadSuccess(response.data));
    })
    .catch(function (error) {
      dispatch(questionsLoadError(error.message));
    });
};

export const loadById = (id) => (dispatch) => {
  dispatch(oneQuestionsLoading());

  const options = {
    method: "GET",
    url: `${API_URL}/questions/get/${id}`,
    headers: { "Content-Type": "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      dispatch(oneQuestionLoadSuccess(response.data));
    })
    .catch(function (error) {
      dispatch(oneQuestionLoadError(error.message));
    });
};

export const postQuestion = (question, navigate) => {
  const options = {
    method: "POST",
    url: `${API_URL}/questions/create`,
    headers: { "Content-Type": "application/json" },
    data: question,
  };

  axios
    .request(options)
    .then(function (response) {
      navigate("/private/MyQuestions");
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const postAnswer = (answer) => (dispatch) => {
  const options = {
    method: "POST",
    url: `${API_URL}/answer/add`,
    headers: { "Content-Type": "application/json" },
    data: answer,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      dispatch(oneQuestionLoadSuccess(response.data));
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const deleteQuestion = (id) => (dispatch) => {
  dispatch(myQuestionsLoading());

  const options = {
    method: "DELETE",
    url: `${API_URL}/questions/delete/${id}`,
  };

  axios
    .request(options)
    .then(function (response) {
      dispatch(myQuestionDelete(id));
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const deleteAnswer = (id) => (dispatch) => {
  dispatch(oneQuestionsLoading());

  const options = {
    method: "DELETE",
    url: `${API_URL}/answer/delete/${id}`,
  };

  axios
    .request(options)
    .then(function (response) {
      dispatch(oneQuestionsDeleteAnswer(id));
    })
    .catch(function (error) {
      dispatch(oneQuestionLoadError(error.message));
    });
};

export const getUserQuestion = (userId) => (dispatch) => {
  dispatch(myQuestionsLoading());

  const options = {
    method: "GET",
    url: `${API_URL}/questions/getOwnerAll/${userId}`,
    headers: { "Content-Type": "application/json" },
  };
  axios
    .request(options)
    .then(function (response) {
      dispatch(myQuestionsLoadSucces(response.data));
    })
    .catch(function (error) {
      dispatch(myQuestionsLoadError(error.message));
    });
};

export const getQuestionsByCategory = (category) => (dispatch) => {
  dispatch(myQuestionsLoading());

  const options = {
    method: "GET",
    url: `${API_URL}/questions/filterCategory/${category}`,
    headers: { "Content-Type": "application/json" },
  };
  axios
    .request(options)
    .then(function (response) {
      dispatch(myQuestionsLoadSucces(response.data));
    })
    .catch(function (error) {
      dispatch(myQuestionsLoadError(error.message));
    });
};

export const postPerson = (email, name, uid, url) => async (dispatch) => {
  const options = {
    method: "POST",
    url: `${API_URL}/user/create`,
    headers: { "Content-Type": "application/json" },
    data: { uid: uid, name: name, lastName: "", email: email, pictureURL: url },
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log("Usuario creado");
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getPersonValid = (user, navigate) => (dispatch) => {
  const options = {
    method: "GET",
    url: `${API_URL}/user/${user.uid}`,
    headers: { "Content-Type": "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      dispatch(
        loginAction(user.email, user.displayName, user.uid, user.photoURL)
      );
      navigate("/private/QuestionsPage");
    })
    .catch(function (error) {
      dispatch(
        postPerson(user.email, user.displayName, user.uid, user.photoURL)
      );
      navigate("/private/QuestionsPage");
    });
};

export const getPerson = (uid) => (dispatch) => {
  dispatch(myPersonLoading());

  const options = {
    method: "GET",
    url: `${API_URL}/user/${uid}`,
    headers: { "Content-Type": "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      dispatch(myPersonLoadSuccess(response.data));
    })
    .catch(function (error) {
      dispatch(myPersonLoadError(error.message));
      console.error(error);
    });
};

export const putPerson = (person) => async (dispatch) => {
  const options = {
    method: "PUT",
    url: `${API_URL}/user/update`,
    headers: { "Content-Type": "application/json" },
    data: person,
  };

  await axios
    .request(options)
    .then(function (response) {
      dispatch(getPerson(person.uid));
      console.log("Usuario actualizado");
      dispatch(myPersonLoadSuccess(response.data));
    })
    .catch(function (error) {
      console.error(error);
    });
};
