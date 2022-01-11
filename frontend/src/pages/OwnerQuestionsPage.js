import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchOwnerQuestions,
  deleteQuestion,
} from "../actions/questionActions";
import  Question  from "../components/Question";

const OwnerQuestionsPage = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchOwnerQuestions(auth.uid));
  }, [dispatch, auth.uid]);

  useEffect(() => {
    if (question.redirect) {
      dispatch(fetchOwnerQuestions(auth.uid));
    }
  }, [question.redirect, dispatch, auth.uid]);

  const onDelete = (id) => {
    dispatch(deleteQuestion(id));
  };

  const renderQuestions = () => {
    if (question.loading) return <p>Loading questions...</p>;
    if (question.hasErrors) return <p>Unable to display questions.</p>;

    return (
      question &&
      question.questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          excerpt
          onDelete={onDelete}
        />
      ))
    );
  };

  return (
    <section>
      <h1>Questions</h1>
      {renderQuestions()}
    </section>
  );
};

export default OwnerQuestionsPage;
