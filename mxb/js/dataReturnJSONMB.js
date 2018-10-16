
	// var $str1 = [{"m_activity_h":1,"m_activity_m":1,"":15,"type_mcigarette_freq" : 1,"cr_w":2,"tea_howold_week":50,"first_smoke":12,"diab_1":1,"ldlc_unit":1,"walk_activity_d":1,"smoking_status":2,"smoke_end_age_suc":30,"ach":1,"h_pleasure_activity_d":1,"smoke_end_age":28,"med_reduce_bp":1,"edBackgroundCode":20,"h_activity_d":1,"m_pleasure_activity_d":1,"maritalCode":20,"occupationCode":2000,"hdlc_unit":1,"gout":1,"cholesterol_unit":1,"m_house_d":1,"fasting_bg_unit":1,"h_house_d":1,"m_activity_d":1,"secondary_op":2,"triglycerin_unit":1}];
var str = '';
	
	function _dataReturnJSONMB($str1){
		$('#maritalCode').find("label[num = " + ($str1.maritalCode) + "]").attr('class', 'label_checked');
		$('#edBackgroundCode').find("label[num = " + ($str1.edBackgroundCode) + "]").attr('class', 'label_checked');
		$('#occupationCode').find("label[num = " + ($str1.occupationCode) + "]").attr('class', 'label_checked');
		var infoList = $str1.infoList;
		for( var i= 0; i<infoList.length; i++ ){
			var name = infoList[i].id.dicFieldName;
			if($('[logo_H = ' + name + ']').attr('speciec') == 'radio'){
				$('[logo_H = ' + name + '][num = ' + infoList[i].id.valueNumber + ']').attr('class', 'label_checked');
				var html_H = $('[logo_H = ' + name + '][num = ' + infoList[i].id.valueNumber + ']').html();
				var ID_H = $('[logo_H = ' + name + '][num = ' + infoList[i].id.valueNumber + ']').attr('id');
			}
			if($('[logo_H = ' + name + ']').attr('speciec') == 'checkbox'){
				if($('[logo_H = ' + name + ']').attr('class') == 'label_checked_4'){
					$('[logo_H = ' + name + ']').attr('class', 'label_checked_3');
					$('[logo_H = ' + name + ']').attr('isChecked_L','trues');
					/*if((name=='stroke_f' && infoList[i].id.valueNumber == 1)||(name=='chd_f' && infoList[i].id.valueNumber == 1)){
						$('.hide_9_10').show();
						$(".hide9").show();
					}
					if((name=='stroke_m' && infoList[i].id.valueNumber == 1)||(name=='chd_m' && infoList[i].id.valueNumber == 1)){
						$('.hide_9_10').show();
						$(".hide10").show();
					}*/
				}else if($('[logo_H = ' + name + ']').attr('class') == 'label_checked_2'){
					$('[logo_H = ' + name + ']').attr('class', 'label_checked_1');
				}
			}
			if($('[logo_H = ' + name + ']').attr('speciec') == 'selects'){
				if($('[logo_H = ' + name + ']').attr('word') == 'text'){
					
					var a = $('[logo_H = ' + name + ']').find('[val=' + infoList[i].id.valueNumber +']').text();
					
					$('[logo_H = ' + name + ']').prev().val(a);
					
				}else{
					$('[logo_H = ' + name + ']').prev('input').val(infoList[i].id.valueNumber);
				}
			}
			if($('[logo_H = ' + name + ']').attr('speciec') == 'tels'){
				$('[logo_H = ' + name + ']').prev().attr('isChecked_L','trues');
				
				$('[logo_H = ' + name + ']').val(infoList[i].id.valueNumber);
				$('[logo_H = ' + name + ']').prev('label').attr('class', 'label_checked');
				
				if( $('[Logo_H =' + name + ']').prev().attr('checkedFourE') == 1){
					
					$('[Logo_H =' + name + ']').prev().attr('class', 'label_checked_1');
				}

			}
		}
		
		/*var data = $str1.split(';');
		$.each($str1, function(i, item) {
			arr2 = data[i].split('_');
		    var ss = $(".big_box").c.find("label[num = " + (arr2[1]) + "]");
		    ss.attr('class', 'label_checked')
		
		});*/
		var x = 1;
		//定义时间变量
		
		var h_activity_h = "";
		var h_activity_m = "";
		var h_house_m = "";
		var h_house_h = "";
		var m_activity_h = "";
		var m_activity_m = "";
		var m_house_h = "";
		var m_house_m = "";
		var walk_activity_h = "";
		var walk_activity_m = "";
		var h_pleasure_activity_h = "";
		var h_pleasure_activity_m = "";
		var m_pleasure_activity_h = "";
		var m_pleasure_activity_m = "";
		
		//定义时间变量结束
		for(i in $str1[0]) {
			//过滤undefined
			if($str1[0][i] == "undefined" || $str1[0][i] == ""){
				$str1[0][i] = "0";
			}
			
//			判断是不是undefined
			if($str1[0][i] == "undefined"){
				debugger
				$str1[0][i]== "";
			}
			
			
			//9/10
			if(i == 'stroke_m' || i == 'stroke_f' || i == 'chd_f' || i == 'chd_m'){
				cHidejiu();
			}
			
//			56
			if(i == 'h_activity_h'){
				
				h_activity_h = $str1[0][i];
			}
			if(i == 'h_activity_m'){
				
				h_activity_m = $str1[0][i];
				
			}
			
			
	
			if(i == 'h_house_m'){
				
				h_house_m = $str1[0][i];
			}
			
			if(i == 'h_house_h'){
				
				h_house_h = $str1[0][i];
			}
			
//			59
			if(i == 'm_activity_h' ){
				m_activity_h = $str1[0][i];
			}
			if(i == 'm_activity_m'){
				m_activity_m = $str1[0][i];
			}
			
//			60
			if(i == 'm_house_h' ){
				m_house_h = $str1[0][i];
			}
			if(i == 'm_house_m'){
				m_house_m = $str1[0][i];
			}
			
//			62
			if(i == 'walk_activity_h' ){
				walk_activity_h = $str1[0][i];
			}
			if(i == 'walk_activity_m'){
				walk_activity_m = $str1[0][i];
			}
			
			
//			64
			if(i == 'h_pleasure_activity_h' ){
				h_pleasure_activity_h = $str1[0][i];
			}
			if(i == 'h_pleasure_activity_m'){
				h_pleasure_activity_m = $str1[0][i];
			}
			
//			66
			if(i == 'm_pleasure_activity_h' ){
				m_pleasure_activity_h = $str1[0][i];
			}
			if(i == 'm_pleasure_activity_m'){
				m_pleasure_activity_m = $str1[0][i];
			}	
			
		var $json = i + ":" + $str1[0][i];
		//单选
		if($('[logo_H = ' + i + ']').attr('speciec') == 'radio'){
				$('[logo_H = ' + i + '][num = ' + $str1[0][i] + ']').attr('class', 'label_checked');
				var html_H = $('[logo_H = ' + i + '][num = ' + $str1[0][i] + ']').html();
				var ID_H = $('[logo_H = ' + i + '][num = ' + $str1[0][i] + ']').attr('id');
				
				if(html_H == '吸烟'){
					xiyan_hide_H();
					
				}
				if(html_H == '戒烟'){
					jieyan_hide_H();
					
				}
				
				if(html_H == '从不吸烟'){
					no_srmok_hide_H();
					
					
				}
				
				
				if(html_H == '偶尔'&& ID_H == 'show_29a'){
					show_a_hide_H();
				}
				
				if(html_H == '仅在某些季节'){
					show_b_hide_H();
				}
				if(html_H == '每月(但少于每周1次)'){
					show_c_hide_H();
				}
				
				if(html_H == '每周至少1次' && ID_H == 'lessweek_28'){
					//$("#lessweek_28").click();
					
					lessweek_hide_H();
				}
				
				if(html_H == '从来不喝'){
					never_hide_44_H();
				}
				
				if(html_H == '喝酒'){
					hejiu_hide_44_H();
				}
				
				if(ID_H == 'meiyou_29'){
					
					meiyou_29_H();
				}
				
				if(ID_H == 'you_29'){
					if($('.er_shi_ba_H label.label_checked').html() != '从不' ){
						you_29_H();
					}
					
				}
				
				if(ID_H == 'you_55'){
					you_55_H();
				}
				
				if(ID_H == 'meiyou_55'){
					meiyou_55_H();
				}
				
				if(ID_H == 'you_58'){
					you_58_H();
				}
				
				if(ID_H == 'meiyou_58'){
					meiyou_58_H();
				}
				
				if(ID_H == 'you_61'){
					you_61_H();
				}
				
				if(ID_H == 'meiyou_61'){
					meiyou_61_H();
				}
				
				if(ID_H == 'you_63'){
					you_63_H();
				}
				
				if(ID_H == 'meiyou_63'){
					meiyou_63_H();
				}
				
				if(ID_H == 'you_65'){
					you_65_H();
				}
				
				if(ID_H == 'meiyou_65'){
					meiyou_65_H();
				}
				
				if(ID_H == 'haveBaby_101' ){
					you_101_H();
					$('#no_hide_102').show();
				}
				
				
				if(ID_H == 'yes_107'){
				
					yes_107_H();
					
				}
				
				
				if(ID_H == 'no_107'){
					no_107_H();
				}
				
				if(ID_H == 'womanyes_109'){
					$(".hide110").show();
				}
				
				if(ID_H == 'womanno_109'){
					$(".hide110").hide();
				}
				
				

				if(ID_H == 'smoke25_yes'){
					$(".hide26").show();
				}
				
				if(ID_H == 'smoke25_no'){
					$(".hide26").hide();
				}
				
				if(i == 'female_sex_life' && html_H == '是'){
					show101();
				}
				if(i == 'female_sex_life' && html_H == '否'){
//					hide101();
//					$('#no_hide_102').hide();
				}

				if(ID_H == 'noBaby_101' && $('#' + ID_H).attr('class') == 'label_checked'){
					meiyou_101_H();
					
					mySwiper.updateSlidesSize();
					
					
				}
				
				if( ID_H == 'never_28'){
					$(".hide_29").hide();
					$(".hide_30_36").hide();
					mySwiper.updateSlidesSize();
				}
				
				
				
			}
		
		
		//多选
		else if($('[logo_H = ' + i + ']').attr('speciec') == 'checkbox'){
				if($('[logo_H = ' + i + ']').attr('class') == 'label_checked_4'){
					$('[logo_H = ' + i + ']').attr('class', 'label_checked_3');
					$('[logo_H = ' + i + ']').attr('isChecked_L','trues');
					if((i=='stroke_f'&&$str1[0][i] == 1)||(i=='chd_f'&&$str1[0][i] == 1)){
						$('.hide_9_10').show();
						$(".hide9").show();
					}
					if((i=='stroke_m'&&$str1[0][i] == 1)||(i=='chd_m'&&$str1[0][i] == 1)){
						$('.hide_9_10').show();
						$(".hide10").show();
					}
				}
				
				else if( $str1[0][i] == 1){
					$('[logo_H = ' + i + ']').attr('class', 'label_checked_1');
					$('[logo_H = ' + i + ']').attr('isChecked_L','trues');
					var checked_H = $('[logo_H = ' + i + ']').html();
					var checked_Hid = $('[logo_H = ' + i + ']').attr('id');
					if(checked_H == '浮肿(请选择)'){
						$(".hertHide").show();
					}
					if(checked_H == '大便异常(请选择)'){
						$(".shitHide").show();
					}
					if(checked_H == '关节疼痛，活动僵硬受限(请选择)'){
						$(".hertmoreHide").show();
					}
					if(checked_Hid == 'abdominal_pain'){
						$('[a=stomachHide]').show();
						$(".stomachHide").show();
					}
					//$('[logo_H = ' + i + ']').remove('isChecked_L');
					
				}
				
				
			}
		//type：tel
		else if($('#' + i  ).attr('speciec') == 'tels'){
			
			
					$('#' + i).val($str1[0][i]);
			
			if($str1[0][i] == '0'){
				$('#' + i).val('');
			}
				
			}
		//select
		else if($('[logo_H = ' + i + ']').attr('speciec') == 'selects'){
			
				if($('[logo_H = ' + i + ']').attr('word') == 'text'){
					
					var a = $('[logo_H = ' + i + ']').find('[val=' + $str1[0][i] +']').text();
					
					$('[logo_H = ' + i + ']').prev().val(a);
					
				}else{
					$('[logo_H = ' + i + ']').prev('input').val($str1[0][i]);
				}
				
		}else if($('[logo_H = ' + i + ']').attr('speciec') == 'tels'){
				$('[logo_H = ' + i + ']').prev().attr('isChecked_L','trues');
				
				$('[logo_H = ' + i + ']').val($str1[0][i]);
				$('[logo_H = ' + i + ']').prev('label').attr('class', 'label_checked');
				
				if( $('[Logo_H =' + i + ']').prev().attr('checkedFourE') == 1){
					
					$('[Logo_H =' + i + ']').prev().attr('class', 'label_checked_1');
				}

		}
		
		
		else if(i == 'm_pleasure_activity_d'){
			$('[logo_H = ' + i + ']').val($str1[0][i]);
		}
		else if(i == 'sedentary_hours'){
			$('[logo_H = ' + i + ']').val($str1[0][i]);
		}
		else if(i == 'sedentary_minutes'){
			$('[logo_H = ' + i + ']').val($str1[0][i]);
		}
		else if (i == 'sport_tv_time_h') {
			$('[logo_H = ' + i + ']').val($str1[0][i]);
		}
		else if (i == 'sport_tv_time_m') {
			$('[logo_H = ' + i + ']').val($str1[0][i]);
		}
		
		else if (i == 'sport_pc_time_h') {
			$('[logo_H = ' + i + ']').val($str1[0][i]);
		}
		
		else if (i == 'sport_pc_time_m') {
			$('[logo_H = ' + i + ']').val($str1[0][i]);
		}
		
		else if (i == 'sport_mp_time_h') {
			$('[logo_H = ' + i + ']').val($str1[0][i]);
		}
		
		else if (i == 'sport_rd_time_h') {
			$('[logo_H = ' + i + ']').val($str1[0][i]);
		}
		
		else if (i == 'sport_rd_time_m') {
			$('[logo_H = ' + i + ']').val($str1[0][i]);
		}
		else if (i == 'sleep_time') {
			$('[logo_H = ' + i + ']').val($str1[0][i]);
		}
	
		else if (i == 'living_insecticide') {
			$('[logo_H = ' + i + ']').val($str1[0][i]);
		}
		
		if($('[logo_H = ' + i + ']').parents('.swiper-slide').attr('no_H') != '1'){
			$('[logo_H = ' + i + ']').parents('div.swiper-slide').attr('slidearue', '1');
		}
		
	}//循环结束
		//赋值时间
		
		if(h_activity_m <= 59 && h_activity_h == 0){
		
			$('[logo_H = h_activity_m]').val(h_activity_m);
		}
		
		
		if(h_activity_m  +'' != '' && h_activity_h +'' != ''  && h_activity_h  != 0){
			
			var $strs = h_activity_h + '小时' + h_activity_m;
			
			$('[logo_H = h_activity_m]').val($strs);
		}
		
//		if(h_activity_m == 0 && (h_activity_h == 0 || h_activity_h =='')){
//			debugger
//			$('[logo_H = h_activity_m]').val('');
//		}
		
		
		
		
		
		
		if(h_house_m <= 59&& h_house_h == 0){
			
			$('[logo_H = h_house_m]').val(h_house_m);
		}
		if(h_house_m +'' != '' && h_house_h +'' != '' && h_house_h  != 0){
			
			var $strs = h_house_h + '小时' + h_house_m;
			
			$('[logo_H = h_house_m]').val($strs);
		}
		
		if(h_house_m == 0 && (h_house_h == 0 || h_house_h =='')){
			$('[logo_H = h_house_m]').val('');
		}
		
		
		if(m_activity_m <= 59 && m_activity_h == 0){
			
			$('[logo_H = m_activity_h]').val(m_activity_m);
		}
		if(m_activity_m +'' != '' && m_activity_h +'' != '' && m_activity_h  != 0){
			
			var $strs = m_activity_h + '小时' + m_activity_m;
			
			$('[logo_H = m_activity_h]').val($strs);
		}
		
		if(m_activity_m == 0 && (m_activity_h == 0 || m_activity_h =='')){
			$('[logo_H = m_activity_h]').val('');
		}
		
		if(m_house_m <= 59 && m_house_h == 0){
			
			$('[logo_H = m_house_h]').val(m_house_m);
		}
		if(m_house_m +'' != '' && m_house_h +'' != '' && m_house_h  != 0 && m_house_h != undefined){
			
			var $strs = m_house_h + '小时' + m_house_m;
			
			$('[logo_H = m_house_h]').val($strs);
		}
		if(m_house_m == 0 && (m_house_h == 0 || m_house_h =='')){
			$('[logo_H = m_house_h]').val('');
		}
		
		
		
		if(walk_activity_m <= 59 && walk_activity_h == 0){
			
			$('[logo_H = walk_activity_h]').val(walk_activity_m);
		}
		if(walk_activity_m +'' != '' && walk_activity_h +'' != '' && walk_activity_h  != 0){
			
			var $strs = walk_activity_h + '小时' + walk_activity_m;
			
			$('[logo_H = walk_activity_h]').val($strs);
		}
		if(walk_activity_m == 0 && (walk_activity_h == 0 || walk_activity_h =='')){
			$('[logo_H = walk_activity_h]').val('');
		}
		
		
		
		
		if(h_pleasure_activity_m <= 59 && h_pleasure_activity_h == 0){
			
			$('[logo_H = h_pleasure_activity_h]').val(h_pleasure_activity_m);
		}
		if(h_pleasure_activity_m +'' != '' && h_pleasure_activity_h +'' != '' && h_pleasure_activity_h  != 0){
			
			var $strs = h_pleasure_activity_h + '小时' + h_pleasure_activity_m;
			
			$('[logo_H = h_pleasure_activity_h]').val($strs);
		}
		if(h_pleasure_activity_m == 0 && (h_pleasure_activity_h == 0 || h_pleasure_activity_h =='')){
			$('[logo_H = h_pleasure_activity_h]').val('');
		}
		
		
		if(m_pleasure_activity_m <= 59 && m_pleasure_activity_h == 0){
			
			$('[logo_H = m_pleasure_activity_h]').val(m_pleasure_activity_m);
		}
		if(m_pleasure_activity_m +'' != '' && m_pleasure_activity_h +'' != '' && m_pleasure_activity_h  != 0){
			
			var $strs = m_pleasure_activity_h + '小时' + m_pleasure_activity_m;
			
			$('[logo_H = m_pleasure_activity_h]').val($strs);
		}
		if(m_pleasure_activity_m == 0 && (m_pleasure_activity_h == 0 || m_pleasure_activity_h =='')){
			$('[logo_H = m_pleasure_activity_h]').val('');
		}
		
	}
	


