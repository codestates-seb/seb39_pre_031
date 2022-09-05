package com.codestates.pre31.qna.question.controller;

import com.codestates.pre31.qna.question.DTO.GetQuestionDTO;
import com.codestates.pre31.qna.question.DTO.PatchQuestionDTO;
import com.codestates.pre31.qna.question.DTO.PostQuestionDTO;
import com.codestates.pre31.qna.question.DTO.QuestionReusltDTO;
import com.codestates.pre31.qna.question.entity.Question;
import com.codestates.pre31.qna.question.service.QuestionService;
import com.codestates.pre31.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/question")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
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
        question.setNumAnswer(0);
        question.setNumSelected(0);
        questionService.createQuestion(question);
        Map<String,Object> map = new HashMap<>();
        map.put("result",question);
        return new ResponseEntity<Map>(map, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getQuestions(@RequestBody GetQuestionDTO dto) {

        int pageNum = dto.getPageNum();
        boolean answered = dto.isNoAns();// Answer 갯수가 0개
        boolean selected = dto.isNoSel(); // Answer where selected 갯수가 0개
        String sort = dto.getSort();

        System.out.println( " DTO    : " + dto.getPageNum() + " , " + dto.getSort()+" , " + dto.isNoAns()+" , " + dto.isNoSel());
        System.out.println( " filt   : " + pageNum + " , " + sort+" , " +answered+" , " + selected );

        String srt = "zero";
        System.out.println(">>" + dto.getSort());
        if(dto.getSort() !=null) {
            srt = dto.getSort();
        }
        String newSort = null;
        String filter = "None";


        switch (srt) {
            case "Newest":
                newSort = "generatedTime";
                break;
            case "Active":
            case "Recent activity":
                newSort = "modifiedTime";
                break;
            case "Unanswered":
                newSort = "vote";
                filter = "NoAnswer";
                break;
            case "Score":
            case "Highest score":
                newSort = "vote";
                break;
            case "Frequent":
            case "Most frequent":
                newSort = "views";
                break;
            default:
                break;
        }
        Page<Question> result = questionService.findQuestions(newSort, filter, pageNum);

        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);

    }

    @GetMapping("/{questionId}")
    public ResponseEntity getQuestion(@PathVariable("questionId") long questionId) throws Exception {
        QuestionReusltDTO result = questionService.findQuestion(questionId);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    @PatchMapping("/{questionId}")
    public ResponseEntity patchQuestion(@PathVariable("questionId") Integer questionId, @RequestBody PatchQuestionDTO dto) throws Exception {
        Question result = questionService.updateQuestion(questionId, dto);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.CREATED);
    }

    @PatchMapping("/voteUp/{questionId}")
    public ResponseEntity voteUpQuestion(@PathVariable("questionId") Integer questionId) throws Exception {
        Question result = questionService.voteUpQuestion((long)questionId);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.CREATED);
    }


    @PatchMapping("/voteDown/{questionId}")
    public ResponseEntity voteDownQuestion(@PathVariable("questionId") Integer questionId) throws Exception {
        Question result = questionService.voteDownQuestion((long)questionId);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.CREATED);
    }


    @DeleteMapping("/{questionId}")
    public ResponseEntity deleteQuestion(@PathVariable("questionId") Integer questionId) throws Exception {
        questionService.deleteQuestion((long) questionId);
        Map<String, Object> map = new HashMap<>();
        Map<String, Object> result = new HashMap<>();

        result.put("DeleteId",questionId);
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }



}
