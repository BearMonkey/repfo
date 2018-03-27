package com.delica.repfo.dao;

import com.delica.repfo.domain.UserTrain;
import org.apache.ibatis.annotations.Param;

public interface UserTrainMapper {
    int deleteByPrimaryKey(@Param("userId") Integer userId, @Param("trainId") Integer trainId);

    int insert(UserTrain record);

    int insertSelective(UserTrain record);

    UserTrain selectByPrimaryKey(@Param("userId") Integer userId, @Param("trainId") Integer trainId);

    int updateByPrimaryKeySelective(UserTrain record);

    int updateByPrimaryKey(UserTrain record);
}