//			//禁用手机默认的触屏滚动行为
//	document.body.addEventListener('touchmove', function(event) {
//		var ev = ev || window.event	
//			 ev.preventDefault();
//	}, false);
//		
        var arr = ["img/C_S.png","img/close_card.png","img/danxuankongxin.png","img/danxuanshixin.png","img/DTK.png","img/duoxuan.png","img/duoxuan_hover.png","img/loading.gif","img/head.png","img/huadong.png","img/jiantou.png","img/know.png","img/leftright.png","img/line.png","img/sj.png","img/xiaobai.png","img/youhua.png","img/zuohua.png"];
        //存放img对象的数组
        var imgsArr = [];
        //创建图片对象
        for(var i = 0; i < arr.length; i++){
            //创建图片对象
            var img = new Image();
            //给对象设置src属性
            img.src = arr[i];
            //存放img对象
            imgsArr.push(img);
            //图片加载
            var count = 0;
            img.onload = function(){
                count++;
                if(count >= imgsArr.length){
                    $(".upload").hide();
                    
                     $(".wrap").show();
			         //健康评估问卷添加动画
						$(".jiankang").show();
						$(".jiankang").addClass("rollIn animated yance");
					//爱生活   爱健康 添加动画
						$(".health").show();
						$(".health").addClass("lightSpeedIn animated yance_1");
					
					//感谢您填写“个人健康评估”问卷添加动画
						$(".wenjuan").addClass("animated swing yance_2");
//					indexf();
                }

            }

        }

