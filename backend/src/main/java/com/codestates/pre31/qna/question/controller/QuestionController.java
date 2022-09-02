package com.codestates.pre31.qna.question.controller;

import com.codestates.pre31.qna.question.DTO.GetQuestionDTO;
import com.codestates.pre31.qna.question.DTO.PostQuestionDTO;
import com.codestates.pre31.qna.question.entity.Question;
import com.codestates.pre31.qna.question.service.QuestionService;
import com.codestates.pre31.user.entity.User;
import com.codestates.pre31.user.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
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
        User user = new User();
        user.setUserId(dto.getUser_id());
        Question question = new Question();
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
    public ResponseEntity getQuestions(@RequestBody GetQuestionDTO dto) {
        int pageNum = dto.getPageNum();
        boolean answered = dto.isNoAnswerFilter();  // Answer 갯수가 0개
        boolean selected = dto.isNoSelectedFilter(); // Answer where selected 갯수가 0개
        String sort = "zero";
        if(dto.getSortedBy() !=null) {
            sort = dto.getSortedBy();
        }
        String newSort = null;
        String filter = "None";

        if(answered){filter = "NoAnswer";}
        if(selected){filter = "NoSelected";}

        if(sort.equals("Newest")){newSort = "generated_time";}
        if(sort.equals("Active") || sort.equals("Recent activity")){newSort = "modified_time";}
        if(sort.equals("Unanswered")){newSort = "votes"; filter = "NoAnswer";}
        if(sort.equals("Score") || sort.equals("Highest score")){newSort = "votes";}
        if(sort.equals("Frequent") || sort.equals("Most frequent")){newSort = "views";}
        Page<Question> getQuestions = questionService.findQuestions(newSort, filter, pageNum);
        return new ResponseEntity<Page>(getQuestions, HttpStatus.OK);

    }

    @GetMapping("/findAll")
    public ResponseEntity getAllQuestions(){
        List<Question> result = questionService.findAllQuestioins();
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map,HttpStatus.OK);
    }

    @GetMapping("/{questionId}")
    public ResponseEntity getQuestion(@PathVariable long questionId) {
        questionService.findQuestion(questionId);
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
