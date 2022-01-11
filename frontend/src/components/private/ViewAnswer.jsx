import { useSelector } from 'react-redux'
import * as FaIcons from 'react-icons/fa'

const ViewAnswer = ({ answer, deleteAnswer }) => {
    const state = useSelector(state => state.auth)

    return (
        <div className='col-6 offset-3 question'>
            <div className="card mb-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-11">
                            <h4>{answer.answer}</h4>
                        </div>
                        <div className="col-1">
                            {state.user && state.user.uid === answer.userId ? (deleteAnswer && (
                                <button
                                    className="btn-delete"
                                    onClick={() => deleteAnswer(answer.id)}>
                                    <FaIcons.FaTrashAlt />
                                </button>
                            )) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAnswer