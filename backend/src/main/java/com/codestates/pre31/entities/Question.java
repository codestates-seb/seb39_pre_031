package com.codestates.pre31.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.catalina.User;

import javax.persistence.*;
import java.sql.Timestamp;
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
    private int questionId;

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
    private int vote_up;

    @Column
    private int vote_down;

    @OneToMany(mappedBy = "question")
//  @JoinTable(name = "Answer")
    private List<Answer> answer;

//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;

}
