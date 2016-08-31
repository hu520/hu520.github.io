var fss;
$(function() {
	fss = new ddfullscreenslider({
		sliderid: 'dowebok',
		onslide: function($slide, index) {
			if(index==0){
				$(".about").fadeIn(1500);
			}else if(index==1){
				$(".skill").fadeIn(1500);
				$(".skill-from").fadeIn("slow");
				$("#list1").animate({width:"90%"},2000);
				$("#list2").animate({width:"50%"},2000);
				$("#list3").animate({width:"40%"},2000);
				$("#list4").animate({width:"30%"},2000);
				$("#list5").animate({width:"30%"},2000);
			}else if(index==2){

				$(".work").fadeIn(1500);
				$(".work-header").fadeIn(1500);
			
			}

			else if(index==3){
				$(".Education").fadeIn(1500);
				$("#dream-bar1").click(function(){
					$(".dream-one").show();
					$(".dream-two").hide();
					$("#dream-bar1").css({"background-color":"#fff","color":"#993366"});
					$("#dream-bar2").css({"background-color":"transparent","color":"#fff"});
					
				});

				$("#dream-bar2").click(function(){
					$(".dream-two").show();
					$(".dream-one").hide();
					$("#dream-bar2").css({"background-color":"#fff","color":"#993366"});
					$("#dream-bar1").css({"background-color":"transparent","color":"#fff"});
				});
			
			}else if(index==4){
				$(".thank").fadeIn(1500);
				$(".work-header").fadeIn(1500);
			}

		}

	});
});
	