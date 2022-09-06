package com.codestates.pre31.qna.answer.service;

import com.codestates.pre31.qna.answer.DTO.PatchAnswerDTO;
import com.codestates.pre31.qna.answer.entity.Answer;
import com.codestates.pre31.qna.answer.repository.AnswerRepository;
import com.codestates.pre31.qna.question.entity.Question;
import com.codestates.pre31.qna.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;

    public AnswerService(AnswerRepository answerRepository, QuestionRepository questionRepository) {
        this.answerRepository = answerRepository;
        this.questionRepository = questionRepository;
    }


    @Transactional
    public Answer createAnswer(Answer answer) {
        Answer answers = answerRepository.save(answer);
        long ids = answers.getQuestionId();
        Question question = questionRepository.findById(ids).orElseThrow(() -> new RuntimeException("id 확인필요 [" + ids +"]"));
        int numAns = question.getNumAnswer();
        numAns = numAns+1;
        question.setNumAnswer(numAns);
        questionRepository.save(question);

        return answerRepository.save(answers);
    }
    public Answer findAnswer(Long answerId) {
        return answerRepository.findById(answerId).orElseThrow(() -> new RuntimeException("id 확인필요 [" + answerId +"]"));
    }

    public Answer selectAnswer(Long answerId) {
        Answer answer = answerRepository.findById(answerId).orElseThrow(() -> new RuntimeException("id 확인필요 [" + answerId +"]"));
        if(!answer.isAccepted()) {
            answer.setAccepted(true);
            long ids = answer.getQuestionId();
            Question question = questionRepository.findById(ids).orElseThrow(() -> new RuntimeException("id 확인필요 [" + ids + "]"));
            int numSel = question.getNumSelected();
            numSel = numSel + 1;
            question.setNumSelected(numSel);

        questionRepository.save(question);
        answerRepository.save(answer);
        } else throw new RuntimeException("이미 채택된 답변입니다.");
        return answer;
    }
    public Answer updateAnswer(Integer answerId, PatchAnswerDTO dto) {
        Answer old = answerRepository.findById((long) answerId)
                .orElseThrow(() -> new RuntimeException("id 확인필요 [" + answerId+"]"));
        old.setModifiedTime(LocalDateTime.now());
        if(dto.getBody()!=null){old.setBody(dto.getBody());}
        answerRepository.save(old);
        return old;
    }
    public Answer voteUpAnswer(Long answerId) {
        Answer answer = answerRepository.findById(answerId).orElseThrow(() -> new RuntimeException("id 확인필요 [" + answerId +"]"));
        int votes = answer.getVote();
        answer.setVote(votes+1);
        answerRepository.save(answer);
        return answer;
    }

    public Answer voteDownAnswer(Long answerId) {
        Answer answer = answerRepository.findById(answerId).orElseThrow(() -> new RuntimeException("id 확인필요 [" + answerId +"]"));
        int votes = answer.getVote();
        answer.setVote(votes-1);
        answerRepository.save(answer);
        return answer;
    }

    @Transactional
    public void deleteAnswer(long answerId) {
        Answer old = answerRepository.findById(answerId)
                .orElseThrow(() -> new RuntimeException("id 확인필요 [" + answerId +"]"));
        boolean deleteState = old.isDeleteState();
        old.setDeleteState(true);
        if(!deleteState) {
            long ids = old.getQuestionId();
            Question question = questionRepository.findById(ids).orElseThrow(() -> new RuntimeException("id 확인필요 [" + ids + "]"));

            int numAns = question.getNumAnswer();
            numAns = numAns - 1;
            question.setNumAnswer(numAns);
            questionRepository.save(question);

            old.setDeleteState(true);
        } else {
            throw new RuntimeException("이미 삭제된 답변입니다.");
        }
        answerRepository.save(old);
    }



}
