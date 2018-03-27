package com.delica.repfo.service;

import java.util.List;

import com.delica.repfo.domain.User;

/**
 * UserService接口
 * @author chenc
 *
 */
public interface IUserService {

    public List<User> listUser(int start, int size);
}
