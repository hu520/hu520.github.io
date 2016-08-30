$(document).ready(function(){
	$('#list-box').hover(function(){
		$('.btn').css({opacity:1});
		$('#navs').css({opacity:1});
	},function(){
		$('.btn').css({opacity:0});
		$('#navs').css({opacity:0});
	});


	var index=$('#list li').index();
	var timer = 0;

	drag();
	// timer = setInterval(function(){
	// 	index++;
	// 	if(index==$('#list li').size()){
	// 		index=0;
	// 	};
	// 	drag();
	// 	$('#navs').find('a').eq(index).addClass('active').siblings('a').removeClass('active');
	// },3000);

	$('#next').click(function tab(){
		index++;
		if(index==$('#list li').size()){
			index=0;
		};

		drag();
		$('#navs').find('a').eq(index).addClass('active').siblings('a').removeClass('active');
		// $('#list li').eq(index).fadeIn(600).show().siblings('li').hide();
	});
	$('#prev').click(function(){
		index--;
		if(index==-1){
			index=$('#list li').size()-1;
		};
		drag();
		$('#navs').find('a').eq(index).addClass('active').siblings('a').removeClass('active');
		// $('#list li').eq(index).fadeIn(600).show().siblings('li').hide();
	});

	$('#navs').find('a').click(function(){
		drag();
		$(this).addClass('active').siblings('a').removeClass('active');
		$('#list li').eq($(this).index()).fadeIn(600).show().siblings('li').hide();
	});
	function drag(){
		if(index==0){
			$('.licotwo').stop().animate({
				right:100
			},800,function(){
				$('.licoone h3').stop().animate({
					left:40,
					opacity:1
				},200,function(){
					$('.p1').stop().animate({
						left:40,
						opacity:1	
					},200,function(){
						$('.p2').stop().animate({
							left:40,
							opacity:1
						},200,function(){
							$('.licoone a').stop().animate({
								top:130,
								opacity:1
							})
						})
					})
				})
			})
		}else{
			$('.licotwo').stop().animate({
				right:0
			});
			$('.licoone h3').stop().animate({
				left:0,
				opacity:0
			});
			$('.p1').stop().animate({
				left:0,
				opacity:0	
			});
			$('.p2').stop().animate({
				left:0,
				opacity:0
			});
			$('.licoone a').stop().animate({
				top:250,
				opacity:0
			});				
		}
		$('#list li').eq(index).fadeIn(600).show().siblings('li').hide();


	}
	
		$('.low2 li').hover(function(){
			$(this).find('.limg').css({height:175});
			$(this).find('span').css({top:65,color:'#fff'});
		},function(){
			$(this).find('.limg').css({height:0});
			$(this).find('span').css({top:170,color:'#000'});
		});
		var iw = 296*4;
	
		var num = 0;
		$('.main-box').hover(function(){
			$('.l').css({left:10})
			$('.r').css({right:24})
		},function(){
			$('.l').css({left:-40})
			$('.r').css({right:-26})
		})
		$('.r').click(function(){
			num++;
			if(num == 3){
				num = 0
			}
			$('.main-min').stop().animate({
				left:-iw*num
			},2500);
		})
		$('.l').click(function(){
			num--;
			if(num < 0){
				num = 2
			}
			$('.main-min').stop().animate({
				left:-iw*num
			},2500);
		})

		// 点击搜索栏
		$('.sou').click(function(){
			$(this).css({background:'#06c'})
			
			$('.inputText').stop().animate({
				width:170
			},500);
			$('.inputText').show();
		});
		$('.inputText').focus(function(){
			$('.xianshi').slideDown();
		})
		$('.inputText').blur(function(){
			$('.inputText').fadeOut();
			$('.xianshi').slideUp();
			$('.sou').css({background:'#08c'})
		})
		
		// 导航二级栏目
		$('.nav ul li').hover(function(){
			$(this).addClass('cura').siblings('li').removeClass('cura');
			// $('.nav ul li').eq(0).addClass('cura');
			$('dl',this).show();
		},function(){
			$('dl',this).hide();
		});

});