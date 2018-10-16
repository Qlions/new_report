

//function indexf(){
	

$(function(){
		
	//向上滑动翻页
	touch.on(".wrap","swipeleft",function(){
		$(".wrap").css({
			left:"-100%",
		})
	})
//	下滑动翻页
	
	
	

//答题卡动态创建
    function a() {
    	$('.swiper-slide').each(function (){
//  		$('.num_index li').html($(this).index());
    		$("<li class='liss liss_l'> " + ($(this).index()+1) + "</li> ").appendTo($('.num_index ul'));
    	});
    	
    }
    
    a();
	
	//总页数赋值
    $('.page').html($('.swiper-slide').length);


////答题卡开启
	$('.number1').on('touchstart', function (){
		$('#card_bot').css({
			display : 'block' 
		});
		$('.meng').css({
			display : 'block'
		})
		var num = $(".label_checked").length +3;
		
		for( var i = 3 ; i < num ;i++){
			$("li").eq(i).removeClass("liss_l");
		}
		
	});

	//答题卡关闭
	$('.close_this').on('touchstart',function () {
		$(this).parents('#card_bot').css({
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	})

	
//}
