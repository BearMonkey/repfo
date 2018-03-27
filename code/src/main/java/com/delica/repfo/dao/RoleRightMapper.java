package com.delica.repfo.dao;

import com.delica.repfo.domain.RoleRight;
import org.apache.ibatis.annotations.Param;

public interface RoleRightMapper {
    int deleteByPrimaryKey(@Param("roleId") Integer roleId, @Param("rightId") String rightId);

    int insert(RoleRight record);

    int insertSelective(RoleRight record);

    RoleRight selectByPrimaryKey(@Param("roleId") Integer roleId, @Param("rightId") String rightId);

    int updateByPrimaryKeySelective(RoleRight record);

    int updateByPrimaryKey(RoleRight record);
}