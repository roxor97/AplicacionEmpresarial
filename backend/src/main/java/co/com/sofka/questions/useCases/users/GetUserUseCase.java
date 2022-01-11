package co.com.sofka.questions.useCases.users;

import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.repositories.UserRepository;
import co.com.sofka.questions.utils.MapperUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class GetUserUseCase implements Function<String, Mono<UserDTO>> {
    private final UserRepository personRepository;
    private final MapperUtils mapperUtils;

    public GetUserUseCase(UserRepository personRepository, MapperUtils mapperUtils) {
        this.personRepository = personRepository;
        this.mapperUtils = mapperUtils;
    }

    @Override
    public Mono<UserDTO> apply(String uid) {
        Objects.requireNonNull(uid, "User Id is required");
        return personRepository.findAllByUserId(uid)
                .map(mapperUtils.mapEntityToPersonDTO())
                .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.CONFLICT)));
    }
}
