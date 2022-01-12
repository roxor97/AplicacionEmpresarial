const OneQuestionPrivate = ({ oneQuestion }) => {
    return (
        <div className='container-questions'>
            <h2>{oneQuestion.question}</h2>
            <p>
                <span className="questions-category">{oneQuestion.category}</span>
                <span className="questions-type">{oneQuestion.type}</span>
            </p>
        </div>
    )
}

export default OneQuestionPrivate;