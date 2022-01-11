import { Link } from "react-router-dom"

const OneQuestionPublic = ({question}) => {

    return(
        <div className='col-6 offset-3 text-center question mt-3'>
            <h2>{question.question}</h2>
            <p>
                <span className="badge bg-secondary">{question.category}</span>
                <span className="badge bg-success">{question.type}</span>
            </p>
        </div>
    )
}

export default OneQuestionPublic