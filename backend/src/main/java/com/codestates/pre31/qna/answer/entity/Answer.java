package com.codestates.pre31.qna.answer.entity;

import com.codestates.pre31.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name="answer")
@Table(name="Answer")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @Column
    private boolean deleteState;

    @Column
    private boolean accepted;

    @Column
    private String title;

    @Column(length = 5000)
    private String body;


    @Column
    private LocalDateTime generatedTime;

    @Column
    private LocalDateTime modifiedTime;

    @Column
    private int vote;

    @Column(name = "question_id")
    private long questionId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


}
