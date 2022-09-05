package com.codestates.pre31.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class UserDto {

    @Getter
    @AllArgsConstructor
    public static class Response {

        private long userId;

        private String username;

        private String email;
    }

    @Getter
    @AllArgsConstructor
    public static class Post {

        private String username;

        private String email;

        private String password;
    }
}
