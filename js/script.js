$(function() {
	if($.browser.msie && $.browser.version <= 8) {
		alert("您使用的IE浏览器版本过低，可能造成体验不佳，建议您更新至最新的浏览器版本或使用谷歌、火狐等现代浏览器！");
	}
	//禁止右键代码，单机鼠标右键时禁止它的默认事件
	/*var body = document.getElementsByTagName('body')[0];
	body.oncontextmenu = function() {
		return false;
	}*/

	//banner
	var bannerSlider = new Slider($('#banner_tabs'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'active'
	});
	$('#banner_tabs .flex-prev').click(function() {
		bannerSlider.prev()
	});
	$('#banner_tabs .flex-next').click(function() {
		bannerSlider.next()
	});

	//左右滚动

	var index = 0,
		Swidth = $(".gd_main_div").width(),
		timer = null,
		len = $(".gd_main_div").length;

	function NextPage() {
		if(index > len - 1) {
			index = 0;
		}
		$(".gd_main").stop(true, false).animate({
			left: -index * Swidth + "px"
		}, 600)
	}

	function PrevPage() {
		if(index < 0) {
			index = len - 1;
		}
		$(".gd_main").stop(true, false).animate({
			left: -index * Swidth + "px"
		}, 600)
	}
	//下一页
	$(".gd_next").click(function() {
		index++;
		NextPage();
	});
	//上一页
	$(".gd_prev").click(function() {
		index--;
		PrevPage();
	});
	//自动滚动
	var timer = setInterval(function() {
		index++;
		NextPage();
	}, 4000);

	$(".gd_next, #gd_main , .gd_prev").mouseover(function() {
		clearInterval(timer);
	});
	$(".gd_next, #gd_main , .gd_prev").mouseleave(function() {
		timer = setInterval(function() {
			index++;
			NextPage();
		}, 4000);
	});
	
	//tab选项卡
	$('.tabnav ul li').hover(function() {
		$(this).addClass('this').siblings().removeClass('this');
		var index = $('.tabnav ul li').index(this);
		$('.tabcon').find('.tab-con').eq(index).show().siblings().hide();
	})
	$('.tabnav ul li').click(function() {
		$(this).addClass('this').siblings().removeClass('this');
		var index = $('.tabnav ul li').index(this);
		$('.tabcon').find('.tab-con').eq(index).show().siblings().hide();
	})
	$('.tabnav ul li').eq(0).click();
	//返回顶部
	$('#top').click(function() {
		$('body,html').animate({scrollTop: 0}, 300);
		return false;
	});
	//向左滚动效果
	if($('#demo').length > 0) {
		var speed = 50; //数字越大速度越慢
		var t = $('#demo')[0];
		var t1 = $('#demo1')[0];
		var t2 = $('#demo2')[0];
		t2.innerHTML = t1.innerHTML;

		function Marquee() {
			if(t2.offsetWidth - t.scrollLeft <= 0)
				t.scrollLeft -= t1.offsetWidth;
			else {
				t.scrollLeft++;
			}
		}
		var MyMar = setInterval(Marquee, speed);
		t.onmouseover = function() {
			clearInterval(MyMar)
		};
		t.onmouseout = function() {
			MyMar = setInterval(Marquee, speed)
		};
	}
})