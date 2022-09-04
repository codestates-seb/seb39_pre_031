package com.codestates.pre31.qna.question.entity;

import com.codestates.pre31.qna.answer.entity.Answer;
import com.codestates.pre31.user.entity.User;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Entity(name="question")
@Table(name="Question")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column
    private Boolean deleteState;

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

    @Column
    private int views;

    @Column
    private int numAnswer;

    @Column
    private int numSelected;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;





}
