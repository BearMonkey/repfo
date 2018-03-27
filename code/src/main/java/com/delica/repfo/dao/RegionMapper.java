package com.delica.repfo.dao;

import com.delica.repfo.domain.Region;

public interface RegionMapper {
    int deleteByPrimaryKey(Integer code);

    int insert(Region record);

    int insertSelective(Region record);

    Region selectByPrimaryKey(Integer code);

    int updateByPrimaryKeySelective(Region record);

    int updateByPrimaryKey(Region record);
}