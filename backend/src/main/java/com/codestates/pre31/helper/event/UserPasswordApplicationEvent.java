package com.codestates.pre31.helper.event;

import com.codestates.pre31.user.entity.User;
import lombok.Getter;
import org.springframework.context.ApplicationEvent;

@Getter
public class UserPasswordApplicationEvent extends ApplicationEvent {
    private User user;

    public UserPasswordApplicationEvent(Object source, User user) {
        super(source);
        this.user = user;
    }
}
