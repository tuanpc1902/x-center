package com.xcenter.login.services.impl;

import com.xcenter.login.repository.UserInfoRepository;
import com.xcenter.login.services.UserInfoService;
import com.xcenter.common.models.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserInfoImplement implements UserInfoService {

    @Autowired
    private UserInfoRepository userInfoRepository;

    @Override
    public UserInfo getUserInfoByUsername(String username) {
        return userInfoRepository.getUserInfoByUsername(username);
    }
}
