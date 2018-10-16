/*<%@page import="com.hecMicro.domain.UserInfo"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%
	String rootPath = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+rootPath+"/";
	UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<jsp:include page="../../messageTip.jsp"></jsp:include>
<script type="text/javascript" src="<%=rootPath%>/js/login/validate.js"></script>
<link rel="stylesheet" type="text/css" href="<%=rootPath %>/css/page_load.css" />
<script type="text/javascript">*/
//var tcmId="<%=request.getParameter("tcmId")%>";
//var gender = "<%=userInfo.getGender()%>";//当前用户性别
	function GetQueryString(name) {
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}
	var tcmId = GetQueryString('tcmId');
	var gender = GetQueryString('gender');
	var userId = GetQueryString('userId');
	var token = GetQueryString('token');
	/*var tcmId="";
	var gender = "1";//当前用户性别
	var userId = "51554245844961281100001";
	var token = "2E209DA7CD5B49B6487B47DA78905F7A-n1.jvm2";*/
	$(function(){
		//问卷数据加载
	    if (tcmId!=""&&tcmId!="null"){//说明是查看
	    	_dataReturnJSONZY(getInfo(tcmId));
	    	//$(".number1").attr("id","juzhong_H");
	    	//$("#save_H").hide();
		}else{//说明是填问卷
		    $("#mxbReportInfoId").remove();
		    getZc();
		  	//提交的监听事件
			document.addEventListener('touchstart',_touch,false);
		}
		if(gender=="1"){//男
			$("#women_H").hide();
		}else{
			$("#men_H").hide();
		}
		mySwiper.updateSlidesSize();
	});
	$('.save_font').one('click', function (){
		if($('.save_font').html() == '提交'){
			var parameter = {
				'tcmId':tcmId,	
			}
	    	var datajson = $.parseJSON(dataJSON());
	    	var extendObj = $.extend(parameter, datajson);
	    	var param = JSON.stringify(extendObj);
		    $.ajax({
		        url : "/hecserviceProxy/webservice/wtWebApiH/GetServerData",
		        async : false,
		        data : {
		        	token:token,
					infoType:"300009",
					jsonValue:param
		        },
		        type : "post",
		        dataType : "json",
		        contentType : "application/x-www-form-urlencoded; charset=utf-8",
		        success : function(data) {
		        	console.log(data)
		            if(data.state="up_suc"){
		            	model('提交成功');
		            	setTimeout(function(){
		            		window.history.go(-1);
		            	},1500)
		            	//openMessageAlert("暂存成功","2");
		            	//window.location="<%=rootPath%>/riskManage/risk/HttpTcmListAction.action";
		            }else{
		            	model('提交失败');
		            	setTimeout(function(){
		            		window.history.go(-1);
		            	},1500)
		            	//openMessageAlert("暂存失败","1");
		            	//window.location="<%=rootPath%>/riskManage/risk/HttpTcmListAction.action";
		            }
		        },
			    error : function(XMLHttpRequest, textStatus, errorThrown) { 
			    	//openMessageAlert("操作失败","1");    	
			    }
		    });
		}
	})
 	//获取暂存文件
	function getZc(){
		var param = JSON.stringify({
			'type':'add',
			'tcmId':''
		})
		$.ajax({
	        url : "/hecserviceProxy/webservice/wtWebApiH/GetServerData",
	        async : false,
	        data : {
	        	token:token,
				infoType:"300010",
				jsonValue:param
	        },
	        type : "post",
	        dataType : "json",
	        contentType : "application/x-www-form-urlencoded; charset=utf-8",
	        success : function(data) {
	        	console.log(data);
	            if(data!=""&&data!="null"){
		        	_dataReturnJSONZY(data);
		        }
	        }
	    });
	}
	//提交问卷
    function commit(type,commitdata) {
    	$('.save_font').on('click', function (){
    		if($('.save_font').html() == '提交'){
	    		
    		}
    	}) 
    }
    // 暂存问卷
    $('.save_font').on('click', function (){
    	if($('.save_font').html() == '暂存'){
    		var parameter = {
    			'tcmId':tcmId,	
    		}
	    	var datajson = $.parseJSON(dataJSON());
	    	var extendObj = $.extend(parameter, datajson);
	    	var param = JSON.stringify(extendObj);
		    $.ajax({
		        url : "/hecserviceProxy/webservice/wtWebApiH/GetServerData",
		        async : false,
		        data : {
		        	token:token,
					infoType:"300008",
					jsonValue:param
		        },
		        type : "post",
		        dataType : "json",
		        contentType : "application/x-www-form-urlencoded; charset=utf-8",
		        success : function(data) {
		        	console.log(data)
		            if(data.state="up_suc"){
		            	model('暂存成功');
		            	setTimeout(function(){
		            		window.history.go(-1);
		            	},1500)
		            	//openMessageAlert("暂存成功","2");
		            	//window.location="<%=rootPath%>/riskManage/risk/HttpTcmListAction.action";
		            }else{
		            	model('暂存失败');
		            	setTimeout(function(){
		            		window.history.go(-1);
		            	},1500)
		            	//openMessageAlert("暂存失败","1");
		            	//window.location="<%=rootPath%>/riskManage/risk/HttpTcmListAction.action";
		            }
		        },
			    error : function(XMLHttpRequest, textStatus, errorThrown) { 
			    	//openMessageAlert("操作失败","1");    	
			    }
		    });
    	}
    })
    //问卷数据获取
    function getInfo(tcmId) {       		 
	    var param  = JSON.stringify({
	    	"tcmId":tcmId,
	    	'type':'view'
	    });
	    var returnData="up_err";
	    $.ajax({
	        url : "/hecserviceProxy/webservice/wtWebApiH/GetServerData",
	        async : false,
	        data : {
	        	token:token,
				infoType:"300010",
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
    function dataJSON() {
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
		
		return zyjson;
	
	}
    function model(val){
    	$('.model').show();
    	$('.model_txt').html(val);
    }
    //查看报告信息
    function reportInfo(){
    	var urlInfo ="<%=basePath%>/Tcm.jsp";
    	var tcmIdInfo =  "<input type='hidden' name='tcmId' value='"+tcmId+"' />";
    	jQuery("<form action='" + urlInfo + "' method='get'>"+tcmIdInfo+"</form>").appendTo("body").submit().remove();
    }
/*</script>*/
