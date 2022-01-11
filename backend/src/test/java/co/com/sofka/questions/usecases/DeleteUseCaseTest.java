package co.com.sofka.questions.useCases;

import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.repositories.AnswerRepository;
import co.com.sofka.questions.repositories.QuestionRepository;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

@SpringBootTest
class DeleteUseCaseTest {
    @MockBean
    private AnswerRepository answerRepository;
    @MockBean
    private QuestionRepository questionRepository;

    @SpyBean
    DeleteUseCase deleteQuestionUseCase;

    @Test
    void deleteUseCaseTest(){

        var answerDTO = new AnswerDTO("253545", "657", "el creador de java es james gosling");

        var answer = new Answer();

        Mockito.when(questionRepository.deleteById("253545")).thenReturn(Mono.empty());
        Mockito.when(answerRepository.deleteByQuestionId("253545")).thenReturn(Mono.empty());

        var result = deleteQuestionUseCase.apply("253545").block();
        Assertions.assertNull(result);
    }
}