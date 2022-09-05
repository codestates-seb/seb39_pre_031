package com.codestates.pre31.qna.answer.repository;

import com.codestates.pre31.qna.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM answer where question_id=:question_id and delete_state=0;"
    )
    List<Answer> fnidAllByQuestionId(@Param("question_id") Long questionId);

}
