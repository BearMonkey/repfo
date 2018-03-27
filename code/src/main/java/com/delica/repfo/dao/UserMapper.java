package com.delica.repfo.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.delica.repfo.domain.User;

public interface UserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    /**
     * 从t_user表start位置开始查询size条记录
     * @param start
     * @param size
     * @return List<User> 
     */
    List<User> selectAllUser(@Param("start")int start, @Param("size")int size);
}