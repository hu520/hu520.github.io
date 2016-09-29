
$(document).ready(function(){
	var IH = $('.newul li').eq(0).height();
 	var nub = 0;
	var timer = 1;
	timer = setInterval(function(){
		if (nub >= $('.newul li').size()-1) {
			nub =0;
			$('.newul ul').css({top:0});
		};
		nub++;
		$('.newul ul').stop().animate({
			top:-nub*IH
		});
	},3000);

	// 滚屏一下的轮播图
	var iw = $('.list li').eq(0).width();
	var navs = $('.nav').find('a');
	var num1 = 0;
	var Timer = 0;

	$('.right').click(function(){
		num1++;
		fn();
		tab();				
	});
	Timer = setInterval(function(){
		num1++;
		fn();
		tab();
	},3000);
	$('#low1box').hover(function(){
		clearInterval(Timer);
	},function(){
		Timer = setInterval(function(){
			num1++;
			fn();
			tab();
		},3000);
	});
	$('.left').click(function(){
		num1--;
		tab();
	});
	navs.mouseover(function(){
		num1 = $(this).index();
		tab();
		fn();
	});

	function tab(){
		if (num1 == $('.list li').last()) {
			$('.list li').last().css({position:'static'})
		};
		if (num1 == 0) {
			$('.list li').eq(0).css({position:'static'})
		};
		if (num1 == $('.list li').size()) {
			$('.list li').eq(0).css({
				position:'relative',
				left:iw*$('.list li').size()
			});
		};
		if (num1 > $('.list li').size()) {
			$('.list li').eq(0).css({position:'static'});
			$('.list').css({left:0});
			num1 =1;
		};
		if (num1 == -1) {
			$('.list li').last().css({
				position:'relative',
				left:-iw*$('.list li').size()
			});
		};
		if (num1 < -1) {
			$('.list li').last().css({position:'static'});
			$('.list').css({left:-iw*($('.list li').size()-1)});
			num1 = $('.list li').size()-2;
		};
		navs.eq(num1%navs.length).addClass('active').siblings('a').removeClass('active');
		$('.list').stop().animate({
			left:-iw*num1
		},500)
	};
	
	fn();
	function fn(){
		if (num1==0||num1==4) {
			$('.cobox .co1').stop().animate({left:0,opacity:1},1000);
			$('.cobox .co2').stop().animate({left:120,opacity:1},1000);
		}else{
			$('.cobox .co1').stop().animate({left:-150,opacity:0},1000);
			$('.cobox .co2').stop().animate({left:270,opacity:0},1000);
		}; 
		if(num1==1||num1==5) {
			$('.co3').stop().animate({left:0,opacity:0.75},800);
			$('.co4').stop().animate({left:'50%',opacity:1},1000);
		}else{
			$('.co3').stop().animate({left:'50%',opacity:0},800);
			$('.co4').stop().animate({left:0,opacity:0},1000);
		};
		if(num1==2) {
			$('.co5 h3').stop().animate({left:0,opacity:1},1000);
			$('.li3 span').stop().animate({top:50,opacity:1},1000);
		}else{
			$('.co5 h3').stop().animate({left:-200,opacity:0},1000);
			$('.li3 span').stop().animate({top:250,opacity:0},1000);
		};
		if (num1==3) {
			$('.co6 strong').stop().animate({top:0,opacity:1},1000);
			$('.co6 p').stop().animate({top:116,opacity:1},1000);
		}else{
			$('.co6 strong').stop().animate({top:-150,opacity:0},1000);
			$('.co6 p').stop().animate({top:226,opacity:0},1000);
		};
    };
	// 固定定位弹入弹出
	
	$('.shan').hover(function(){
		$(this).css({transform:'rotate(45deg)'});
		$('#fixed').css({right:-50});
	},function(){
		$(this).css({transform:'rotate(0deg)'});
		$('#fixed').css({right:0})
	});
	var fixed = $('#fixed').find('ul')[0];
	var fixed1 = $('#fixed').find('ul')[1];

	$(fixed).find('li a').eq(1).hover(function(){	
		$(fixed1).find('li').eq(0).show();

	},function(){
		$(fixed1).find('li').eq(0).hide();
	});

	$(fixed).find('li a').eq(2).hover(function(){	
		$(fixed1).find('li').eq(1).show();
	},function(){
		$(fixed1).find('li').eq(1).hide();
	});

	$(fixed).find('li a').eq(3).hover(function(){	
		$(fixed1).find('li').eq(2).show();
	},function(){
		$(fixed1).find('li').eq(2).hide();
	});
	$(fixed).find('li a').hover(function(){
		$(fixed1).stop().animate({
			right:0
		});
	},function(){
		$(fixed1).stop().animate({
			right:-200
		})
	})
	// 滚屏二
	var low2li = $('#low2min ul').find('li');
	low2li.hover(function(){
		$(this).find('p').stop().animate({
			top:0
		},500);	
	},function(){
		$(this).find('p').stop().animate({
			top:300
		},200);
	});

	// $(low2li).hover(function(){
	// 	$(this).find('.u1').stop().animate({
	// 		'clip': 'rect(156px)'		
	// 	});
	// 	$(this).find('.u2').stop().animate({
	// 		'clip': 'rect(0px)'
	// 	});
	// });
	// 滚屏三
	var low3li = $('#low3min ul').find('li');
	low3li.hover(function(){
		$(this).find('.low3top').stop().animate({
			top:0
		},300);
		$(this).find('.low3bt').stop().animate({
			top:200
		},200);		
	},function(){
		$(this).find('.low3top').stop().animate({
			top:-200
		},300);
		$(this).find('.low3bt').stop().animate({
			top:300
		},200);
	});
	// 滚屏四
	var low4li = $('#low4min ul').find('li');
	
	low4li.hover(function(){
		$(this).stop().animate({
			'backgroundPosition-x':'-230+$(this.index())px',
			'backgroundPosition-y':'-150px'		
		})
	},function(){
		$(this).stop().animate({
			
			'backgroundPosition-x':'-230+$(this.index())px',
			'backgroundPosition-y':'0px'		
		})
	})
	// 滚屏七
	var iw7 = $('.low7li').eq(0).width();
	var num7 = 0;
	var alla = $('#nav7').find('a');
	var timer7 = 0;
	$('#nav7').find('a').mouseover(function(){
		clearInterval(timer7);
		num7 = $(this).index();
		gun7();
	});
	timer7 = setInterval(function(){
		num7++;
		gun7();
	},4000);
	function gun7(){
		if(num7 == $('.low7li').size()-1){
			$('.low7li').last().css({position:'static'})
		};
		if(num7 == 0){
			$('.low7li').eq(0).css({position:'static'})
		};

		if(num7 == $('.low7li').size()){
			$('.low7li').eq(0).css({
				position:'relative',
				left:iw7*$('.low7li').size()
			});
		};
		if(num7 > $('.low7li').size()){
			$('.low7li').eq(0).css({
				position:'static'
			});
			$('.low7list').css({left:0});
			num7 = 1;
		};

		if(num7 == -1){
			$('.low7li').last().css({
				position:'relative',
				left:-iw7*$('.low7li').size()
			});
		};
		if(num7 < -1){
			$('.low7li').last().css({
				position:'static'
			});
			$('.low7list').css({left:-iw7*($('.low7li').size()-1)});
			num7 = $('.low7li').size()-2;
		};
		alla.eq(num7%alla.length).addClass('navactive').siblings('a').removeClass('navactive');
		$('.low7list').stop().animate({
			left:-iw7*num7
		},{
			easing:'linear',
			duration:400
		});
	};
});
