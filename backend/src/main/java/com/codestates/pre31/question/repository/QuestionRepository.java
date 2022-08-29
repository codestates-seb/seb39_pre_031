package com.codestates.pre31.question.repository;

import com.codestates.pre31.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
