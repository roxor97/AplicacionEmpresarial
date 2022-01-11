import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa'

const QuestionsPrivate = ({ question, deleteQuestion }) => {

    return (
        <div className='question'>
            <div className="card mb-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <h6><strong>Publicador:</strong> {question.email}</h6>
                        </div>
                        <div className="col-12">
                            <Link to={`/private/question/${question.id}`}>
                                <h3>{question.question}</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-11">
                            <span className="badge bg-secondary">{question.category}</span>
                            <span className="badge bg-success">{question.type}</span>
                        </div>
                        <div className="col-1">
                            {deleteQuestion && (
                                <button
                                    className="btn-delete"
                                    onClick={() => deleteQuestion(question.id)}>
                                    <FaIcons.FaTrashAlt />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionsPrivate