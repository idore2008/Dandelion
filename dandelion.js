/** 
    @ Name :  jiangtao Javascript Library 
    @ Author :jiangtao
    @ Date : 2017-05-12 
    @ Email : idore2008@163.com 
    @ Version : 1.0 
  	@ Description
    功能： 
	    1:  $ID选择 
	    2： 事件绑定，事件移除，获取事件目标 
	    3： 阻止冒泡，阻止默认事件 
	    4： 显示隐藏 
	    5： 去除HTML 
	    6： 去除首尾空格 
	    7： 获取URL参数 
	    8： Cookie操作，设置，删除，获取 
	    9： 清除所有Cookie 
	    10：表格排序 
	    11: 动态转入Javascript 
	    12: 封装Ajax 
	    13：将HTML编码 
	    调用方法： 
	    jt.xxx(); 
*/

(function($){
	
	if (typeof window.jt == 'undefined') {
		window.jt = {};  
	} else {
		window.jt = jt;  
	}
	//版本
	window.jt.v = '1.0';
	
	
	//基础篇
	
	function toast(msg) {  
		alert(msg);
	}
	window.jt.toast = toast; 
	
	
	//字符串不为空
	function isNotEmpty(str) {
		if(str != '' && str != 'undefined' && str != null) {
			return true;
		} else {
			return false;
		}
	}
	window.jt.isNotEmpty = isNotEmpty; 
	
	//字符串不为空
	function isNotEmpty(str) {
		if(str != '' && str != 'undefined' && str != null) {
			return true;
		} else {
			return false;
		}
	}
	window.jt.isNotEmpty = isNotEmpty; 
	
	//字符串为空
	function isEmpty(str) {
		if(str == '' || str == null) {
			return true;
		} else {
			return false;
		}
	}
	window.jt.isEmpty = isEmpty; 
	
	
	/**
	 * 正则匹配篇
	 * 常用的正则匹配
	 * 
	 */
	//匹配电子邮件
	function isEmail(email) { 
		var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		return pattern.test(email);
	}
	window.jt.isEmail = isEmail; 
	
	//匹配身份证号
	function isIDCard(idCard) { 
		var pattern = /^\d{14}[[0-9],0-9xX]$/;
		return pattern.test(idCard);
	}
	window.jt.isIDCard = isIDCard; 
	
	//匹配QQ
	function isQQ(QQ) { 
		var pattern = /^[1-9][0-9]{4,}$/;
		return pattern.test(QQ);
	}
	window.jt.isQQ = isQQ; 
	
	//匹配邮编
	function isPost(post) { 
		var pattern = /^[1-9]\\d{5}(?!\d)$/;
		return pattern.test(post);
	}
	window.jt.isPost = isPost; 
	
	//匹配ipv4
	function isIP4(ip) { 
		var pattern = /^((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))$/;
		return pattern.test(ip);
	}
	window.jt.isIP4 = isIP4; 
	
	//匹配ipv6
	function isIP6(ip) { 
		var pattern = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
		return pattern.test(ip);
	}
	window.jt.isIP6 = isIP6; 
	
	//匹配mac地址
	function isMac(mac) { 
		var pattern = /^([A-Fa-f0-9]{2}\:){5}[A-Fa-f0-9]$/;
		return pattern.test(mac);
	}
	window.jt.isMac = isMac; 
	
	//匹配URL
	function isURL(url) { 
		var pattern = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
		return pattern.test(url);
	}
	window.jt.isURL = isURL; 
	//匹配URL
	function isURL(url) { 
		var pattern = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
		return pattern.test(url);
	}
	window.jt.isURL = isURL; 
	//匹配手机号
	function isMobilePhone(phone) { 
		var pattern = /^1[3|4|5|7|8][0-9]\d{6,8}$/;
		return pattern.test(phone);
	}
	window.jt.isMobilePhone = isMobilePhone; 
	
	//匹配固定电话
	function isTelephone(phone) { 
		var pattern = /^0\d{2}-?\d{8}|0\d{3}-?\d{7,8}$/;
		return pattern.test(phone);
	}
	window.jt.isTelephone = isTelephone; 
	
	//全部为字母
	function isLetter(str) { 
		var pattern = /^[A-Za-z]+$/;
		return pattern.test(str);
	}
	window.jt.isLetter = isLetter; 
	
	//全部为数字
	function isDigital(num) { 
		var pattern = /^[0-9]+$/;
		return pattern.test(num);
	}
	window.jt.isDigital = isDigital; 
	
	//全部为汉字
	function isChinese(str) { 
		var pattern = /^[\u4e00-\u9fa5]{0,}$/;
		return pattern.test(str);
	}
	window.jt.isChinese = isChinese; 
	
	//匹配用户账号 6-18位
	function isAccount(str) { 
		var pattern = /^[a-zA-Z]\w{5,17}$/;
		return pattern.test(str);
	}
	window.jt.isAccount = isAccount; 
	
	//匹配密码
	function isPassword(str) { 
		var pattern = /^[a-zA-Z0-9_\!\@\#\$\%\&\^\*\-]{8,18}$/;
		return pattern.test(str);
	}
	window.jt.isPassword = isPassword; 
	
	function exeMsg(text) {
		var div = createTag('div');
		div.setAttribute('id', 'exeResult');
		var closeDiv = createTag('div');
		closeDiv.style.backgroundColor = "#000";
		closeDiv.style.fontFamily = "Verdana";
		closeDiv.style.fontWeight = "bold";
		closeDiv.style.color = "white";
		closeDiv.style.textAlign = "center";
		closeDiv.style.width = "1.4em";
		closeDiv.style.height = "1.4em";
		closeDiv.style.position = "absolute";
		closeDiv.style.right = "3px";
		closeDiv.style.top = "3px";
		closeDiv.style.border = "1px solid #efefef";
		closeDiv.style.cursor = "pointer";
		closeDiv.style.borderRadius = "3px";
		closeDiv.onclick = function() {
			document.body.removeChild(id('exeResult'));
		}

		closeDiv.appendChild(createText('X'));
		div.appendChild(closeDiv);

		div.style.padding = "10px 30px 10px 10px";
		div.style.border = "1px solid #F9592B";
		div.style.backgroundColor = "#F8EEC2";
		div.style.color = "#FD6102";
		div.style.position = "absolute";
		div.style.top = "2px";
		div.style.left = "200px";

		var text = createText(text);
		div.appendChild(text);
		document.body.appendChild(div);
	}
	
	window.jt.exeMsg = exeMsg; 
	
//}).call(this);
})(jQuery);