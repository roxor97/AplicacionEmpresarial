package co.com.sofka.questions.useCases.questions;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
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
import static org.mockito.Mockito.when;

import java.util.Objects;

@SpringBootTest
class CreateUseCaseTest {
    @SpyBean
    private CreateUseCase createUseCase;

    @MockBean
    private QuestionRepository repository;

    @Test
    void createUseCaseTest() {

        var questionDT0 = new QuestionDTO("1453", "1234", "¿quien creo java?", Type.OPEN, Category.SCIENCES, "Mensaje Email");

        var question = new Question("1453", "1234", "¿quien creo java?",Type.OPEN, Category.SOFTWARE_DEVELOPMENT, "Mensaje Email");

        when(repository.save(Mockito.any(Question.class))).thenReturn(Mono.just(question));

        var result = createUseCase.apply(questionDT0);

        Assertions.assertEquals(Objects.requireNonNull(result.block()),"1453");
    }
}