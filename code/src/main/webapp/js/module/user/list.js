$().ready(function(){
    //请求用户数据
    $.post(getPath() + "/user/getUser", {pageSize:10, pageNo:1}, function(data){
    	var vm = new Vue({
            el: "#userList",
            data: {users:data}
        });
    },'json');
    
});