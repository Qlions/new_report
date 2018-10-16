
var mySwiper = new Swiper('.swiper-container',{
		onSlideChangeStart : function (){
				$('.sport_page').html(mySwiper.activeIndex+1);
			}
})
	
	
	//提交
//	document.addEventListener('touchstart', _touch, false);
		function _touch(event){
		var $len = $('.swiper-slide:visible').length-1;
		var indexMy = mySwiper.activeIndex;
			if($len === indexMy && $('.swiper-slide:last .big_box').eq(0).find('label.label_checked').size() >= 1){
//				var re = confirm('您的题已答完，请选择提交或者暂存？');
				
					$('.save_font').html('提交');
					return false;				
				}else {
					$('.save_font').html('暂存');
				}
				
//				if(re){
//				commit(0,dataJSON());
//				return false;
//			}
				
				
			}
		
		
		
	
	

$(function(){
	
	
	
	
	
	
	//滑动页面判断题是否选择 如果没有选择的报红提示
	$(".swiper-slide").on("touchmove",function(){

		 
		if($(this).find(".big_box").css("display") == "block"){
			$.each($(this).find(".number"), function(i,item) {
				$that =  $(this);
				if($(this).attr("class") == "number number_dan"){
					$.each($(this).parents(".big_box").find("label"), function(i,item) {
	//					console.log($(this).hasClass("label_checked"))
						if($(this).hasClass("label_checked") == false){
							$that.attr({style:"background:red"});
							//禁止向右滑动
							mySwiper.lockSwipeToNext();
						}else{
							$that.attr({style:"background:#999966"})
							//开启向右滑动
							mySwiper.unlockSwipeToNext();
							return false;
						}
					});	
				}else if($(this).attr("class") == "number number_duo"){
					$.each($(this).parents(".big_box").find("label"), function(i,item) {
							if($(this).hasClass("label_checked_1") == false){
								$that.attr({style:"background:red"})
								//禁止向右滑动
								mySwiper.lockSwipeToNext();
							}else{
								$that.attr({style:"background:#999966"})
								//开启向右滑动
								mySwiper.unlockSwipeToNext();
								return false;
							}
							if($(this).hasClass("label_checked_3") == false){
								$that.attr({style:"background:red"})
								//禁止向右滑动
								mySwiper.lockSwipeToNext();
							}else{
								$that.attr({style:"background:#999966"})
								//开启向右滑动
								mySwiper.unlockSwipeToNext();
								return false;
							}	
					});
				}else{
					$.each($(this).parents(".big_box").find("input[type = text]"), function(i,item) {
						if($(this).val() == "" && $(this).val().length == 0 || $(this).val() == '请选择' ){
						 	$that.attr({style:"background:red"})
							//禁止向右滑动
							mySwiper.lockSwipeToNext();
							return false;
						}else{
							$that.attr({style:"background:#999966"})
							//开启向右滑动
							mySwiper.unlockSwipeToNext();
							
						}		
					});
				};
				if($(this).css('background-color') == "rgb(153, 153, 102)"){
							//开启向右滑动
							mySwiper.unlockSwipeToNext();
				}else{
						//禁止向右滑动
							mySwiper.lockSwipeToNext();
							return false;
				}
			});
		}

	})
	
	
	
	
	
	
	//答题卡点击
	$('.num_index li').on('touchend', function () {
		
		if($(this).hasClass("liss_l") == true){
		}else{
			mySwiper.slideTo($(this).html()-1,10,false);
		
			$(this).addClass('lis').siblings().removeClass('lis');
			$('.sport_page').html($(this).html());
			$(this).parent().parent().parent().css({
				display : 'none'
			});
			$('.meng').css({ 
				display : 'none'
			})
		}
	});
	
	
	
	
	
	
	
	
	
	$(".Close").on("touchend",function(){
		$(".meng_1").hide()
	})
	
	
	
	function dataJSON() {
		var zyobj = {};
		var zyjson;
		var $str = '';
	
		$('label').each(function (){
			
			if( $(this).attr('class') == 'label_checked' ){
				 $str += $(this).parents().attr('types') + '_' + $(this).parent().attr('order') + '_' + $(this).attr('num') + ';';

			};
			
			
				
		})
		zyobj.tcmData  = $str 
		zyjson = JSON.stringify(zyobj);
		
		return zyjson;
	
	}
	
	
	
})


