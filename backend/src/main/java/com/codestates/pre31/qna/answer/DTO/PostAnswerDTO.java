package com.codestates.pre31.qna.answer.DTO;

import lombok.Getter;

@Getter
public class PostAnswerDTO {

    private Integer question_id;

    private Integer user_id;

    private String title;

    private String body;
}
