// JavaScript Document

/**

导航栏激活变色

控制nav的active类
当页面加载完成时获取.nav a的href并与window.location比较，一致则给该a赋予样式组cactive

参考：https://blog.csdn.net/u010027670/article/details/79698827
https://blog.csdn.net/yusirxiaer/article/details/62216550

注意：依托于jquery，需要提前引入jQ

**/
$(document).ready(function(){
  $(".nav a").each(function(){
	$this = $(this);
	if($this[0].href==String(window.location)){
	  $this.addClass("active");
	}
  });
});