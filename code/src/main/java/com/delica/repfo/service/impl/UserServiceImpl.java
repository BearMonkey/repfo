package com.delica.repfo.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.delica.repfo.dao.UserMapper;
import com.delica.repfo.domain.User;
import com.delica.repfo.service.IUserService;

/**
 * UserService实现
 * @author chenc
 *
 */
@Service
public class UserServiceImpl implements IUserService{

    private Logger log = Logger.getLogger(UserServiceImpl.class);
    
    @Resource
    private UserMapper userMapper;
    
    @Override
    public List<User> listUser(int start, int size) {
        return userMapper.selectAllUser(start, size);
    }

    public Logger getLog() {
        return log;
    }

    public void setLog(Logger log) {
        this.log = log;
    }

    public UserMapper getUserMapper() {
        return userMapper;
    }

    public void setUserMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

}
