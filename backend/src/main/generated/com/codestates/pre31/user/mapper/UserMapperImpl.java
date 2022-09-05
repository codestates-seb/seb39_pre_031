package com.codestates.pre31.user.mapper;

import com.codestates.pre31.user.dto.UserDto;
import com.codestates.pre31.user.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-05T18:39:17+0900",
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

        UserDto.Response response = new UserDto.Response();

        return response;
    }
}
