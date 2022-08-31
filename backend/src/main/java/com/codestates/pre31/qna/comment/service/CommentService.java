package com.codestates.pre31.qna.comment.service;

import com.codestates.pre31.qna.comment.entity.Comment;
import com.codestates.pre31.qna.comment.repository.CommentRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import java.util.Optional;

public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }



    public Comment createComment(Comment comment) {
        Comment createComment = commentRepository.save(comment);
        return createComment;
    }


    public Optional<Comment> findComment(Long commentId) {
        Optional<Comment> comment = commentRepository.findById(commentId);
        return comment;
    }


    public Page<Comment> findComment(int page, int size) {
        return commentRepository.findAll(PageRequest.of(page, size,
                Sort.by("commentId").descending()));
    }


    public Comment updateComment(Comment comment) {

        return null;
    }


    public void deleteComment(long commentId) {

    }




}
