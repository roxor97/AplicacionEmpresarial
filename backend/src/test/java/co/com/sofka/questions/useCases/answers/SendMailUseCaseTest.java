package co.com.sofka.questions.useCases.answers;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.mail.javamail.JavaMailSender;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;



@SpringBootTest
class SendMailUseCaseTest {
    @SpyBean
    SendMailUseCase mailUseCase;

    @MockBean
    JavaMailSender javaMailSender;

    @MockBean
    private MimeMessage mimeMessage;

    @Test
    void sendMailUseCaseTest() throws MessagingException {
        String to = "junioroxor97@gmail.com";
        String subject = "Respuesta a pregunta";
        String body = "Mensaje recibido";

        Mockito.when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);
        mailUseCase.sendMail(to, subject, body);
        Mockito.verify(javaMailSender).send(mimeMessage);
        }
    }