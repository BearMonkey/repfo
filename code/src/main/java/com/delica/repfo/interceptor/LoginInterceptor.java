package com.delica.repfo.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
 * 登录验证拦截器
 * @author chenc
 *
 */
public class LoginInterceptor extends HandlerInterceptorAdapter{
    
    private Logger log = Logger.getLogger(LoginInterceptor.class); 
    
    @Override  
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {  
        //获取请求的URL  
        String url = request.getRequestURI();  
        log.info("url:" + url);
        //URL:login.jsp是公开的;这个demo是除了login.jsp是可以公开访问的，其它的URL都进行拦截控制  
        if(url.indexOf("login")>=0){  
            return true;  
        }  
        //获取Session  
        HttpSession session = request.getSession();  
        String username = (String)session.getAttribute("username");  
          
        if(username != null){  
            return true;  
        }  
        //不符合条件的，跳转到登录界面  
        request.getRequestDispatcher("/login").forward(request, response);
          
        return false;
    }
}
