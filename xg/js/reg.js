
//12题验证数字
$(function (){
	
	function   validate(sDouble){
	    var re = /^\d{2,3}$/;
	 //数字，最少一位，最多两位
	    return   re.test(sDouble) 
		} 
		
	//12题	
	$(".smoke_12").blur(function () {
//		console.log($(this).val().length)
		  if ($(this).val().length >= 3) {
		  	  $(this).val('');

		   }

	   })
	
	//19题
	
	$(".smoke_19").blur(function () {
//		console.log($(this).val().length)
		  if ($(this).val().length >= 3) {
		  	  $(this).val('');

		   }

	   })
	
	//32题
	
	$(".drinktea_32").blur(function () {
//		console.log($(this).val().length)
		  if ($(this).val().length >= 3) {
		  	  $(this).val('');

		   }

	   })
	//33题
	
	$(".drinktea_33").blur(function () {
//		console.log($(this).val().length)
		  if ($(this).val().length >= 3) {
		  	  $(this).val('');

		   }

	   })
	
	$(".drinktea_34").blur(function () {
//		console.log($(this).val().length)
		  if ($(this).val().length >= 3) {
		  	  $(this).val('');

		   }

	   })
	
	$(".drinktea_42").blur(function () {
//		console.log($(this).val().length)
		  if ($(this).val().length >= 3) {
		  	  $(this).val('');

		   }

	   })
	
	
	$(".drink_48").blur(function () {
//		console.log($(this).val().length)
		  if ($(this).val().length >= 3) {
		  	  $(this).val('');

		   }

	   })
	
	//112题
	
	function checkBody(check){
	    var re = /^\d{2,3}$/;
	 //数字，最少一位，最多两位
	    return   re.test(check) 
		}
	
	
	$(".checkBody_112").blur(function checkBody() {
//		console.log($(this).val().length)
		  if ($(this).val().length > 3) {
		  	  $(this).val('');

		   }

	   })
	//115题正则
	
	function exper(data){
		var re = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/;


		return re.test(data);
		
		
	}
	
	$(".exper_115").blur(function exper() {
//		console.log($(this).val().length)
		  if ($(this).val().length > 5) {
		  	  $(this).val('');

		   }

	   })
	
	
	//十九验证请选择
	function shijiu ( a,b){
		$(a).blur(function () {
		if($(b).val() == '请选择') {
			
			$(this).val('')
		}
	})
}
	
	
	
	//十九题a验证
	shijiu ( $('.smoke19a'),$('#week_a_dummy'));
	shijiu ( $('.smoke19b'),$('#week_b_dummy'));
	shijiu ( $('.smoke19c'),$('#week_c_dummy'));
	shijiu ( $('.smoke19d'),$('#week_d_dummy'));  
	shijiu ( $('.smoke19e'),$('#week_e_dummy'));
	shijiu ( $('.smoke19f'),$('#week_f_dummy'));
//	        $(".smoke19a").val() = "";
	
	
	
	//37题验证
	
//	   function (){
//	   	var aa =  $("#mobiscroll1477627422228_dummy").find("option").val();
//	
//	       console.log(aa);
//	   	
//	   	
//	   	
//	   }
	
	
//	
	
	
	
	
	
	
	
	
//	function sanshiqi(a,b){
//		$(".neverEat37").hide();
//		console.log("hide37A")
//		$(a).blur(function () {
//		if($(a).find("option").val() = '1天或不吃') {
//			   console.log("1天没吃");
//			$(".neverEat37").show();
//			console.log("SHOW37");
//			$(b).val('从来不吃');
//		}else{
//			$(".neverEat37").hide();
//			console.log("hide37B");
//		}
//	})
//		
//		
//	}
//
//	sanshiqi($(".selects37_week_a"),$(".selects37_day_a"));





	
	
	
	
//结束括号	
})	



	
	
	
	