//	var mySwiper = new Swiper('.swiper-container',{
//		onSlideChangeStart : function (){
//				$('.sport_page').html(mySwiper.activeIndex+1);
//			}
//	})
	//吸烟
	function xiyan_hide_H(){
		$(".hide_12_15").show();
		$(".hide_16_18").show();
		$(".hide_19").show();
		$(".hide_20_21").show();
		$(".hide_22_25").hide();
		$(".hide_29").show();
		
		//刷新
			mySwiper.updateSlidesSize();
		
	}
	
	
	
	//戒烟
	function jieyan_hide_H(){
		$(".hide_12_15").hide();
		$(".hide_16_18").hide();
		$(".hide_19").hide();
		$(".hide_20_21").hide();
		$(".hide_22_25").show();
		$(".hide_25_27").hide();
		//刷新
			mySwiper.updateSlidesSize();
		
	}
	
	//从不吸烟
	function no_srmok_hide_H(){
		$(".hide_12_15").hide();
		$(".hide_16_18").hide();
		$(".hide_19").hide();
		$(".hide_20_21").hide();
		$(".hide_22_25").hide();
		$(".hide_25_27").show();
		//刷新
			mySwiper.updateSlidesSize();
	}
	
	//28从不
	function never_hide_H(){
		$(".hide_29").hide();
		$(".hide_30_36").hide();
			mySwiper.updateSlidesSize();
	}
