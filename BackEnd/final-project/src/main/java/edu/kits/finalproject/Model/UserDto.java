package edu.kits.finalproject.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto implements Serializable {
    private Long userId;
    private String name;
    private String gender;
    private String email;
    private String password;
    private int phoneNumber;
    private int active;
    private List<CourseDto> courseDtos;

    public UserDto(String name, String gender, String email, String password, int phoneNumber) {
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}
