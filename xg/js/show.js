var mySwiper = new Swiper('.swiper-container',{
		onSlideChangeStart : function (){
				$('.sport_page').html(mySwiper.activeIndex+1);
			}
			})
	
	//提交
		function _touch(event){
		var $len = $('.swiper-slide:visible').length-1;
		var indexMy = mySwiper.activeIndex;
			if($len === indexMy && $('.swiper-slide:last .big_box').eq(0).find('label.label_checked').size() >= 1){
//			var re = confirm('您的题已答完，确定要提交问卷吗？');
//				if(re){
//				//alert(dataJSON());
//					commit(0,dataJSON());
//					return false;
//			}
				
				$('.save_font').html('提交');
	
//			commit(1,dataJSON());
			
				
				
					return false;				
				}else {
					$('.save_font').html('暂存');
				}
			
		}
		
		
	
//	}

$(function(){
	
	
	
	
	
	//滑动页面判断题是否选择 如果没有选择的报红提示
	$(".swiper-slide").on("touchmove",function(){
//		var num = mySwiper.activeIndex;
		//判断当前页是单选的还是多选的
//		$bb = $(".swiper-slide").eq(num).find("label").hasClass("label_checked_2")
		
		if($(this).find(".big_box").css("display") == "block"){
			$.each($(this).find(".number"), function(i,item) {
				$that =  $(this);
	//			console.log($(this).attr("class"));
	//			console.log(num)
	//			console.log($(this))
	//			console.log($that.css('background-color'))
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
				}
	//			console.log($(this).css('background-color'))
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
//		 变色
		 $('.num_index li').eq($('.sport_page').html()-1).addClass('lis').siblings().removeClass('lis');
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
	
	
	
	
	
	
	
	
	$("#you_29").on("click",function(){
		$(".hide_30_36").show();
		//刷新
			mySwiper.updateSlidesSize();
		
	})
	
	$("#xiyan_11").on("click",function(){
		$(".hide_12_15").show();
		$(".hide_16_18").show();
		$(".hide_19").show();
		$(".hide_20_21").show();
		$(".hide_22_25").hide();
		$(".hide_29").show();
		
		//刷新
			mySwiper.updateSlidesSize();
		
	})
	
	$("#jieyan_11").on("click",function(){
		$(".hide_12_15").hide();
		$(".hide_16_18").hide();
		$(".hide_19").hide();
		$(".hide_20_21").hide();
		$(".hide_22_25").show();
		$(".hide_25_27").hide();
		//刷新
			mySwiper.updateSlidesSize();
		
	})
	
	$("#buxiyan_11").on("click",function(){
		$(".hide_12_15").hide();
		$(".hide_16_18").hide();
		$(".hide_19").hide();
		$(".hide_20_21").hide();
		$(".hide_22_25").hide();
		$(".hide_25_27").show();
		//刷新
			mySwiper.updateSlidesSize();
		
	});
	//28题
	
	$("#never_28").on("click",function(){
		
		$(".hide_29").hide();
		$(".hide_30_36").hide();
		//刷新
			mySwiper.updateSlidesSize();
	
	});
	
	$("#show_29").on("click",function(){
		
		$(".hide_29").show();
		
		//刷新
			mySwiper.updateSlidesSize();
	
	});
	
	
	
	
	$("#lessweek_28").on("click",function(){
		
		$(".hide_29").hide();
		$(".hide_30_36").show();
	
	//刷新
			mySwiper.updateSlidesSize();
	})
	
	//44
	

	
	$("#never_44").on("click",function(){
		$(".hide_45-54").hide();
	
	//刷新
			mySwiper.updateSlidesSize();
		
		
	})
	$("#hejiu_44").on("click",function(){
		$(".hide_45-54").show();
	
	//刷新
			mySwiper.updateSlidesSize();
		
		
	})
	
	
	$("#meiyou_29").on("click",function(){
		$(".hide_30_36").hide();
		//刷新
			mySwiper.updateSlidesSize();
	})
	
	
	$("#you_55").on("click",function(){
	$(".hidden_56-57").show();
	//刷新
			mySwiper.updateSlidesSize();
})	
	$("#meiyou_55").on("click",function(){
	$(".hidden_56-57").hide();
	//刷新
			mySwiper.updateSlidesSize();

  })
	
	
	
	
	$("#you_58").on("click",function(){
	$(".hidden_59-60").show();
	console.log(5)
})	
	$("#meiyou_58").on("click",function(){
	$(".hidden_59-60").hide();

  })
	


   $("#you_61").on("click",function(){
	$(".hidden_62").show();
	console.log(5)
})	
	$("#meiyou_61").on("click",function(){
	$(".hidden_62").hide();

  })



   $("#you_63").on("click",function(){
	$(".hidden_64").show();
	console.log(5)
})	
	$("#meiyou_63").on("click",function(){
	$(".hidden_64").hide();

  })
	
	
	
	$("#you_65").on("click",function(){
	$(".hidden_66-73").show();
	$(".tishijiantou").show();
	
})	
	$("#meiyou_65").on("click",function(){
	$(".hidden_66-73").hide();
	$(".tishijiantou").hide()
  })
	
	
	//101题
	
	$("#haveBaby_101").on("click",function(){
	$(".hide_102_105").show();
	//刷新
			mySwiper.updateSlidesSize();
})	
	
	
	$("#noBaby_101").on("click",function(){
	$(".hide_102_105").hide();
	//刷新
			mySwiper.updateSlidesSize();
})	
	
	
	
	
	
	
	//103shit
	
	$(".stomach").on("touchstart",function(){
		if($(".stomachHide").css('display') == 'none'){
			$(".stomachHide").show();
		}else if($(".stomachHide").css('display') == 'block'){
			$(".stomachHide").hide();
		}
		
		//刷新
			mySwiper.updateSlidesSize();
	});
	
	
	
	
  $(".shit").on("click",function(){
  	
  	$(".shitHide").show();
  	
  
  	
  	//刷新
			mySwiper.updateSlidesSize();
  })
	
	
	$(".hert").on("click",function(){
  	
  	$(".hertHide").show();
  	
  
  	
  	//刷新
			mySwiper.updateSlidesSize();
  })
	
	
	
	$(".hertmore").on("click",function(){
  	
//	$(".hertmoreHide").show();
  	
  
  	
  	//刷新
			mySwiper.updateSlidesSize();
  })
	
  //107
  
  	$(".yes_107").on("click",function(){
	$(".hide_108_110").show();
	//刷新
			mySwiper.updateSlidesSize();
})	

	
	$("#no_107").on("click",function(){
	$(".hide_108_110").hide();
	//刷新
			mySwiper.updateSlidesSize();
})	
	
//109

  $("#womanyes_109").on("click",function(){
	$(".hide110").show();
	//刷新
			mySwiper.updateSlidesSize();
})	

	
	$("#womanno_109").on("click",function(){
	$(".hide110").hide();
	//刷新
			mySwiper.updateSlidesSize();
})	
	
	$(".Close").on("touchend",function(){
		$(".meng_1").hide()
	})
	
	
	
	function dataJSON(){
		var zyobj = {};
		var zyjson;
		var $str = '';
	
			$('label').each(function (){
				
				if( $(this).attr('class') == 'label_checked' ){
					 $str += $(this).parents('.big_box').attr('order') + '_' + $(this).attr('num') + ';';
	
				};
				
				
					
			})
			zyobj.evaluateData  = $str 
			zyjson = JSON.stringify(zyobj);
			return zyjson;
	}
	
	
})
