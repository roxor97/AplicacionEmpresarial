package co.com.sofka.questions.useCases.users;


import reactor.core.publisher.Mono;

import javax.validation.Valid;

import co.com.sofka.questions.model.UserDTO;

@FunctionalInterface
public interface SaveUser {
    Mono<String> apply(@Valid UserDTO personDTO);
}
