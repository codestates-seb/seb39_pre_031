package com.codestates.pre31.user.mapper;

import com.codestates.pre31.user.Dto.UserDto;
import com.codestates.pre31.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User userPostDtoToUser(UserDto.Post userDtoPost);

    UserDto.Response userToUserResponseDto(User user);
}
