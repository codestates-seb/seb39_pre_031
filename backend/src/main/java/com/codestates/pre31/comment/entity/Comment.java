package com.codestates.pre31.comment.entity;

import com.codestates.pre31.audit.Auditable;
import com.codestates.pre31.user.entity.User;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
public class Comment extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commentId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @Column(length = 5000)
    private String body;
}
