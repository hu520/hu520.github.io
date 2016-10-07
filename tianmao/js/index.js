window.onload = function (){
	var imgtop = document.getElementById("imgtop");
	var hihe = document.getElementById("hihe");
	var spans = hihe.getElementsByTagName("span");
	var list = imgtop.getElementsByTagName("ul")[0];
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
				},2500);
			};	
		};
		clearInterval(timer);
		timer = setInterval(function(){
			huauto();
		},2500);

		function huauto(){	
			if(now>=spans.length){
				now =0;
				list.style.left = 0;
			};
			now++;
			for(var i = 0; i < spans.length; i++) {
				spans[i].className = "";
			};
			spans[now%spans.length].className = "active";
			startMove(list,"left",400,-(now)*liW,"easeOut");
		};
	};
	var IH = $('#newul li').eq(0).height();
 	var nub = 0;
	var timer = 1;
	timer = setInterval(function(){
		if (nub >= $('#newul li').size()-1) {
			nub =0;
			$('#newul ul').css({top:0});
		};
		nub++;
		$('#newul ul').stop().animate({
			top:-nub*IH
		});
	},2000);
	var footer = document.getElementById('footer');
	var foot = document.getElementById('foot');
	var timer = 0;
	timer=setTimeout(function(){
		footer.style.opacity='1';
		foot.style.opacity='1';
	},2000);
	footer.onclick=function(){
		this.style.display='none';
		foot.style.display='none';
	};

	var head = document.getElementsByTagName('header')[0];
	$(window).scroll(function(){
		var scrollT = $(window).scrollTop();
		if (scrollT>200) {
			head.style.background='#f32d2d';
			head.style.opacity='1';
		}else{
			head.style.background='';
			head.style.opacity='0.6';
		};
	});
};