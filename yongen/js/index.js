window.onload = window.onresize = function(){
	var iH = document.documentElement.clientHeight||document.body.clientHeight;
	var iW = document.documentElement.clientWidth||document.body.clientWidth;
	var num = 0;
	var onOff = true;
	var wrap = document.getElementById('wrap');
	var divs = wrap.children;
	var hlist = $('#home');
	var lista = $('.hlist').find('a');
	
	var fu = $('#home').find('span')[2];
	 
	for(var i=0;i<divs.length;i++){
		divs[i].style.height = iH + 'px';
		divs[i].style.width = iW + 'px';
	};
	
	for(var i =0;i<lista.length;i++){	
		lista[i].index = i;	
		lista.hover(function(){
			fu.style.left=425+80*(this.index)+'px';
		},function(){
			fu.style.left=425+'px';
		});		
		lista[i].onclick=function(){
			for(var i =0;i<lista.length;i++){
				lista[i].className='';
			};
			this.className='cur';
			this.onmouseout=function(){
				fu.style.left=425+80*(this.index)+'px';
			};
			num =this.index;
			wrap.style.top = -num * iH + 'px';
			drag();	
			gun2();
			gun3();	
			gun4();
			gun5();
			gun6();
			gund7();
			gun8();
		};		
	};
	
	addWhell(document,function(down){
		// console.log(down);
		if(onOff){
			onOff = false;
			if(down){
				num --;
				if(num <= 0){
					num = 0;
				};		
			}else{
				num++;
				if(num == divs.length){
					num = divs.length - 1;
				};
			};
			
			wrap.style.top = -num * iH + 'px';
			setTimeout(function(){
				onOff = true;
			},300);	
			for(var i =0;i<lista.length;i++){
				lista[i].className='';
			}
			lista[num].className = 'cur';
			fu.style.left=425+80*(num)+'px';
		};
		// num = this.index;
		drag();
		gun2();
		gun3();
		gun4();
		gun5();
		gun6();
		gund7();
		gun8();
	});	
		function drag(){
			var home = document.getElementById('home');
			var mask = document.getElementById('mask');
			var flist = home.getElementsByTagName('ul')[0];
			var fli = flist.getElementsByTagName('li');
			var spans = home.getElementsByTagName('span');
			if (num >0) {
				mask.style.background = '#000';
				mask.style.opacity = 0.5;
				home.style.height = '70px';
				flist.style.paddingTop = '18px';
				spans[0].style.paddingTop='10px';
				spans[1].style.paddingTop='20px';	
			}else{
				mask.style.background = '';
				mask.style.opacity = '';
				home.style.height = '74px';
				flist.style.paddingTop = '36px';
				spans[0].style.paddingTop='24px';
				spans[1].style.paddingTop='36px';	
			};
		};
		// 滚屏二
		function gun2(){
			var low2min = document.getElementById('low2min');
			if(num==1){
				startMove(low2min, 'top', 2500, 130, 'elasticOut');
			}else{
				startMove(low2min, 'top', 2500, -300, 'elasticOut');
			}
		}
		// 滚屏三
		function gun3(){
			var low3min = document.getElementById('low3min');
			if(num==2){
				startMove(low3min, 'top', 2500, 100, 'elasticOut');
			}else{
				startMove(low3min, 'top', 2500, 700, 'elasticOut');
			}
		}
		// 滚屏四
		function gun4(){
			var low4min = document.getElementById('low4min');
			var low4minul = low4min.getElementsByTagName('ul')[0];
			if (num==3){
				startMove(low4minul, 'top', 2500, 142, 'elasticOut');
			}else{
				startMove(low4minul, 'top', 2500, 500, 'elasticOut');
			}
		}
		// 滚屏五
		function gun5(){
			var low5pc = document.getElementById('low5pc');
			var slide = low5pc.getElementsByTagName('div');
			if(num==4){	
				startMove(slide[0], 'left', 2500, 0, 'elasticOut');
				startMove(slide[1], 'top', 3000, 0, 'elasticOut');
				startMove(slide[2], 'right', 2500, 0, 'elasticOut');
			}else{
				startMove(slide[0], 'left', 2500, -480, 'elasticOut');
				startMove(slide[1], 'top', 3000, -400, 'elasticOut');
				startMove(slide[2], 'right', 2500, -480, 'elasticOut');		
			}
		}
		function gun6(){
			var matic=document.getElementById('automatic');
		    var low6sp=document.getElementById('low6sp');
			if (num==5){
				startMove(matic, 'top', 3000, 200, 'elasticOut');
				startMove(low6sp, 'opacity', 3000, 100, 'linear');
			}else{
				startMove(matic, 'top', 3000, 700, 'elasticOut');
				startMove(low6sp, 'opacity', 3000, 0, 'linear');
			}
		}
		function gund7(){
			var low7min=document.getElementById('low7min');
			var low7list=low7min.getElementsByTagName('ul')[0];
			if (num==6){
				startMove(low7list, 'top', 3000, 0, 'elasticOut');
			}else{
				startMove(low7list, 'top', 3000, -300, 'elasticOut');
			}
		}
		function gun8(){
			var about = document.getElementById('about');
			if (num==7) {
				startMove(about, 'top', 2500, 150, 'elasticOut');
			}else{
				startMove(about, 'top', 2500, -150, 'elasticOut');
			}	
		}
	function addWhell(obj,fn){
		if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
			addEvent(obj,'DOMMouseScroll',fnEvent);
		}else{
			addEvent(obj,'mousewheel',fnEvent);
		};
		function addEvent(obj,event,fn){
			if(obj.addEventListener){
				obj.addEventListener(event,fn);
			}else{
				obj.attachEvent('on'+event,fn);
			};
		};
		function fnEvent(ev){
			var down = true;
			if(ev.wheelDelta){
				down = ev.wheelDelta > 0 ? true : false;
			}else{
				down = ev.detail < 0 ? true : false;
			};
			
			typeof fn === 'function' && fn(down);
			//alert(down)
			return false;
		};
	};

	// 滚屏六
	var list = document.getElementById("list");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var li = list.getElementsByTagName("li");
	var arr = [];
	for(var i = 0; i < li.length; i++) {
		var img = li[i].getElementsByTagName("img")[0];
		arr[i] = {};
		li[i].style.left = li[i].offsetLeft + "px";
		arr[i]["left"] = li[i].offsetLeft;
		arr[i]["top"] = css(li[i],"top");
		arr[i]["zIndex"] = css(li[i],"zIndex");
		arr[i]["opacity"] = css(li[i],"opacity");
		arr[i]["width"] = css(img,"width");
	}
	//console.log(arr);
	prev.onclick = function() {
		arr.unshift(arr.pop());
		setStyle();
	};
	next.onclick = function() {
		arr.push(arr.shift());
		setStyle();
	};
	function setStyle(){
		for(var i = 0; i < li.length; i++) {
			var img = li[i].getElementsByTagName("img")[0];
			/*li[i].style.left = arr[i].left + "px";
			li[i].style.top = arr[i].top + "px";
			li[i].style.zIndex = arr[i].zIndex;
			li[i].style.opacity = arr[i].opacity/100;
			li[i].style.filter = "alpha(opacity = "+arr[i].opacity+")";
			img.style.width = arr[i].width + "px";*/
			li[i].style.zIndex = arr[i].zIndex;
			mTween(
				{
					"element": img,
					"time": 600,
					"target": {"width": arr[i].width},
					"type": "easeOut"
				}
			);
			mTween(
				{
					"element": li[i],
					"time": 600,
					"target": {
						"left": arr[i].left,
						"top": arr[i].top,
						"opacity": arr[i].opacity
					},
					"type": "easeOut"
				}
			);
		}
	}
// };
// $(document).ready(function(){
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
	},2000);
	$('#low1box').hover(function(){
		clearInterval(Timer);
	},function(){
		Timer = setInterval(function(){
			num1++;
			fn();
			tab();
		},2000);
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
	// 轮播图1图
		
			$('.cobox .co1').stop().animate({left:0,opacity:1});
			$('.cobox .co2').stop().animate({left:120,opacity:1});
		
		function fn(){
			if (num1==0) {
				$('.cobox .co1').stop().animate({left:0,opacity:1},1000);
				$('.cobox .co2').stop().animate({left:120,opacity:1},1000);
			}else if(num1==1) {
				$('.co3').stop().animate({left:0,opacity:0.75},800);
				$('.co4').stop().animate({left:'50%',opacity:1},1000);
			}else if(num1==2) {
				$('.co5 h3').stop().animate({left:0,opacity:1},1000);
				$('.li3 span').stop().animate({top:50,opacity:1},1000);
			}else if (num1==3) {
				$('.co6 strong').stop().animate({top:0,opacity:1},1000)
				$('.co6 p').stop().animate({top:116,opacity:1},1000)
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
// });
};