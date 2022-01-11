package co.com.sofka.questions.useCases.users;

import co.com.sofka.questions.collections.User;
import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.repositories.UserRepository;
import co.com.sofka.questions.utils.MapperUtils;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;

@Service
@Validated
public class UpdateUserUseCase implements SaveUser{
    private final UserRepository personRepository;
    private final MapperUtils mapperUtils;

    public UpdateUserUseCase(MapperUtils mapperUtils, UserRepository personRepository) {
        this.personRepository = personRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<String> apply(UserDTO dto) {
        Objects.requireNonNull(dto.getId(), "Id of the person is required");
        return personRepository
                .save(mapperUtils.mapperToPerson(dto.getId()).apply(dto))
                .map(User::getId);
    }
}