//	偶尔
	function show_a_hide_H(){
		$(".hide_29").show();
		
		//刷新
		mySwiper.updateSlidesSize();
	}
	
	//仅在某些季节
	function show_b_hide_H(){
			$(".hide_29").show();
		
		//刷新
			mySwiper.updateSlidesSize();
	}
	
	//每月
	function show_c_hide_H(){
			$(".hide_29").show();
		
		//刷新
			mySwiper.updateSlidesSize();
	}
	
	//每周
	function lessweek_hide_H(){
		$(".hide_29").hide();
		$(".hide_30_36").show();
	
	//刷新
		mySwiper.updateSlidesSize();
	}
	
	
	//44从来不喝
	function never_hide_44_H(){
		$(".hide_45-54").hide();
	
	//刷新
			mySwiper.updateSlidesSize();
		
		
	}
	
	
	//喝酒
	function hejiu_hide_44_H(){
		$(".hide_45-54").show();
	
	//刷新
			mySwiper.updateSlidesSize();
		
		
	}
	
	
	//29
	function meiyou_29_H(){
		$(".hide_30_36").hide();
		//刷新
			mySwiper.updateSlidesSize();
	}
	
	function you_29_H(){
		$(".hide_30_36").show();
		//刷新
			mySwiper.updateSlidesSize();
		
	}
	
	function meiyou_55_H(){
		$(".hidden_56-57").hide();
		//刷新
			mySwiper.updateSlidesSize();
		
	}
	
	function you_55_H(){
		$(".hidden_56-57").show();
	//刷新
		mySwiper.updateSlidesSize();
	}
	
	function meiyou_58_H(){
		$(".hidden_59-60").hide();
	//刷新
		mySwiper.updateSlidesSize();
	}
	
	function you_58_H(){
		$(".hidden_59-60").show();
	//刷新
		mySwiper.updateSlidesSize();
	}
	
	
	function you_61_H(){
		$(".hidden_62").show();
	}
	
	function meiyou_61_H(){
		$(".hidden_62").hide();
	//刷新
		mySwiper.updateSlidesSize();
	}
	
	
	function you_63_H(){
		$(".hidden_64").show();
	}
	
	function meiyou_63_H(){
		$(".hidden_64").hide();
	//刷新
		mySwiper.updateSlidesSize();
	}
	
	
	
	function you_65_H(){
		$(".hidden_66-73").show();
		$(".tishijiantou").show();
	}
	
	function meiyou_65_H(){
		$(".hidden_66-73").hide();
		$(".tishijiantou").hide();
	//刷新
		mySwiper.updateSlidesSize();
	}
	
	function you_101_H(){
		$(".hide_102_105").show();

	}
	
	function meiyou_101_H(){
		$(".hide_102_105").hide();
		
	//刷新
		mySwiper.updateSlidesSize();
	}
	 
	function yes_107_H(){
		$(".hide_108_110").show();
		mySwiper.updateSlidesSize();
	}
	function no_107_H(){
		$(".hide_108_110").hide();
		mySwiper.updateSlidesSize();
	}
	
	function hide101(){
		$('.hide101').hide();
		$(".hide_102_105").hide();
		//刷新
		mySwiper.updateSlidesSize();
	}
	
	function show101(){
		$('.hide101').show();
		$(".hide_102_105").show();
		//刷新
		mySwiper.updateSlidesSize();
	}

	
	
	 function a() {
			$('.swiper-slide:visible').each(function (i,item){
				$("<li class='liss liss_l'> " + (i+1) + "</li> ").appendTo($('.num_index ul'));
			});
		  
			$('.page').html($('.swiper-slide:visible').length);	
		    };
	
	

	
//	sort方法
	function $sort (a,b){
		return b-a;
	}
// 9/10题
// 9/10题
	function cHidejiu() {
		$(".hide9").hide();
		$(".hide10").hide(); 
		$('.hide_9_10').hide();
		var $fa = $('label.label_checked_3[bing = truesF ]');
		var $ma = $('label.label_checked_3[bing = truesM ]');
		var $fb = $('label[father1 = b]');
		var $mb =  $('label[mother2 = b]');
	
		if($fa.length >= 1  ){
			$('.hide_9_10').show();
			$(".hide9").show();
			$(".hide10").hide(); 
		}
		if($ma.length >= 1){
			$('.hide_9_10').show();
			$(".hide10").show();
			$(".hide9").hide();
		}
		
		if($fa.length >= 1 && $ma.length >= 1){
			$('.hide_9_10').show();
			$(".hide9").show();
			$(".hide10").show();
		}
	}
	
//	判断是否有94题的答案
	function t_or_f(){
		
		if($("#cook_fuel").find("label.label_checked").size() <= 0){
			$("#cook_fuel").css({
				display: "none"
			});
			$("#cook_fuel").next("hr").css({
				display: "none"
			})
			$("#equip").css({
				marginTop: "0.4rem"
			})
		}
	}