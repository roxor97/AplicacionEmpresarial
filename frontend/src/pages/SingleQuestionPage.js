import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { fetchQuestion } from "../actions/questionActions";

import { Question } from "../components/Question";
import { Answer } from "../components/Answer";
import { Link } from "react-router-dom";

const SingleQuestionPage = ({ match }) => {
  const dispatch = useDispatch();
  const questionState = useSelector((state) => state.question);
  const auth = useSelector((state) => state.auth);

  const { id } = match.params;
  useEffect(() => {
    dispatch(fetchQuestion(id));
  }, [dispatch, id]);

  const renderQuestion = () => {
    if (questionState.loading.question) return <p>Loading question...</p>;
    if (questionState.hasErrors.question) return <p>Unable to display question.</p>;

    return <Question question={questionState.question} />;
  };

  const renderAnswers = () => {
    return questionState.question.answers && questionState.question.answers.length ? (
      questionState.question.answers.map((answer) => (
        <Answer key={answer.id} answer={answer} />
      ))
    ) : (
      <p>Empty answer!</p>
    );
  };

  return (
    <section>
      {renderQuestion()}
      {auth.userId && (
        <Link to={"/answer/" + id} className="button right">
          Reply
        </Link>
      )}

      <h2>Answers</h2>
      {renderAnswers()}
    </section>
  );
};


export default SingleQuestionPage;
