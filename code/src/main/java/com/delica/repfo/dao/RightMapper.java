package com.delica.repfo.dao;

import com.delica.repfo.domain.Right;

public interface RightMapper {
    int deleteByPrimaryKey(String id);

    int insert(Right record);

    int insertSelective(Right record);

    Right selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Right record);

    int updateByPrimaryKey(Right record);
}