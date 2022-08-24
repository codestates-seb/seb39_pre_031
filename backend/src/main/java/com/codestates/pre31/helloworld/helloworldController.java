package com.codestates.pre31.helloworld;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloworldController {

    @GetMapping
    public ResponseEntity<String> helloWorld () {

        return new ResponseEntity<String>("HelloWorld", HttpStatus.OK);
    }

}
