

//function indexf(){
	

$(function(){
		
	//向上滑动翻页
	touch.on(".wrap","swipeleft",function(){
		$(".wrap").css({
			left:"-100%",
		})
	})
//	下滑动翻页
	
	
	

	//答题卡关闭
	$('.close_this').on('touchstart',function (event) {
		event.preventDefault();
		$(this).parent().parent().parent().css({
		 display : 'none'
		});
		$('.meng').css({ 
			display : 'none'
		})
	});

	//长页面提示箭头 显示隐藏
	$(".swiper-slide").on("touchend",function(){
		
			var num = $(this).index();
		 
			if(num >=33 ){
			$(".tishijiantou").show()
		}
//		console.log(num)
	})
	//JS辨别访问浏览器判断是android还是ios系统
	var ua = navigator.userAgent.toLowerCase();	
	if (/iphone|ipad|ipod/.test(ua)) {
		    //alert("iphone");	
	} else if (/android/.test(ua)) {
//		    alert("android");
		    $(".number").css({
		    	paddingTop: "0.05rem",
		    	textAlign: "center",
		    })
		    

	}
	
	
	$("#you_29").on("click",function(){
		$(".hide_30_36").show();
		//刷新
		
		
			mySwiper.updateSlidesSize();
		b();
	})
	
	$("#xiyan_11").on("click",function(){
		
		$(".hide_12_15").show();
		$(".hide_16_18").show();
		$(".hide_19").show();
		$(".hide_20_21").show();
		
		if($(".hide_22_25 label").hasClass('label_checked')){
			$(".hide_22_25").find('label').removeClass('label_checked');
		}
		if($(".hide_22_25").find('input').val() != ''){
			$(".hide_22_25").find('input').val('');
		}
		
		$(".hide_22_25").hide();
	/*	$(".hide_25_27").show();*/
		if($(".hide_25_27 label").hasClass('label_checked')){
			$(".hide_25_27").find('label').removeClass('label_checked');
		}
		if($(".hide_25_27").find('input').val() != ''){
			$(".hide_25_27").find('input').val('');
		}
		
		$(".hide_25_27").hide();
		
		
		//刷新
			mySwiper.updateSlidesSize();
		b();
	})
	
	$("#jieyan_11").on("click",function(){
		if($(".hide_12_15 label").hasClass('label_checked')){
			$(".hide_12_15").find('label').removeClass('label_checked');
		}
		if($(".hide_12_15").find('input').val() != ''){
			$(".hide_12_15").find('input').val('');
		}
		
		$(".hide_12_15").hide();
		
		
		if($(".hide_16_18 label").hasClass('label_checked')){
			$(".hide_16_18").find('label').removeClass('label_checked');
		}
		if($(".hide_16_18").find('input').val() != ''){
			$(".hide_16_18").find('input').val('');
		}
		
		$(".hide_16_18").hide();
		
		
		if($(".hide_19 label").hasClass('label_checked')){
			$(".hide_19").find('label').removeClass('label_checked');
		}
		if($(".hide_19").find('input').val() != ''){
			$(".hide_19").find('input').val('');
		}
		
		$(".hide_19").hide();
		
		
		if($(".hide_20_21 label").hasClass('label_checked')){
			$(".hide_20_21").find('label').removeClass('label_checked');
		}
		if($(".hide_20_21").find('input').val() != ''){
			$(".hide_20_21").find('input').val('');
		}
		
		$(".hide_20_21").hide();
		$(".hide_22_25").show();
		if($(".hide_25_27 label").hasClass('label_checked')){
			$(".hide_25_27").find('label').removeClass('label_checked');
		}
		if($(".hide_25_27").find('input').val() != ''){
			$(".hide_25_27").find('input').val('');
		}
		
		$(".hide_25_27").hide();
		
		//刷新
			mySwiper.updateSlidesSize();
		b();
	})
	
	$("#buxiyan_11").on("click",function(){
		$(".hide_12_15").hide();
		if($(".hide_12_15 label").hasClass('label_checked')){
			$(".hide_12_15").find('label').removeClass('label_checked');
		}
		if($(".hide_12_15").find('input').val() != ''){
			$(".hide_12_15").find('input').val('');
		}
		$(".hide_16_18").hide();
		                        
		$(".hide_19").hide();
		
		
		if($(".hide_19 label").hasClass('label_checked')){
			$(".hide_19").find('label').removeClass('label_checked');
		}
		if($(".hide_19").find('input').val() != ''){
			$(".hide_19").find('input').val('');
		}
		
		
		
		$(".hide_20_21").hide();
		if($(".hide_20_21 label").hasClass('label_checked')){
			$(".hide_20_21").find('label').removeClass('label_checked');
		}
		if($(".hide_20_21").find('input').val() != ''){
			$(".hide_20_21").find('input').val('');
		}
		if($(".hide_20_21").find('label').hasClass('label_checked_1')){
			$(".hide_20_21").find('label').removeClass('label_checked_1');
		}
		
		$(".hide_22_25").hide();
		if($(".hide_22_25 label").hasClass('label_checked')){
			$(".hide_22_25").find('label').removeClass('label_checked');
		}
		if($(".hide_22_25").find('input').val() != ''){
			$(".hide_22_25").find('input').val('');
		}
		
		$(".hide_25_27").show();
		
		//刷新
			mySwiper.updateSlidesSize();
			b();
		
	});
	//26
	$(".hide26").hide();
	$("#smoke25_yes").on("click",function(){
		
		$(".hide26").show();
		
	})
	
	
	$("#smoke25_no").on("click",function(){
		
		$(".hide26").hide();
		if($(".hide26 label").hasClass('label_checked')){
			$(".hide_20_21").find('label').removeClass('label_checked');
		}
		if($(".hide26").find('input').val() != ''){
			$(".hide26").find('input').val('');
		}
		
		
	})

	//28题
	
	$("#never_28").on("click",function(){
			$(".hide_29").hide();
			if($(".hide_29 label").hasClass('label_checked')){
				$(".hide_29").find('label').removeClass('label_checked');
			}
			if($(".hide_29").find('input').val() != ''){
				$(".hide_29").find('input').val('');
			}
			
			
			$(".hide_30_36").hide();
			if($(".hide_30_36 label").hasClass('label_checked')){
				$(".hide_30_36").find('label').removeClass('label_checked');
			}
			if($(".hide_30_36").find('input').val() != ''){
				$(".hide_30_36").find('input').val('');
			}
			
		
		
		//刷新
			mySwiper.updateSlidesSize();
		b();
	});
	
	
	
	$("#show_29a").on("click",function(){
		
		$(".hide_29").show();
		if($('#you_29').attr('class') == 'label_checked'){
			$(".hide_30_36").show();
		}else {
			$(".hide_30_36").hide();
		}
//		
		
		//刷新
			mySwiper.updateSlidesSize();
	b();
	});
	
	$('#no_hide_102').hide();
//	$('#show101').on('click', function (){
//		
////		$('.hide_102_105').show();
//		//刷新
//		mySwiper.updateSlidesSize();
//		b();
//	});
	
	
	/*$('#hide101').on('click', function (){//101点击隐藏
		$('.hide101').hide();
		$('#no_hide_102').hide();
		//刷新
		mySwiper.updateSlidesSize();
		b();
	});*/
	
	
	$('#haveBaby_101').on('click', function (){
		
		$('#no_hide_102').show();
		//刷新
		mySwiper.updateSlidesSize();
		b();
	});
	
    $('#noBaby_101').on('click', function (){
    	if($(".no_hide_102 label").hasClass('label_checked')){
			$(".no_hide_102").find('label').removeClass('label_checked');
		}
		if($(".no_hide_102").find('input').val() != ''){
			$(".no_hide_102").find('input').val('');
		}
		
		$('#no_hide_102').hide();
		//刷新
		mySwiper.updateSlidesSize();
		b();
	});
	
	
	$("#show_29b").on("click",function(){
		
		$(".hide_29").show();
		if($('#you_29').attr('class') == 'label_checked'){
			$(".hide_30_36").show();
		}else {
			$(".hide_30_36").hide();
		}
		
		//刷新
			mySwiper.updateSlidesSize();
	b();
	});
	
	
	
	$("#show_29c").on("click",function(){
		
		$(".hide_29").show();
		if($('#you_29').attr('class') == 'label_checked'){
			$(".hide_30_36").show();
		}else {
			$(".hide_30_36").hide();
		}
		
		
		//刷新
			mySwiper.updateSlidesSize();
	b();
	});
	
//	$.each($('#tea_freq').find('label'), function (){
//		if($(this).attr('class') == 'label_checked' && $(this).attr('id') == 'lessweek_28'){
//			$(".hide_29").hide();
//			$(".hide_30_36").show();
//			mySwiper.updateSlidesSize();
//			b();
//		}
//	})
//	
	
	
	$("#lessweek_28").on("click",function(){
		if($(".hide_29 label").hasClass('label_checked')){
			$(".hide_29").find('label').removeClass('label_checked');
		}
		if($(".hide_29").find('input').val() != ''){
			$(".hide_29").find('input').val('');
		}
		
		$(".hide_29").hide();
		$(".hide_30_36").show();
	
	//刷新
			mySwiper.updateSlidesSize();
			b();
	})
	
	//44
	

	
	$("#never_44").on("click",function(){
		if($(".hide_45-54 label").hasClass('label_checked')){
			
			$(".hide_45-54").find('label').removeClass('label_checked');
		}
		$(".hide_45-54").find('[question = question_48_b] label').removeClass('label_checked_1');
		$(".hide_45-54").find('[question = question_48_b] label').addClass('label_checked_2');
		$(".hide_45-54").find('[question = question_48_c] label').removeClass('label_checked_1');
		$(".hide_45-54").find('[question = question_48_c] label').addClass('label_checked_2');
		$(".hide_45-54").find('input').val('');
			
		
		$(".hide_45-54").hide();
	
	//刷新
			mySwiper.updateSlidesSize();
		b();
		
	})
	$("#hejiu_44").on("click",function(){
		$(".hide_45-54").show();
	
	//刷新
			mySwiper.updateSlidesSize();
		
		b();
	})
	
	
	$("#meiyou_29").on("click",function(){
		if($(".hide_30_36 label").hasClass('label_checked')){
			$(".hide_30_36").find('label').removeClass('label_checked');
		}
		if($(".hide_30_36").find('input').val() != ''){
			$(".hide_30_36").find('input').val('');
		}
		
		$(".hide_30_36").hide();
		
		//刷新
			mySwiper.updateSlidesSize();
			b();
	})
	
	
	$("#you_55").on("click",function(){
		$(".hidden_56-57").show();
	//刷新
			mySwiper.updateSlidesSize();
			b();
})	
	$("#meiyou_55").on("click",function(){
		if($(".hidden_56-57 label").hasClass('label_checked')){
			$(".hidden_56-57").find('label').removeClass('label_checked');
		}
		if($(".hidden_56-57").find('input').val() != ''){
			$(".hidden_56-57").find('input').val('');
		}
		
	$(".hidden_56-57").hide();
	
	//开启向右滑动
	mySwiper.unlockSwipeToNext();
	mySwiper.slideNext();
	$(this).parents(".big_box").find(".number").attr({style:"background:#999966"})
	b();

  })
	
	
	
	
	$("#you_58").on("click",function(){
		
	$(".hidden_59-60").show();
	b();
})	
	
	$("#meiyou_58").on("click",function(){
		if($(".hidden_59-60 label").hasClass('label_checked')){
			$(".hidden_59-60").find('label').removeClass('label_checked');
		}
		if($(".hidden_59-60").find('input').val() != ''){
			$(".hidden_59-60").find('input').val('');
		}
		
	$(".hidden_59-60").hide();
	
	//开启向右滑动
	mySwiper.unlockSwipeToNext();
	mySwiper.slideNext();
	$(this).parents(".big_box").find(".number").attr({style:"background:#999966"})
b();
  })
	
  

   $("#you_61").on("click",function(){
	$(".hidden_62").show();
	b();
})	
	$("#meiyou_61").on("click",function(){
		if($(".hidden_62 label").hasClass('label_checked')){
			$(".hidden_62").find('label').removeClass('label_checked');
		}
		if($(".hidden_62").find('input').val() != ''){
			$(".hidden_62").find('input').val('');
		}
		
	$(".hidden_62").hide();
	
	//开启向右滑动
	mySwiper.unlockSwipeToNext();
	mySwiper.slideNext();
	$(this).parents(".big_box").find(".number").attr({style:"background:#999966"})
	b();
  })



   $("#you_63").on("click",function(){
	$(".hidden_64").show();
	b();
})	
	$("#meiyou_63").on("click",function(){
		if($(".hidden_64 label").hasClass('label_checked')){
			$(".hidden_64").find('label').removeClass('label_checked');
		}
		if($(".hidden_64").find('input').val() != ''){
			$(".hidden_64").find('input').val('');
		}
		
	$(".hidden_64").hide();
	//开启向右滑动
	
	mySwiper.unlockSwipeToNext();
	mySwiper.slideNext();
	$(this).parents(".big_box").find(".number").attr({style:"background:#999966"})
	b();
  })
	
	
	
	$("#you_65").on("click",function(){
	$(".hidden_66-73").show();
	$(".tishijiantou").show();
	b();
})	
	$("#meiyou_65").on("click",function(){
		if($(".hidden_66-73 label").hasClass('label_checked')){
			$(".hidden_66-73").find('label').removeClass('label_checked');
		}
		if($(".hidden_66-73").find('input').val() != ''){
			$(".hidden_66-73").find('input').val('');
		}
		
	$(".hidden_66-73").hide();
	
	
	$(".tishijiantou").hide();
	//开启向右滑动
	
	mySwiper.unlockSwipeToNext();
	mySwiper.slideNext();
	$(this).parents(".big_box").find(".number").attr({style:"background:#999966"})
	b();
  })
	
	
	//101题
	
	$("#haveBaby_101").on("click",function(){
	$(".hide_102_105").show();
	//刷新
	
			mySwiper.updateSlidesSize();
			b();
})	
	
	
	$("#noBaby_101").on("click",function(){
		
		$("#no_hide_102").find('#label_radio104_H label').removeClass('label_checked_1');
		$("#no_hide_102").find('#label_radio104_H label').addClass('label_checked_2');
			$("#no_hide_102").find('input').val('');
		
		
	$(".hide_102_105").hide();
	//刷新
	
			mySwiper.updateSlidesSize();
			b();
})	
	
	
	
	
	
	
	
	

	//103shit
	$(' label[hide=stomach]').on('click', function (){
		if($(this).attr("class") == 'label_checked_2 label_checked_103' ) {
			
			$(this).attr('class', 'label_checked_2')
			
		}
		if($(this).attr("class") == "label_checked_2"){
			$(".stomachHide").show();
		
		}else{
			$(".stomachHide").find('label').removeClass('label_checked_1');
			$(".stomachHide").find('label').addClass('label_checked_2');
			$(".stomachHide").hide();
		}
		//刷新
			mySwiper.updateSlidesSize();
	})
/*	$("div[a=stomachHide]").hide();*/
	$("label[hide=hide]").on("click",function(event){
		
	
		if($(this).attr("class") == 'label_checked_2 label_checked_103 stomach' ) {
			
			$('#abdominal_pain').attr('class', 'label_checked_2')
			
		}
		if($(this).attr("class") == "label_checked_2"){
		
			$("div[a=stomachHide]").show();
		}else{
			$("[a=stomachHide]").find('label').removeClass('label_checked_1');
			$("[a=stomachHide]").find('label').addClass('label_checked_2')
			
			$("div[a=stomachHide]").hide();
		}
		
		
		//刷新
			mySwiper.updateSlidesSize();
			
	});
	
	$('.hide').on('click',function (event){
		if($(this).attr("class") == "label_checked_2"){
			$("[a=stomachHide]").find('label').removeClass('label_checked_1');
			$("[a=stomachHide]").find('label').addClass('label_checked_2')
			$("[a=stomachHide]").hide();
		
		}else{
			
				
			
			$("[a=stomachHide]").show();
		}
		//刷新
			mySwiper.updateSlidesSize();
	})

/*	var num12 = 1
	$(".stomach").on("touchstart",function(){
	
		num12++;
		if(num12%2 == 0){
			$(".stomachHide").hide();	
		}else{
			
			$(".stomachHide").show();
		}
		//刷新
			mySwiper.updateSlidesSize();
	})*/
	
	
	
	var num1 = 1
  $(".shit").on("click",function(){
	  console.log($(this).attr('class'))
	  if($(this).attr("class") == 'label_checked_2 label_checked_103 shit' ) {
			
			$(this).attr('class', 'label_checked_2')
			
		}
	  if($(this).attr("class") == "label_checked_2"){
			
		  $(".shitHide").show();
		}else{
			$(".shitHide").find('label').removeClass('label_checked_1');
			$(".shitHide").find('label').addClass('label_checked_2')
		$(".shitHide").hide();
		}
  	num1++;
		
  	//刷新
	mySwiper.updateSlidesSize();
  })
	
	
	$(".hert").on("click",function(){
		if($(this).attr("class") == 'label_checked_2 label_checked_103 hert' ) {
			$(this).attr('class', 'label_checked_2')
			
		}
	  if($(this).attr("class") == "label_checked_2"){
			
		  $(".hertHide").show();
		}else{
			$(".hertHide").find('label').removeClass('label_checked_1');
			$(".hertHide").find('label').addClass('label_checked_2')
		$(".hertHide").hide();
		}
  		
  	//刷新
	mySwiper.updateSlidesSize();
  })
	
	
	
	$(".hertmore").on("click",function(){
		if($(this).attr("class") == 'label_checked_2 hertmore label_checked_103' ) {
			$(this).attr('class', 'label_checked_2')
		}
	
	  if($(this).attr("class") == "label_checked_2"){
			
		  $(".hertmoreHide").show();
		}else{
			$(".hertmoreHide").find('label').removeClass('label_checked_1');
			$(".hertmoreHide").find('label').addClass('label_checked_2')
		$(".hertmoreHide").hide();
		}
	  	
  	//刷新
	mySwiper.updateSlidesSize();
  })
	
  //107
  
  	$("#yes_107").on("click",function(){
	$(".hide_108_110").show();
	//刷新
			mySwiper.updateSlidesSize();
})	

	
	$("#no_107").on("click",function(){
		if($(".hide_108_110 label").hasClass('label_checked')){
			$(".hide_108_110").find('label').removeClass('label_checked');
		}
		if($(".hide_108_110").find('input').val() != ''){
			$(".hide_108_110").find('input').val('');
		}
		
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
		if($(".hide110 label").hasClass('label_checked')){
			$(".hide110").find('label').removeClass('label_checked');
		}
		if($(".hide110").find('input').val() != ''){
			$(".hide110").find('input').val('');
		}
		
	$(".hide110").hide();
	//刷新
			mySwiper.updateSlidesSize();
});



	//答题卡动态创建
	function b(){
		 //总页数赋值
    	$('.page').html($('.swiper-slide:visible').length);
//  	c()
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	})

	
//}
