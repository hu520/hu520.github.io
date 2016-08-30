window.onload =  function(){
	var header = document.getElementById('header');
	header.style.height = window.innerHeight +'px';
	var weare = document.getElementById('weare');
	var totxt = weare.getElementsByClassName('to-txt')[0];

	var silde = document.getElementById('silde');
	var tosilde = silde.getElementsByClassName('to-silde');
	var toleft = document.getElementById('toleft');
	var toright = document.getElementById('toright');
	var tomiddle = document.getElementById('tomiddle');
	function loading(){
		var loading = $('#loading');
		var load = loading.find('.load');
		var lo = load.find('div')[0];
		var span = load.find('span')[0];
		var num = 0;
		var timer = null;
		var iW = load.width();
		clearInterval(timer);
		timer = setInterval(function (){
			num+=10;
			var scale = Math.ceil((num/iW).toFixed(2)*100);
			lo.style.width = num + 'px';
			span.innerHTML = scale + '%';
			if (num == iW){
				clearInterval(timer);
				loading.addClass('out')
			}
		},50)
	};
	loading();
	// 广告效果
	// var banner = byId("banner");
	// setTimeout(function(){
	// 	startMove(banner, "top", 800, 180, "backOut", function(){
	// 		setTimeout(function(){
	// 			startMove(banner, "opacity", 500, 0, "easeOut", function(){
	// 				banner.style.display = "none";
	// 			});
	// 		},1500);
	// 	});
	// },800);
	// console.log(silde)
	addWhell(window,function(down){
		// 头部效果
		if(down){ 
			startMove(header, "top", 1000, 0, "easeOut");
		}else{
			startMove(header, "top", 1000, -window.innerHeight, "backOut");
		}

		var scrollT = $(window).scrollTop();
		 console.log(scrollT);
		// 弹出效果
		if (scrollT>=500) {
			totxt.style.bottom = '200px';
			totxt.style.opacity = 1;
		}
		if (scrollT < 500) {
			totxt.style.bottom = '80px';
			totxt.style.opacity = 0;
		}

		var slide =  document.getElementsByClassName('slide')[0];
		var ul = slide.getElementsByTagName('ul')[0];
		if (scrollT>=2300) {
			ul.className = '';
		}
		if (scrollT < 2300) {
			ul.className = 'ul';
		}
		// 底部滚动效果

		if (scrollT>=2700){
			
			tomiddle.style.top = '0';
			tomiddle.style.transform = 'rotateZ(720deg)';
			silde.style.opacity = 1;
			toleft.style.left= '890px';
			toleft.style.top= '0';
			toleft.style.transform = 'rotateZ(720deg)';
			toright.style.right= '890px';
			toright.style.top= '0';
			toright.style.transform = 'rotateZ(720deg)';
		}
		if (scrollT < 2700){
			tomiddle.style.top = '-440px';
			tomiddle.style.transform = 'rotateZ(-720deg)';
			silde.style.opacity = 0;
			toleft.style.left= '80px';
			toleft.style.top= '440px';
			toleft.style.transform = 'rotateZ(-720deg)';
			toright.style.right= '80px';
			toright.style.top= '440px';
			toright.style.transform = 'rotateZ(-720deg)';
		}
	});
	// 头部点击事件
	var next = header.getElementsByTagName('span')[3];
	next.onclick = function(){
		startMove(header, "top", 1000, -window.innerHeight, "backOut");
	}

	// 图片同时移入遮罩效果
	$('.confoot-a').on('mouseover',function(){
		$('.conleft').find('.conleft-box').css({
			height:800,opacity:0.8});
		$('.conleft').find('.conle-a').css({
			opacity:1
		});

		$('.contop').find('.contop-box').css({
			height:496,opacity:0.8});
		$('.contop').find('.contop-b').css({
			opacity:1
		});

		$('.confoot').find('.confoot-box').css({
			height:304,opacity:0.8});
		$('.confoot').find('.contop-c').css({
			opacity:1
		});
	})

	// 图片同时移出遮罩效果
	$('.confoot-a').on('mouseout',function(){
		$('.conleft').find('.conleft-box').css({
			height:0,opacity:0});
		$('.conleft').find('.conle-a').css({
			opacity:0
		});

		$('.contop').find('.contop-box').css({
			height:0,opacity:0});
		$('.contop').find('.contop-b').css({
			opacity:0
		});

		$('.confoot').find('.confoot-box').css({
			height:0,opacity:0});
		$('.confoot').find('.contop-c').css({
			opacity:0
		});
	})


	// 图片鼠标移入移出效果
	$('.conleft').on('mouseover',function(){

		$(this).find('.conleft-box').css({
			height:800,opacity:0.8});
		$(this).find('.conle-a').css({
			opacity:1
		});
	})
	$('.conleft').on('mouseout',function(){
		$(this).find('.conleft-box').css({
			height:0,opacity:0});
		$(this).find('.conle-a').css({
			opacity:0
		});
	})
	
	$('.contop').on('mouseover',function(){
		$(this).find('.contop-box').css({
			height:496,opacity:0.8});
		$(this).find('.contop-b').css({
			opacity:1
		});
	})
	$('.contop').on('mouseout',function(){
		$(this).find('.contop-box').css({
			height:0,opacity:0});
		$(this).find('.contop-b').css({
			opacity:0
		});
	})

	$('.confoot').on('mouseover',function(){
		$(this).find('.confoot-box').css({
			height:304,opacity:0.8});
		$(this).find('.contop-c').css({
			opacity:1
		});
	})
	$('.confoot').on('mouseout',function(){
		$(this).find('.confoot-box').css({
			height:0,opacity:0});
		$(this).find('.contop-c').css({
			opacity:0
		});
	})

	// 弹上弹下事件效果
	var sun = $('#contentone').find('.service').find('.txt');

	sun.on('mouseover',function (){
		
		$(this).find('.sub').css({
			opacity:1
		});
				
		$(this).find('.btn').css({
			top:250
		});
		$(this).find('.top').css({
			top:0
		});
	})
	sun.on('mouseout',function (){		
		$(this).find('.sub').css({
			opacity:0
		});
				
		$(this).find('.btn').css({
			top:150
		});

		$(this).find('.top').css({
			top:90
		});
	})

	// 文字块切换效果
	var awardsLeft = document.getElementById("awardsLeft");
	var hihe = document.getElementById("hihe");
	var spans = hihe.getElementsByTagName("span");
	var list = awardsLeft.getElementsByTagName("ul")[0];
	var lis = list.getElementsByTagName("li");
	var liW = css(lis[0], "width");
	var now = 0;
	var timer = 0;

	for(var i = 0; i < spans.length; i++){
		spans[i].index = i;	
		spans[i].onmouseover = function (){
			clearInterval(timer);
			now = this.index;
			for(var i = 0; i < spans.length; i++) {
				spans[i].className = "";
				
			};

			spans[this.index].className = "active";			
			startMove(list,"left",400,-this.index*liW,"easeOut");
			
			this.onmouseout = function (){
				timer = setInterval(function(){
					huauto();
				},1500)
			}
			
		};

		clearInterval(timer);
		timer = setInterval(function(){
			huauto();
		},1500);

		function huauto(){
			
			if(now>=spans.length){
				now =0;
				list.style.left = 0;
			}
				now++;
			for(var i = 0; i < spans.length; i++) {
				spans[i].className = "";
			}
			spans[now%spans.length].className = "active";
			startMove(list,"left",400,-(now)*liW,"easeOut");
		}
	}

	// 滚动事件二移入
	var  tosilde = silde.getElementsByClassName('to-silde');

	$(tosilde).on('mouseover',function(){
		$(this).addClass('tive')
	});
	$(tosilde).on('mouseout',function(){
		$(tosilde).removeClass('tive')
	})

	// 布局转换效果

	var data = aData.arr;
	//  var hu = Math.round(Math.random(data)*20)
	// console.log(hu);
	var lists = $('#list');
	var html = '';
	for(var i=0; i<data.length;i++){
		html +='<li><a href="">'+
		'<img src="'+data[i].img+'">'+
		'<span class="overlay">'+'</span></a></li>'; 
	};
	lists.html(html);

	var btn1 = document.getElementById('left');
	btn1.onclick = function(){
		var ul = document.getElementById('list');
		var lis = ul.children;
		var aPos = [];
		var btn2 = document.getElementById('right');

		for(var i=0;i<lis.length;i++){
			aPos[i] = {
				top:lis[i].offsetTop,
				left:lis[i].offsetLeft,
				width:lis[i].offsetWidth,
				height:lis[i].offsetHeight
			}
		}
		
		for(var i=0;i<lis.length;i++){
			lis[i].style.left = aPos[0].left + 'px';
			lis[i].style.top = aPos[0].top + 'px';
			lis[i].style.position = 'absolute';
			lis[i].style.margin = 0;
			aPos[i].opacity = 1;
		}
		
		open();
		var num = lis.length-1;
		function open(){
			var timer = null;
			timer = setInterval(function(){
				move(lis[num],aPos[num],500,'easeOut');

				num--;
				if(num == -1){
					clearInterval(timer);
					num = 0;
				}			
			},200);
		}	

		btn2.onclick = function(){			
			var timer = null;
			timer = setInterval(function(){		
				(function(index){
					move(lis[num],{
						left:aPos[2].left,
						top:aPos[2].top - 300,
						width:0,
						height:0,
						opacity:0
					},500,'easeOut',function(){					
						if(index == lis.length-1){
							open();
						}
					});
				})(num);
				num++;
				if(num == lis.length){
					clearInterval(timer);
				}				
			},100);
		}
	}

	// 底部滚动效果
	$('#ph').css({
		height:$(window).height()
	})
	var n1 = 0;

	$(window).on('scroll',function(ev){
		var footer = $('#footer')[0].offsetTop;
		//getBoundingClientRect().top  4198
		// console.info(footer)
		var iH = $(window).height() + $(window).scrollTop();
		if(iH >= footer){

			$('#ph').css({
				display:'block'
			})
			$('#footer').css({
				position:'fixed',
				top:0,
				zIndex:0
			});
		}

		// document.title = ($('#insta')[0].offsetTop+$('#insta').height() > iH)
		if($('#insta')[0].offsetTop+$('#insta').height() > iH){
			$('#ph').css({
				display:'none'
			})
			$('#footer').css({
				position:'static'
			});
		}
	})
	// 返回顶部
	var box = document.getElementById('hui');
	var timer = 0;
	box.onclick = function(){
		var top = window.pageYOffset;
		timer = setInterval(function(){
			top = top - 100;
			window.scrollTo(0,top);
			if(top<=0){
				window,scrollTo(0,0)
				clearInterval(timer);
			}
		},100)
	}	 
}

