package com.codestates.pre31.user.controller;

import com.codestates.pre31.user.Dto.UserDto;
import com.codestates.pre31.user.entity.User;
import com.codestates.pre31.user.mapper.UserMapper;
import com.codestates.pre31.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class UserController {

    private final UserService userService;

    private final UserMapper mapper;

    @GetMapping("/{member-id}")
    public ResponseEntity<UserDto.Response> getUser(@PathVariable("member-id") Long memberId) {
        User savedUser = userService.getUser(memberId);
        return new ResponseEntity<>(mapper.userToUserResponseDto(savedUser), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<UserDto.Response> postUser(@RequestBody UserDto.Post postUser) {
        User savedUser = userService.postUser(mapper.userPostDtoToUser(postUser));
        return new ResponseEntity<>(mapper.userToUserResponseDto(savedUser), HttpStatus.CREATED);
    }

    @PostMapping("/{email}/find")
    public ResponseEntity<UserDto.Response> postUser(@PathVariable String email) {
        User resetUser = userService.findPassword(email);
        return new ResponseEntity<>(mapper.userToUserResponseDto(resetUser), HttpStatus.CREATED);
    }

}
