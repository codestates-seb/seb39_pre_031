package com.codestates.pre31.qna.question.DTO;

import com.codestates.pre31.user.entity.User;
import lombok.Getter;

@Getter
public class PostQuestionDTO {

    private Integer user_id;

    private String title;

    private String body;


    public User getUser() {
        User user = new User();
        user.setUserId(user_id);
        return user;
    }
}
