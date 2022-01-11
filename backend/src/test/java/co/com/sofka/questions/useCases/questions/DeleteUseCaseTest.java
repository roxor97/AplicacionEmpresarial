package co.com.sofka.questions.useCases.questions;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.repositories.AnswerRepository;
import co.com.sofka.questions.repositories.QuestionRepository;
import co.com.sofka.questions.utils.Category;
import co.com.sofka.questions.utils.Type;
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
    DeleteUseCase useCase;

    @Test
    void deleteUseCaseTest(){

        var questionDT0 = new QuestionDTO("25", "12345", "¿quien creo java?", Type.OPEN, Category.SCIENCES, "Mensaje Email");

        var question = new Question("25", "12345", "¿quien creo java?",Type.OPEN, Category.SOFTWARE_DEVELOPMENT, "Mensaje Email");

        Mockito.when(questionRepository.deleteById("25")).thenReturn(Mono.empty());
        Mockito.when(answerRepository.deleteByQuestionId("25")).thenReturn(Mono.empty());

        var result = useCase.apply("25").block();
        Assertions.assertNull(result);

        Mockito.verify(answerRepository, Mockito.times(1)).deleteByQuestionId("25");
    }
}