package com.codestates.pre31.qna.answer.entity;

import com.codestates.pre31.qna.question.entity.Question;
import com.codestates.pre31.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;
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
    private String type;

    @Column
    private LocalDateTime generatedTime;

    @Column
    private LocalDateTime modifiedTime;

    @Column
    private int voteUp;

    @Column
    private int voteDown;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


}
