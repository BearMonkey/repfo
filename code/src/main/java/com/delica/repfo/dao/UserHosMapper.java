package com.delica.repfo.dao;

import com.delica.repfo.domain.UserHos;
import org.apache.ibatis.annotations.Param;

public interface UserHosMapper {
    int deleteByPrimaryKey(@Param("userId") Integer userId, @Param("hosId") Integer hosId);

    int insert(UserHos record);

    int insertSelective(UserHos record);

    UserHos selectByPrimaryKey(@Param("userId") Integer userId, @Param("hosId") Integer hosId);

    int updateByPrimaryKeySelective(UserHos record);

    int updateByPrimaryKey(UserHos record);
}