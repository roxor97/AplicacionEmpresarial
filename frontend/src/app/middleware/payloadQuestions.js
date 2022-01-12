import { questionsLoading, questionsLoadSuccess, questionsLoadError } from "../../actions/QuestionsActions";
import { myUserLoadSuccess, myUserLoading, myUserLoadError } from "../../actions/MyUserActions";
import { oneQuestionLoadSuccess, oneQuestionLoadError, oneQuestionsLoading, oneQuestionsDeleteAnswer } from "../../actions/OneQuestionActions";
import { myQuestionsLoadSucces, myQuestionsLoading, myQuestionsLoadError, myQuestionDelete } from "../../actions/MyQuestionsActions";
import { loginAction } from "../../actions/AuthorActions";
import axios from "axios";


const URL = "https://questions-app1997.herokuapp.com";

export const loadAllQuestion = () => (dispatch) => {

  dispatch(questionsLoading())

  const options = {
    method: 'GET',
    url: `${URL}/questions/getAll`,
    headers: { 'Content-Type': 'application/json' }
  };

  axios.request(options).then(function (response) {
    dispatch(questionsLoadSuccess(response.data))
  }).catch(function (error) {
    dispatch(questionsLoadError(error.message))
  });
}


export const loadById = (id) => (dispatch) => {

  dispatch(oneQuestionsLoading())

  const options = {
    method: 'GET',
    url: `${URL}/questions/get/${id}`,
    headers: { 'Content-Type': 'application/json' }
  };

  axios.request(options).then(function (response) {
    dispatch(oneQuestionLoadSuccess(response.data))
  }).catch(function (error) {
    dispatch(oneQuestionLoadError(error.message))
  });
}


export const postQuestion = (question, navigate) => {

  const options = {
    method: 'POST',
    url: `${URL}/questions/create`,
    headers: { 'Content-Type': 'application/json' },
    data: question
  };

  axios.request(options).then(function (response) {
    navigate("/private/MyQuestions")
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}


export const postAnswer = (answer) => (dispatch) => {
  const options = {
    method: 'POST',
    url: `${URL}/answer/add`,
    headers: { 'Content-Type': 'application/json' },
    data: answer
  };

  axios.request(options).then(function (response) {
    console.log(response.data, 'Algo');
    dispatch(oneQuestionLoadSuccess(response.data))
  }).catch(function (error) {
    console.error(error);
  });
}

export const deleteQuestion = (id) => (dispatch) => {
  dispatch(myQuestionsLoading())

  const options = {
    method: 'DELETE',
    url: `${URL}/questions/delete/${id}`
  };

  axios.request(options).then(function (response) {
    dispatch(myQuestionDelete(id))
  }).catch(function (error) {
    console.error(error);
  });
}

export const deleteAnswer = (id) => (dispatch) => {
  dispatch(oneQuestionsLoading())

  const options = {
    method: 'DELETE',
    url: `${URL}/answer/delete/${id}`
  };

  axios.request(options).then(function (response) {
    dispatch(oneQuestionsDeleteAnswer(id))
  }).catch(function (error) {
    dispatch(oneQuestionLoadError(error.message))
  });
}

export const getUserQuestion = (userId) => (dispatch) => {

  dispatch(myQuestionsLoading())

  const options = {
    method: 'GET',
    url: `${URL}/questions/getOwnerAll/${userId}`,
    headers: { 'Content-Type': 'application/json' }
  };
  axios.request(options).then(function (response) {
    dispatch(myQuestionsLoadSucces(response.data));
  }).catch(function (error) {
    dispatch(myQuestionsLoadError(error.message));
  });
}

export const getQuestionsByCategory = (category) => (dispatch) => {

  dispatch(myQuestionsLoading())

  const options = {
    method: 'GET',
    url: `${URL}/questions/filterCategory/${category}`,
    headers: { 'Content-Type': 'application/json' }
  };
  axios.request(options).then(function (response) {
    dispatch(myQuestionsLoadSucces(response.data));
  }).catch(function (error) {
    dispatch(myQuestionsLoadError(error.message));
  });
}

export const postUser = (email, name, uid, url) => async (dispatch) => {

  const options = {
    method: 'POST',
    url: `${URL}/user/create`,
    headers: { 'Content-Type': 'application/json' },
    data: { uid: uid, name: name, lastName: "", email: email, pictureURL: url }
  };

  await axios.request(options).then(function (response) {
    console.log("Usuario creado");
  }).catch(function (error) {
    console.error(error);
  });
}

export const getUserValid = (user, navigate) => (dispatch) => {

  const options = {
    method: 'GET',
    url: `${URL}/user/${user.uid}`,
    headers: { 'Content-Type': 'application/json' },
  };

  axios.request(options).then(function (response) {
    dispatch(loginAction(user.email,user.displayName,user.uid,user.photoURL));
    navigate("/private/QuestionsPage")
  }).catch(function (error) {
    dispatch(postUser(user.email,user.displayName,user.uid,user.photoURL));
    navigate("/private/QuestionsPage")
  });
}

export const getUser = (uid) => (dispatch) => {
  dispatch(myUserLoading())

  const options = {
    method: 'GET',
    url: `${URL}/user/${uid}`,
    headers: { 'Content-Type': 'application/json' },
  };

  axios.request(options).then(function (response) {
    dispatch(myUserLoadSuccess(response.data));
  }).catch(function (error) {
    dispatch(myUserLoadError(error.message));
    console.error(error);
  });
}

export const putUser = (user) => async (dispatch) => {

  const options = {
    method: 'PUT',
    url: `${URL}/user/update`,
    headers: { 'Content-Type': 'application/json' },
    data: user
  };

  await axios.request(options).then(function (response) {
    dispatch(getPerson(user.uid));
    console.log("Usuario actualizado");
    dispatch(myUserLoadSuccess(response.data));
  }).catch(function (error) {
    console.error(error);
  });
}