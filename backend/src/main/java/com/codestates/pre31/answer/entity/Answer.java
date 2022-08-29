package com.codestates.pre31.answer.entity;

import com.codestates.pre31.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity(name="answer")
@Table(name="Answer")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int answerId;


    @Column
    private String title;

    @Column(length = 5000)
    private  String body;

    @Column
    private  String type;

    @Column
    private Timestamp generatedTime;

    @Column
    private Timestamp modifiedTime;

    @Column
    private int voteUp;

    @Column
    private int voteDown;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;


//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;


}
