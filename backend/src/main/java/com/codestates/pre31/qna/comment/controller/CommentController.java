package com.codestates.pre31.qna.comment.controller;

import com.codestates.pre31.qna.comment.DTO.PostCommentDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @PostMapping
    public ResponseEntity postComment(PostCommentDTO dto) {

        Map<String, String> map = new HashMap<>();
        return new ResponseEntity<Map>((Map) dto, HttpStatus.CREATED);
    }

    @PatchMapping("/{commentId}")
    public ResponseEntity patchComment(@PathVariable int commentId) {
        Map<String, String> map = new HashMap<>();
        return new ResponseEntity<Map>(map, HttpStatus.CREATED);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity deleteComment(@PathVariable int commentId) {
        Map<String, String> map = new HashMap<>();
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }
}
