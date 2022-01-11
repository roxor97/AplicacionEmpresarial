package co.com.sofka.questions.utils;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.collections.Rate;
import co.com.sofka.questions.collections.User;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.model.RateDTO;
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

    public Function<QuestionDTO, Question> mapperToQuestion(String id) {
        return updateQuestion -> {
            var question = new Question();
            question.setId(id);
            question.setUserId(updateQuestion.getUserId());
            question.setCategory(updateQuestion.getCategory());
            question.setQuestion(updateQuestion.getQuestion());
            question.setUserId(updateQuestion.getUserId());
            question.setType(updateQuestion.getType());
            return question;
        };
    }

    public Function<Question, QuestionDTO> mapEntityToQuestion() {
        return entity -> new QuestionDTO(
                entity.getId(),
                entity.getUserId(),
                entity.getQuestion(),
                entity.getType(),
                entity.getCategory()
        );
    }

    public Function<Answer, AnswerDTO> mapEntityToAnswer() {
        return entity -> new AnswerDTO(
                entity.getId(),
                entity.getUserId(),
                entity.getAnswer()
        );
    }

    public Function<Rate, RateDTO> mapEntityToRate() {
        return entity -> new RateDTO(
                entity.getId(),
                entity.getUserId(),
                entity.getAnswerId(),
                entity.getRate()
        );
    }

    public Function<RateDTO, Rate> mapperToRate() {
        return updateRate -> {
            var rate = new Rate();

            rate.setId(updateRate.getId());
            rate.setUserId(updateRate.getUserId());
            rate.setAnswerId(updateRate.getAnswerId());
            rate.setRate(updateRate.getRate());
            return rate;
        };
    }

    public Function<User, UserDTO> mapEntityToUserDTO(){
        return user -> new UserDTO(
            user.getId(),
            user.getUserId(),
            user.getNombres(),
            user.getApellidos(),
            user.getCorreo()
        );
    }

    public Function<UserDTO, User> mapperToUser() {
        return userDTO -> {
            User user = new User();
            user.setId(userDTO.getId());
            user.setUserId(userDTO.getUserId());
            user.setNombres(userDTO.getNombres());
            user.setApellidos(userDTO.getApellidos());
            user.setCorreo(userDTO.getCorreo());
            return user;
        };
    }
}
