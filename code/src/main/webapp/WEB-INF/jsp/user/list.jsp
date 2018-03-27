<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<% 
// 获得本项目的地址(例如: http://localhost:8080/MyApp/)赋值给basePath变量 
String path = request.getContextPath(); 
String basePath = request.getScheme()+"://"+request.getServerName() + ":"+request.getServerPort()+path; 
// 将 "项目路径basePath" 放入pageContext中，待以后用EL表达式读出。 
pageContext.setAttribute("basePath",basePath); 
%> 
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <title>用户</title>
    <link href="http://apps.bdimg.com/libs/bootstrap/3.3.4/css/bootstrap.min.css">
    <link href="http://apps.bdimg.com/libs/fontawesome/4.4.0/css/font-awesome.min.css">
  </head>
  <body>
    <div>
      <table>
        <thead>
          <tr>
            <th><input id="selectAllUser" type="checkbox" name="selectAllUser"><span>全选</span></th>
            <th>账号</th>
            <th>姓名</th>
            <th>手机号</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody id="userList">
          <tr v-for="user in users">
            <td><input class="userItem" type="checkbox" name="userItem"></td>
            <td>{{user.account}}</td>
            <td>{{user.name}}</td>
            <td>{{user.phone}}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <script type="text/javascript" src="https://apps.bdimg.com/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript" src="http://apps.bdimg.com/libs/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue"></script>
    
    <script type="text/javascript">
    $().ready(function(){
        //请求用户数据
        $.post(getPath() + "/user/getUser", {pageSize:10, pageNo:1}, function(data){
            pushData(data, "#userList");
        },'json');
        
    });
    
    function pushData(userData, selector){
    	// 交给 vue 进行渲染
    	console.log("selector:"+selector);
	    var vm = new Vue({
	        el: selector,
	        data: {users:userData}
	    });
    }
    
    /*获取项目根路径*/
    function  getPath(){
        var pathName = document.location.pathname;
        var index = pathName.substr(1).indexOf("/");
        var result = pathName.substr(0,index+1);
        return result;
    }
    </script>
  </body>
</html>