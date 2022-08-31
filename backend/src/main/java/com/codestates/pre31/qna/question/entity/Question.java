package com.codestates.pre31.qna.question.entity;

import com.codestates.pre31.qna.answer.entity.Answer;
import com.codestates.pre31.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Entity(name="question")
@Table(name="Question")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column
    private Boolean deleteState;

    @Column
    private String title;

    @Column(length = 5000)
    private  String body;

    @Column
    private  String type;

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

    @OneToMany(mappedBy = "question")
//  @JoinTable(name = "Answer")
    private List<Answer> answer;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


}
