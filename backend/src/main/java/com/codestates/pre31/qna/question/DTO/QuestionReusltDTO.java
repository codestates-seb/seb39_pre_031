package com.codestates.pre31.qna.question.DTO;

import com.codestates.pre31.qna.answer.entity.Answer;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class QuestionReusltDTO {

    private long questionId;

    private Boolean deleteState;

    private String title;

    private  String body;

    private  String type;

    private LocalDateTime generatedTime;

    private LocalDateTime modifiedTime;

    private int vote;

    private int views;

    private int numAnswer;

    private int numSelected;

    private List<Answer> ListAnswer;

}
