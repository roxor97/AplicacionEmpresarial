package co.com.sofka.questions.repositories;

import co.com.sofka.questions.collections.User;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;

public interface UserRepository extends ReactiveCrudRepository<User, String> {
    Flux<User> findAllByUserId(String userId);
}
