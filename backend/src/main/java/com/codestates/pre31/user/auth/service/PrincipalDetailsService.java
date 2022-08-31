package com.codestates.pre31.user.auth.service;

import com.codestates.pre31.user.auth.entity.PrincipalDetails;
import com.codestates.pre31.user.entity.User;
import com.codestates.pre31.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User findUser = userRepository.findByEmail(username).orElse(null);
        return PrincipalDetails.create(findUser);
    }
}
