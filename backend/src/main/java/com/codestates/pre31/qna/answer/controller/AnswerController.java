package com.codestates.pre31.qna.answer.controller;

import com.codestates.pre31.qna.answer.DTO.PostAnswerDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/answer")
public class AnswerController {

    @PostMapping
    public ResponseEntity postAnswer(PostAnswerDTO dto) {

        Map<String, String> map = new HashMap<>();

        return new ResponseEntity<Map>((Map) dto, HttpStatus.CREATED);
    }

    @PatchMapping("/{answerId}")
    public ResponseEntity patchAnswer(@PathVariable int answerId) {
        Map<String, String> map = new HashMap<>();

        return new ResponseEntity<Map>(map, HttpStatus.CREATED);
    }


    @DeleteMapping("/{answerId}")
    public ResponseEntity deleteAnswer(@PathVariable int answerId) {
        Map<String, String> map = new HashMap<>();
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }


}
