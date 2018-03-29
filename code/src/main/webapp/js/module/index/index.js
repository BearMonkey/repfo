
/**
 * 弹出登录模态框
 * @param modalId 模态框的id
 */
function loginModal(modalId){
	showModal(modalId);
	$("#login_account").val("");
	$("#login_passwd").val("");
	$("#errorLogin").text("");
}

function login(url, modalId){
	var account = $("#login_account").val();
	var passwd = $("#login_passwd").val();
	if(isEmpty(account) || isEmpty(passwd)){
		$("#errorLogin").text("账号和密码不能为空");
		return;
	}
	$.post(url, {account:account, password:passwd}, function(data){
		console.log(data);
		var msg = JSON.parse(data);
		if("success" != msg.mess) {
			$("#errorLogin").text(msg.mess);
		} else {
			window.location.href=getPath() + "/loginLogin.action?account=" + account;
		}
	});
	
}
/**
 * 弹出注册模态框
 * @param modalId 模态框的id
 */
function registerModal(modalId){
	showModal(modalId);
	$("#reg_account").val("");
	$("#reg_passwd").val("");
	$("#reg_passwd2").val("");
	$("#reg_idcard").val("");
	$("#errorRegister").text("");
}

function register(url, modalId){
	var account = $("#reg_account").val();
	var passwd = $("#reg_passwd").val();
	var passwd2 = $("#reg_passwd2").val();
	var idcard = $("#reg_idcard").val();

	/** 校验 */
	if(isEmpty(account)){
		$("#errorRegister").text("账号不能为空");
		return;
	}
	debugger
    if(/.*[\u4e00-\u9fa5]+.*$/.test(account)){
        $("#errorRegister").text("账号不能含有中文汉字");
        return;
    }
	if(account.length>20){
		$("#errorRegister").text("账号不能超过20个字符");
		return;
	}
	if(isEmpty(passwd)){
		$("#errorRegister").text("密码不能为空");
		return;
	}
	if(passwd.length>20){
		$("#errorRegister").text("密码不能超过20个字符");
		return;
	}
	if(isEmpty(passwd2)){
		$("#errorRegister").text("请再次输入密码确认");
		return;
	}
	if(passwd!=passwd2){
		$("#errorRegister").text("两次输入的密码不一致！");
		return;
	}
	if(isEmpty(idcard)){
		$("#errorRegister").text("身份证号不能为空！");
		return;
	}
	if(idcard.length>19 || idcard.length<0) {
		$("#errorRegister").text("身份证格式不正确！");
		return;
	}
	$("#errorRegister").text("");
	/** ajax */
	$.post(url, {account:account, password:passwd, idCard:idcard}, function(data){
		var msg = JSON.parse(data);
		if("success" != msg.mess) {
			$("#errorRegister").text(msg.mess);
		} else {
			$("#errorRegister").text("");
			window.location.href=getPath() + "/loginLogin.action?account=" + account;
		}
	});
	
}




function isEmpty(val){
	if(null == val || "" == val) {
		return true;
	}
	return false;
}
/*显示模态框*/
function showModal(modalId){
    $("#"+modalId).addClass("in").show().attr("aria-hidden", "false");
	$("body").addClass("modal-open").append('<div class="modal-backdrop fade in"></div>');
}
/*隐藏模态框*/
function closeModal(modalId){
	$("#"+modalId).removeClass("in").hide().attr("aria-hidden", "true");
	$("body").removeClass("modal-open");
	$(".modal-backdrop.fade.in").removeClass("in");
	$(".modal-backdrop.fade").remove();
}
/*获取项目根路径*/
function  getPath(){
	var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    var result = pathName.substr(0,index+1);
    return result;
}