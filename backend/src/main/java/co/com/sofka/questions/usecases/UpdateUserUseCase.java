package co.com.sofka.questions.useCases;

import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.repositories.UserRepository;
import co.com.sofka.questions.utils.MapperUtils;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;

@Service
@Validated
public class UpdateUserUseCase implements SaveProfile {

    private final UserRepository userRepository;
    private final MapperUtils mapperUtils;

    public UpdateUserUseCase(UserRepository userRepository, MapperUtils mapperUtils) {
        this.userRepository = userRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<UserDTO> apply(UserDTO userDTO) {
        Objects.requireNonNull(userDTO.getId(), "userId is required");
        return userRepository
                .save(mapperUtils.mapperToUser().apply(userDTO))
                .map(user -> mapperUtils.mapEntityToUserDTO().apply(user));
    }
}
