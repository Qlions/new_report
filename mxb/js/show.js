var mySwiper = new Swiper('.swiper-container',{
		onSlideChangeStart : function (){
				$('.sport_page').html(mySwiper.activeIndex+1);
				
			},
		onSlidePrevEnd: function(swiper){
			      if(mySwiper.activeIndex <= 48){
			    	  
			    	  $('.save_font').html('暂存');
			    	  
			      }
		 }
		
	})



$(function(){
	
//	滑动
	(function($) {
  		var options, Events, Touch;
  		options = {
  			x: 20,
  			y: 20
  		};
  		Events = ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'tap', 'longTap', 'drag'];
  		Events.forEach(function(eventName) {
  			$.fn[eventName] = function() {
  				var touch = new Touch($(this), eventName);
  				touch.start();
  				if (arguments[1]) {
  					options = arguments[1]
  				}
  				return this.on(eventName, arguments[0])
  			}
  		});
  		Touch = function() {
  			var status, ts, tm, te;
  			this.target = arguments[0];
  			this.e = arguments[1]
  		};
  		Touch.prototype.framework = function(e) {
  			e.preventDefault();
  			var events;
  			if (e.changedTouches) events = e.changedTouches[0];
  			else events = e.originalEvent.touches[0];
  			return events
  		};
  		Touch.prototype.start = function() {
  			var self = this;
  			self.target.on("touchstart",
  			function(event) {
  				event.preventDefault();
  				var temp = self.framework(event);
  				var d = new Date();
  				self.ts = {
  					x: temp.pageX,
  					y: temp.pageY,
  					d: d.getTime()
  				}
  			});
  			self.target.on("touchmove",
  			function(event) {
  				event.preventDefault();
  				var temp = self.framework(event);
  				var d = new Date();
  				self.tm = {
  					x: temp.pageX,
  					y: temp.pageY
  				};
  				if (self.e == "drag") {
  					self.target.trigger(self.e, self.tm);
  					return
  				}
  			});
  			self.target.on("touchend",
  			function(event) {
  				event.preventDefault();
  				var d = new Date();
  				if (!self.tm) {
  					self.tm = self.ts
  				}
  				self.te = {
  					x: self.tm.x - self.ts.x,
  					y: self.tm.y - self.ts.y,
  					d: (d - self.ts.d)
  				};
  				self.tm = undefined;
  				self.factory()
  			})
  		};
  		Touch.prototype.factory = function() {
  			var x = Math.abs(this.te.x);
  			var y = Math.abs(this.te.y);
  			var t = this.te.d;
  			var s = this.status;
  			if (x < 5 && y < 5) {
  				if (t < 300) {
  					s = "tap"
  				} else {
  					s = "longTap"
  				}
  			} else if (x < options.x && y > options.y) {
  				if (t < 250) {
  					if (this.te.y > 0) {
  						s = "swipeDown"
  					} else {
  						s = "swipeUp"
  					}
  				} else {
  					s = "swipe"
  				}
  			} else if (y < options.y && x > options.x) {
  				if (t < 250) {
  					if (this.te.x > 0) {
  						s = "swipeLeft"
  					} else {
  						s = "swipeRight"
  					}
  				} else {
  					s = "swipe"
  				}
  			}
  			if (s == this.e) {
  				this.target.trigger(this.e);
  				return
  			}
  		}
  	})(window.jQuery || window.Zepto); 
//	69-71小时限制
//	隐藏箭头
	$('.swiper-slide').on('swipeUp', function () {
		$(this).find('.tishijiantou').css('display', 'none')
		
	})
	$('.swiper-slide').on('swipeDown', function () {
		$(this).find('.tishijiantou').css('display', 'block')
		
	});
	
	$('#week_a_dummy').attr('type','tel');
	$('#week_b_dummy').attr('type','tel');
	$('#week_c_dummy').attr('type','tel');
	$('#week_d_dummy').attr('type','tel');
	$('#week_e_dummy').attr('type','tel');
	$('#week_f_dummy').attr('type','tel');
	//事件监听
	document.addEventListener('touchstart', _touch, false);  
//滑动页面判断题是否选择 如果没有选择的报红提示
	$(".swiper-slide").on("touchmove",function(){
		judge(this);
		
	});
	 $(".swiper-slide").on("touchend",function(){
		 $('.page').html($('.swiper-slide:visible').length);
//		 console.log($(this))
//			console.log($(this).find('.number').css('line-height'))
	 	judge(this);
	 	
	 });
	 
	
	function judge(obj){
		var obj = $(obj);
		$.each(obj.find(".big_box:visible").find(".number"), function(i,item) {
			$that =  $(this);
			if($(this).attr("class") == "number number_dan"){
				$.each($(this).parents(".big_box").find("label"), function(i,item) {
					if($(this).hasClass("label_checked") == false){
						$that.attr({style:"background:red"});
						//禁止向右滑动
						mySwiper.lockSwipeToNext();
					}else{
						$that.attr({style:"background:##6AAD3C"})
						//开启向右滑动
						mySwiper.unlockSwipeToNext();
						return false;
					}
				});	
			}else if($(this).attr("class") == "number number_duo"){
					$that.attr({style:"background:#6AAD3C"})

			}else{
				$.each($(this).parents(".big_box").find("input[type = text]"), function(i,item) {
					if($(this).val() == "" && $(this).val().length == 0 || $(this).val() == '请选择' ){
					 	$that.attr({style:"background:red"})
						//禁止向右滑动
						mySwiper.lockSwipeToNext();
						return false;
					}else{
						$that.attr({style:"background:##6AAD3C"})
						//开启向右滑动
						mySwiper.unlockSwipeToNext();
						
					}		
				});
				$.each($(this).parents(".big_box").find("input[type = tels]"), function(i,item) {
					if($(this).val() == "" && $(this).val().length == 0 || $(this).val() == '请选择' ){
					 	$that.attr({style:"background:red"});
					 	$(this).parent().find('b').attr({style:"color:red"});
						//禁止向右滑动
						mySwiper.lockSwipeToNext();
						return false;
					}else{
						$that.attr({style:"background:##6AAD3C"})
						//开启向右滑动
						mySwiper.unlockSwipeToNext();
						
					}		
				});
			}
			
			
			
			//48题单封装的函数+++++++++++++++++++++++++++++++++++
			var bol = true;
			var bol1 = true;
			var bol2 = true;
//			if($(this).parent(".big_box").find(".inputs abel_radio").hasClass("label_checked_3") == false){
//				$.each($(this).parents(".big_box").find("inputs"), function(i,item) {
//					if($(this).find('label').attr('class') == 'label_checked' || $(this).find('label').attr('class') == 'label_checked_1'){
//						$(this).next('input').attr('disabled', false);
//					}
//				}
				
//				$(".DrinkWine_48").eq(0).parents(".inputs").find("b").attr({style:"color:red"})
				$.each($(this).parents(".big_box").find(".DrinkWine_48"), function(i,item) {
					
						
				
					$.each($(this).find("label"),function(){
						if(bol){
							$(".DrinkWine_48").eq(0).parents(".inputs").find("b").attr({style:"color:red"});
							$(this).next('input').attr('disabled', true);
						}				
						 	if($(this).hasClass("label_checked") == false ){							
							//禁止向右滑动
							$(this).next('input').attr('disabled', true);
							mySwiper.lockSwipeToNext();
						}else{
							dis_true($(this));
							if($(this).next('input').val() != ''){
								$(".DrinkWine_48").eq(0).prev("p.p_1_lei").find("b").attr({style:"color:black"});
								// console.log($(this).next('input'))
								bol = false;
								return false;
							}
							
							
						}
						if($(this).hasClass("label_checked_1") == false || $(this).next("input[type = tel]").val() == ""){
							
						}else{
							bol1 = false;
						}	
					})
				});	
			
				$.each($(this).parents(".big_box").find(".DrinkWine_48").eq(2), function(i,item) {
					$.each($(this).find("label"),function(){
						if($(this).hasClass("label_checked_1") == false || $(this).next("input[type = tel]").val() == ""){
					}else{
						bol2 = false;
						return false;
					}
					});
				});	
			if(bol == false && bol1 == false && bol2 == false || bol == false && bol1 == false || bol == false){
				$that.attr({style:"background:##6AAD3C"})
			}
			
			
			//判断48
			
			if($(this).html() == 37){
				$.each($(this).parents('.big_box').find('label'), function (){
					if($(this).attr('class') == 'label_checked' ){
						$val = $(this).next('input').val()
						$(this).parents(".DrinkWine_48").find("input").val("")
						$(this).next('input').attr('disabled', false);
						$(this).next('input').val($val)
					}
					if($(this).attr('class') == 'label_checked_1'){
						$val = $(this).next('input').val()
//						$(this).parents(".DrinkWine_48").find("input").val("")
						$(this).next('input').attr('disabled', false);
						$(this).next('input').val($val)
					}
					
					if($(this).attr('class') == '' || $(this).attr('class') == 'label_checked_2'){
						$val = $(this).next('input').val();
//						
						$(this).next('input').val("");
					}
				})
				
				
				
			}
			
			
			
			//判断是不是19题如果是 在进行判断逻辑
			if($(this).parents(".hide_19").length == 1){
				$.each($(this).parents(".big_box").find(".no_18_1"), function(i,item) {
					
					$.each($(this).find("input[type = tel]"),function(){
						if($(this).parents(".no_18_1").find("input[type = tel]").eq(1).val() == ""){
							//禁止向右滑动
							mySwiper.lockSwipeToNext();
							
						}else{
							$that.attr({style:"background:##6AAD3C"})
							return false;
						}
	
					})
				});	
			}
			//判断是不是32题如果是 在进行判断逻辑			
			if($(this).parents(".big_box").find(".sanshier_xuanxiang").length == 5){
				$.each($(this).parents(".big_box").find("input[type = tel]"),function(){
					if($(this).val() == ""){
						//禁止向右滑动
						mySwiper.lockSwipeToNext();
					}else{
						$that.attr({style:"background:##6AAD3C"})
						//开启向右滑动
							mySwiper.unlockSwipeToNext();
								return false;
					}
				})

			}
			//判断是不是105题如果是 在进行判断逻辑
			if($(this).parents(".big_box").find("b").length == 4){

						$that.attr({style:"background:##6AAD3C"})
						
			}
			
			
			
			
			
			//判断是不是104题如果是 在进行判断逻辑	
			if($(this).parents(".big_box").find(".ly_div104")){
				$.each($(this).parents(".big_box").find("input[type = number]"), function(i,item) {
					if($(this).val() == "" && $(this).val().length == 0 || $(this).val() == '请选择' ){
					 	$that.attr({style:"background:red"});
					 	
					 	$(this).parent().find('b').attr({style:"color:red"});
						//禁止向右滑动
						mySwiper.lockSwipeToNext();
						return false;
					}else{
						$that.attr({style:"background:##6AAD3C"})
						//开启向右滑动
						mySwiper.unlockSwipeToNext();
						
					}		
				});
			}
			//判断是不是104题如果是 在进行判断逻辑			
			if($(this).parents(".big_box").find(".ly_div107 b").length == 5){
//				console.log($(this).parents(".big_box").find(".ly_div107 b").length)
				$.each($(this).parents(".big_box").find("input[type = tel]"),function(i,item){
//					console.log(i)
					if(i <= 4 ){
						if($(this).val() == ""){
						//禁止向右滑动
							$(this).parent().find('b').attr({style:"color:red"});
							$that.attr({style:"background:red"});
							mySwiper.lockSwipeToNext();
							return false;
						}else {
							$(this).parent().find('b').attr({style:"color:#000"});
							return true;
						}
						
					}else{
						$that.attr({style:"background:##6AAD3C"});
					}
					
				})

			}
			
		//判断是不是42题如果是 在进行判断逻辑			
			if($(this).parents(".big_box").find(".number").html() == 42){
				$.each($(this).parents(".big_box").find("input[type = tel]"),function(i,item){
//			
						if($(this).val() == ""){
						//禁止向右滑动
							$that.attr({style:"background:red"});
							mySwiper.lockSwipeToNext();
							
						}else {
							$that.attr({style:"background:##6AAD3C"});
							return false;
						}
				})

			}
	
			
			
			
			
			//判断是不是37题如果是 在进行判断逻辑
				var bol4 = false;
				var bol5 = false;
				var bol6 = false;
				var bol7 = false;
				var bol8 = false;
				var bol9 = false;
				var bol10 = false;
				var bol11 = false;
				var bol12 = false;
				var bol13 = false;
				var bol14 = false;
				
			if($(this).parents(".big_box").find("div").hasClass("yi_ling_si_H_fixed") == true){

				//============================== A=======================================
				if($(".san_shi_qi_little_H").find("input[type = text]").eq(0).val() != '' && $(".san_shi_qi_little_H").find("input[type = text]").eq(1).val() != ""){
					bol4 = true;
					$(this).parents(".big_box").find("b").eq(0).attr({style:"color:black"})
				}else{
					$(this).parents(".big_box").find("b").eq(0).attr({style:"color:red"});
				}
				//==============================B=======================================
				if($(".san_shi_qi_little_H").find("input[type = text]").eq(2).val() != '' && $(".san_shi_qi_little_H").find("input[type = text]").eq(3).val() != ""){
					bol5 = true;
					$(this).parents(".big_box").find("b").eq(1).attr({style:"color:black"})
				}else{
					$(this).parents(".big_box").find("b").eq(1).attr({style:"color:red"});
				}
				//==============================C======================================
				if($(".san_shi_qi_little_H").find("input[type = text]").eq(4).val() != '' && $(".san_shi_qi_little_H").find("input[type = text]").eq(5).val() != ""){
					bol6 = true;
					$(this).parents(".big_box").find("b").eq(2).attr({style:"color:black"})
				}else{
					$(this).parents(".big_box").find("b").eq(2).attr({style:"color:red"});
				}
				//=============================D========================================
				if($(".san_shi_qi_little_H").find("input[type = text]").eq(6).val() != '' && $(".san_shi_qi_little_H").find("input[type = text]").eq(7).val() != ""){
					bol7 = true;
					$(this).parents(".big_box").find("b").eq(3).attr({style:"color:black"})
				}else{
					$(this).parents(".big_box").find("b").eq(3).attr({style:"color:red"});
				}
				//============================E=========================================
				if($(".san_shi_qi_little_H").find("input[type = text]").eq(8).val() != '' && $(".san_shi_qi_little_H").find("input[type = text]").eq(9).val() != ""){
					bol8 = true;
					$(this).parents(".big_box").find("b").eq(4).attr({style:"color:black"})
				}else{
					$(this).parents(".big_box").find("b").eq(4).attr({style:"color:red"});
				}
				//============================F=========================================
				if($(".san_shi_qi_little_H").find("input[type = text]").eq(10).val() != '' && $(".san_shi_qi_little_H").find("input[type = text]").eq(11).val() != ""){
					bol9 = true;
					$(this).parents(".big_box").find("b").eq(5).attr({style:"color:black"})
				}else{
					$(this).parents(".big_box").find("b").eq(5).attr({style:"color:red"});
				}
				//===========================G==========================================
				if($(".san_shi_qi_little_H").find("input[type = text]").eq(12).val() != '' && $(".san_shi_qi_little_H").find("input[type = text]").eq(13).val() != ""){
					bol10 = true;
					$(this).parents(".big_box").find("b").eq(6).attr({style:"color:black"})
				}else{
					$(this).parents(".big_box").find("b").eq(6).attr({style:"color:red"});
				}
				//===========================H==========================================
				if($(".san_shi_qi_little_H").find("input[type = text]").eq(14).val() != '' && $(".san_shi_qi_little_H").find("input[type = text]").eq(15).val() != ""){
					bol11 = true;
					$(this).parents(".big_box").find("b").eq(7).attr({style:"color:black"})
				}else{
					$(this).parents(".big_box").find("b").eq(7).attr({style:"color:red"});
				}
				//============================I=========================================
				if($(".san_shi_qi_little_H").find("input[type = text]").eq(16).val() != ''){
					bol12 = true;
					$(this).parents(".big_box").find("b").eq(8).attr({style:"color:black"})
				}else{
					$(this).parents(".big_box").find("b").eq(8).attr({style:"color:red"});
				}
				//============================J=========================================
				if($(".san_shi_qi_little_H").find("input[type = text]").eq(17).val() != ''){
					bol13 = true;
					$(this).parents(".big_box").find("b").eq(9).attr({style:"color:black"})
				}else{
					$(this).parents(".big_box").find("b").eq(9).attr({style:"color:red"});
				}
				//=============================K========================================
				if($(".san_shi_qi_little_H").find("input[type = text]").eq(18).val() != ''){
					bol14 = true;
					$(this).parents(".big_box").find("b").eq(10).attr({style:"color:black"})
				}else{
					$(this).parents(".big_box").find("b").eq(10).attr({style:"color:red"});
				}
				
				
				
				if(bol4 == true && bol5 == true && bol6 == true && bol7 == true && bol8 == true && bol9 == true && bol10 == true && bol11 == true && bol12 == true && bol13 == true && bol14 == true ){
					$that.attr({style:"background:##6AAD3C"});
				}
				
				
				
				
			}




//			//满足条件开启向右滑动
			if($(this).css('background-color') == "rgb(106, 173, 60)"){
						//开启向右滑动
						mySwiper.unlockSwipeToNext();
			}else{
					//禁止向右滑动
						mySwiper.lockSwipeToNext();
						return false;
			}
			
			//判断是否为最后一页
			if($(".sport_page").text() == $(".page").text()){
				//禁止向右滑动
						mySwiper.lockSwipeToNext();
						return false;
			}else{
				//开启向右滑动
						mySwiper.unlockSwipeToNext();
			}
			


			
		});
	}
	
	
	
	
	//答题卡开启
	$('.number1').on('touchstart', function (){
//		 变色
		 $('.num_index li').eq($('.sport_page').html()-1).addClass('lis').siblings().removeClass('lis');
		var $flag = true;
		var $index = $('.swiper-slide:visible').eq($('.sport_page').html()-1).find('input[type = tel]');
		$.each($index, function (){
			if($(this).prev('label').attr('class') == 'label_checked' && $(this).val() == ''){
				$flag = false;
				return false;
			}
		})
		if($flag == false){
			$index.parents('.swiper-slide').find('.number').css({
				background : 'red'
			});
			return false;
		}
		var $flag2 = true;
		var $index2 = $('.swiper-slide:visible').eq($('.sport_page').html()-1).find('.number')
		$.each($index2, function (){
			console.log($(this).css('background'))
			if($(this).css('background') == 'rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
				$flag2 = false;
				return false;
			}
		})
		
		if($flag2 == false){
			return false;
		}
		
		$('.page').html($('.swiper-slide:visible').length);
		$('#card_bot').css({
			display : 'block' 
		});
		$('.meng').css({
			display : 'block'
		})
		$.each($(".swiper-slide:visible").find("label"), function(i,item) {
			if($(this).hasClass("label_checked") == true || $(this).hasClass("label_checked_1") == true){
				var num1 = mySwiper.activeIndex +3;
				$("li").eq(num1).removeClass("liss_l")
			
			}
		});
		
		var num = mySwiper.activeIndex +4;
		for( var i = 3 ; i < num ;i++){
			$("li").eq(i).removeClass("liss_l");
		}
		d();
		var $card_num = $('.page').html();
		var $li_num = parseInt($('.num_ul li:last').html())+1;
		if($li_num <= $card_num){
			for(var i = $li_num; i<= $card_num; i++ ){
				$("<li class='liss liss_l'> " + (i) + "</li> ").appendTo($('.num_index ul'));
			}
		}else{
			for(var i = $card_num; i< $li_num-1; i++ ){
				$('.num_ul li:last').remove();
			}
				
		}
		
	
	});
	
	
//答题卡动态创建
	function b(){
		 //总页数赋值
    	$('.page').html($('.swiper-slide:visible').length);
    	c()
	}

	 function c() {
	 	
	 	$(".liss").remove();
	 	
		$('.swiper-slide:visible').each(function (i,item){
			$("<li class='liss liss_l'> " + (i+1) + "</li> ").appendTo($('.num_index ul'));
		});
    }
//	c();
	var flagc = true;
	function d(){
				//答题卡点击
	$('.num_index li').on('touchstart', function (event) {
		event.preventDefault();
		if($(this).hasClass("liss_l") == true){
		}else{
			//刷新
			mySwiper.updateSlidesSize();
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
	};
	
	
	
	$(".hide9").hide();
	$(".hide10").hide(); 
	$('.hide_9_10').hide();
	
		
	
	var $fa = $('label[father1 = a]');
	var $ma =  $('label[mother2 = a]');
	var $fb = $('label[father1 = b]');
	var $mb =  $('label[mother2 = b]');
	var bool_9 = false;
	if(($fa.attr("class")=="label_checked_3")||($fb.attr("class")=="label_checked_3")){
		bool_9 = true;
		
	}
	var bool_10 = false;
	if(($ma.attr("class")=="label_checked_3")||($mb.attr("class")=="label_checked_3")){
		bool_10 = true;
	}
	$fa.on('click',function(){
		if(!($fa.attr("class")=="label_checked_3")){//选中
			bool_9=true;
		}else{//如果未选中先判断下面的是否选中
			if(($fb.attr("class")=="label_checked_3")){
				bool_9=true;
			}else{
				bool_9 = false;
			};
		};
		if(($ma.attr("class")=="label_checked_3")){//选中
			bool_10=true;
		}else{//如果未选中先判断下面的是否选中
			if(($mb.attr("class")=="label_checked_3")){
				bool_10=true;
			}else{
				bool_10 = false;
			};
		};
		if(bool_9){
			$('.hide_9_10').show();
			$(".hide9").show();
		}else if(bool_10){
			if($(".hide9 label").hasClass('label_checked')){
				$(".hide9").find('label').removeClass('label_checked');
			}
			$(".hide9").hide();
		}else{
			if($(".hide9 label").hasClass('label_checked')){
				$(".hide9").find('label').removeClass('label_checked');
			}
			if($(".hide10 label").hasClass('label_checked')){
				$(".hide10").find('label').removeClass('label_checked');
			}
			$('.hide_9_10').hide();
			$(".hide9").hide();
			$(".hide10").hide();
		};
  	});
	$fb.on('click', function(){
//		alert(1)
		if(!($fb.attr("class")=="label_checked_3")){//选中
			bool_9=true;
		}else{//如果未选中先判断下面的是否选中
			if(($fa.attr("class")=="label_checked_3")){
				bool_9=true;
			}else{
				bool_9 = false;
			}
		};
		if(($ma.attr("class")=="label_checked_3")){//选中
			bool_10=true;
		}else{//如果未选中先判断下面的是否选中
			if(($mb.attr("class")=="label_checked_3")){
				bool_10=true;
			}else{
				bool_10 = false;
			}
		};
		if(bool_9){
			$('.hide_9_10').show();
			$(".hide9").show();
		}else if(bool_10){
			if($(".hide9 label").hasClass('label_checked')){
				$(".hide9").find('label').removeClass('label_checked');
			}
			$(".hide9").hide();
		}else{
			$('.hide_9_10').hide();
			if($(".hide9 label").hasClass('label_checked')){
				$(".hide9").find('label').removeClass('label_checked');
			}
			if($(".hide10 label").hasClass('label_checked')){
				$(".hide10").find('label').removeClass('label_checked');
			}
			$(".hide9").hide();
			$(".hide10").hide();
		}
	});
	$ma.on('click', function(){
		if(!($ma.attr("class")=="label_checked_3")){//选中
			bool_10=true;
		}else{//如果未选中先判断下面的是否选中
			if(($mb.attr("class")=="label_checked_3")){
				bool_10=true;
			}else{
				bool_10 = false;
			}
		}
		if(($fa.attr("class")=="label_checked_3")){//选中
			bool_9=true;
		}else{//如果未选中先判断下面的是否选中
			if(($fb.attr("class")=="label_checked_3")){
				bool_9=true;
			}else{
				bool_9 = false;
			}
		}
		if(bool_10){
			$('.hide_9_10').show();
			$(".hide10").show();
		}else if(bool_9){
			if($(".hide10 label").hasClass('label_checked')){
				$(".hide10").find('label').removeClass('label_checked');
			}
			
			$(".hide10").hide();
		}else{
			$('.hide_9_10').hide();
			if($(".hide9 label").hasClass('label_checked')){
				$(".hide9").find('label').removeClass('label_checked');
			}
			if($(".hide10 label").hasClass('label_checked')){
				$(".hide10").find('label').removeClass('label_checked');
			}
			$(".hide9").hide();
			$(".hide10").hide();
		}
  	});
  	$mb.on('click', function(){
		if(!($mb.attr("class")=="label_checked_3")){//选中
			bool_10=true;
		}else{//如果未选中先判断下面的是否选中
			if(($ma.attr("class")=="label_checked_3")){
				bool_10=true;
			}else{
				bool_10 = false;
			}
		}
		if(($fa.attr("class")=="label_checked_3")){//选中
			bool_9=true;
		}else{//如果未选中先判断下面的是否选中
			if(($fb.attr("class")=="label_checked_3")){
				bool_9=true;
			}else{
				bool_9 = false;
			}
		}
		if(bool_10){
			$('.hide_9_10').show();
			$(".hide10").show();
		}else if(bool_9){
			
			if($(".hide10 label").hasClass('label_checked')){
				$(".hide10").find('label').removeClass('label_checked');
			}
			$(".hide10").hide();
		}else{
			$('.hide_9_10').hide();
			if($(".hide9 label").hasClass('label_checked')){
				$(".hide9").find('label').removeClass('label_checked');
			}
			if($(".hide10 label").hasClass('label_checked')){
				$(".hide10").find('label').removeClass('label_checked');
			}
			$(".hide9").hide();
			$(".hide10").hide();
		}
  	});
	})
	

	
	
	
	
	
	
	
	
	
	
	//#############修改56-71题默认10分钟

$('#scroller56').change(function () {
							   			
		var $val = $('#scroller56').val().split('小时');
   
   		if($val[0] == 0 && $val[1] <= 10){
			
			$(this).val("10");
			
		}
   		if($val[0] == 0 && $val[1] >= 10){
   			$(this).val($val[1]);
   		}
		
	})



$('#scroller57').change(function () {
							   			
		var $val = $('#scroller57').val().split('小时');
   
   			if($val[0] == 0 && $val[1] <= 10){
			
				$(this).val("10")
			
			}
   			if($val[0] == 0 && $val[1] >= 10){
   				$(this).val($val[1]);
   			}
	})


	
$('#scroller59').change(function () {
							   			
		var $val = $('#scroller59').val().split('小时');
   
   			if($val[0] == 0 && $val[1] <= 10){
			
				$(this).val("10")
			
			}
   			if($val[0] == 0 && $val[1] >= 10){
   				$(this).val($val[1]);
   			}
	})	
	
	
	$('#scroller60').change(function () {
							   			
		var $val = $('#scroller60').val().split('小时');
   
   			if($val[0] == 0 && $val[1] <= 10){
			
				$(this).val("10")
			
			}
   			
   			if($val[0] == 0 && $val[1] >= 10){
   				$(this).val($val[1]);
   			}
	})
	
	
	$('#scroller62').change(function () {
							   			
		var $val = $('#scroller62').val().split('小时');
   
   			if($val[0] == 0 && $val[1] <= 10){
			
				$(this).val("10")
				
			}
   			if($val[0] == 0 && $val[1] >= 10){
   				$(this).val($val[1]);
   			}
	})
	
	
	$('#scroller64').change(function () {
							   			
		var $val = $('#scroller64').val().split('小时');
   
   			if($val[0] == 0 && $val[1] <= 10){
			
				$(this).val("10")
			
			}
   			if($val[0] == 0 && $val[1] >= 10){
   				$(this).val($val[1]);
   			}
	})	
	
	$('#scroller66').change(function () {
							   			
		var $val = $('#scroller66').val().split('小时');
   
   			if($val[0] == 0 && $val[1] <= 10){
			
				$(this).val("10")
			
			}
   			if($val[0] == 0 && $val[1] >= 10){
   				$(this).val($val[1]);
   			}
	})




	//67

$('#selects67_m').change(function () {
		var $val = $('#selects67_h').val();
         if(($('#selects67_h').prev().val() == '' || $('#selects67_h').prev().val() == 0)&& $(this).prev().val() <=10 ){
   			
   			$(this).prev().val('10');
   	
		
		}else{
			$("#selects67_m").children('option:first-child').remove();
			for(var i = 0; i <= 57; i++){
				$("<option value=" + i + " >" + i + " </option>").appendTo('#selects67_m');
			}
			
		}
	})
	
	$('#selects67_h').change(function (){
		if($(this).prev().val() == 0){
			$('#selects67_m').prev().val("10");
		}
	})


//68
$('#selects68_m').change(function () {
	   			
		var $val = $('#selects68_h').val();
         if(($('#selects68_h').prev().val() == '' || $('#selects68_h').prev().val() == 0) && $(this).prev().val() <=10){
   			
   			$(this).prev().val('10');
   	
		
		}else{
			$("#selects68_m").children('option:first-child').remove();
			for(var i = 0; i <= 58; i++){
				$("<option value=" + i + " >" + i + " </option>").appendTo('#selects68_m');
			}
			
		}
	})
	
	$('#selects68_h').change(function (){
		if($(this).prev().val() == 0){
			$('#selects68_m').prev().val("10");
		}
	})
	
	//69
	$('#selects69_m').change(function () {
	   			
		var $val = $('#selects69_h').val();
         if(($('#selects69_h').prev().val() == '' || $('#selects69_h').prev().val() == 0 ) && $(this).prev().val() <=10){
   			
   			$(this).prev().val('10');
   	
		
		}else{
			$("#selects69_m").children('option:first-child').remove();
			for(var i = 0; i <= 59; i++){
				$("<option value=" + i + " >" + i + " </option>").appendTo('#selects69_m');
			}
			
		}
	})
	
	$('#selects69_h').change(function (){
		if($(this).prev().val() == 0){
			$('#selects69_m').prev().val("10");
		}
	})
	//
	
	
	//70
	$('#selects70_m').change(function () {
	   			
		var $val = $('#selects70_h').val();
         if(($('#selects70_h').prev().val() == '' || $('#selects70_h').prev().val() == 0) && $(this).prev().val() <=10){
   			
   			$(this).prev().val('10');
   	
		
		}else{
			$("#selects70_m").children('option:first-child').remove();
			for(var i = 0; i <= 59; i++){
				$("<option value=" + i + " >" + i + " </option>").appendTo('#selects70_m');
			}
			
		}
	})
	
	$('#selects70_h').change(function (){
		if($(this).prev().val() == 0){
			$('#selects70_m').prev().val("10");
		}
	})
   

	
	$('#selects71_m').change(function () {
//			   			
		var $val = $('#selects71_h').val();
   		
   		if(($('#selects71_h').prev().val() == '' || $('#selects71_h').prev().val() == 0) && $(this).prev().val() <=10){
   			
   			$(this).prev().val('10');		
		}else{
			$("#selects71_m").children('option:first-child').remove();
			for(var i = 0; i <= 59; i++){
				$("<option value=" + i + " >" + i + " </option>").appendTo('#selects71_m');
			}
		}
	})
	$('#selects71_h').change(function (){
		if($(this).prev().val() == 0){
			$('#selects71_m').prev().val("10");
		}
	})

	
	$('label[jiu=tel]').on('touchmove', function (){
		$.each($('label[jiu=tel]'), function (){
			if($(this).attr('class') == 'label_checked' || $(this).attr('class') == 'label_checked_1'){
				$(this).next('input').attr('disabled', false);
			}
			
		})
	})
	function dis_true(a){
//		a.on("touchend",function(){
//			judge(this);
//		})
		a.next('input').attr('disabled', false);
	}
	


//})
var $len = $('.swiper-slide:visible').length-1;


var indexMy = mySwiper.activeIndex;
function _touch(event){
	var $len = $('.swiper-slide:visible').length-1;
	var indexMy = mySwiper.activeIndex;
			if($len <= indexMy && $('.swiper-slide:last .big_box').find('label.label_checked').size() >= 2 && $('.page').html() == $('.page').html()){
		setTimeout(function () {
			$('.save_font').html('提交');
		}, 200)	
			
			
				return false;				
			}else {
				$('.save_font').html('暂存');
			}
				
		
		
		
	}


	




//全变绿
function all_green () {
	
	$li = $('li.liss_l');
	$li.removeClass('liss_l');
}