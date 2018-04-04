<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <title>用户</title>
    <base target="/repfo">
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
    <script type="text/javascript" src="../js/common.js"></script>
    <script type="text/javascript" src="../js/module/user/list.js"></script>
  </body>
</html>