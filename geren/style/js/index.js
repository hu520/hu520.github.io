// JavaScript Document

window.onload = function(){
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('1 5=9(\'t\',4);1 e=4.w(\'x\');1 s=e.u(\'v\');1 8=9(\'r\',4);1 f=9(\'y\',4);1 h=[];1 l=[];D(1 i=0;i<8.F;i++){h.k(8[i].g);l.k(f[i].g)}1 6=0;a E(i){1 2=i;j(7);7=A(a(){m(2)},z)}a m(2){3=4.C.o||4.B.o;n(3<5[0].d*2&&2>6){3+=p;b.c(0,3)}q n(3>5[0].d*2&&2<6){3-=p;b.c(0,3)}q{b.c(0,2*5[0].d);6=2;j(7)}}',42,42,'|var|num|T|document|oBox|iNow|timers|oBj1|getByClass|function|window|scrollTo|offsetHeight|navUl|oBj2|offsetTop|arrBj1||clearInterval|push|arrBj2|scrollRun|if|scrollTop|71|else|bj1|navLi|box|getElementsByTagName|li|getElementById|bjList|bj2|30|setInterval|body|documentElement|for|scrollMoveDown|length'.split('|'),0,{}))
	
	var T = 0;
	var timers = null;
	for(var i=0;i<navLi.length;i++){
		navLi[i].index = i;
		navLi[i].onclick = function(){    //nav  Li的变化
			
			scrollMoveDown(this.index);
			//for(var i=0; i<navLi.length;i++){
				//liBjmove1(navLi[i]);
			//}
			//liBjmove(navLi[this.index]);
		};
	};
	function liBjmove1(obj){
		var bjCor = obj.getElementsByTagName('img')[0];
		timeMove(bjCor,{top:34,left:10},'linear');
	};
	function liBjmove(obj){
		var bjCor = obj.getElementsByTagName('img')[0];
		timeMove(bjCor,{top:0,left:0},'linear');
		
	};
	// var facebook = getByClass('facebook',document)[0];
	// var fImg = facebook.getElementsByTagName('img')[0];
	// var twitter = getByClass('twitter',document)[0];
	// var tImg = twitter.getElementsByTagName('img')[0];
	var rightbox = getByClass('rightbox',document);
	var leftIcon = getByClass('leftIcon',document);
	var txtCon = getByClass('txtCon',document);
	var icon = getByClass('icon',document);
	var infoShow = getByClass('infoShow',document);
	
	for(var i=0;i<leftIcon.length; i++){  //  rightbox事件
		leftIcon[i].index = i;
		leftIcon[i].onmouseover = function(){  
			overCor(this);
		}
		leftIcon[i].onmouseout = function(){
			outCor(this);
		}
		leftIcon[i].onclick = function(){
			var that = this;
			if(this.parentNode.offsetWidth == 0){
				
				pzMoveW(this.parentNode,631);
				startMove(txtCon[this.index],{left: -600},function(){
					txtCon[that.index].style.display = 'none';
					icon[that.index].style.display = 'none';
				});
				startMove(icon[this.index],{left: -600});
			}else{
				txtCon[this.index].style.display = 'block';
				icon[this.index].style.display = 'block';
				pzMoveW(this.parentNode,0);
				startMove(txtCon[this.index],{left: 0});
				startMove(icon[this.index],{left: 0});
			}			
		}
	}
	
	var listR1 = document.getElementById('listR1');
	var r1Li = listR1.getElementsByTagName('li');
	//var r1Div = listR1.getElementsByTagName('div');	
	for(var i=0; i<r1Li.length; i++){
		r1Li[i].index = i;
		r1Li[i].onmouseover = function (){

			$(this).find('div').animate({width : 460});
		}
		r1Li[i].onmouseout  = function (){
			
			$(this).find('div').animate({width : 0});
		}	
	}
	
	for(var i=0; i<icon.length; i++){  //txt 里三个按钮  事件
		icon[i].index = i;
		iconfn(icon[i],i);
		
	}
	
	function iconfn(obj,a){   //  txt 里三个按钮  事件函数
		var icon1 = getByClass('icon1',obj);
		for(var i=0; i<icon1.length; i++){    
			
			icon1[i].onmouseover = function(){
				overCor(this);
			}
			icon1[i].onmouseout = function(){
				outCor(this);
			}
			icon1[0].onclick = function(){
				txMove(a);
			}
			icon1[1].onclick = function(){
			//alert(this.parentNode.className);
				pzMoveW(rightbox[a],631);
				startMove(txtCon[a],{left: -400},function(){
					txtCon[that.index].style.display = 'none';
					icon[that.index].style.display = 'none';
				});
				startMove(icon[a],{left: -400});
			}
			icon1[2].onclick = function(){
				txMove1(a);
			}
		}
	}
		
	function overCor(obj){  // 移入换图片
		var aImg = obj.getElementsByTagName('img');
		startMove(aImg[0],{opacity:0});
		startMove(aImg[1],{opacity:100});
	}
	function outCor(obj){   //移出换图片
		var aImg = obj.getElementsByTagName('img');
		startMove(aImg[0],{opacity:100});
		startMove(aImg[1],{opacity:0});
	}
	
	var timerT = null;
	var iSpeed = 0;
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('e m(i){b(5);5=g(e(){2+=(8[0].7*(i+1)-9())/6;2*=0.j;h(a.f(8[0].7*(i+1)-9())<=1&&a.f(2)<=1){3.c.4=3.d.4=8[0].7*(i+1);2=0;b(5)}l{3.c.4=3.d.4=9()+2}},k)}',23,23,'||iSpeed|document|scrollTop|timerT||offsetHeight|oBox|scrollY|Math|clearInterval|body|documentElement|function|abs|setInterval|if||75|30|else|txMove'.split('|'),0,{}))

	function txMove1(i){	

		clearInterval(timerT);
		timerT = setInterval(function(){					 						 
			iSpeed += (scrollY() - oBox[0].offsetHeight * (i-1) )/6;
			iSpeed *= 0.75;
							 
			if( Math.abs(scrollY() - oBox[0].offsetHeight * (i-1) )<=1 && Math.abs(iSpeed)<=1 ){
				clearInterval(timerT);
				document.body.scrollTop = document.documentElement.scrollTop = oBox[0].offsetHeight * (i-1);
				iSpeed = 0;
				
			}
			else{		
				document.body.scrollTop = document.documentElement.scrollTop = scrollY() - iSpeed ;
			}
		},30);
		
	}

	var box5 = document.getElementById('box5');
	var oUl5 = box5.getElementsByTagName('ul')[0];
	var oLi5 = box5.getElementsByTagName('li');
	var oDiv5 = oUl5.getElementsByTagName('div');
	
	for(var i=0; i<oLi5.length; i++){
		oLi5[i].index = i;
		oDiv5[i].style.background = 'url(style/images/liBj'+ (i+1) +'.gif) no-repeat';  //  给box5里li里的div加背景
		oLi5[i].onmouseover = function(){
			
			overBj(oLi5[this.index]);
		}
		oLi5[i].onmouseout = function(){
			outBj(oLi5[this.index]);
		}
	}
	function addBj(obj){
		
	}
	function overBj(obj){
		var oDiv5 = obj.getElementsByTagName('div')[0];
		startMove(oDiv5,{opacity:100});
	}
	function outBj(obj){
		var oDiv5 = obj.getElementsByTagName('div')[0];
		startMove(oDiv5,{opacity:0});
	}
	
	var footer = document.getElementById('footer');
	var upIcon = footer.getElementsByTagName('div')[0];
	
	upIcon.onclick = function(){   //   footer 事件
		if(footer.offsetHeight == 0){
			pzMoveH(footer,200);
		}else{
			pzMoveH(footer,0);
		}
	}	
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('d n(3,6){3.7=0;3.9=0;f 5=4;e(3.b);3.b=h(d(){a(3.c<6){5=4}g a(3.c>6){5=-4}3.7+=5;f 8=3.c+3.7;a((8>6&&5>0)||(8<6&&5<0)){3.9++;8=6;3.7*=-1;3.7*=0.m;a(3.9==2){e(3.b)}}g{3.9=0}3.j.i=8+\'l\'},k)}',24,24,'|||obj||num|iTarget|iSpeed|W|iNow|if|timer|offsetWidth|function|clearInterval|var|else|setInterval|width|style|30|px|55|pzMoveW'.split('|'),0,{}))

	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('d n(3,6){3.7=0;3.9=0;f 5=4;e(3.b);3.b=h(d(){a(3.c<6){5=4}g a(3.c>6){5=-4}3.7+=5;f 8=3.c+3.7;a((8>6&&5>0)||(8<6&&5<0)){3.9++;8=6;3.7*=-1;3.7*=0.m;a(3.9==2){e(3.b)}}g{3.9=0}3.j.i=8+\'l\'},k)}',24,24,'|||obj||num|iTarget|iSpeed|H|iNow|if|timer|offsetHeight|function|clearInterval|var|else|setInterval|height|style|30|px|55|pzMoveH'.split('|'),0,{}))

	document.onscroll = function(){  

		for(var i=0; i<rightbox.length; i++){   //  当滚动条发生移动时，rightbox的offsetWidth等于0，做碰撞弹性运动
			if(rightbox[i].offsetWidth != 0){
				txtCon[i].style.display = 'block';
				icon[i].style.display = 'block';
				pzMoveW(rightbox[i],0);
				startMove(txtCon[i],{left: 0});
				startMove(icon[i],{left: 0});
			}
		}
		var bjCor = getByClass('bjCor',document);
		for(var i=0; i<bjCor.length-1; i++){         //  滚动条控制navLi的背景变化
			if(scrollY() >=oBox[0].offsetHeight*i && scrollY() <= oBox[0].offsetHeight*(i+1)){
				bjCor[i].style.top =(scrollY() - oBox[0].offsetHeight * i )*(navLi[0].offsetHeight/oBox[0].offsetHeight) + 'px';
				bjCor[i].style.left = (scrollY() - oBox[0].offsetHeight * i )*(10/oBox[0].offsetHeight) + 'px';
				bjCor[i+1].style.top =( oBox[0].offsetHeight * (i+1) - scrollY())*(navLi[0].offsetHeight/oBox[0].offsetHeight) + 'px';
				bjCor[i+1].style.left =( oBox[0].offsetHeight * (i+1) - scrollY())*(10/oBox[0].offsetHeight) + 'px';
			}else if(scrollY() <oBox[0].offsetHeight*i){
				bjCor[i+1].style.top = oBox[0].offsetHeight * (i+1) + 'px';
			}else if(scrollY() > oBox[0].offsetHeight*(i+1)){
				bjCor[i].style.top = oBox[0].offsetHeight * (i+1) + 'px';
			}
		}
				
		for(var i=0; i<oBox.length-2; i++){     // 滚动条控制box中的两层背景
			navLi[i].index =i;
			bjMove(oBox[i],i);
		}
	}
	
	function bjMove(obj,i){
		var oBj = getByClass('bj',obj);
		oBj[0].style.top =arrBj1[i] + -scrollY()/2 + 'px';
		oBj[1].style.top =arrBj2[i] + scrollY()/2.6 + 'px';
	}
	// 轮播
	var ih = $('.mapul li').eq(0).width();
	var numL = 0;
	var mapli =$('.mapul').find('li');
	var alla = $('.nava').find('a');
	var timer = 0;
	$('.r').click(function(){
		numL ++;
		tab();
	});
	timer=setInterval(function(){
		numL ++;
		tab();
	},2000);

	$('.mapul').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){
		numL ++;
		tab();
	},2000);
	});

	$('.l').click(function(){
		numL --;
		tab();
	});
	$('.nava').find('a').click(function(){
		numL =$(this).index();
		tab();
	});
	function tab(){
		if(numL == $(mapli).size()-1){
			$(mapli).last().css({position:'static'});
		};
		if(numL == 0){
			$(mapli).eq(0).css({position:'static'});
		};
		if(numL == $(mapli).size()){
			$(mapli).eq(0).css({
				position:'relative',
				left:ih*$(mapli).size()
			});
		};
		if(numL > $(mapli).size()){
			$(mapli).eq(0).css({position:'static'});
			$('.mapul').css({left:0});
			numL = 1;
		};
		if(numL == -1){
			$(mapli).last().css({
				position:'relative',
				left:-ih*$(mapli).size()
			});
		};
		if(numL < -1){
			$(mapli).last().css({position:'static'});
			$('.mapul').css({left:-ih*($(mapli).size()-1)});
			numL = $(mapli).size()-2;
		};
		alla.eq(numL%alla.length).addClass('fctive').siblings('a').removeClass('fctive');
		$('.mapul').stop().animate({
			left:-ih*numL
		},{
			easing:'linear',
			duration:400
		});
	};
	// 返回顶部
	var boxs = document.getElementById('hui');
	var boxa = boxs.getElementsByTagName('a')[0];
	var Timer = 1;
	$(window).scroll(function(){
		var top = document.documentElement.scrollTop||document.body.scrollTop;
		if (top>=500){
			boxs.style.display = 'block';
		}else{
			boxs.style.display = 'none';
		};
		boxa.onclick = function(){
			Timer = setInterval(function(){
				top = top - 300;
				window.scrollTo(0,top);
				if(top<=500){
					window.scrollTo(0,0);
					clearInterval(Timer);
					boxs.style.display = 'none';
				};
			},100);
		};	 
	});
};

function scrollY(){  // 获取滚动条的高度
	return document.body.scrollTop || document.documentElement.scrollTop;
}

function getByClass(sClass,parent){     //用className来获取元素的函数
	
	var aEles = (parent||document).getElementsByTagName('*');
	var arr = [];
	
	for(var i=0; i<aEles.length; i++){
		
		var aClass = aEles[i].className.split(' ');
	
		for(var j=0; j<aClass.length; j++){
			
			if(aClass[j] == sClass){
			
				arr.push(aEles[i]);	
				break;			
			}			
		}	
	}
	return arr;
}
