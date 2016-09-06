window.onload = function (){
	// 大图幻灯效果
	var wrap = document.getElementById("wrap");
	var prevBtn = document.getElementById("prev");
	var nextBtn = document.getElementById("next");
	var navs = document.getElementById("navs");
	var navsA = navs.getElementsByTagName("a");
	var list = document.getElementById("list");
	var li = list.getElementsByTagName("li");
	var str = '';
	var zIndex = 1;
	var now = 0;
	var timer = 0;
	for(var i = 0; i < li.length; i++){
		str += "<a href='javascript:;'></a>"
	}
	navs.innerHTML = str;
	navsA[0].className = "active";
	wrap.onmouseover = function() {	
		clearInterval(timer);
	};
	wrap.onmouseout = function() {
		
		timer = setInterval(next,2000);
	};
	for(var i = 0; i < navsA.length; i++){
		navsA[i].index = i;
		navsA[i].onmouseover = function (){
			var next =this.index;
			tab(next);
		};
	}
	prevBtn.onclick = function() {
		var next = now - 1;
		if(next < 0)
		{
			next = navsA.length - 1;
		}
		tab(next);
	};
	nextBtn.onclick = next; 
	timer = setInterval(next,2000);
	function next() {
		var next = now + 1;
		if(next > navsA.length - 1)
		{
			next = 0;
		}
		tab(next);
	}
	function tab(next) {
		zIndex++;
		navsA[now].className = "";
		startMove(li[now],"opacity",1000,0,"easeOut");
		now =  next;
		navsA[now].className = "active";
		startMove(li[now],"opacity",1000,100,"easeOut");
		li[now].style.zIndex = zIndex;
	}

	 // 收索栏效果
	 // var tx = $('input')[0];
	 $('.text').focus(function(){
	 	$(this).css({border:'1px solid #ff6700'});
	 	$('.deng').eq($(this).index()).show();
	 	$('.shouding').eq($(this).index()).hide();
	 	$('.btn').eq($(this).index()).css({border:'1px solid #ff6700'});
	 })
	 $('.text').blur(function(){
	 	$(this).css({border:'1px solid #e0e0e0'});
	 	$('.shouding').eq($(this).index()).show();
	 	$('.btn').eq($(this).index()).css({border:'1px solid #e0e0e0'});
	 	$('.deng').hide();
	 })
	 $('.deng').on('mouseover',function(){
	 	$('.deng').show();
	 })
	 
	// 列表移入切换效果
	$("#list1").find('li').mouseover(function(){
		$(this).find('li').show().siblings().hide();								
		$('#lista').find('.ulul').eq($(this).index()).show().siblings().hide();				
	});
	$(".low2").mouseout(function(){
		$('#lista').find('.ulul').hide();
	});
	$("#lista").find('.ulul').mouseover(function(){
		$('#lista').find('.ulul').eq($(this).index()).show();
	});
	// $("#list1").find('li').mouseover(function(){
	// 	$(this).find('li').show().siblings().hide();								
	// 	$('#lista').find('ul').eq($(this).index()).show().siblings().hide();				
	// });
	// $(".low2").mouseout(function(){
	// 	$('#lista').find('ul').hide();
	// });
	// $("#lista").find('ul').mouseover(function(){
	// 	$('#lista').find('ul').eq($(this).index()).show();
	// });

		// 导航竖直弹出效果

		$(".navs").find('a').mouseover(function(){
			$(this).find('a').show().siblings().hide();								
			$('#navlist').find('ul').eq($(this).index()).show().siblings().hide();
			 $('#navlist').css({height: 230,"border-top":"1px solid #e0e0e0"});			
		});
		
		$(".navs").find('a').eq(7).mouseover(function(){
			$('#navlist').css({height: 0});
		})
		$(".navs").find('a').eq(8).mouseover(function(){
			$('#navlist').css({height: 0});
		})

		$(".low1").mouseout(function(){
			$('#navlist').css({height: 0,"border-top":"0px solid #e0e0e0"})
			$('#navlist').find('ul').hide();
		});

		$("#navlist").find('ul').mouseover(function(){
			$('#navlist').find('ul').eq($(this).index()).show();
			$('#navlist').css({height: 230,"border-top":"1px solid #e0e0e0"});
		});
		
		// 移动整块轮播图片
	var iwa = $('.ula').eq(0).width();
    var num = 0;
	
	// timer=setInterval(function(){

	// },1000)
	$('#Right').click(function(){
		$(this).removeClass('Bactive').siblings('a').addClass('Bactive');
		$('#ul').stop().animate({
			left:-iwa+14
		},10);
	});

	$('#Left').click(function(){
		$(this).removeClass('Bactive').siblings('a').addClass('Bactive');	
		$('#ul').stop().animate({
			left:0
		},10);
	});
		
		var h2s = document.getElementsByTagName('h2');
		// var h2s = document.getElementsByClassName
		console.log(h2s)
		// 购物图片切换图效果
		$('.low4-top').find('a').mouseover(function(){
			$(this).find('a').show().siblings().hide();
			$('.low4list').find('.uls').eq($(this).index()).show().siblings().hide();
			// $('.low4list').find('.uls').css({margin-left:234})
			$('.main').show();
		})

		// 搭配购物图片弹出文字效果
		$('.uls').find('li').mouseover(function(){
			$(this).find('.skill').css({bottom:0})
		})
		$('.uls').find('li').mouseout(function(){
			$(this).find('.skill').css({bottom:-80})
		});
		// 热评产品切换效果
		var datas = data.lista;
		var plis = $('.plis')[0];
		// var html = '';
		for (var i= 0;i< datas.length; i++){
			plis.innerHTML += '<li><a href="#">'+
				'<img src="img/'+datas[i].im+'">'+
				'<strong>'+datas[i].st+'</strong></a>'+
				'<p>'+datas[i].tx+'</p>'+
				'<span>'+datas[i].sp+'</span></li>';
		}
		// plis.html(html);
		// $('.plis')[0].innerHTML = html;

		// 搭配图片小轮播
	var iw1 = $('#bookli1').eq(0).width();
	var num = 0;
	
	// $('.bookright').click(function(){
	// 	num++;
	// 	if(num == $('.bookli').size()){
	// 		num = 0;
	// 	}
	// 	$('.booknav').find('a').eq(num).addClass('booktive').siblings('a').removeClass('booktive');
	// 	$('.book').stop().animate({
	// 		left:-iw*num
	// 	});
	// 	console.log(iw)
	// });

	// $('.bookleft').click(function(){
	// 	num--;
	// 	if(num < 0){
	// 		num = $('.bookli').size()-1;
	// 	}
	// 	$('.booknav').find('a').eq(num).addClass('booktive').siblings('a').removeClass('booktive');
	// 	$('.book').stop().animate({
	// 		left:-iw*num
	// 	});
	// });
	
	// $('.booknav').find('a').click(function(){
	// 	$(this).addClass('booktive').siblings('a').removeClass('booktive');
	// 	num = $(this).index();
	// 	$('.book').stop().animate({
	// 		left:-iw*num
	// 	});
	// });
	
		// 1111111111111
	$('#right1').click(function(){
		num++;
		if(num ==4){
			num = 0;
		}
		$('#nav1').find('a').eq(num).addClass('booktive').siblings('a').removeClass('booktive');
		$('#book1').stop().animate({
			left:-iw1*num
		});
	});

	$('#left1').click(function(){
		num--;
		if(num < 0){
			num = 3;
		}
		$('#nav1').find('a').eq(num).addClass('booktive').siblings('a').removeClass('booktive');
		$('#book1').stop().animate({
			left:-iw1*num
		});
	});
	
	$('#nav1').find('a').click(function(){
		$(this).addClass('booktive').siblings('a').removeClass('booktive');
		num = $(this).index();
		$('#book1').stop().animate({
			left:-iw1*num
		});
	});
		// 2222222222222222222
		var iw2 = $('#bookli2').eq(0).width();
	var num2 = 0;
	$('#right2').click(function(){
		num2++;
		if(num2 ==4){
			num2 = 0;
		}
		$('#nav2').find('a').eq(num2).addClass('booktive').siblings('a').removeClass('booktive');
		$('#book2').stop().animate({
			left:-iw2*num2
		});
	});

	$('#left2').click(function(){
		num2--;
		if(num2 < 0){
			num2 = 3;
		}
		$('#nav2').find('a').eq(num2).addClass('booktive').siblings('a').removeClass('booktive');
		$('#book2').stop().animate({
			left:-iw2*num2
		});
	});
	
	$('#nav2').find('a').click(function(){
		$(this).addClass('booktive').siblings('a').removeClass('booktive');
		num2 = $(this).index();
		$('#book2').stop().animate({
			left:-iw2*num2
		});
	});
	// 33333333333333333333
	var iw3 = $('#bookli3').eq(0).width();
	var num3 = 0;
	$('#right3').click(function(){
		num3++;
		if(num3 ==4){
			num3 = 0;
		}
		$('#nav3').find('a').eq(num3).addClass('booktive').siblings('a').removeClass('booktive');
		$('#book3').stop().animate({
			left:-iw3*num3
		});
	});

	$('#left3').click(function(){
		num3--;
		if(num3< 0){
			num3 = 3;
		}
		$('#nav3').find('a').eq(num3).addClass('booktive').siblings('a').removeClass('booktive');
		$('#book3').stop().animate({
			left:-iw3*num3
		});
	});
	
	$('#nav3').find('a').click(function(){
		$(this).addClass('booktive').siblings('a').removeClass('booktive');
		num3 = $(this).index();
		$('#book3').stop().animate({
			left:-iw3*num3
		});
	});
	// 4444444444444444444444444444
	var iw4 = $('#bookli4').eq(0).width();
	var num4 = 0;
	$('#right4').click(function(){
		num4++;
		if(num4 ==4){
			num4 = 0;
		}
		$('#nav4').find('a').eq(num4).addClass('booktive').siblings('a').removeClass('booktive');
		$('#book4').stop().animate({
			left:-iw4*num4
		});
	});

	$('#left4').click(function(){
		num4--;
		if(num4 < 0){
			num4 = 3;
		}
		$('#nav4').find('a').eq(num4).addClass('booktive').siblings('a').removeClass('booktive');
		$('#book4').stop().animate({
			left:-iw4*num4
		});
	});
	
	$('#nav4').find('a').click(function(){
		$(this).addClass('booktive').siblings('a').removeClass('booktive');
		num4 = $(this).index();
		$('#book4').stop().animate({
			left:-iw4*num4
		});
	});
};