package com.codestates.pre31.qna.comment.DTO;

import lombok.Getter;

@Getter
public class PostCommentDTO {

    private Integer answer_id;

    private Integer question_id;

    private Integer user_id;

    private String title;

    private String body;
}
