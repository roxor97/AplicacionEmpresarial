package co.com.sofka.questions.utils;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.collections.User;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.model.UserDTO;

import org.springframework.stereotype.Component;
import java.util.function.Function;

@Component
public class MapperUtils {

    public Function<AnswerDTO, Answer> mapperToAnswer() {
        return updateAnswer -> {
            var answer = new Answer();
            answer.setPosition(updateAnswer.getPosition());
            answer.setQuestionId(updateAnswer.getQuestionId());
            answer.setUserId(updateAnswer.getUserId());
            answer.setAnswer(updateAnswer.getAnswer());
            return answer;
        };
    }

    public Function<Answer, AnswerDTO> mapEntityToAnswerDTO() {
        return entity -> new AnswerDTO(
                entity.getId(),
                entity.getQuestionId(),
                entity.getUserId(),
                entity.getAnswer()
        );
    }

    public Function<QuestionDTO, Question> mapperToQuestion(String id) {
        return updateQuestion -> {
            var question = new Question();
            question.setId(id);
            question.setUserId(updateQuestion.getUserId());
            question.setCategory(updateQuestion.getCategory());
            question.setQuestion(updateQuestion.getQuestion());
            question.setUserId(updateQuestion.getUserId());
            question.setType(updateQuestion.getType());
            question.setEmail(updateQuestion.getEmail());
            return question;
        };
    }

    public Function<Question, QuestionDTO> mapEntityToQuestionDTO() {
        return entity -> new QuestionDTO(
                entity.getId(),
                entity.getUserId(),
                entity.getQuestion(),
                entity.getType(),
                entity.getCategory(),
                entity.getEmail()
        );
    }

    public Function<UserDTO, User> mapperToPerson(String id) {
        return updatePerson -> {
            var person = new User();
            person.setId(id);
            person.setUid(updatePerson.getUid());
            person.setName(updatePerson.getName());
            person.setLastName(updatePerson.getLastName());
            person.setEmail(updatePerson.getEmail());
            person.setImgURL(updatePerson.getImgURL());
            return person;
        };
    }

    public Function<User, UserDTO> mapEntityToPersonDTO() {
        return entity -> new UserDTO(
                entity.getId(),
                entity.getUid(),
                entity.getName(),
                entity.getLastName(),
                entity.getEmail(),
                entity.getImgURL()
        );
    }

}
