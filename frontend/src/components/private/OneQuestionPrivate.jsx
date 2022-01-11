const OneQuestionPrivate = ({ oneQuestion }) => {
    return (
        <div className='col-6 offset-3 text-center question mt-3'>
            <h2>{oneQuestion.question}</h2>
            <p>
                <span className="badge bg-secondary">{oneQuestion.category}</span>
                <span className="badge bg-success">{oneQuestion.type}</span>
            </p>
        </div>
    )
}

export default OneQuestionPrivate