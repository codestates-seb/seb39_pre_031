package com.codestates.pre31.qna.question.controller;

import com.codestates.pre31.qna.question.entity.Question;
import com.codestates.pre31.qna.question.service.QuestionService;
import com.codestates.pre31.user.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/home")
public class HomeController {

    private final QuestionService questionService;

    public HomeController(QuestionService questionService) {
        this.questionService = questionService;
    }



    @GetMapping()
    public ResponseEntity getQuestionsHome() {
        Map<String, Object> result = new HashMap<>();
        List<Question> res = questionService.findHome("num_answer");
        result.put("result",res);
        return new ResponseEntity<Map>(result, HttpStatus.OK);
    }

    @GetMapping("/{filter}")
    public ResponseEntity getQuestionsHome(@PathVariable("filter") String filter) {
        Map<String, Object> result = new HashMap<>();
        String sort;
        if(filter.equals("Interesting")){
            sort = "vote";
        }else if(filter.equals("Hot")){
            sort = "views";
        }else {
            throw new RuntimeException("정확하지 않은 필터입니다.");
        }
       List<Question> res = questionService.findHome(sort);
        result.put("result",res);
        return new ResponseEntity<Map>(result, HttpStatus.OK);
    }
}
