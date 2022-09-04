package com.codestates.pre31.qna.question.repository;

import com.codestates.pre31.qna.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import org.springframework.stereotype.Repository;

@Repository
public interface
QuestionRepository extends JpaRepository<Question, Long>,  JpaSpecificationExecutor<Question> {

    Page<Question> findAll(Specification<Question> spec, Pageable pageable);

}
