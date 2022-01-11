package co.com.sofka.questions.useCases;

import reactor.core.publisher.Mono;

import javax.validation.Valid;

import co.com.sofka.questions.model.UserDTO;

@FunctionalInterface
public interface SaveProfile {
    Mono<UserDTO> apply(@Valid UserDTO userDTO);
}
