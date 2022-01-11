package co.com.sofka.questions.useCases;

import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.repositories.UserRepository;
import co.com.sofka.questions.utils.MapperUtils;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.function.Function;

@Service
@Validated
public class GetUserUseCase implements Function<String, Mono<UserDTO>> {

    private final UserRepository userRepository;
    private final MapperUtils mapperUtils;

    public GetUserUseCase(UserRepository userRepository, MapperUtils mapperUtils) {
        this.userRepository = userRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<UserDTO> apply(String userId) {
        return userRepository.findAllByUserId(userId)
                .map(user -> mapperUtils.mapEntityToUserDTO().apply(user))
                .elementAt(0).onErrorReturn(new UserDTO());
    }
}
