$(document).ready(function(){
	function wrap(box){
		var iw = $(box).find('li').eq(0).width();
		var lis = $(box).find('li');
		var num = 0;
		var timer = 0;
		var alla = $(box).find('.nav a');
		$(box).find('.right').click(function(){
			num ++;
			tab();
		});
		timer = setInterval(function(){
			num++;
			tab();
		},3500);
		$(box).hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
				num++;
				tab();
			},3500);
		});
		$(box).find('.left').click(function(){
			num --;
			tab();
		});
		$(box).find('.nav a').mouseover(function(){
			num =$(this).index();
			tab();
		})
		function tab(){
			if(num == $(lis).size()-1){
				$(lis).last().css({position:'static'});
			};
			if(num == 0){
				$(lis).eq(0).css({position:'static'});
			};
			if(num == $(lis).size()){
				$(lis).eq(0).css({
					position:'relative',
					left:iw*$(lis).size()
				});
			};
			if(num > $(lis).size()){
				$(lis).eq(0).css({position:'static'});
				$(box).find('ul').css({left:0});
				num = 1;
			};
			if(num == -1){
				$(lis).last().css({
					position:'relative',
					left:-iw*$(lis).size()
				});
			};
			if(num < -1){
				$(lis).last().css({position:'static'});
				$(box).find('ul').css({left:-iw*($(lis).size()-1)});
				num = $(lis).size()-2;
			};
			alla.eq(num%alla.length).addClass('active').siblings('a').removeClass('active');
			$(box).find('ul').stop().animate({
				left:-iw*num
			},{
				easing:'linear',
				duration:400
			});
		};
	};

	wrap('.img-box');
	wrap('.img4');
	var curaFoot = $('.threeFoot ul').find('li');
	$(curaFoot).mouseover(function(){
		$(this).addClass('cura').siblings('li').removeClass('cura');
		$('.footimg').find('a').eq($(this).index()).show().siblings('a').hide();
	});
	$('.footimgb').find('a').mouseover(function(){
		$(this).addClass('huan').siblings('a').removeClass('huan');
		$('.footimga').find('a').eq($(this).index()).show().siblings('a').hide();
	});

	var lastFoot = $('.lastFoot ul').find('li');
	$(lastFoot).mouseover(function(){
		$(this).addClass('cura').siblings('li').removeClass('cura');
		$('.lastFoot .lastimg').find('a').eq($(this).index()).show().siblings('a').hide();
	});

	$('.button').hover(function(){
		$('.enter').fadeIn(100);
	},function(){
		$('.enter').fadeOut(500);
	});

	$('.cuo').click(function(){
		$('.enter').hide();
	});
});