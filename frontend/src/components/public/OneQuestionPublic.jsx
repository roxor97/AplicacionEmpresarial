const OneQuestionPublic = ({ question }) => {
  return (
    <div className="question">
      <div className="card">
        <div>
          <h4>{question.question}</h4>
          <h6>
            {question.category} - <small>{question.type}</small>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default OneQuestionPublic;
