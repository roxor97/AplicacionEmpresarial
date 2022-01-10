package co.com.sofka.questions.usecases;

import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.function.Supplier;

import com.mongodb.Function;

@Service
@Validated
public class ListUseCase implements Supplier<Flux<QuestionDTO>> {
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final MapperUtils mapperUtils;

    public ListUseCase(MapperUtils mapperUtils, QuestionRepository questionRepository, AnswerRepository answerRepository) {
        this.questionRepository = questionRepository;
        this.mapperUtils = mapperUtils;
        this.answerRepository = answerRepository;
    }

    

    private Function<QuestionDTO, Mono<QuestionDTO>> mapQuestionAggregate() {
        return questionDTO ->
                Mono.just(questionDTO).zipWith(
                        answerRepository.findAllByQuestionId(questionDTO.getId())
                                .map(mapperUtils.mapEntityToAnswer())
                                .collectList(),
                        (question, answers) -> {
                            question.setAnswers(answers);
                            return question;
                        }
                );
    }

    @Override
    public Flux<QuestionDTO> get() {
        return questionRepository.findAll()
                .map(mapperUtils.mapEntityToQuestion())
                .flatMap(mapQuestionAggregate());
    }

}
