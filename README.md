# 关于 李清照网 lqz.northword.cn
期末作业的网站设计，此项目为pages库。
网站预览地址：[点此访问](http://lqz.northword.cn)

	YuWenHua，Exam Website Design
	Shanxi University 
	College of Economic and Management

# 页面框架
```
header                       //这一部分是header.js写入的
	banner
	nav
banner                       //这个是导航下面的图
content                      //这一部分都在class=content的div里
	content-title              //这个是内容部分的标题，就是你做的带一条线的图片
	content-text               //这个是内容部分的文字和图片，文字用P，图片img，不要加任何样式，CSS中定义了所有的样式。
footer                       //这一步部分是footer.js引入的
```

# 页面模板
```html
<html>
<head>
</head>

<body>
	<!--heaer开始-->
	<scriptsrc="../assets/public/header.js">

	<!--banner开始-->
	<divclass="banner">
		<imgsrc="../assets/image/人物简介banner.jpg">
	</div>

	<!--content开始-->
	<divclass="content">
		<divclass="content-title">
			<imgsrc="../assets/image/人物简介1.png">
		</div>
		<divclass="content-text">
			<p>Paragraph 1 Hua</p>
			<imgsrc="#">
		</div>
		<divclass="content-text">
			<p>Paragraph 2 Yu</p>
			<divclass="img-float-left">
				<imgsrc="#"width=""height="">
			</div>
			<p>Paragraph 3 Wen</p>
		</div>
	</div>

	<!--footer开始-->
	<scriptsrc="../assets/public/footer.js">
</body>
</html>
```

