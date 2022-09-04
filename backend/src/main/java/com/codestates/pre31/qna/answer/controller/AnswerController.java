package com.codestates.pre31.qna.answer.controller;

import com.codestates.pre31.qna.answer.DTO.PatchAnswerDTO;
import com.codestates.pre31.qna.answer.DTO.PostAnswerDTO;
import com.codestates.pre31.qna.answer.entity.Answer;
import com.codestates.pre31.qna.answer.service.AnswerService;
import com.codestates.pre31.user.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/answer")
public class AnswerController {

    private final AnswerService answerService;

    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @PostMapping
    public ResponseEntity postAnswer(@RequestBody PostAnswerDTO dto) {
        System.out.println(dto.getTitle() + " " + dto.getBody()+ " " + dto.getUser_id()+ " " + dto.getQuestion_id());
        User user = new User();
        user.setUserId(dto.getUser_id());

        Answer answer = new Answer();

        answer.setTitle(dto.getTitle());
        answer.setBody(dto.getBody());
        answer.setDeleteState(false);
        answer.setGeneratedTime(LocalDateTime.now());
        answer.setModifiedTime(LocalDateTime.now());
        answer.setUser(user);
        answer.setQuestionId(dto.getQuestion_id());
        answer.setVote(0);
        answer.setAccepted(false);
        answerService.createAnswer(answer);
        Map<String,Object> map = new HashMap<>();
        map.put("result",answer);
        return new ResponseEntity<Map>(map, HttpStatus.CREATED);
    }


    @GetMapping("/{answerId}")
    public ResponseEntity getAnswer(@PathVariable("answerId") long answerId) {
        System.out.println("ANSWER ID ::::::: " + answerId);
        Answer result = answerService.findAnswer(answerId);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    @PatchMapping("/{answerId}")
    public ResponseEntity patchAnswer(@PathVariable("answerId") Integer answerId, @RequestBody PatchAnswerDTO dto) {
        System.out.println("Result :::::::" +dto.getBody() + " , " + dto.getTitle());
        Answer result = answerService.updateAnswer(answerId, dto);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.CREATED);
    }

    @PatchMapping("/select/{answerId}")
    public ResponseEntity selectAnswer(@PathVariable("answerId") Integer answerId) {
        Answer result = answerService.selectAnswer((long)answerId);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.CREATED);
    }


    @PatchMapping("/voteUp/{answerId}")
    public ResponseEntity voteUpAnswer(@PathVariable("answerId") Integer answerId) {
        Answer result = answerService.voteUpAnswer((long)answerId);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.CREATED);
    }


    @PatchMapping("/voteDown/{answerId}")
    public ResponseEntity voteDownAnswer(@PathVariable Integer answerId) {
        Answer result = answerService.voteDownAnswer((long)answerId);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.CREATED);
    }


    @DeleteMapping("/{answerId}")
    public ResponseEntity deleteAnswer(@PathVariable Integer answerId) throws Exception{
        answerService.deleteAnswer((long) answerId);
        Map<String, Object> map = new HashMap<>();
        Map<String, Object> result = new HashMap<>();

        result.put("DeleteId",answerId);
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

}
