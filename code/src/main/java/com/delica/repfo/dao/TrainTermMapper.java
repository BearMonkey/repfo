package com.delica.repfo.dao;

import com.delica.repfo.domain.TrainTerm;

public interface TrainTermMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TrainTerm record);

    int insertSelective(TrainTerm record);

    TrainTerm selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TrainTerm record);

    int updateByPrimaryKey(TrainTerm record);
}