package com.codestates.pre31.qna.question.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/home")
public class HomeController {


    @GetMapping("/{filter}")
    public ResponseEntity getQuestionsHome(@PathVariable String filter) {
        Map<String, String> map = new HashMap<>();
        if(filter.equals("Interesting")){
            map.put("filter","Interesting");
        }else if(filter.equals("Hot")){
            map.put("filter","Hot");
        }else if(filter.equals("Week")){
            map.put("filter","Week");
        }else if(filter.equals("Month")){
            map.put("filter","Month");
        } else {
            map.put("filter","Not in List");
        }

        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }


}
