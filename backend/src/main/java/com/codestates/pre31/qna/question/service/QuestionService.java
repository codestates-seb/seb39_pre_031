package com.codestates.pre31.qna.question.service;

import com.codestates.pre31.qna.answer.entity.Answer;
import com.codestates.pre31.qna.answer.repository.AnswerRepository;
import com.codestates.pre31.qna.question.DTO.PatchQuestionDTO;
import com.codestates.pre31.qna.question.DTO.QuestionReusltDTO;
import com.codestates.pre31.qna.question.entity.Question;
import com.codestates.pre31.qna.question.repository.QuestionRepository;
import com.codestates.pre31.qna.question.repository.QuestionSpecification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;


    public QuestionService(QuestionRepository questionRepository, AnswerRepository answerRepository) {
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
    }

    public Question createQuestion(Question question) {
        return questionRepository.save(question);
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
        System.out.println("Sort : " +  sort +",  Filter : "+ filter+ ",  Page : " + page);
        Specification<Question> spec = (root, query, criteriaBuilder) -> null;
        spec = spec.and(QuestionSpecification.Deleted(false));
        if(Objects.equals(filter, "NoAnswer")) {
            spec = spec.and(QuestionSpecification.zeroAnswer());
        } else if(Objects.equals(filter, "NoSelected")) {
            spec = spec.and(QuestionSpecification.zeroNumSelected());
        }
        Pageable pageRequest;
        if(sort==null) {
            pageRequest = PageRequest.of(page, size);
        } else {
            pageRequest = PageRequest.of(page, size, Sort.by(Sort.Order.desc(sort)));
        }
        return questionRepository.findAll(spec, pageRequest);
    }

    public List<Question>findHome(String sort) {
        int size = 30;
        int page = 0;
        Specification<Question> spec = (root, query, criteriaBuilder) -> null;
        spec = spec.and(QuestionSpecification.Deleted(false));
        Page<Question> resultPage;
        Pageable pageRequest;
        if (sort.equals("none")) {
            pageRequest = PageRequest.of(page, size);
        } else {
            pageRequest = PageRequest.of(page, size, Sort.by(Sort.Order.desc(sort)));
        }
        resultPage = questionRepository.findAll(spec, pageRequest);

        return resultPage.getContent();
    }

    public QuestionReusltDTO findQuestion(Long questionId)  {
        Question question = questionRepository.findById(questionId).orElseThrow(() -> new RuntimeException("id 확인필요 [" + questionId +"]"));
        List<Answer> answers = answerRepository.fnidAllByQuestionId(questionId);

        QuestionReusltDTO dto = QuestionReusltDTO.builder().
                questionId(question.getQuestionId()).
                title(question.getTitle()).
                body(question.getBody()).
                generatedTime(question.getGeneratedTime()).
                modifiedTime(question.getModifiedTime()).
                vote(question.getVote()).
                views(question.getViews()).
                numAnswer(question.getNumAnswer()).
                ListAnswer(answers).
                build();

        int views = question.getViews();
        question.setViews(views+1);
        questionRepository.save(question);
        return dto;
    }

    public Question voteUpQuestion(Long questionId) {
        Question question = questionRepository.findById(questionId).orElseThrow(() -> new RuntimeException("id 확인필요 [" + questionId +"]"));
        int votes = question.getVote();
        question.setVote(votes+1);
        System.out.println("afterChange : " + question.getVote());
        questionRepository.save(question);
        return question;
    }

    public Question voteDownQuestion(Long questionId) {
        Question question = questionRepository.findById(questionId).orElseThrow(() -> new RuntimeException("id 확인필요 [" + questionId +"]"));
        int votes = question.getVote();
        System.out.println("beforeChange : " + question.getVote());
        question.setVote(votes-1);
        System.out.println("afterChange : " + question.getVote());
        questionRepository.save(question);
        return question;
    }

    public Question updateQuestion(long questionId, PatchQuestionDTO dto) {
        Question old = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("id 확인필요 [" + questionId+"]"));
        if(dto.getBody()!=null) { old.setBody(dto.getBody());}
        if(dto.getTitle()!=null) { old.setTitle(dto.getTitle());}
        old.setModifiedTime(LocalDateTime.now());
        questionRepository.save(old);
        return old;
    }


    public void deleteQuestion(long questionId) {
        Question old = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("id 확인필요 [" + questionId +"]"));
        if(!old.getDeleteState()) {
            old.setDeleteState(true);
        } else {
            throw new RuntimeException("이미 삭제된 질문입니다.");
        }
        questionRepository.save(old);
    }



}
