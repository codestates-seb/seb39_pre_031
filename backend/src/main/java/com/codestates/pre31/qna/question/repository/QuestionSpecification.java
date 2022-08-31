package com.codestates.pre31.qna.question.repository;

import com.codestates.pre31.qna.question.entity.Question;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Predicate;


public class QuestionSpecification {


    public static Specification<Question> zeroAnswer(){
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("numAnswer"),0);
    }
    public static Specification<Question> zeroNumSelected(){
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("numSelected"),0);
    }
    public static Specification<Question> Deleted(boolean deleted){
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal((root.get("deleteState")),deleted);
    }

}
