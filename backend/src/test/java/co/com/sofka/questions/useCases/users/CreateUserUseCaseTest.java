package co.com.sofka.questions.useCases.users;


import co.com.sofka.questions.collections.User;
import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.repositories.UserRepository;
import co.com.sofka.questions.useCases.users.CreateUserUseCase;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import java.util.Objects;
import static org.mockito.Mockito.when;

@SpringBootTest
class CreateUserUseCaseTest {
    @SpyBean
    private CreateUserUseCase createUserUseCase;

    @MockBean
    private UserRepository repository;

    @Test
    void createUserUseCaseTest() {

        var userDTO = new UserDTO("25", "12345", "Harvey", "Perez", "hperez@example.com", "/IMGProfile/hperez.jpg");

        var user = new User("25", "12345", "Harvey", "Perez", "hperez@example.com", "/IMGProfile/hperez.jpg");

        when(repository.save(Mockito.any(User.class))).thenReturn(Mono.just(user));

        var result = createUserUseCase.apply(userDTO);

        Assertions.assertEquals(Objects.requireNonNull(result.block()),"25");
    }
}