import { Link } from "react-router-dom"


const QuestionsPrivate = ({ question, deleteQuestion }) => {

    return (
        <section className='question'>
            
            <div className="card">
            <div>
                <div style={{margin:10}}>
            <h4>{question.question}</h4>
            <h6>{question.category}  - <small>{question.type}</small></h6>
            </div>
            <Link to={`/private/question/${question.id}`} className="button">
                View Question
            </Link>
             {deleteQuestion && (
                <button className="button right" onClick={() => deleteQuestion(question.id)}>DELETE</button>
            )} 
            </div>
                    {isFavorite&&
                        <div style={{width:40}}>{question?.favorite?<img onClick={()=>eliminarFavorito(question.favorite.id)} className="favorite" src={favorite}/>:<img onClick={()=>agregarFavorito(question.id)} className="favorite" src={No_Favorite}/>}</div> 
                    }  
            </div>

        </section>
    )
}

export default QuestionsPrivate;