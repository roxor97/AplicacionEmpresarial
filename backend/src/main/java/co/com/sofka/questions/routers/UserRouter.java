package co.com.sofka.questions.routers;

import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.useCases.*;
import co.com.sofka.questions.useCases.users.CreateUserUseCase;
import co.com.sofka.questions.useCases.users.GetUserUseCase;
import co.com.sofka.questions.useCases.users.UpdateUserUseCase;
import reactor.core.publisher.Mono;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

import java.util.function.Function;

@Configuration
public class UserRouter {

    @Bean
    public RouterFunction<ServerResponse> getPerson(GetUserUseCase useCase) {
        return route(
                GET("person/{uid}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(useCase.apply(
                                        request.pathVariable("uid")),
                                UserDTO.class
                        ))
        );
    }

    @Bean
    public RouterFunction<ServerResponse> createPerson(CreateUserUseCase createUseCase) {
        Function<UserDTO, Mono<ServerResponse>> executor = userDTO ->  createUseCase.apply(userDTO)
                .flatMap(result -> ServerResponse.ok()
                        .contentType(MediaType.TEXT_PLAIN)
                        .bodyValue(result));

        return route(
                POST("person/create").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(UserDTO.class).flatMap(executor)
        );
    }

    @Bean
    public RouterFunction<ServerResponse> updatePerson(UpdateUserUseCase useCase) {
        Function<UserDTO, Mono<ServerResponse>> executor = userDTO ->  useCase.apply(userDTO)
                .flatMap(result -> ServerResponse.ok()
                        .contentType(MediaType.TEXT_PLAIN)
                        .bodyValue(result));

        return route(
                PUT("person/update").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(UserDTO.class).flatMap(executor)
        );
    }
}
