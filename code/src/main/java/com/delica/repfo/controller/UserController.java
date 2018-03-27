package com.delica.repfo.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONArray;
import com.delica.repfo.domain.User;
import com.delica.repfo.service.IUserService;

/**
 * 
 * @author chenc
 *
 */
@Controller
@RequestMapping("/")
public class UserController{
    
    private Logger log = Logger.getLogger(UserController.class);
    
    @Resource
    private IUserService userService;
    
    /**
     * 跳转到用户列表页面
     * @return user/list
     */
    @RequestMapping("user/list")
    public String listPage(){
        return "user/list";
    }
    
    /**
     * 获取用户数据
     * @param pageSize
     * @param pageNo
     * @return
     */
    @RequestMapping(value="user/getUser", produces = "application/json;charset=UTF-8")
    @ResponseBody
    public List<User> list(int pageSize, int pageNo, HttpServletRequest req, HttpServletResponse resp){
        HttpSession session = req.getSession();
        log.info("Controller userList: [pageSize:"+pageSize+",pageNo:"+pageNo+"]");
        List<User> users = userService.listUser((pageNo-1)*pageSize, pageSize);
        session.setAttribute("users", users);
        return users;
    }
}
