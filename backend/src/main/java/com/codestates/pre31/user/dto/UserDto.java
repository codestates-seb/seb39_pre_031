package com.codestates.pre31.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class UserDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {

        private long userId;

        private String username;

        private String email;
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        private String username;

        private String email;

        private String password;
    }
}
