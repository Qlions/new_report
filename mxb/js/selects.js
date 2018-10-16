function selects(names) {
		$(names).mobiscroll().select({
 		theme : 'mobiscroll',
 		lang : 'zh',
// 		display : 'bottom',
 		cancelText : null,
 		minWidth : 200,
 		defaultValue : [Math.floor($('#demo option').length/2)],
 		setText : '确定',
 		cancelText : '取消',
 		headerText: function (valueText) { return "请选择"; }
 		});

	}

//*********动态创建数值*******
function num_data_age(num, nums, ID) {
	
    	for(var k = num; k <= nums; k++) {
    		$("<option > " + k  + "</option> ").appendTo($(ID));
    	}
    		
    	
}

function num_data_week(num, nums, ID) {
	
    	for(var k = num; k <= nums; k++) {
    		$("<option > " + k  + "</option> ").appendTo($(ID));
    	}
}
function num_data_month(num, nums, ID) {
	
    	for(var k = num; k <= nums; k++) {
    		$("<option > " + k  + "</option> ").appendTo($(ID));
    	}
}

function num_data_year(num, nums, ID) {
	
    	for(var k = num; k <= nums; k++) {
    		$("<option > " + k  + "</option> ").appendTo($(ID));
    	}
}

function num_data_ge(num, nums, ID) {
	
    	for(var k = num; k <= nums; k++) {
    		$("<option > " + k  + "</option> ").appendTo($(ID));
    	}
}

//***************调用*************//
selects("#selects21");
num_data_age(6, 55, "#selects21");

selects("#selects22");
num_data_age(6, 55, "#selects22");

selects("#selects23");
num_data_age(6, 55, "#selects23");

selects("#selects31");
num_data_age(6, 55, "#selects31");

selects("#selects56");
num_data_week(1, 7, "#selects56");

selects("#selects57");
num_data_week(1, 7, "#selects57");

selects("#selects58");
num_data_week(1, 7, "#selects58");

selects("#selects58_1");
num_data_week(0, 7, "#selects58_1");

selects("#selects58_2");
num_data_week(0, 1440, "#selects58_2");

selects("#selects57_1");
num_data_week(0, 7, "#selects57_1");

selects("#selects57_2");
num_data_week(0, 1440, "#selects57_2");

selects("#selects56_1");
num_data_week(0, 7, "#selects56_1");

selects("#selects56_2");
num_data_week(0, 1440, "#selects56_2");

selects("#selects59");
num_data_week(1, 7, "#selects59");

selects("#selects59_1");
num_data_week(0, 23, "#selects59_1");

selects("#selects59_2");
num_data_week(0, 59, "#selects59_2");

selects("#selects60");
num_data_week(1, 7, "#selects60");

selects("#selects62");
num_data_week(1, 7, "#selects62");

selects("#selects64");
num_data_week(1, 7, "#selects64");

selects("#selects66_h");
num_data_week(0, 7, "#selects66_h");

selects("#selects66_m");
num_data_week(0, 59, "#selects66_m");

selects("#selects67_h");
num_data_week(0, 23, "#selects67_h");

selects("#selects67_m");
num_data_week(0, 59, "#selects67_m");



selects("#selects68_h");
num_data_week(0, 23, "#selects68_h");

selects("#selects68_m");
num_data_week(0, 59, "#selects68_m");



selects("#selects69_h");
num_data_week(0, 23, "#selects69_h");

selects("#selects69_m");
num_data_week(0, 59, "#selects69_m");



selects("#selects70_h");
num_data_week(0, 23, "#selects70_h");


selects("#selects70_m");
num_data_week(0, 59, "#selects70_m");


selects("#selects71_h");
num_data_week(0, 23, "#selects71_h");

selects("#selects71_m");
num_data_week(0, 59, "#selects71_m");




selects("#selects77");
num_data_week(0, 24, "#selects77");

selects("#selects98");
num_data_month(0, 12, "#selects98");

selects('#selects99_nv');
num_data_age(10,20, "#selects99_nv")

selects('#selects102_nv');
num_data_age(6,55, "#selects102_nv")

selects('#selects47');
num_data_age(6,55, "#selects47")

selects('#selects103_nv');
num_data_ge(1,5, "#selects103_nv")

selects('#selects105_nv');
num_data_year(0,10, "#selects105_nv")

selects('#selects108_nv');
num_data_age(6,55, "#selects108_nv")

selects('#selects110_nv');
num_data_year(0,50, "#selects110_nv")


//*******107

selects("#selects107_zd");
selects("#selects107_gy");
selects("#selects107_kf");
selects("#selects107_gm");
selects("#selects107_dm");
selects("#selects107_ch");

selects('#selects107_bing');
selects('#selects107_yi');
selects('#selects107_bianbian');
selects('#selects107_niao');

//********115

selects("#selects115_zd");
selects("#selects115_gy");
selects("#selects115_kf");
selects("#selects115_gm");
selects("#selects115_dm");
selects("#selects115_ch");






selects('#selects115_bing');
selects('#selects115_yi');
selects('#selects115_bian');
selects('#selects115_niao');
//**********19
selects('#week_a');
selects('#week_b');
selects('#week_c');
selects('#week_d');
selects('#week_e');
selects('#week_f');
//**********37
selects('.selects37_week_a');
selects('.selects37_day_a');
selects('.selects37_week_b');
selects('.selects37_day_b');
selects('.selects37_week_c');
selects('.selects37_day_c');
selects('.selects37_week_d');
selects('.selects37_day_d');
selects('.selects37_week_e');
selects('.selects37_day_e');
selects('.selects37_week_f');
selects('.selects37_day_f');
selects('.selects37_week_g');
selects('.selects37_day_g');
selects('.selects37_week_h');
selects('.selects37_day_h');
selects('.selects37_week_i');
selects('.selects37_week_j');
selects('.selects37_week_k');



//****************************小时
function num_min(ele,arr, arrs, arr_key){
    	$(ele).mobiscroll().scroller({
        theme: 'mobiscroll', 
        showLabel: true,
        setText : '确定',
   		cancelText : '取消',
   		headerText: function (valueText) { return "请选择"; },
        wheels: [
            [{
                label: '小时',
                values: arr
            }, {
                label: '分钟',
                keys: arr_key,
                values: arrs
            }]
        ]
    })
}
    
    var arr = [];
    var arrs = [];
    var arr_key = [];
    for(var i = 0; i<= 59; i++ ) {
    	if(i <= 23){
    		arr.push(i+'小时')
    	}
    	arrs.push(i+'分钟')
    	arr_key.push(i)
    }
 
    
    num_min($('#scroller56'),arr, arrs, arr_key);
    num_min($('#scroller64'),arr, arrs, arr_key);
    num_min($('#scroller66'),arr, arrs, arr_key);
    num_min($('#scroller67'),arr, arrs, arr_key);
    num_min($('#scroller68'),arr, arrs, arr_key);
    num_min($('#scroller69'),arr, arrs, arr_key);
    num_min($('#scroller70'),arr, arrs, arr_key);
    num_min($('#scroller71'),arr, arrs, arr_key);
    num_min($('#scroller57'),arr, arrs, arr_key);
    num_min($('#scroller59'),arr, arrs, arr_key);
	num_min($('#scroller60'),arr, arrs, arr_key);
	num_min($('#scroller62'),arr, arrs, arr_key);