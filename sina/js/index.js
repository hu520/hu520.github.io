window.onload = window.onscroll=function(){
	var boxs = document.getElementById('hui');
	var boxa = boxs.getElementsByTagName('a')[0];
	// var guang1 = $('.guang')[0];
	// var guang2 = $('.guang')[1];
	var timer = 0;
	var top = window.pageYOffset;

	if (top>=500&&top<700){
		boxs.style.display = 'block';
	};
	// if (top>=700&&top<750){		
	// 	guang1.style.display = 'block';
	// 	guang2.style.display ='block';
	// };

	boxa.onclick = function(){
		timer = setInterval(function(){
			top = top - 300;
			window.scrollTo(0,top);
			if(top<=500){
				window.scrollTo(0,0);
				clearInterval(timer);
				boxs.style.display = 'none';
			}
		},100)
	}	 
}
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
		},3000);
		$(box).hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
				num++;
				tab();
			},3000);
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

	$('.bi').click(function(){
		$('#hui').hide();
	});

	// $('.ban').click(function(){
	// 	$('.guang').hide();
	// });

	fn1();
	$(window).scroll(fn1);
	function fn1(){
		var scrollT = $(window).scrollTop();
		var iH = $(window).innerHeight();
		$('img').each(function(i,elem){
			if(scrollT+iH>$(elem).offset().top){
				$(elem).animate({opacity:1},600);
				$(elem).attr('src',$(elem).attr('_src'));
				
			};
		});
	}
});
