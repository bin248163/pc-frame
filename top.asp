<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<title>网站首页</title>
		<meta name="keywords" content="关键词英文逗号分隔" />
		<meta name="description" content="描述" />		
		<link href="images/favicon.ico" type="image/x-icon" rel="shortcut icon" />
		<link href="css/style.css" rel="stylesheet" />
		<script>
			/*
			 * pc 跳转到 phone
			 */
			try {
				var urlhash = window.location.hash;
				if(!urlhash.match("fromapp")) {
					if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
						window.location.href = "/m";
					}
				}
			} catch(err) {}
		</script>
	</head>

	<body>
		<div class="header">
			<div class="logo">
				<a href="index.asp"><img src="images/logo.jpg" alt="logo" /></a>
			</div>
			<div class="logo-r"></div>
			<div class="tel"></div>
		</div>
		<div class="w-nav">
			<div class="nav" id="nav">
				<ul>
					<li>
						<a href="index.asp" class="this">首页</a>
					</li>
					<li>
						<a href="index.asp">公司简介</a>
						<ul>
							<li>
								<a href="">123</a>
							</li>
							<li>
								<a href="">456</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>