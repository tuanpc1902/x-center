package com.xcenter.login.services;


import com.xcenter.common.models.UserInfo;

public interface UserInfoService {

    UserInfo getUserInfoByUsername(String username);

}
