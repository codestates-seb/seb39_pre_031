package com.codestates.pre31.qna.question.service;

import com.codestates.pre31.qna.question.entity.Question;
import com.codestates.pre31.qna.question.repository.QuestionRepository;
import com.codestates.pre31.qna.question.repository.QuestionSpecification;
import com.codestates.pre31.user.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final UserRepository userRepository;

    public QuestionService(QuestionRepository questionRepository, UserRepository userRepository) {
        this.questionRepository = questionRepository;
        this.userRepository = userRepository;
    }



    public Question createQuestion(Question question) {
        Question createQuestion = questionRepository.save(question);
        return createQuestion;
    }


    public Optional<Question> findQuestion(Long questionId) {
        Optional<Question> question = questionRepository.findById(questionId);
        return question;
    }


    public Page<Question> findQuestions(String sort, String filter, Pageable pageable) {
        Specification<Question> spec = (root, query, criteriaBuilder) -> null;
        spec = spec.and(QuestionSpecification.Deleted(false));
        if(filter=="NoAnswer") {
            spec = spec.and(QuestionSpecification.zeroAnswer());
        } else if(filter == "NoSelected") {
            spec = spec.and(QuestionSpecification.zeroNumSelected());
        }

        return questionRepository.findAll(spec, pageable);
    }

    public Question updateQuestion(Question question) {

        return null;
    }


    public void deleteQuestion(long questionId) {

    }



}
