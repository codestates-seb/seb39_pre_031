package com.codestates.pre31.user.controller;

import com.codestates.pre31.user.Dto.UserDto;
import com.codestates.pre31.user.entity.User;
import com.codestates.pre31.user.mapper.UserMapper;
import com.codestates.pre31.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class UserController {

    private final UserService userService;

    private final UserMapper mapper;

    @PostMapping
    public ResponseEntity<UserDto.Response> postUser(@RequestBody UserDto.Post postUser) {
        User savedUser = userService.postUser(mapper.userPostDtoToUser(postUser));
        return new ResponseEntity<>(mapper.userToUserResponseDto(savedUser), HttpStatus.CREATED);
    }

}
