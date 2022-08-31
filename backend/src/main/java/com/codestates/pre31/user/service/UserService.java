package com.codestates.pre31.user.service;

import com.codestates.pre31.user.entity.User;
import com.codestates.pre31.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    public void getUser(){}

    public User postUser(User newUser) {
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        return userRepository.save(newUser);
    }

    public void findPassword(){}

    public void changePassword(){}

    public void putUser(){}

    public void deleteUser(){}
}
