package com.codestates.pre31.qna.question.DTO;

import lombok.Getter;

import java.security.PrivateKey;

@Getter
public class GetQuestionDTO {

    private boolean NoAnswerFilter;

    private boolean NoSelectedFilter;

    private String SortedBy;
}
