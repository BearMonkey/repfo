package com.delica.repfo.controller;

import java.lang.reflect.Method;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.delica.repfo.domain.User;

@Controller
@RequestMapping("/")
public class LoginController {

    private Logger log = Logger.getLogger(LoginController.class);
    
    /** 
     * 登录 
     * @param session 
     *          HttpSession 
     * @param username 
     *          用户名 
     * @param password 
     *          密码 
     * @return 
     */  
    @RequestMapping(value="login")  
    public String login(HttpSession session,String username,String password) throws Exception{
        log.info("here");
        if(null == username || "".equals(username.trim())) {
            return "login/login";
        } else {
            //在Session里保存信息 
            session.setAttribute("username", username);
            //重定向
            return "user/list";
        }
    }
    
    /** 
     * 退出系统 
     * @param session 
     *          Session 
     * @return 
     * @throws Exception 
     */  
    @RequestMapping(value="logout")  
    public String logout(HttpSession session) throws Exception{  
        //清除Session  
        session.invalidate();
        return "redirect:index.html";
    }
    
    @RequestMapping(value="regist")
    public String regist(User user) {
        if(null == user 
                || null == user.getAccount() 
                || "".equals(user.getAccount().trim())) {
            return "login/regist";
        } else {
            log.info(user.toString());
            return "login/regist";
        }
    }
    
}
