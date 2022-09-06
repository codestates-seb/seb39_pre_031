package com.codestates.pre31.user.mapper;

import com.codestates.pre31.user.dto.UserDto;
import com.codestates.pre31.user.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-06T15:19:14+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.4.1 (Amazon.com Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostDtoToUser(UserDto.Post userDtoPost) {
        if ( userDtoPost == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.username( userDtoPost.getUsername() );
        user.email( userDtoPost.getEmail() );
        user.password( userDtoPost.getPassword() );

        return user.build();
    }

    @Override
    public UserDto.Response userToUserResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto.Response.ResponseBuilder response = UserDto.Response.builder();

        response.userId( user.getUserId() );
        response.username( user.getUsername() );
        response.email( user.getEmail() );

        return response.build();
    }
}
