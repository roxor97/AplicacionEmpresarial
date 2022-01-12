import { useDispatch, useSelector } from "react-redux";
import {
  getUserQuestion,
  deleteQuestion,
} from "../../app/middleware/payloadQuestions";
import QuestionsPrivate from "../../components/private/QuestionsPrivate";
import { Fragment, useEffect } from "react";

import swal from "sweetalert";

const MyQuestions = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  
  const { isLoading, myQuestions, error } = useSelector(
    (state) => state.myQuestion
  );

  const deleteModal = (id) => {
    swal({
      title: "Estas seguro?",
      text: "Una vez eliminada, ¡no podrá recuperar esta pregunta!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((Delete) => {
      if (Delete) {
        swal("¡Tu pregunta ha sido eliminada!", { icon: "success" });
        dispatch(deleteQuestion(id));
      }
    });
  };

  useEffect(() => {
    dispatch(getUserQuestion(user.uid));
  }, [user, dispatch]);

  return (
    <Fragment>
      <div>
        <div className="container-my-question">
          <h1>Mis Preguntas</h1>
          <p>{myQuestions && myQuestions.length} Preguntas</p>
        </div>
        <div className="myQuestions">
          {myQuestions ? (
            myQuestions.length > 0 ? (
              myQuestions.map((question) => {
                return (
                  <QuestionsPrivate
                    key={question.id}
                    question={question}
                    deleteQuestion={deleteModal}
                  />
                );
              })
            ) : (
              <p>No hay preguntas para mostrar</p>
            )
          ) : null}
          {isLoading && <h1>Cargando...</h1>}
          {error && <h1> Error {error} </h1>}
        </div>
      </div>
    </Fragment>
  );
};

export default MyQuestions;
