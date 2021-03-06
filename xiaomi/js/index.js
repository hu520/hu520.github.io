$(function (){
	var str = '';
	for (var i = 0;i<8;i++) {
		str += '<div class="move'+(i+1)+'"></div>'
	}
	$('#loader').find('.animate').html(str);
	var divs = $('#loader').find('.animate').find('div');	
	console.log($('#loader').find('.animate').find('div').length);
	
	$("#slider").chopSlider({
        /* slide element */
        slide : ".slide",
        /* controlers */
        nextTrigger : "a#slide-next",
        prevTrigger : "a#slide-prev",
        hideTriggers : true,
        sliderPagination : ".slider-pagination",
        /* captions */
        useCaptions : true,
        everyCaptionIn : ".sl-descr",
        showCaptionIn : ".caption",
        captionTransform : "scale(0) translate(-600px,0px) rotate(45deg)",
        /* autoplay */
        autoplay : true,
        autoplayDelay : 5000,
        /* for Browsers that support 3D transforms */
        t3D : csTransitions['3DFlips']['random'], /* all will be picked up randomly */
        t2D : [ csTransitions['multi']['random'], csTransitions['vertical']['random'] ],
        noCSS3 : csTransitions['noCSS3']['random'],
        mobile : csTransitions['mobile']['random'],
        onStart: function(){},
        onEnd: function(){}
    })
})
window.onload = function (){
	$('#box').css({transform: 'translate3d(0,0,0)'});
		$('#loader').css({opacity: 0});
		setTimeout(function(){
			$('#loader').css({display:'none'});
			$('#loader').find('.animate').html('');
		},2000)
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
	};
	navs.innerHTML = str;
	navsA[0].className = "active";
	wrap.onmouseover = function() {	
		clearInterval(timer);
	};
	wrap.onmouseout = function() {
		timer = setInterval(next,3500);
	};
	for(var i = 0; i < navsA.length; i++){
		navsA[i].index = i;
		navsA[i].onmouseover = function (){
			var next =this.index;
			tab(next);
		};
	};
	prevBtn.onclick = function() {
		var next = now - 1;
		if(next < 0)
		{
			next = navsA.length - 1;
		}
		tab(next);
	};
	nextBtn.onclick = next; 
	timer = setInterval(next,3500);
	function next() {
		var next = now + 1;
		if(next > navsA.length - 1)
		{
			next = 0;
		}
		tab(next);
	};
	function tab(next) {
		zIndex++;
		navsA[now].className = "";
		startMove(li[now],"opacity",1000,0,"easeOut");
		now =  next;
		navsA[now].className = "active";
		startMove(li[now],"opacity",1000,100,"easeOut");
		li[now].style.zIndex = zIndex;
	};

	$('#curr').hover(function(){
		$(this).find('p').stop().animate({
			height:'100px',
    		display: 'block',
    		opacity: 1},400)
	},function(){
		$(this).find('p').stop().animate({
			height:'0',
    		display: 'none',
    		opacity: 0},300)
	});
	 // 收索栏效果
	 $('.text').focus(function(){
	 	$(this).css({border:'1px solid #ff6700'});
	 	$('.deng').eq($(this).index()).show();
	 	$('.shouding').eq($(this).index()).hide();
	 	$('.btn').eq($(this).index()).css({border:'1px solid #ff6700'});
	 });
	 $('.text').blur(function(){
	 	$(this).css({border:'1px solid #e0e0e0'});
	 	$('.shouding').eq($(this).index()).show();
	 	$('.btn').eq($(this).index()).css({border:'1px solid #e0e0e0'});
	 	$('.deng').hide();
	 });
	 $('.deng').on('mouseover',function(){
	 	$('.deng').show();
	 });
	 
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
		// 导航竖直弹出效果

		$(".navs").find('a').mouseover(function(){
			$(this).find('a').show().siblings().hide();								
			$('#navlist').find('ul').eq($(this).index()).show().siblings().hide();
			$('#navlist').css({borderTop:'1px solid #e0e0e0'});
			$('#navlist').stop().animate({height: 230},200);			
		});
		
		$(".navs").find('a').eq(7).mouseover(function(){
			$('#navlist').stop().animate({height: 0});
		});
		$(".navs").find('a').eq(8).mouseover(function(){
			$('#navlist').stop().animate({height: 0});
		});

		$(".low1").mouseout(function(){
			$('#navlist').stop().animate({height: 0},200);
			$('#navlist').css({borderTop:"0px solid #e0e0e0"})
			// $('#navlist').find('ul').hide();
		});

		$("#navlist").find('ul').mouseover(function(){
			// $('#navlist').find('ul').eq($(this).index()).show();
			$('#navlist').css({borderTop:"1px solid #e0e0e0"});
			$('#navlist').stop().animate({height: 230},200);
		});
		
		// 移动整块轮播图片
	var iwa = $('.ula').eq(0).width();
    var num = 0;
	
	function auto(id){
		$(id).find('#Right').click(function(){
			$(this).removeClass('Bactive').siblings('a').addClass('Bactive');
			$(id).find('#ul').stop().animate({
				left:-iwa+14
			},500);
		});

		$(id).find('#Left').click(function(){
			$(this).removeClass('Bactive').siblings('a').addClass('Bactive');	
			$(id).find('#ul').stop().animate({
				left:0
			},500);
		});
	};
	auto('#low3bg1');
	auto('#low3bg2');

		var h2s = document.getElementsByTagName('h2');
		// 购物图片切换图效果
		function drag(id){
			$(id).find('.low4-top a').mouseover(function(){
				$(this).addClass('active').siblings('a').removeClass('active');
				$(id).find('.low4list .uls').eq($(this).index()).show().siblings().hide();
				$(id).find('.low4-img').show();
			});
		};
		drag('#low4-two1');
		drag('#low4-two2');
		drag('#low4-two3');
		// 搭配购物图片弹出文字效果
		$('.uls').find('li').mouseover(function(){
			$(this).find('.skill').stop().animate({bottom:0,opacity:1},200);
		});
		$('.uls').find('li').mouseout(function(){
			$(this).find('.skill').stop().animate({bottom:-80,opacity:0},200);
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
				'<span>'+datas[i].sp+'</span>'+
				'<div class="to">'+datas[i].to+'</div></li>';
		};
		// plis.html(html);
		// $('.plis')[0].innerHTML = html;

		// 搭配图片小轮播
	function fn(id){
		var iw = $(id).find('.bookli').eq(0).width();
		var num = 0;
		$(id).hover(function(){
			$(this).find('.bookbtn').stop().animate({opacity:1},500);
		},function(){
			$(this).find('.bookbtn').stop().animate({opacity:0},500);
		});
		$(id).find('.bookright').click(function(){
			num++;
			if(num == $(id).find('.bookli').size()){
				num = 0;
			};
			$(id).find('.booknav').find('a').eq(num).addClass('booktive').siblings('a').removeClass('booktive');
			$(id).find('.book').stop().animate({
				left:-iw*num
			});
		});

		$(id).find('.bookleft').click(function(){
			num--;
			if(num < 0){
				num = $(id).find('.bookli').size()-1;
			}
			$(id).find('.booknav').find('a').eq(num).addClass('booktive').siblings('a').removeClass('booktive');
			$(id).find('.book').stop().animate({
				left:-iw*num
			});
		});
		
		$(id).find('.booknav').find('a').click(function(){
			$(this).addClass('booktive').siblings('a').removeClass('booktive');
			num = $(this).index();
			$(id).find('.book').stop().animate({
				left:-iw*num
			});
		});
	};
	fn('#bookbox1');
	fn('#bookbox2');
	fn('#bookbox3');
	fn('#bookbox4');

	var fangda = document.getElementById('fangda');
 		var fsma = fangda.children[0];
 		var sdiv = fsma.children[0];		
        var fbig = document.getElementById('fbig');
        var flist = document.getElementById('flist');
        var flis = flist.getElementsByTagName('li');
        var smaimg = fsma.getElementsByTagName('img');
        var bigimg = fbig.getElementsByTagName('img');
        var fmifu = document.getElementById('fmifu');
        var fa = fmifu.getElementsByTagName('a');
        for(var i = 0;i<flis.length;i++){
            flis[i].index = i;
            flis[i].onclick = function(){
                 for(var i = 0;i<flis.length;i++){
                    flis[i].className = '';
                    smaimg[i].className = '';
                    bigimg[i].className = '';
                    fa[i].className = '';
                 }
                 this.className = 'active';
                 smaimg[this.index].className = 'bactive';
                 bigimg[this.index].className = 'hactive';
                 fa[this.index].className = 'mactive';
                 fang(this.index);
            }
        }
 		fsma.onmouseover = function(){
 			sdiv.style.display = 'block';
 			fbig.style.display = 'block';
 		}
 		fsma.onmouseout = function(){
 			sdiv.style.display = 'none';
 			fbig.style.display = 'none';
 		}
        fang(0);
        function fang(index){
     		fsma.onmousemove = function(ev){
     			var ev = ev || window.event;
     			var disX = ev.pageX-fangda.offsetLeft-sdiv.offsetWidth/2;
     			var disY = ev.pageY-fangda.offsetTop-sdiv.offsetHeight/2;

     			if(disX <= 0){
     				disX = 0;
     			}else if(disX > fsma.offsetWidth - sdiv.offsetWidth){
     				disX = fsma.offsetWidth - sdiv.offsetWidth;
     			}
     			if(disY <= 0){
     				disY = 0;
     			}else if(disY > fsma.offsetHeight - sdiv.offsetHeight){
     				disY = fsma.offsetHeight - sdiv.offsetHeight;
     			}
     			var scaleX = disX / (fsma.offsetWidth - sdiv.offsetWidth);
     			var scaleY = disY / (fsma.offsetHeight -sdiv.offsetHeight);
     			// document.title = scaleX;
                sdiv.style.left = disX +'px';
                sdiv.style.top = disY +'px';
     			bigimg[index].style.left = scaleX * -(bigimg[index].offsetWidth-fbig.offsetWidth) + 'px';
     			bigimg[index].style.top = scaleY * -(bigimg[index].offsetHeight-fbig.offsetHeight) + 'px'; 
                return false;  			
     		}
        }
};
jQuery(function(){
    
})