<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <title>登录</title>
    <base target="/repfo">
    <link href="http://apps.bdimg.com/libs/bootstrap/3.3.4/css/bootstrap.min.css">
    <link href="http://apps.bdimg.com/libs/fontawesome/4.4.0/css/font-awesome.min.css">
  </head>
  <body>
    <header id="header"></header>
    <div id="mainbody">
      <form id="form-login" action="user/list" method="POST">
        <div>
          <label class="" for="username">用户名：</label>
          <input class="" id="username" type="text" name="username">
        </div>
        <div>
          <label class="" for="password">密码：</label>
          <input class="" id="password" type="password" name="password">
        </div>
        <div>
          <input class="" id="btn-login" type="submit" name="" value="登录">
        </div>
      </form>
    </div>
    <footer id="footer"></footer>
    <script type="text/javascript" src="https://apps.bdimg.com/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript" src="http://apps.bdimg.com/libs/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script type="text/javascript" src="js/common.js"></script>
    
    <script type="text/javascript">
    $().ready(function(){
    	$("#btn-login").click(function(){
    		var params = $("#form-login").serializeObject();
    		console.log("params:"+params);
    	});
    });
    </script>
  </body>
</html>