function _dataReturnJSONZY(data){
	
	var state = data.state;
	var str = JSON.parse(data.state);  
	var str2 = str[0].tcmData;
	var data = str2.split(';');
	$.each(data, function(i, item) {
		arr2 = data[i].split('_');
		if(arr2[0] == ''){
			return true;
		}
	$("div[types = " + arr2[0] + " ][order = " + arr2[1] + "]").find("label[ num =" + arr2[2] + "]").attr('class', 'label_checked');
		//console.log(arr2[2])
		
	});
}

