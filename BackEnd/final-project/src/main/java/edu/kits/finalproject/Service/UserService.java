package edu.kits.finalproject.Service;

import edu.kits.finalproject.Domain.User;

import java.awt.*;
import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);
}
