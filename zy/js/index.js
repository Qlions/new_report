

//function indexf(){
	

$(function(){
		
	//向上滑动翻页
	touch.on(".wrap","swipeleft",function(){
		$(".wrap").css({
			left:"-100%",
		})
	})
	
	
	
	

//答题卡动态创建
    function a() {
    	$('.swiper-slide:visible').each(function (i,item){
//  		$('.num_index li').html($(this).index());
    		if(i < 66){
    			$("<li class='liss liss_l'> " + ($(this).find('.number').text()) + "</li> ").appendTo($('.num_index ul'));
    			
    		}
    	});
    	
    }
    
    a();
	
	//总页数赋值
    $('.page').html($('.swiper-slide').length-1);


   //答题卡开启
	$('.number1').on('touchstart', function (){
		$('.num_index li').eq($('.sport_page').html()-1).addClass('lis').siblings().removeClass('lis');
		$('#card_bot').css({
			display : 'block' 
		});
		$('.meng').css({
			display : 'block'
		})
		
		var num = $(".label_checked").length+2;
		console.log(num);
		for( var i = 3 ; i < num ;i++){
			$("li").eq(i).removeClass("liss_l");
		}
	});

	//答题卡关闭
	$('.close_this').on('touchstart',function () {
		$(this).parent().parent().parent().css({
		 display : 'none'
		});
		$('.meng').css({ 
			display : 'none'
		})
	});

	
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
