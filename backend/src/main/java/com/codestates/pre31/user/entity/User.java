package com.codestates.pre31.user.entity;

import com.codestates.pre31.audit.Auditable;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
public class User extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    @Column(length = 45, nullable = false)
    private String username;

    @Column(length = 45, nullable = false)
    private String email;

    @Column(length = 45, nullable = false)
    private String password;
}
