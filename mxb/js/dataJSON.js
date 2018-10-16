function dataJSON() {
	var obj = {};
  		
  		var json;
  		var slide = document.getElementsByClassName('swiper-slide')[0].getElementsByClassName('big_box');

  		
  			
  			$('label').each(function (i,item){
  				
				if($(this).attr('class') == 'label_checked' && $(this).parents('.big_box').attr('id') != undefined){
					
					var $num = $(this).attr('num');
	  				var $id = $(this).parents('.big_box').attr('id');
	  				obj[$id] = $num;
	  				
				}
				
//				//电子烟
//				if($(this).attr('class') == 'label_checked' && $(this).attr('logo_H') == 'somke_electronic_hear'){
//					console.log(111)
//					var $num = $(this).attr('num');
//					console.log($num)
//	  				var $id = $(this).parents('.inputs').attr('id');
//	  				console.log($id)
//	  				obj[$id] = $num;
//	  				
//	  				
//				}
				if($(this).attr('id') == 'xiyan_11' && $(this).attr('class') == 'label_checked'){
					var $isSomke_electronic_hear = $('label[str = 1]');
	  				
  					$.each($isSomke_electronic_hear, function (){
	  	  				if($(this).attr('class') == 'label_checked'){
	  	  					console.log($(this).html())
	  	  					if($(this).html() == '是'){
	  	  						$(this).attr('num', '1');
	  	  					}else {
	  	  						$(this).attr('num', '2');
	  	  					}
	  	  					var $num = $(this).attr('num');
	  	  				
	  		  				var $id = $(this).parents('.big_box').attr('id');
	  		  			
	  		  				obj[$id] = $num;
	  		  				
	  		  				
	  	  				}
	  	  			} )
  				
	  	  			
	  			}
				
				if($(this).attr('id') == 'jieyan_11' && $(this).attr('class') == 'label_checked'){
					
	  				var $isSomke_electronic_hear = $('label[str = 2]');
	  				
	  					$.each($isSomke_electronic_hear, function (){
		  	  				if($(this).attr('class') == 'label_checked'){
		  	  				
		  	  					if($(this).html() == '是'){
		  	  						$(this).attr('num', '1');
		  	  					}else {
		  	  					$(this).attr('num', '2');
		  	  					}
		  	  					var $num = $(this).attr('num');
		  	  				
		  		  				var $id = $(this).parents('.big_box').attr('id');
		  	  					
		  		  				obj[$id] = $num;
		  		  				
		  		  				
		  	  				}
		  	  			} )
	  				
	  	  			
	  			}
				
				if($(this).attr('id') == 'buxiyan_11' && $(this).attr('class') == 'label_checked'){
						var $isSomke_electronic_hear = $('label[str = 3]');
		  				
	  					$.each($isSomke_electronic_hear, function (){
		  	  				if($(this).attr('class') == 'label_checked'){
		  	  					if($(this).html() == '是'){
		  	  						$(this).attr('num', '1');
		  	  					}else {
		  	  					$(this).attr('num', '2');
		  	  					}
		  	  					var $num = $(this).attr('num');
		  	  				
		  		  				var $id = $(this).parents('.big_box').attr('id');
		  		  			
		  		  				obj[$id] = $num;
		  		  				
		  		  				
		  	  				}
		  	  			} )
  				
	  	  			
	  			}
				
				//心电图检查1
				if($(this).attr('class') == 'label_checked' && $(this).parent().attr('hid') == 'premature_pulse'){
					var $num = $(this).attr('num');
	  				var $id = $(this).parent().attr('hid');
	  				console.log($(this).parents().attr('id'))
	  				obj[$id] = $num;
	  				
				}
				
				//心电图检查2
				if($(this).attr('class') == 'label_checked' && $(this).parents().attr('hid') == 'st_t'){
					var $num = $(this).attr('num');
	  				var $id = $(this).parents().attr('hid');
	  				obj[$id] = $num;
	  				
				}
				
				//心电图检查3
				if($(this).attr('class') == 'label_checked' && $(this).parents().attr('hid') == 'atrial_fibrillation'){
					var $num = $(this).attr('num');
	  				var $id = $(this).parents().attr('hid');
	  				obj[$id] = $num;
	  				
				}
				
				//心电图检查4
				if($(this).attr('class') == 'label_checked' && $(this).parents().attr('hid') == 'left_ventricle'){
					var $num = $(this).attr('num');
	  				var $id = $(this).parents().attr('hid');
	  				obj[$id] = $num;
	  				
				}
				
				//b超等1
				if($(this).attr('class') == 'label_checked' && $(this).parents().attr('hid') == 'fatty_liver'){
					var $num = $(this).attr('num');
	  				var $id = $(this).parents().attr('hid');
	  				obj[$id] = $num;
	  				
				}
				
				//b超等2
				if($(this).attr('class') == 'label_checked' && $(this).parents().attr('hid') == 'gallstone'){
					var $num = $(this).attr('num');
	  				var $id = $(this).parents().attr('hid');
	  				obj[$id] = $num;
	  				
				}
				
				//b超等3
				if($(this).attr('class') == 'label_checked' && $(this).parents().attr('hid') == 'renal_calculus'){
					var $num = $(this).attr('num');
	  				var $id = $(this).parents().attr('hid');
	  				obj[$id] = $num;
	  				
				}
				
				//b超等4
				if($(this).attr('class') == 'label_checked' && $(this).parents().attr('hid') == 'breast_tubercle'){
					var $num = $(this).attr('num');
	  				var $id = $(this).parents().attr('hid');
	  				obj[$id] = $num;
	  				
				}
				//52题
  				if($(this).attr('class') == 'label_checked' && $(this).parents().attr('drink') == 'y_n'){
					var $num = $(this).attr('ints');
	  				var $id = $(this).parents().attr('drnId');
	  				obj[$id] = $num;
	  				
				}
  				//48题
	  				if($(this).parent().attr('class') == 'a' && $(this).attr('class') == 'label_checked'){
	  					var $num = $(this).next('input[type = tel]').val();
	  					var $id = $(this).parents('.a').attr('id');
	  					
	  					obj[$id] = $num;
	  				}
  				
  				if($(this).parent().attr('class') == 'a' && $(this).attr('class') == 'label_checked_1'){
  						
	  					var $num = $(this).next('input[type = tel]').val();
	  					var $id = $(this).parents('.a').attr('id');
	  					obj[$id] = $num;
	  				}
  				
  				if($(this).attr('class') == 'label_checked_1'){
  							if($(this).attr('id') == 'dhhhch'){
  								
  							}
							var $id = $(this).attr('id');
		  					obj[$id] = '1';
						
  					
					
  				}
  				
  				if($(this).attr('class') == 'label_checked_3'){
  					
							$(this).attr('flag', 'Y')
		  					var $id = $(this).attr('id');
		  					obj[$id] = '1';
						
  					
  				}
  				
  				
  				
  			})	
  			
  			$('input[type = text]').each(function (){
  				
  				if($(this).attr('class') == 'min'){
						//获取兄弟元素小时
		  				
		  				var $idbroh = $(this).attr('hours');
		  				var $idbrom = $(this).attr('minute');
		  				
		  				var $valstr = $(this).val();
		  				var $valbro = $valstr.split('小时');
		  				if($valbro.length >= 2){
		  					obj[$idbroh] = $valbro[0];
			  				obj[$idbrom] = $valbro[1];
		  				}else{
		  					obj[$idbrom] = $valstr;
		  					obj[$idbroh] = 0;
		  				}
					}
  			})
  			
  			

  			$('input[type = tel]').each(function (){
  				
  				if($(this).parents('.swiper-slide').css('display') == 'block'){
  					if($(this).attr('id') == 'first_smoke'){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//实验室-血红蛋白
  					if($(this).attr('lab') == 'hb' &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室-血尿酸
  					if($(this).attr('lab') == 'ua' &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室-谷丙转氨酶
  					if($(this).attr('lab') == 'gbzam_alt' &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室-谷草转氨酶
  					if($(this).attr('lab') == 'gczam' &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室-甲胎蛋白
  					if($(this).attr('lab') == 'afp_q' &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室-癌胚抗原
  					
  					if($(this).attr('lab') == 'cea_q' &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室-C反应蛋白
  					if($(this).attr('lab') == 'crp' &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室-前列腺特异抗原
  					if($(this).attr('lab') == 'f_psa' &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室-血肌酐
  					if($(this).attr('lab') == 'scr' &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室-骨密度检查指标—T值
  					if($(this).attr('lab') == 't_score' &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					
  					//实验室1
  					if($(this).attr('lab') == 'cholesterol' &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室2
  					if($(this).attr('lab') == 'hdlc'  &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室3
  					if($(this).attr('lab') == 'triglycerin'  &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室4
  					if($(this).attr('lab') == 'ldlc'  &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室5
  					if($(this).attr('lab') == 'fasting_bg'  &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室6
  					if($(this).attr('lab') == 'ogtt'  &&  $(this).val() != ''){
	  					var $val = $(this).val();
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).val() != '' && $(this).attr('id') == 'tea_green_day'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).val() != '' && $(this).attr('id') == 'tea_red_day'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).val() != '' && $(this).attr('id') == 'tea_white_day'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).val() != '' && $(this).attr('id') == 'tea_yellow_day'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).val() != '' && $(this).attr('id') == 'tea_oolong_day'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).val() != '' && $(this).attr('id') == 'tea_replace'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).val() != '' && $(this).attr('id') == 'tea_add_to'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).val() != '' && $(this).attr('names') == 'nur_water_day'){
  						console.log(111)
  						var $val = $(this).val();
		  				var $id = $(this).attr('names');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).val() != '' && $(this).attr('names') == 'nur_tea_day'){
  					
  						var $val = $(this).val();
		  				var $id = $(this).attr('names');
		  				obj[$id] = $val;
  					}
  					
  					//19题
  					if( $(this).attr('id') == 'type_mcigarette_num'){
  					if($(this).val() == ""){
	  					$(this).val('0') 
	  				}
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
		  				
  					}
  					
  					if( $(this).attr('id') == 'type_hcigarette_num'){
  						if($(this).val() == ""){
  		  					$(this).val('0') 
  		  				}
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if( $(this).attr('id') == 'type_pipe_num'){
  						if($(this).val() == ""){
  		  					$(this).val('0') 
  		  				}
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if( $(this).attr('id') == 'type_cigar_num'){
  						if($(this).val() == ""){
  		  					$(this).val('0') 
  		  				}
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if(  $(this).attr('id') == 'type_electronic_num'){
  						if($(this).val() == ""){
  		  					$(this).val('0') 
  		  				}
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if( $(this).attr('id') == 'type_other_num'){
  						if($(this).val() == ""){
  		  					$(this).val('0') 
  		  				}
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//一般检查
  					//身高
  					if($(this).val() != '' && $(this).attr('id') == 'body_height'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//臀围
  					if($(this).val() != '' && $(this).attr('id') == 'hip_circum'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//体重
  					if($(this).val() != '' && $(this).attr('id') == 'body_weight'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//收缩压
  					if($(this).val() != '' && $(this).attr('id') == 'sbp'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//腰围
  					if($(this).val() != '' && $(this).attr('id') == 'waist_line'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//舒张压
  					if($(this).val() != '' && $(this).attr('id') == 'dbp'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					
//  				
  					
  				}
  				
  			})
  			
  			
  			//  			number
  			$('input[type = number]').each(function (){
  				
  				if($(this).parents('.swiper-slide').css('display') == 'block'){
  			//实验室-血红蛋白
  					
					if($(this).attr('lab') == 'hb' &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室-血尿酸
					if($(this).attr('lab') == 'ua' &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室-谷丙转氨酶
					if($(this).attr('lab') == 'gbzam_alt' &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室-谷草转氨酶
					if($(this).attr('lab') == 'gczam' &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室-甲胎蛋白
					if($(this).attr('lab') == 'afp_q' &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室-癌胚抗原
					
					if($(this).attr('lab') == 'cea_q' &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室-C反应蛋白
					if($(this).attr('lab') == 'crp' &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室-前列腺特异抗原
					if($(this).attr('lab') == 'f_psa' &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室-血肌酐
					if($(this).attr('lab') == 'scr' &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室-骨密度检查指标—T值
					if($(this).attr('lab') == 't_score' &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					
					//实验室1
					if($(this).attr('lab') == 'cholesterol' &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室2
					if($(this).attr('lab') == 'hdlc'  &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室3
					if($(this).attr('lab') == 'triglycerin'  &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室4
					if($(this).attr('lab') == 'ldlc'  &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室5
					if($(this).attr('lab') == 'fasting_bg'  &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					//实验室6
					if($(this).attr('lab') == 'ogtt'  &&  $(this).val() != ''){
  					var $val = $(this).val();
	  				var $id = $(this).attr('lab');
	  				obj[$id] = $val;
					}
					
					
					
					//一般检查
  					//身高
  					if($(this).val() != '' && $(this).attr('id') == 'body_height'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//臀围
  					if($(this).val() != '' && $(this).attr('id') == 'hip_circum'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//体重
  					if($(this).val() != '' && $(this).attr('id') == 'body_weight'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//收缩压
  					if($(this).val() != '' && $(this).attr('id') == 'sbp'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//腰围
  					if($(this).val() != '' && $(this).attr('id') == 'waist_line'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//舒张压
  					if($(this).val() != '' && $(this).attr('id') == 'dbp'){
  						var $val = $(this).val();
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  			}
  			})
  			
  			
  			$('select').each(function () {
  				if($(this).parents('.swiper-slide').css('display') == 'block'){
  					if($(this).parents('.big_box').attr('id') == 'smoke_start_age'){
	  					var $val = $(this).val();
		  				var $id = $(this).parents('.big_box').attr('id');
		  				obj[$id] = $val;
  					}
  					
  					//乙肝表面抗原
  					if($(this).attr('smint') == 'ygbmky_hbsag' && $(this).children('option:selected').attr('num') != undefined){
	  					var $val = $(this).prev().val();
	  					if($val == '阳性'){
	  						$val = 1;
	  					}
	  					if($val == '阴性'){
	  						$val = 2;
	  					}
		  				var $id = $(this).attr('smint');
		  				obj[$id] = $val;
  					}
  					
  					//丙型肝炎抗体（HCV）
  					if($(this).attr('smint') == 'bxgykt_hcv' && $(this).children('option:selected').attr('num') != undefined){
	  					var $val = $(this).prev().val();
	  					if($val == '阳性'){
	  						$val = 1;
	  					}
	  					if($val == '阴性'){
	  						$val = 2;
	  					}
		  				var $id = $(this).attr('smint');
		  				obj[$id] = $val;
  					}
  					
  					//尿蛋白
  					if($(this).attr('smint') == 'ndb_pro' && $(this).children('option:selected').attr('num') != undefined){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '阳性'){
	  						$val = 1;
	  					}
	  					if($val == '阴性'){
	  						$val = 2;
	  					}
		  				var $id = $(this).attr('smint');
		  				obj[$id] = $val;
  					}
  					
  					//大便隐血
  					if($(this).attr('smint') == 'fobt_ob' && $(this).children('option:selected').attr('num') != undefined){
	  					var $val = $(this).prev().val();
	  					if($val == '阳性'){
	  						$val = 1;
	  					}
	  					if($val == '阴性'){
	  						$val = 2;
	  					}
		  				var $id = $(this).attr('smint');
		  				obj[$id] = $val;
  					}
  					
  					//实验室1
  					if($(this).attr('lab') == 'cholesterol_unit' && $(this).children('option:selected').attr('num') != undefined){
	  					var $val = $(this).children('option:selected').attr('num');
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室2
  					if($(this).attr('lab') == 'hdlc_unit' && $(this).children('option:selected').attr('num') != undefined){
	  					var $val = $(this).children('option:selected').attr('num');
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室3
  					if($(this).attr('lab') == 'triglycerin_unit' && $(this).children('option:selected').attr('num') != undefined){
	  					var $val = $(this).children('option:selected').attr('num');
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室4
  					if($(this).attr('lab') == 'ldlc_unit'){
	  					var $val = $(this).children('option:selected').attr('num');
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室5
  					if($(this).attr('lab') == 'ogtt_unit'){
	  					var $val = $(this).children('option:selected').attr('num');
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					//实验室5
  					if($(this).attr('lab') == 'fasting_bg_unit'){
	  					var $val = $(this).children('option:selected').attr('num');
		  				var $id = $(this).attr('lab');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).parents('.big_box').attr('id') == 'smoke_end_age'){
	  					var $val = $(this).val();
		  				var $id = $(this).parents('.big_box').attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).parents('.big_box').attr('id') == 'smoke_end_age_suc'){
	  					var $val = $(this).val();
		  				var $id = $(this).parents('.big_box').attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).parents('.big_box').attr('id') == 'tea_howold_week'){
	  					var $val = $(this).val();
		  				var $id = $(this).parents('.big_box').attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'cr_w'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '5-7天'){
	  						$val = 1;
	  					};
	  					if($val == '3-4天'){
	  						$val = 2;
	  					};
	  					if($val == '1-2天'){
	  						$val = 3;
	  					};
	  					if($val == '<1天或不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'cr_d'){
	  					var $val = $(this).prev().val();
	  					if($val == '>8两'){
	  						
	  						$val = 1;
	  					};
	  					if($val == '5-8两'){
	  						$val = 2;
	  					};
	  					if($val == '2-4两'){
	  						$val = 3;
	  					};
	  					if($val == '≤1两'){
	  						$val = 4;
	  					}
	  					if($val == '从来不吃'){
	  						$val = 5;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'meat_w'){
	  					var $val = $(this).prev().val();
	  					if($val == '5-7天'){
	  						
	  						$val = 1;
	  					};
	  					if($val == '3-4天'){
	  						$val = 2;
	  					};
	  					if($val == '1-2天'){
	  						$val = 3;
	  					};
	  					if($val == '<1天或不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'meat_d'){
	  					var $val = $(this).prev().val();
	  					if($val == '>1.5两'){
	  						$val = 1;
	  					};
	  					if($val == '1-1.5两'){
	  						$val = 2;
	  					};
	  					if($val == '<1两'){
	  						$val = 3;
	  					};
	  					if($val == '从来不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'fish_w'){
	  					var $val = $(this).prev().val();
	  					if($val == '5-7天'){
	  						$val = 1;
	  					};
	  					if($val == '3-4天'){
	  						$val = 2;
	  					};
	  					if($val == '1-2天'){
	  						$val = 3;
	  					};
	  					if($val == '<1天或不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'fish_d'){
	  					var $val = $(this).prev().val();
	  					if($val == '>2两'){
	  						$val = 1;
	  					};
	  					if($val == '1-2两'){
	  						$val = 2;
	  					};
	  					if($val == '<1两'){
	  						$val = 3;
	  					};
	  					if($val == '从来不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'egg_w'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '5-7天'){
	  						$val = 1;
	  					};
	  					if($val == '3-4天'){
	  						$val = 2;
	  					};
	  					if($val == '1-2天'){
	  						$val = 3;
	  					};
	  					if($val == '<1天或不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'egg_d'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '>2个'){
	  						$val = 1;
	  					};
	  					if($val == '1-2个'){
	  						$val = 2;
	  					};
	  					if($val == '半个左右'){
	  						$val = 3;
	  					};
	  					if($val == '从来不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'milk_w'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '5-7天'){
	  						$val = 1;
	  					};
	  					if($val == '3-4天'){
	  						$val = 2;
	  					};
	  					if($val == '1-2天'){
	  						$val = 3;
	  					};
	  					if($val == '<1天或不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'milk_d'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '>300毫升'){
	  						$val = 1;
	  					};
	  					if($val == '200-300毫升'){
	  						$val = 2;
	  					};
	  					if($val == '100-200毫升'){
	  						$val = 3;
	  					};
	  					if($val == '从来不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'bean_w'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '5-7天'){
	  						$val = 1;
	  					};
	  					if($val == '3-4天'){
	  						$val = 2;
	  					};
	  					if($val == '1-2天'){
	  						$val = 3;
	  					};
	  					if($val == '<1天或不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'bean_d'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '>1两'){
	  						$val = 1;
	  					};
	  					if($val == '0.5-1两'){
	  						$val = 2;
	  					};
	  					if($val == '0.1-0.4两'){
	  						$val = 3;
	  					};
	  					if($val == '从来不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'vegetable_w'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '5-7天'){
	  						$val = 1;
	  					};
	  					if($val == '3-4天'){
	  						$val = 2;
	  					};
	  					if($val == '1-2天'){
	  						$val = 3;
	  					};
	  					if($val == '<1天或不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'vegetable_d'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '>10两'){
	  						$val = 1;
	  					};
	  					if($val == '6-10两'){
	  						$val = 2;
	  					};
	  					if($val == '1-5两'){
	  						$val = 3;
	  					};
	  					if($val == '从来不吃'){
	  						$val = 4;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'ffru_w'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '5-7天'){
	  						$val = 1;
	  					};
	  					if($val == '3-4天'){
	  						$val = 2;
	  					};
	  					if($val == '1-2天'){
	  						$val = 3;
	  					};
	  					if($val == '<1天或不吃'){
	  						$val = 4;
	  					};
	  					
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'ffru_d'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '>8两'){
	  						$val = 1;
	  					};
	  					if($val == '4-8两'){
	  						$val = 2;
	  					};
	  					if($val == '1-3两'){
	  						$val = 3;
	  					};
	  					if($val == '<1两'){
	  						$val = 4;
	  					};
	  					if($val == '从来不吃'){
	  						$val = 5;
	  					}
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'sweet_food'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '5-7天'){
	  						$val = 1;
	  					};
	  					if($val == '3-4天'){
	  						$val = 2;
	  					};
	  					if($val == '1-2天'){
	  						$val = 3;
	  					};
	  					if($val == '<1天或不吃'){
	  						$val = 4;
	  					};
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('id') == 'fried_food'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '5-7天'){
	  						$val = 1;
	  					};
	  					if($val == '3-4天'){
	  						$val = 2;
	  					};
	  					if($val == '1-2天'){
	  						$val = 3;
	  					};
	  					if($val == '<1天或不吃'){
	  						$val = 4;
	  					};
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					};
  					
  					if($(this).attr('id') == 'smoked_food'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '5-7天'){
	  						$val = 1;
	  					};
	  					if($val == '3-4天'){
	  						$val = 2;
	  					};
	  					if($val == '1-2天'){
	  						$val = 3;
	  					};
	  					if($val == '<1天或不吃'){
	  						$val = 4;
	  					};
		  				var $id = $(this).attr('id');
		  				obj[$id] = $val;
  					};
  					
  					if($(this).parents('.big_box').attr('id') == 'drink_how_old'){
	  					var $val = $(this).val();
		  				var $id = $(this).parents('.big_box').attr('id');
		  				obj[$id] = $val;
  					};
  					
  					//19题
  					if($(this).attr('names') == 'type_mcigarette_freq' ){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '每天'){
	  						$val = 1;
	  					}
	  					if($val == '每周'){
	  						$val = 2;
	  					}
		  				var $id = $(this).attr('names');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('names') == 'type_hcigarette_freq'){
  						console.log()
	  					var $val = $(this).prev().val();
  						if($val == '每天'){
	  						$val = 1;
	  					}
	  					if($val == '每周'){
	  						$val = 2;
	  					}
		  				var $id = $(this).attr('names');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('names') == 'type_pipe_freq'){
  						console.log()
	  					var $val = $(this).prev().val();
  						if($val == '每天'){
	  						$val = 1;
	  					}
	  					if($val == '每周'){
	  						$val = 2;
	  					}
		  				var $id = $(this).attr('names');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('names') == 'type_cigar_freq'){
  						console.log()
	  					var $val = $(this).prev().val();
  						if($val == '每天'){
	  						$val = 1;
	  					}
	  					if($val == '每周'){
	  						$val = 2;
	  					}
		  				var $id = $(this).attr('names');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('names') == 'type_electronic_freq'){
  						
	  					var $val = $(this).prev().val();
	  					if($val == '每天'){
	  						$val = 1;
	  					}
	  					if($val == '每周'){
	  						$val = 2;
	  					}
		  				var $id = $(this).attr('names');
		  				obj[$id] = $val;
  					}
  					
  					if($(this).attr('names') == 'type_other_freq'){
  				
	  					var $val = $(this).prev().val();
	  					if($val == '每天'){
	  						$val = 1;
	  					}
	  					if($val == '每周'){
	  						$val = 2;
	  					}
		  				var $id = $(this).attr('names');
		  				obj[$id] = $val;
  					}
//					55题以后  （获取小时以及其他）
					if($(this).attr('types') == 'time' && $(this).prev().val() != '' && $(this).prev().val() != null && $(this).prev().val() != undefined && $(this).prev().val() != undefined && $(this).prev().val() != ''){
						var $val = $(this).prev().val();
		  				var $id = $(this).attr('days');
		  				obj[$id] = $val;
		  				
					}
//					
					
//					66题
					if($(this).attr('intClass') == 'times' && $(this).val().length != 0 && $(this).val() != '' && $(this).val() != null && $(this).val() != undefined ){
						// 取值
						
						var $val = $(this).prev().val();
						var $id = $(this).attr('sedentary');
						obj[$id] = $val;
		  				
					}
					
					//77题
					if($(this).attr('sleep') == 'sleep_status' && $(this).prev().val().length != 0 && $(this).prev().val() != '' && $(this).prev().val() != null && $(this).prev().val() != undefined ){
						var $val = $(this).prev().val();
						var $id = $(this).attr('sleep');
						obj[$id] = $val;
		  				
					}
					
					if($(this).attr('sleep') == 'sleep_time' && $(this).prev().val().length != 0 && $(this).prev().val() != '' && $(this).prev().val() != null && $(this).prev().val() != undefined ){
						var $val = $(this).prev().val();
						var $id = $(this).attr('sleep');
						obj[$id] = $val;
					}
					//98杀虫剂
					if($(this).attr('living') == 'living_insecticide' && $(this).prev().val().length != 0 && $(this).prev().val() != '' && $(this).prev().val() != null && $(this).prev().val() != undefined ){
						var $val = $(this).prev().val();
						var $id = $(this).attr('living');
						obj[$id] = $val;
		  				
					}
					//99 女性
					if($(this).attr('menstrual') == 'first_menstrual_age' && $(this).prev().val().length != 0 && $(this).prev().val() != '' && $(this).prev().val() != null && $(this).prev().val() != undefined ){
						var $val = $(this).prev().val();
						var $id = $(this).attr('menstrual');
						obj[$id] = $val;
		  				
					}
					//102女
					if($(this).attr('firstage') == 'first_birth_age' && $(this).prev().val().length != 0 && $(this).val() != '' && $(this).prev().val() != null && $(this).prev().val() != undefined ){
						var $val = $(this).prev().val();
						var $id = $(this).attr('firstage');
						obj[$id] = $val;
		  				
					}
					
					//103女
					if($(this).attr('numbirths') == 'number_of_births' && $(this).prev().val().length != 0 && $(this).prev().val() != '' && $(this).prev().val() != null && $(this).prev().val() != undefined ){
						var $val = $(this).prev().val();
						var $id = $(this).attr('numbirths');
						obj[$id] = $val;
		  				
						
					}
					
					//105女
					if($(this).attr('timesbirth') == 'times_of_breast_feeding' && $(this).prev().val().length != 0 && $(this).prev().val() != '' && $(this).prev().val() != null && $(this).prev().val() != undefined ){
						var $val = $(this).prev().val();
						var $id = $(this).attr('timesbirth');
						obj[$id] = $val;
		  				
					}
					// 108女
					if($(this).attr('menoage') == 'menopause_age' && $(this).prev().val().length != 0 && $(this).prev().val() != '' && $(this).prev().val() != null && $(this).prev().val() != undefined ){
						var $val = $(this).prev().val();
						var $id = $(this).attr('menoage');
						obj[$id] = $val;
		  				
					}
					
					//110女
					if($(this).attr('timesuse') == 'times_of_estrogen_use' && $(this).prev().val().length != 0 && $(this).prev().val() != '' && $(this).prev().val() != null && $(this).prev().val() != undefined ){
						var $val = $(this).prev().val();
						var $id = $(this).attr('timesuse');
						obj[$id] = $val;
		  				
					}
  				}
  				
  			})
  			var $isChecked_L = $('label[isChecked_L = trues]');
  			$.each($isChecked_L, function (){
  				if(($(this).attr('class') != 'label_checked_1'&&$(this).attr('class') != 'label_checked_3')){
  					var $id = $(this).attr('id');
  					obj[$id] = '-1029';
  				}
  				if($(this).attr('class') != 'label_checked' && $(this).parent().attr('class') == 'a' && $(this).parent().attr('types') == 'danxuan'){
  						
  						var $id = $(this).next('input').attr('logo_H');
  	  					obj[$id] = '-1029';
  				}
  				if($(this).attr('class') != 'label_checked_1' && $(this).parent().attr('class') == 'a' && $(this).parent().attr('types') == 'duoxuan'){
						
						var $id = $(this).next('input').attr('logo_H');
	  					obj[$id] = '-1029';
				}
  			})
  			
		/*var a = {};
  			
			json = JSON.stringify(obj)
			console.log(json);
			a.riskData = json;
			json = JSON.stringify(a)*/
			
	return obj;
}
