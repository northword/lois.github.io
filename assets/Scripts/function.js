// JavaScript Document

/************************************************
*
*Copyright
*
*************************************************/
 console.log('李清照网，lqz.northword.cn \n网站托管于 Github Pages \n本站仅作为《网站设计原理》期末考察作业 \nShanXi University , YuwenHua.')

/************************************************
*
*导航栏激活变色
*
*控制nav的active类
*当页面加载完成时获取.nav a的href并与window.location比较，一致则给该a赋予样式组cactive
*
*参考：https://blog.csdn.net/u010027670/article/details/79698827
*https://blog.csdn.net/yusirxiaer/article/details/62216550
*
*注意：依托于jquery，需要提前引入jQ
*
*************************************************/
$(document).ready(function(){
  $(".nav a").each(function(){
	$this = $(this);
	if($this[0].href==String(window.location)){
	  $this.addClass("active");
	}
  });
});

/************************************************
*
*返回首页botton出现时间控制
*
*注意：依托于jquery，需要提前引入jQ
*
*************************************************/

$(document).ready(function(){
        $("#topArrow").hide()//隐藏go to top按钮
        $(function(){
            $(window).scroll(function(){
                if($(this).scrollTop()>1){//当window的scrolltop距离大于1时，go to top按钮淡出，反之淡入
                    $("#topArrow").fadeIn();
                } else {
                    $("#topArrow").fadeOut();
                }
            });
        });
    
// 给go to top按钮一个点击事件
        $("#topArrow").click(function(){
            $("html,body").animate({scrollTop:0},800);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
            return false;
        });
    });

