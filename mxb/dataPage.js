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
	function GetQueryString(name) {
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}
	var riskId = GetQueryString('riskId');
	var gender = GetQueryString('gender');
	var userId = GetQueryString('userId');
	var token = GetQueryString('token');
	/*var riskId="";
	var gender = "1";//当前用户性别
	var userId = "51559377094608897100001";
	var token = "67AA50AD2D560499FECB7F6AA5650E1C-n1.jvm2";*/
	//用户Id
	
	$(function(){
		if(gender=="1"){//男
			$(".woman_lei").remove();
			//给所有大div定义xuhao
			var $xuhao = $('.swiper-slide');
		
			var $i = 1;
			$.each($xuhao,function (){
				
				$(this).attr('xuhao', $i++);
			})
			$('label[sexW=2]').remove();
			
			}else{
			$(".man_lei").remove();
			//给所有大div定义xuhao
			var $xuhao = $('.swiper-slide');
		
			var $i = 1;
			$.each($xuhao,function (){
				
				$(this).attr('xuhao', $i++);
			});
			$('label[sexM=1]').remove();
			
		}
		//问卷数据加载
	    if (riskId!=""&&riskId!="null"){//说明是查看
	    	_dataReturnJSONMB(getInfo(riskId)); 
	    	t_or_f();
	    	$(".number1").attr("id","juzhong_H");
	    	$("#save_H").hide();
	    	a();
	    	all_green ();
	    	$isvisibel(getInfo(riskId)); 
		}else{//说明是填问卷
		    getZc();
		    $("#mxbReportInfoId").remove();
		  	//提交的监听事件
			document.addEventListener('touchstart', _touch, false);   
		  	
		}		
		mySwiper.updateSlidesSize();
	});
	$('.save_font').on('click', function (){
			if($('.save_font').html() == '提交'){
			var re = confirm('问卷已完成，请提交');
			if(re){
				commit(dataJSON());
				return false;
			}
	}})	
	function getZc(){//获取暂存文件
		var param = JSON.stringify({
			'userId':userId,
			'type':'clientQuery'
		});
		console.log(param)
		$.ajax({
	        url : "/hecserviceProxy/webservice/wtWebApiH/GetServerData",
	        async : true,
	        type : "post",
	        dataType : "json",
	        data : {
	        	token:token,
				infoType:"300014",
				jsonValue:param
	        },
	        contentType : "application/x-www-form-urlencoded; charset=utf-8",
	        success : function(data) {
	        	console.log("300014",data)
	            if(data!=null&&data!="null"&&data!=""){
	            	_dataReturnJSONMB(data);
	            	a(); 
	            	$isvisibel(data.infoList);	
	            }else{
	            	a();
	            	$('input[type = text]').not('.kong').val(''); 
	            	$('input[type = tel]').val('');
	            }
	        }
	        /*error : function(XMLHttpRequest, textStatus, errorThrown) { 
		    	openMessageAlert(textStatus,"1");    	
		    }*/
	    });
	}
	//答题卡
	function $isvisibel($str1){
		
		
		console.log($str1)
		var $slideTrueNum = $('div[slidearue = 1]:visible').length;
		var arr = [];
		var arr2 = [];
		var $li = $('li.liss_l');
		for(i in $str1[0]) {
			var $arr = $('[logo_H = ' + i + ']').parents('div.swiper-slide').attr('xuhao');
			var $arr_label = $('label[logo_H = ' + i + ']').parents('div.swiper-slide').attr('xuhao');
			arr.push($arr);
			arr2.push($arr_label);
		}
		
		
		$arr2_label_sort = arr2.sort($sort);
		//女特殊 
		if($('div.swiper-slide[sp=not]:visible input[type=tel]').eq(0).val() != "" && $('div.swiper-slide[sp=not]').next('.swiper-slide').find('label').hasClass('label_checked') !=  true){
			
			$arr2_label_sort[0] = $('div.swiper-slide[sp=not]').attr('xuhao');
		}
		
		if($('div.swiper-slide[sp=notwomen]:visible input[type=tel]').eq(0).val() != "" && $('div.swiper-slide[sp=notwomen]').next('.swiper-slide').find('label').hasClass('label_checked') !=  true){
			
			$arr2_label_sort[0] = $('div.swiper-slide[sp=notwomen]:visible').attr('xuhao');
		}
		if( $('div.swiper-slide[sp=not]:visible').next('.swiper-slide').find('label').hasClass('label_checked')){
			
			$arr2_label_sort = arr2.sort($sort);
				}
		if($('div.swiper-slide[sp=notwomenA]:visible').next('.swiper-slide').find('label').hasClass('label_checked')){
			$arr2_label_sort = arr2.sort($sort);
		}
		
		 
		            	var isHidden = $('.swiper-slide[xuhao = '+ $arr2_label_sort[0] +']').prevAll('.swiper-slide');
		            	var hiddenNum = 0;
		            	$.each(isHidden , function (){
		            		if($(this).is(':hidden')){
		            			hiddenNum++;
		            		}
		            	});
		            	var $li_green = parseInt($arr2_label_sort[0])- hiddenNum;
		            	$li.eq($li_green).prevAll($li).removeClass('liss_l');
						$li.eq($li_green-1).removeClass('liss_l');
						if($('.num_ul li:last').attr('class') == 'liss'){
							all_green ();
						}
						$(".page").html($(".swiper-slide:visible").length); 
	}
	//提交问卷
    function commit(commitdata)
    {    	
		$("#save_H").hide();
	   	var s = dataJSON(); 
    	var parameter = {
			'type':"clientSubmit",
			'userId':userId
		}
    	var extendObj = $.extend(parameter, s);
    	var param = JSON.stringify(extendObj);
	    $.ajax({
	        url : "/hecserviceProxy/webservice/wtWebApiH/GetServerData",
	        async : false,
	        data : {
	        	token:token,
				infoType:"300012",
				jsonValue:param
    	    },
	        type : "post",
	        dataType : "json",
	        contentType : "application/x-www-form-urlencoded; charset=utf-8",
	        success : function(data) {
		            if(data=="up_suc" || (undefined !=data.state && data.state.indexOf("suc")!=-1 )){
		            	model('提交成功');
		            	setTimeout(function(){
		            		window.history.go(-1);
		            	},1500)
		            }else{
		            	model('提交失败');
		            	setTimeout(function(){
		            		window.history.go(-1);
		            	},1500)
		            }
	        	},
			    error : function(XMLHttpRequest, textStatus, errorThrown) { 
			    	//openMessageAlert("操作失败","1");    	
			    }
	     });
    }
    //问卷数据获取
    function getInfo(riskId) {       		 
	    var param = JSON.stringify({
    			'userdataId':riskId,		
    		})
	    var returnData="";    
	    $.ajax({
	        url : "/hecserviceProxy/webservice/wtWebApiH/GetServerData",
	        async : false,
	        data : {
	        	token:token,
				infoType:"300016",
				jsonValue:param
	        },
	        type : "post",
	        dataType : "json",
	        contentType : "application/x-www-form-urlencoded; charset=utf-8",
	        success : function(data) {
	        	console.log(data)
	            returnData=data;
	        },
		    error : function(XMLHttpRequest, textStatus, errorThrown) { 
		       returnData= "up_err";    	
		    }
	     });
	    return returnData;
    }
     //暂存问卷
    $(".C_S").click(function(){
    	if($('.save_font').html() == '暂存'){
    		$(".C_S").off("click");
        	//var param  = JSON.stringify(dataJSON());
        	var s = dataJSON();
        	var parameter = {
    			'type':"clientUpdate",
    			'userId':userId
    		}
        	var extendObj = $.extend(parameter, s);
        	var param = JSON.stringify(extendObj);
        	console.log(param);
    	    $.ajax({
    	        url : "/hecserviceProxy/webservice/wtWebApiH/GetServerData",
    	        async : false,
    	        data : {
    	        	token:token,
					infoType:"300012",
					jsonValue:param
    	        },
    	        type : "post",
    	        dataType : "json",
    	        contentType : "application/x-www-form-urlencoded; charset=utf-8",
    	        success : function(data) {
    	        		console.log(data)
    		            if(data=="up_suc" || (undefined !=data.state && data.state.indexOf("suc")!=-1  )){
    		            	model('暂存成功');
    		            	//openMessageAlert("暂存成功","2");
    		            	setTimeout(function(){
    		            		history.go(-1);
    		            	},1500)
    		            	
    		            }else{
    		            	model('操作失败');
    		            	setTimeout(function(){
    		            		history.go(-1);
    		            	},1500)
    		            	return false;
    		            	//openMessageAlert("操作失败","1");
    		            	//window.history.go(-1);
    		            }
    	        	},
      			    error : function(XMLHttpRequest, textStatus, errorThrown) { 
    			    //	openMessageAlert("操作失败","1");    	
      			    }
    	    });
    	}
    })
    function model(val){
    	$('.model').show();
    	$('.model_txt').html(val);
    }
    //查看报告信息
  	function reportInfo(){
    	var urlInfo ="<%=basePath%>/RiskReault.jsp";
    	var riskIdInfo =  "<input type='hidden' name='userdataId' value='"+riskId+"' />";
    	var userIdInfo =  "<input type='hidden' name='userId' value='"+userId+"' />";
    	jQuery("<form action='" + urlInfo + "' method='get'>"+riskIdInfo+userIdInfo+"</form>").appendTo("body").submit().remove();
  	}
/*</script>*/
