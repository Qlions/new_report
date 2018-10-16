$(function () {
//	var data = '1_1;2_5;3_5;4_5;5_5;6_5;7_5;8_5;9_5;10_5;11_5;12_5;13_5;14_5;15_5;16_5;17_5;18_5;19_5;20_5;21_5;22_5;23_5;24_5;25_5;26_5;27_5;28_5;29_5;30_5;31_5;32_5;33_5;34_5;';
//	var data = '1_1_1;1_2_4;1_3_4;1_4_4;1_5_4;1_6_3;1_7_3;1_8_3;2_1_2;2_2_2;2_3_2;2_4_2;2_5_2;2_6_2;2_7_3;2_8_2;3_1_2;3_2_2;3_3_2;';
	
	var arr = data.split(';');
	$.each(arr, function(i, item) {
		arr2 = arr[i].split('_');
		console.log(arr2[0])
	$("div[class = big_box]").eq(arr2[0]-1).find("label[num = " + (arr2[1]) + "]").attr('class', 'label_checked')
	
	});

	
})
function _dataReturnJSON() {
	var arr = data.split(';');
	$.each(arr, function(i, item) {
		arr2 = arr[i].split('_');
	    $("div[class = big_box]").eq(arr2[1]-1).find("label[num = " + (arr2[2]) + "]").attr('class', 'label_checked')
	
	});
}
