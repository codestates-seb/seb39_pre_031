package com.codestates.pre31.qna.answer.repository;

import com.codestates.pre31.qna.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

}
