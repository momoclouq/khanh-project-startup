package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.Domain.User;
import edu.kits.finalproject.Model.UserDto;
import edu.kits.finalproject.Repository.UserRepository;
import edu.kits.finalproject.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return null;
    }

    @Override
    public User getUserById(Long id) {
        return null;
    }
}
