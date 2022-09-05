package com.codestates.pre31.qna.question.DTO;

import com.codestates.pre31.user.entity.User;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
public class PostQuestionDTO {

    private long user_id;

    private String title;

    private String body;

}
