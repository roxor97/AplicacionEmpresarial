package co.com.sofka.questions.useCases.questions;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.repositories.QuestionRepository;
import co.com.sofka.questions.useCases.questions.GetUseCase;
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
class GetUseCaseTest {
    @MockBean
    private QuestionRepository questionRepository;
    @SpyBean
    private GetUseCase getQuestion;

    @Test
    public void getUseCaseTest(){

        var questionDTO = new QuestionDTO("25","1","¿quien creo java?", Type.OPEN, Category.SOFTWARE_DEVELOPMENT, "Mensaje Email");
        var question= new Question();
        question.setId("25");
        question.setQuestion("¿quien creo java?");
        question.setUserId("1");
        question.setType(Type.OPEN);
        question.setCategory(Category.SOFTWARE_DEVELOPMENT);

        Mockito.when(questionRepository.findById(Mockito.any(String.class))).thenReturn(Mono.just(question));

        var respuesta = getQuestion.apply("1");
        Assertions.assertEquals(respuesta.block().getQuestion(), question.getQuestion());
    }
}