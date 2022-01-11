package co.com.sofka.questions.routers;

import co.com.sofka.questions.model.UserDTO;
import co.com.sofka.questions.useCases.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
public class UserRouter {

    @Bean
    public RouterFunction<ServerResponse> createUser(CreateUserUseCase createUserUseCase) {
        return route(
                POST("/create/user").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(UserDTO.class).flatMap(userDTO ->
                        createUserUseCase.apply(userDTO)
                                .flatMap(result -> ServerResponse.ok()
                                        .contentType(MediaType.APPLICATION_JSON)
                                        .bodyValue(result)))
        );
    }

    @Bean
    public RouterFunction<ServerResponse> getProfile(GetUserUseCase getUserUseCase) {
        return route(
                GET("/get/user/{userId}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(getUserUseCase.apply(
                                        request.pathVariable("userId")),
                                UserDTO.class
                        ))
        );
    }

    @Bean
    public RouterFunction<ServerResponse> updateProfile(UpdateUserUseCase updateUserUseCase){
        return route(
                PUT("/user/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request ->  request.bodyToMono(UserDTO.class)
                        .flatMap(userDTO -> updateUserUseCase.apply(userDTO))
                        .flatMap(result -> ServerResponse.ok()
                                .contentType(MediaType.APPLICATION_JSON)
                                .bodyValue(result))
        );
    }
}
