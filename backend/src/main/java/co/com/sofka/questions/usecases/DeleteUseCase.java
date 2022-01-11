package co.com.sofka.questions.useCases;

import co.com.sofka.questions.repositories.AnswerRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class DeleteUseCase implements Function<String, Mono<Void>> {
    private final AnswerRepository answerRepository;

    public DeleteUseCase(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }


    @Override
    public Mono<Void> apply(String id) {
        Objects.requireNonNull(id, "Id is required");
        return answerRepository.deleteById(id);
    }
}
