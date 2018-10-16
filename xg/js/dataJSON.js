//order 为题号 ； num 为答案号  1是      2否
$(function () {
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
		console.log(zyjson)
	})
	
	
})
