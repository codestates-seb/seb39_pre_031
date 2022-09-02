package com.codestates.pre31.qna.question.service;

import com.codestates.pre31.qna.question.entity.Question;
import com.codestates.pre31.qna.question.repository.QuestionRepository;
import com.codestates.pre31.qna.question.repository.QuestionSpecification;
import com.codestates.pre31.user.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
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

    // << Tab >>
    //-------------------//
    // Newest : Created time Desc //
    // Active : Edited time Desc //
    // Unanswered : (F) No accepted answer + vote Desc //
    // Score : Vote desc //
    // Frequent : View Desc //
    //-------------------//

    // << Filter >>
    //-------------------//
    // isNoAnswerFilter   : (F) Answer num = 0 //
    // isNoSelectedFilter : (F) Answer where accepted = 0 //
    //-------------------//

    // << Sorted by >>
    //-------------------//
    // Newest : Created time Desc //
    // Recent activity : Edited time Desc //
    // Highest score : Vote Desc //
    // Most frequent : View Desc //
    //-------------------//

    public Page<Question> findQuestions(String sort, String filter, int page) {
        int size = 30;
        PageRequest pageRequest;
        if(sort==null) {
            pageRequest = PageRequest.of(page,size);
        } else {
            pageRequest = PageRequest.of(page, size, Sort.by(Sort.Order.desc(sort)));
        }
        Specification<Question> spec = (root, query, criteriaBuilder) -> null;
        spec = spec.and(QuestionSpecification.Deleted(false));
        if(Objects.equals(filter, "NoAnswer")) {
            spec = spec.and(QuestionSpecification.zeroAnswer());
        } else if(Objects.equals(filter, "NoSelected")) {
            spec = spec.and(QuestionSpecification.zeroNumSelected());
        }

        return questionRepository.findAll(spec, pageRequest);
    }

    public List<Question> findAllQuestioins() {
        return questionRepository.findAll();
    }
    public Question updateQuestion(Question question) {
        return null;
    }


    public void deleteQuestion(long questionId) {

    }



}
