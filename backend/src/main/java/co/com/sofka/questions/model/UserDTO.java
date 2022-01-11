package co.com.sofka.questions.model;

import javax.validation.constraints.NotBlank;
import java.util.Objects;

public class UserDTO {
    private String id;
    @NotBlank
    private String uid;
    private String name;
    private String lastName;
    @NotBlank
    private String email;
    private String imgURL;

    public UserDTO() {
    }

    public UserDTO(String id, String uid, String name, String lastName, String email, String imgURL) {
        this.id = id;
        this.uid = uid;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.imgURL = imgURL;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImgURL() {
        return imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDTO personDTO = (UserDTO) o;
        return Objects.equals(id, personDTO.id) && Objects.equals(uid, personDTO.uid) && Objects.equals(name, personDTO.name) && Objects.equals(lastName, personDTO.lastName) && Objects.equals(email, personDTO.email) && Objects.equals(imgURL, personDTO.imgURL);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, uid, name, lastName, email, imgURL);
    }

    @Override
    public String toString() {
        return "PersonDTO{" +
                "id='" + id + '\'' +
                ", uid='" + uid + '\'' +
                ", name='" + name + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", imgURL=" + imgURL +
                '}';
    }
}
