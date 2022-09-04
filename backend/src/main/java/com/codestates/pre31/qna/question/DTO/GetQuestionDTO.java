package com.codestates.pre31.qna.question.DTO;

import lombok.*;

@Getter
@Setter
@Data
public class GetQuestionDTO {

    private boolean noAns;

    private boolean noSel;

    private String sort;

    private int pageNum;
}
