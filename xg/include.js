/*<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	String rootPath = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+rootPath+"/";
%>
<jsp:include page="../../messageTip.jsp"></jsp:include>
<script type="text/javascript" src="<%=rootPath%>/js/login/validate.js"></script>
<script type="text/javascript" src="js/dataReturnJSON.js"></script>
<link rel="stylesheet" type="text/css"
	href="<%=rootPath%>/css/page_load.css" />
<script type="text/javascript"> */
	function GetQueryString(name) {
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}
	var pressureId = GetQueryString('pressureId');
	var gender = GetQueryString('gender');
	var userId = GetQueryString('userId');
	var token = GetQueryString('token');
	/*var pressureId="";
	var gender = "1";//当前用户性别
	var userId = "51554245844961281100001";
	var token = "CACE52580158C0068F5E6E10B96D8714-n1.jvm2";*/
	$(function(){
		//问卷数据加载
	    if (pressureId!=""&&pressureId!="null"){//说明是查看
	   	 _dataReturnJSON(getInfoA(pressureId)); 
	   	 $(".C_S").hide();
	   	 $(".number1").attr("id","juzhong_H");
		}else{//说明是填问卷
			$("#mxbReportInfoId").remove();
		    getZc();
		  	//提交的监听事件
			document.addEventListener('touchstart', _touch, false); 
		   
		} 	
	});
	function getZc(){//获取暂存文件
	    var param = JSON.stringify({
			'typeData':'5',
			'type':'add',
			'pressureId':''
		});
		$.ajax({
	        url : "/hecserviceProxy/webservice/wtWebApiH/GetServerData",
	        async : true,
	        type : "post",
	        dataType : "json",
	        data : {
	        	token:token,
				infoType:"300006",
				jsonValue:param
	        },
	        contentType : "application/x-www-form-urlencoded; charset=utf-8",
	        success : function(data) {
	        	console.log(data);
	        	if(data!="get_err"&&data!="null"){
	            	_dataReturnJSON(data);
	            }
	        }
	        /*error : function(XMLHttpRequest, textStatus, errorThrown) { 
		    	openMessageAlert(textStatus,"1");    	
		    }*/
	    });
	}
    //后台数据处理 by yatoo
    // var commitdata="";
    //提交问卷
    $('.save_font').one('click', function (){
		if($('.save_font').html() == '提交'){
			var parameter = {
    			'typeData':"5",	
    		}
	    	var commitdata = $.parseJSON(dataJSON());
	    	var extendObj = $.extend(parameter, commitdata);
	    	var param = JSON.stringify(extendObj);
    		var returnData="";
			$.ajax({
    	         url : "/hecserviceProxy/webservice/wtWebApiH/GetServerData",
    	         async : false,
    	         data : {
    	        	token:token,
					infoType:"300007",
					jsonValue:param
    	        },
    	         type : "post",
    	         dataType : "json",
    	         contentType : "application/x-www-form-urlencoded; charset=utf-8",
    	         success : function(data) {
    	         	console.log(data)
    	        	if(data.state=="commit_suc"){
    	        		model('提交成功');
		            	setTimeout(function(){
		            		window.history.go(-1);
		            	},1500)
		            	//openMessageAlert("提交成功","2");
		            	//window.location="<%=rootPath%>/riskManage/risk/HttpPressureEvaluteCall.action";
		            }else{
		            	model('提交失败');
		            	setTimeout(function(){
		            		window.history.go(-1);
		            	},1500)
		            	//openMessageAlert("操作失败","1");
		            	//window.location="<%=rootPath%>/riskManage/risk/HttpPressureEvaluteCall.action";
		            }
    	        },
    	        error : function(XMLHttpRequest, textStatus, errorThrown) { 
    	        	model('操作失败');
	            	setTimeout(function(){
	            		window.history.go(-1);
	            	},1500)
    	        	//openMessageAlert("操作失败","1");
    	        	//window.location="<%=rootPath%>/riskManage/risk/HttpPressureEvaluteCall1action";
    	        }
    	      });
		}
	})
    //暂存问卷
    $('.save_font').one('click', function (){
		if($('.save_font').html() == '暂存'){
			var parameter = {
    			'typeData':"5",	
    		}
	    	var commitdata = $.parseJSON(dataJSON());
	    	var extendObj = $.extend(parameter, commitdata);
	    	var param = JSON.stringify(extendObj);
    		var returnData="";
			$.ajax({
		        url : "/hecserviceProxy/webservice/wtWebApiH/GetServerData",
		        async : false,
		       	data : {
    	        	token:token,
					infoType:"300005",
					jsonValue:param
    	        },
		        type : "post",
		        dataType : "json",
		        contentType : "application/x-www-form-urlencoded; charset=utf-8",
		        success : function(data) {
	       	 		if(data.state=="up_suc"){
	       	 			model('暂存成功');
		            	setTimeout(function(){
		            		window.history.go(-1);
		            	},1500)
		            	//openMessageAlert("暂存成功","2");
		            	//window.location="<%=rootPath%>/riskManage/risk/HttpPressureEvaluteCall.action";
		            }else{
		            	model('暂存失败');
		            	setTimeout(function(){
		            		window.history.go(-1);
		            	},1500)
		            	//openMessageAlert("操作失败","1");
		            	//window.location="<%=rootPath%>/riskManage/risk/HttpPressureEvaluteCall.action";
		            }
		       	},
		        error : function(XMLHttpRequest, textStatus, errorThrown) { 
		        	model('操作失败');
	            	setTimeout(function(){
	            		window.history.go(-1);
	            	},1500)
		       		//openMessageAlert("操作失败","1");
		       		//window.location="<%=rootPath%>/riskManage/risk/HttpPressureEvaluteCall1action";
		        } 
		    });
		}
	})
    /*function commit(type,commitdata) {
    	var parameter = {
    			'typeData':"5",	
    		}
    	var commitdata = $.parseJSON(commitdata);
    	var extendObj = $.extend(parameter, commitdata);
    	var param = JSON.stringify(extendObj);
    	var returnData="";
    	if (type == 1){
		    
        } else {
    		 
        }
    	return returnData; 
    }*/
    //问卷数据获取
    function getInfoA (pressureId){
	    var param  = JSON.stringify({
	    	"pressureId":pressureId,
	    	'typeData':'5',
	    	'type':'view'
	    });
	    var returnData="up_err";
	    $.ajax({
	        url : "/hecserviceProxy/webservice/wtWebApiH/GetServerData",
	        async : false,
	        data : {
	        	token:token,
				infoType:"300006",
				jsonValue:param
	        },
	        type : "post",
	        dataType : "json",
	        contentType : "application/x-www-form-urlencoded; charset=utf-8",
	        success : function(data) {
	            returnData= data;
	        },
		    error : function(XMLHttpRequest, textStatus, errorThrown) { 
		       returnData= "up_err";    	
		    }
	    });
	    return returnData;
    }
    //暂存问卷 
    
    function dataJSON(){
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
			return zyjson;
	}
    // 弹出框
    function model(val){
    	$('.model').show();
    	$('.model_txt').html(val);
    }
  //查看报告信息
  function reportInfo(){
	var urlInfo ="<%=basePath%>/RiskCallA.jsp";
  	var typeInfo = "<input type='hidden' name='typeData' value='5' />";
  	var presureIdInfo =  "<input type='hidden' name='pressureId' value='"+pressureId+"' />";
  	jQuery("<form action='" + urlInfo + "' method='get'>"+presureIdInfo+typeInfo+"</form>").appendTo("body").submit().remove();
  }
/*</script>*/
