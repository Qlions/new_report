//	var data = "51_2;52_2;53_2;54_2;55_2;56_2;57_2;58_2;59_2;60_2;61_1;62_1;63_1;64_1;65_1;66_1;67_1;68_1;69_1;70_2;71_2;72_2;73_2;74_2;75_2;76_2;77_2;78_2;79_2;80_2;81_2;82_2;83_2;84_2;85_2;86_2;87_2;88_2;89_2;90_2;91_2;92_2;93_2;94_2;95_2;96_2;97_2;98_2;99_2;100_2;101_2;102_2;103_2;104_2;105_2;106_2;107_2;108_2;109_2;110_2";
	//返回JSON调用方法
	function _dataReturnJSON(data) {
		var state = data.state;
		var str = JSON.parse(data.state);  
		var str2 = str[0].evaluateData;
		var data = str2.split(';');
		$.each(data, function(i, item) {
			arr2 = data[i].split('_');
			if(arr2[0] > 50){
				$(".big_box").eq(i).find("label[num = " + (arr2[1]) + "]").attr('class', 'label_checked')
			}else{
				$(".big_box").eq(arr2[0]-1).find("label[num = " + (arr2[1]) + "]").attr('class', 'label_checked')
			}
			
			
			
		});
		
		
    }

//	_dataReturnJSON(data);