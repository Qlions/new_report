//types 为体制分类； order 为题号 ； num 为答案号
$(function () {
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
	
	
})
