package com.codestates.pre31.user.service;

import com.codestates.pre31.helper.event.UserPasswordApplicationEvent;
import com.codestates.pre31.user.entity.User;
import com.codestates.pre31.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    private final ApplicationEventPublisher publisher;

    public void getUser(){}

    public User postUser(User newUser) {
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        return userRepository.save(newUser);
    }

    public User findPassword(String email){
        User user = userRepository.findByEmail(email).orElse(null);
        publisher.publishEvent(new UserPasswordApplicationEvent(this, user));

        return user;
    }

    public void changePassword(User user, String newPassword){
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }

    public void putUser(){}

    public void deleteUser(){}
}
