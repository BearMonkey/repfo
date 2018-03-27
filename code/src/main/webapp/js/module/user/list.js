var users=null;
var vm = new Vue({
	el: '#userList',
	data: users
})

$().ready(function(){
	/**
	 * 请求用户数据
	 */
	$().post("/user/getUser", {pageSize:10, pageNo:1}, function(data){
		consoloe.log(data);
		users = data;
	});
	
});
