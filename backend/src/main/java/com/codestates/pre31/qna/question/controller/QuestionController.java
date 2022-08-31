package com.codestates.pre31.qna.question.controller;

import com.codestates.pre31.qna.question.DTO.GetQuestionDTO;
import com.codestates.pre31.qna.question.DTO.PostQuestionDTO;
import com.codestates.pre31.qna.question.entity.Question;
import com.codestates.pre31.qna.question.service.QuestionService;
import com.codestates.pre31.user.entity.User;
import com.codestates.pre31.user.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/question")
public class QuestionController {

    private final QuestionService questionService;
    private final UserRepository userRepository;

    public QuestionController(QuestionService questionService, UserRepository userRepository) {
        this.questionService = questionService;
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody PostQuestionDTO dto) {
        Question question = new Question();
        User user = new User();
        user.setUserId(dto.getUser_id());
        question.setTitle(dto.getTitle());
        question.setBody(dto.getBody());
        question.setDeleteState(false);
        question.setGeneratedTime(LocalDateTime.now());
        question.setModifiedTime(LocalDateTime.now());
        question.setUser(user);
        question.setVote(0);
        question.setViews(0);

        questionService.createQuestion(question);
        Map<String, String> map = new HashMap<>();

        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getQuestions(@RequestBody GetQuestionDTO dto, Pageable pageable) {

        boolean answered = dto.isNoAnswerFilter();  // Answer 갯수가 0개
        boolean selected = dto.isNoSelectedFilter(); // Answer where selected 갯수가 0개
        String sortby =dto.getSortedBy();
        String sorted = null;
        String filter = null;

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


        Page<Question> getQuestions = questionService.findQuestions(sorted, filter, pageable);
        List<Question> result = new ArrayList<>();
        Map<String, String> map = new HashMap<>();

        return new ResponseEntity<List<>>(result, HttpStatus.OK);
    }

    @GetMapping("/{questionId}")
    public ResponseEntity getQuestion(@PathVariable int questionId) {
        Map<String, String> map = new HashMap<>();
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    @PatchMapping("/{questionId}")
    public ResponseEntity patchQuestion(@PathVariable int questionId) {
        Map<String, String> map = new HashMap<>();
        return new ResponseEntity<Map>(map, HttpStatus.CREATED);
    }

    @DeleteMapping("/{questionId}")
    public ResponseEntity deleteQuestion(@PathVariable int questionId) {
        Map<String, String> map = new HashMap<>();
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

}
