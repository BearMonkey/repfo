package com.delica.repfo.dao;

import com.delica.repfo.domain.TrainType;

public interface TrainTypeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TrainType record);

    int insertSelective(TrainType record);

    TrainType selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TrainType record);

    int updateByPrimaryKey(TrainType record);
}