package co.com.sofka.questions.useCases.users;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.web.server.ResponseStatusException;

import co.com.sofka.questions.collections.User;
import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.repositories.UserRepository;
import reactor.core.publisher.Mono;

import java.util.Objects;


@SpringBootTest
class GetUserUseCaseTest {
    @MockBean
    private UserRepository repository;
    @SpyBean
    private GetUserUseCase useCase;

    @Test
    void getPersonUseCaseTest(){

        var userDTO = new UserDTO("65", "12378", "Harvey", "Perez", "hperez97@example.com", "/IMGprofile/hperez.jpg");
        var user = new User();
        user.setId("65");
        user.setUid("12378");
        user.setName("Harvey");
        user.setLastName("Perez");
        user.setEmail("hperez97@example.com");
        user.setImgURL("/IMGprofile/hperez.jpg");

        Mockito.when(repository.findAllByUserId(Mockito.any(String.class))).thenReturn(Mono.just(user));

        var oneUser = useCase.apply("123");
        Assertions.assertEquals(Objects.requireNonNull(oneUser.block()).getUid(), user.getUid());
    }

    @Test
    void getPersonSwitchIfEmptyTest(){
        Mockito.when(repository.findAllByUserId(Mockito.any(String.class))).thenReturn(Mono.empty());

        Assertions.assertThrows(ResponseStatusException.class, () -> useCase.apply("123").block());
    }
}