package com.codestates.pre31.qna.answer.DTO;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class PostAnswerDTO {

    private Integer question_id;

    private Integer user_id;

//    private String title;

    private String body;

}
