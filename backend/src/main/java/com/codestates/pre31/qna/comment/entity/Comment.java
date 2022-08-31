package com.codestates.pre31.qna.comment.entity;

import com.codestates.pre31.qna.answer.entity.Answer;
import com.codestates.pre31.audit.Auditable;
import com.codestates.pre31.qna.question.entity.Question;
import com.codestates.pre31.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Comment extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commentId;

    @Column
    private Boolean deleteState;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;

    @Column(length = 5000)
    private String body;
}
