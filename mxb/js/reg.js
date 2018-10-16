	
//说明：不能用window.onload  若使用点击事件input表单readio  和 checkbox 框可点击 不可切换

//####################获取所有类名
//12题正则
      var smoke_12 = document.getElementsByClassName("smoke_12")[0];
//19题正则
     var smoke_19a = document.getElementsByClassName("smoke_19")[0];
     var smoke_19b = document.getElementsByClassName("smoke_19")[1];
     var smoke_19c = document.getElementsByClassName("smoke_19")[2];
     var smoke_19d = document.getElementsByClassName("smoke_19")[3];
     var smoke_19e = document.getElementsByClassName("smoke_19")[4];
     var smoke_19f = document.getElementsByClassName("smoke_19")[5]; 
   //32题正则
    var drinktea_32a = document.getElementsByClassName("drinktea_32")[0];
    var drinktea_32b = document.getElementsByClassName("drinktea_32")[1];
    var drinktea_32c = document.getElementsByClassName("drinktea_32")[2];
    var drinktea_32d = document.getElementsByClassName("drinktea_32")[3];
    var drinktea_32e = document.getElementsByClassName("drinktea_32")[4];
   //33题    
    var drinktea_33 = document.getElementsByClassName("drinktea_33")[0];
    
    
   //34题
    var drinktea_34 = document.getElementsByClassName("drinktea_34")[0];
    
   //42题
    var drinktea_42a = document.getElementsByClassName("drinktea_42")[0];
    var drinktea_42b = document.getElementsByClassName("drinktea_42")[1];
    
   //48题
    var drink_48a = document.getElementsByClassName("drink_48")[0];
    var drink_48b = document.getElementsByClassName("drink_48")[1];
    var drink_48c = document.getElementsByClassName("drink_48")[2];
    var drink_48d = document.getElementsByClassName("drink_48")[3];
    var drink_48e = document.getElementsByClassName("drink_48")[4];
    
    var drink_48f = document.getElementsByClassName("drink_48")[5];
    var drink_48g = document.getElementsByClassName("drink_48")[6];
    var drink_48h = document.getElementsByClassName("drink_48")[7];
    var drink_48i = document.getElementsByClassName("drink_48")[8];
    var drink_48j = document.getElementsByClassName("drink_48")[9];
    
    var drink_48k = document.getElementsByClassName("drink_48")[10];
    var drink_48l = document.getElementsByClassName("drink_48")[11];
    var drink_48m = document.getElementsByClassName("drink_48")[12];
    var drink_48n = document.getElementsByClassName("drink_48")[13];
    var drink_48o = document.getElementsByClassName("drink_48")[14];

    
   //104题
    var check104a = document.getElementsByClassName("check104")[0];
    var check104b = document.getElementsByClassName("check104")[1];
    var check104c = document.getElementsByClassName("check104")[2];
    var check104d = document.getElementsByClassName("check104")[3];
    var check104e = document.getElementsByClassName("check104")[4];
    var check104f = document.getElementsByClassName("check104")[5];
    
    
   //107题
    var check107a = document.getElementsByClassName("check107")[0];
    var check107b = document.getElementsByClassName("check107")[1];
    var check107c = document.getElementsByClassName("check107")[2];
    var check107d = document.getElementsByClassName("check107")[3];
    var check107e = document.getElementsByClassName("check107")[4];
//  
    var check107f = document.getElementsByClassName("check107")[5];
    var check107g = document.getElementsByClassName("check107")[6];
    var check107h = document.getElementsByClassName("check107")[7];
    var check107i = document.getElementsByClassName("check107")[8];
    var check107j = document.getElementsByClassName("check107")[9];
//  
    var check107k = document.getElementsByClassName("check107")[10];
    var check107l = document.getElementsByClassName("check107")[11];
    var check107m = document.getElementsByClassName("check107")[12];
    var check107n = document.getElementsByClassName("check107")[13];
    var check107o = document.getElementsByClassName("check107")[14];
    
    var check107p = document.getElementsByClassName("check107")[15];
    

   


//112题

    var check112a = document.getElementsByClassName("checkBody_112")[0];

    var check112b = document.getElementsByClassName("checkBody_112")[1];
    var check112c = document.getElementsByClassName("checkBody_112")[2];
    var check112d = document.getElementsByClassName("checkBody_112")[3];
    var check112e = document.getElementsByClassName("checkBody_112")[4];
    var check112f = document.getElementsByClassName("checkBody_112")[5];
  
    
//115题
    var check115a = document.getElementsByClassName("check_115")[0];
//  console.log(check115a);//
    var check115b = document.getElementsByClassName("check_115")[1];
    var check115c = document.getElementsByClassName("check_115")[2];
    var check115d = document.getElementsByClassName("check_115")[3];
    var check115e = document.getElementsByClassName("check_115")[4];
    
    var check115f = document.getElementsByClassName("check_115")[5];
    var check115g = document.getElementsByClassName("check_115")[6];
    var check115h = document.getElementsByClassName("check_115")[7];
    var check115i = document.getElementsByClassName("check_115")[8];
    var check115j = document.getElementsByClassName("check_115")[9];
    
    var check115k = document.getElementsByClassName("check_115")[10];
    var check115l = document.getElementsByClassName("check_115")[11];
    var check115m = document.getElementsByClassName("check_115")[12];
    var check115n = document.getElementsByClassName("check_115")[13];
    var check115o = document.getElementsByClassName("check_115")[14];
    var check115p = document.getElementsByClassName("check_115")[15];
    



//####################函数调用

    //12 
    reg(smoke_12);
    
    //19
    reg(smoke_19a);
    reg(smoke_19b);
    reg(smoke_19c);
    reg(smoke_19d);
    reg(smoke_19e);
    reg(smoke_19f);
    
   //32  
   reg(drinktea_32a);
   reg(drinktea_32b);
   reg(drinktea_32c);
   reg(drinktea_32d);
   reg(drinktea_32e);
   
   //33
   reg(drinktea_33);
   
   //34
   reg(drinktea_34);
   
   //42
   reg(drinktea_42a);
   reg(drinktea_42b);
   
   //48
//48题调用下面函数封装方法
   
   //A单选
    reDrink(drink_48a);
    reDrink(drink_48b);
    reDrink(drink_48c);
    reDrink(drink_48d);
    reDrink(drink_48e);
   //B复选
    reDrink(drink_48f);
    reDrink(drink_48g);
    reDrink(drink_48h);
    reDrink(drink_48i);
    reDrink(drink_48j);
   //C复选
    reDrink(drink_48k);
    reDrink(drink_48l);
    reDrink(drink_48m);
    reDrink(drink_48n);
    reDrink(drink_48o);

  
  
  
  
  //  104,107,112,115以下四道题不适用封装函数方法，分开判断
  
 

    
//正则函数
	function reg(a){
		a.onblur = function(){
		var re = /^\d{1,2}$/;
    	var val1 = a.value;
    	
    	if (!re.test(val1)) {
	    		a.value = "";
	   	    }
	    }
	}

   //112题 104题
 
    		
  var re2 = /^[0-9]{2,3}([.][0-9]{1,2})?$/;	
    		 
    	

//104取值范围
//身高
check104a.onblur = function(){
	
	if (!re2.test(check104a.value)) {
		
		check104a.value = "";
	}else if (check104a.value < 50) {
		 check104a.value = "50";
	}
	
	if (check104a.value > 250) {
		check104a.value = "250";
	}
	
	
}
    
   //体重
   
   check104b.onblur = function(){
	
	if (!re2.test(check104b.value)) {
		
		check104b.value = "";
	}else if (check104b.value < 25) {
		check104b.value = "25";
	}
	
	if (check104b.value > 150) {
		check104b.value = "150";
	}
	
	
}
    
//腰围
check104c.onblur = function(){
	
	if (!re2.test(check104c.value)) {
		
		check104c.value = "";
	}else if (check104c.value < 50) {
		check104c.value = "50";
	}
	
	if (check104c.value > 150) {
		check104c.value = "150";
	}
	
	
}
    
//臀围  
   check104d.onblur = function(){
	
	if (!re2.test(check104d.value)) {
		
		check104d.value = "";
	}else if (check104d.value < 50) {
		check104d.value = "50";
	}
	
	if (check104d.value > 150) {
		check104d.value = "150";
	}
	
	
} 
    
   //收缩压
   check104e.onblur = function(){
	
	if (!re2.test(check104e.value)) {
		
		check104e.value = "";
	}else if (check104e.value < 60) {
		check104e.value = "60";
	}
	
	if (check104e.value > 300) {
		check104e.value = "300";
	}
	
	
}
   
   //舒张压
   
    check104f.onblur = function(){
	
	  if (!re2.test(check104f.value)) {
	  	
	  	check104f.value = "";
	  }else if (check104f.value < 40) {
		check104f.value = "40";
	}
	
	if (check104f.value > 200) {
		check104f.value = "200";
	}
	
	
}
   
// 107题正则以及方法   
    var re3 = /^[0-9]{1,4}([.][0-9]{1,2})?$/;	
    
 //  107//总胆固醇   
 
    var sele107a = document.getElementsByClassName("sele107")[0];
    	
    	var sele107Val0 = sele107a.options[0].value;
    	var sele107Val1 = sele107a.options[1].value;
    	
   
    check107a.onblur = function(){
    	
    	if (!re3.test(check107a.value)) {
    		
    		check107a.value = "";
    	} else  if (sele107a.value == sele107Val0){
    		
    		if (check107a.value < 0.01) {
    	       check107a.value = "0.01";
              }
	
	       if (check107a.value > 20) {
		      check107a.value = "20";
	           }
    		
    	}else if (sele107a.value == sele107Val1)   {
    		
    		
    		   if (check107a.value < 0) {
    	       check107a.value = "0";
               }
	
	           if (check107a.value > 800) {
		       check107a.value = "800";
	          }
    	
    	}
    	
    
    }
    
// B甘油三脂计算方法  以及取值范围   
    var sele107b = document.getElementsByClassName("sele107")[1];
    	
    	var sele107Valb0 = sele107b.options[0].value;
    	var sele107Valb1 = sele107b.options[1].value; 
      
    
    
   //甘油三脂
    check107b.onblur = function(){
    	if (!re3.test(check107b.value)) {
    		
    		 check107b.value = "";
    		 
    	} else if (sele107b.value == sele107Valb0) {
    		 
    		if (check107b.value < 0.01) {
    	        check107b.value = "0.01";
             }
	
	         if (check107b.value > 20) {
		        check107b.value = "20";
	         }
    	
    	}else if (sele107b.value == sele107Valb1) {
    	    
    	    if (check107b.value < 0) {
    	     check107b.value = "0";
           }
	
	        if (check107b.value > 800) {
		     check107b.value = "800";
	       }
    		
    	
    	}
    		
    }
    	
 
//空腹血糖取值范围

    var sele107c = document.getElementsByClassName("sele107")[2];
    	
    	var sele107Valc0 = sele107c.options[0].value;
    	var sele107Valc1 = sele107c.options[1].value; 
       
    

//空腹血糖
   check107c.onblur = function(){
    	if (!re3.test(check107c.value)) {
    		
    		check107c.value = "";
    	}else if (sele107c.value == sele107Valc0) {
    		if (check107c.value < 1.1) {
    	        
    	        check107c.value = "1.1";    }
	
	        if (check107c.value > 33.3) {
		        
		        check107c.value = "33.3";
	        }
    	} else if(sele107c.value == sele107Valc1){
    		
    		 if (check107c.value < 20) {
    	       
    	       check107c.value = "20";    }
	
	         if (check107c.value > 600) {
		        
		        check107c.value = "600";
	        }
    		
    	}
    
    }
 //107高密度蛋白胆固醇正则以及取值范围  
   var sele107d = document.getElementsByClassName("sele107")[3];
    	
    	var sele107Vald0 = sele107d.options[0].value;
    	var sele107Vald1 = sele107d.options[1].value;
        
   
//高密度
   check107d.onblur = function(){
    	if (!re3.test(check107d.value)) {
    		
    		check107d.value = "";
    		
    	}else if (sele107d.value == sele107Vald0) {
    		
    		if (check107d.value < 0.01) {
    	       check107d.value = "0.01";
             }
	
	        if (check107d.value > 10) {
		       check107d.value = "10";
	        }
    	} else if(sele107d.value == sele107Vald1){
    		
    		if (check107d.value < 0) {
    	       check107d.value = "0";
             }
	
	        if (check107d.value > 400) {
		     check107d.value = "400";
	        }
    	}
    
    }
   
 //  107低密度蛋白胆固醇正则以及计算方法
   
var sele107e = document.getElementsByClassName("sele107")[4];
    	
    	var sele107Vale0 = sele107e.options[0].value;
    	var sele107Vale1 = sele107e.options[1].value;
    	
//低密度
   check107e.onblur = function(){
    	
    	if (!re3.test(check107e.value)) {
    		
    		check107e.value = "";
    	}else if (sele107e.value == sele107Vale0) {
    		  
    		  if (check107e.value < 0.01) {
    	         check107e.value = "0.01";
                }
	
	          if (check107e.value > 20) {
		         check107e.value = "20";
	            }
    	} else if(sele107e.value == sele107Vale1){
    		
    		    if (check107e.value <= 0) {
    	        check107e.value = "0";
                }
	
	    if (check107e.value > 800) {
		   
		   check107e.value = "800";
	       }
    		
    	}
    
    	
    }
   //107餐后两小时血糖
   var sele107f = document.getElementsByClassName("sele107")[5];
    	
    	var sele107Valf0 = sele107f.options[0].value;
    	var sele107Valf1 = sele107f.options[1].value;
      
   
//血糖
    check107f.onblur = function(){
    	if (!re3.test(check107f.value)) {
    		
    		check107f.value = "";
    	}else if (sele107f.value == sele107Valf0) {
    		  
    		  if (check107f.value <= 1.1) {
    	         
    	         check107f.value = "1.1";
               }
	
	          if (check107f.value > 33.3) {
		        
		        check107f.value = "33.3";
	           }
    	
    	} else if(sele107f.value == sele107Valf1){
    		
    		  if (check107f.value <= 20) {
    	       
    	       check107f.value = "20";
               
    		  }
	
	        if (check107f.value > 600) {
		       
		       check107f.value = "600";
	           
	        }
    		
    	 }
    	
    }
   
   //107血红蛋白
   
    //血红蛋白
     check107g.onblur = function(){
         
         if (!re3.test(check107g.value)) {
         	
         	 check107g.value = "";
         	 
         }else if (check107g.value <= 1) {
    	       
    	       check107g.value = "1";
         }
	
	          if (check107g.value > 450) {
		       
		       check107g.value = "450";
	     }
    	
    
    	
    }
     
     
     //107谷丙转氨酶
      check107h.onblur = function(){
    	
    	if (!re3.test(check107h.value)) {
    		
    		check107h.value = "";
    		
    	}else if (check107h.value == 0) {
    	  
    	     check107h.value = "0";
        }
	
	    if (check107h.value > 600) {
		   
		   check107h.value = "600";
	     }
    	
    }
      
    //107谷草转氨酶
      check107i.onblur = function(){
    	
    	if (!re3.test(check107i.value)) {
    		
    		check107i.value = "";
    		
    	}else if (check107i.value == 0) {
    	  
    	     check107i.value = "0";
        }
	
	    if (check107i.value > 600) {
		   
		    check107i.value = "600";
	     
	    }
    	
    
    	
    } 
      
    //甲胎蛋白
     check107j.onblur = function(){
    	
    	if (!re3.test(check107j.value)) {
    		
    		check107g.value = "";
    	}else if (check107j.value <= 0) {
    	
    	    check107j.value = "0";
        }
	
	    if (check107j.value > 1000) {
		
		   check107j.value = "1000";
	    }
    	 
    
    	
    }
     
    
     //c反应蛋白
     
      check107k.onblur = function(){
    	
    	if (!re3.test(check107k.value)) {
    		
    		check107k.value = "";
    	
    	}else if (check107k.value <= 0) {
    	
    	    check107k.value = "0";
        
    	}
	
	    if (check107k.value > 100) {
		
		    check107k.value = "100";
	
	    }
    	
    
    	
    }
    //血肌酐
    
     check107l.onblur = function(){
    	
    	if (!re3.test(check107l.value)) {
    		
    		check107l.value = "";
    	
    	}else if (check107l.value < 10) {
    	
    	    check107l.value = "10";
       
    	}
	
	        if (check107l.value > 800) {
		
		     check107l.value = "800";
	    
	    }
    	
    
    	
    }
    //血尿酸
     check107m.onblur = function(){
    	
    	if (!re3.test(check107m.value)) {
    		
    		check107m.value = "";
    	
    	}else if (check107m.value < 10) {
    	
    	   check107m.value = "10";
         }
	
	     if (check107m.value > 1000) {
		
		   check107m.value = "1000";
	
	    }
    
    	
    }
     //癌胚抗原
      check107n.onblur = function(){
    	
    	if (!re3.test(check107n.value)) {
    		
    		check107n.value = "";
    		
    	}else if (check107n.value <= 0) {
    	
    	   check107n.value = "0";
       
        }
	
	      if (check107n.value > 50) {
		
		   check107n.value = "50";
	   
	    }
    	
    
    	
    }
      //前列腺
       check107o.onblur = function(){
    	
    	if (!re3.test(check107o.value)) {
    		
    		check107o.value = "";
    		
    	}else if (check107o.value < 1) {
    	
    	    check107o.value = "0.01";
       
    	}
	
	    if (check107o.value > 20) {
		
		    check107o.value = "20";
	    
	    }
    	
    
    	
    }
       //骨密度

      check107p.onblur = function(){
    	
    	if (!re3.test(check107p.value)) {
    		
    		check107p.value = "";
    		
    	}else if (check107p.value < 0.01) {
    	
    	    check107p.value = "0.01";
        
    	}
	
	    if (check107p.value > 10) {
		
		    check107p.value = "10";
	    
	    }
    	
    
    	
    }
   
   
   
   
   
   //112一般检查
   check112a.onblur = function(){
	
	if (!re2.test(check112a.value)) {
		
		check112a.value = "";
	}else if (check112a.value < 50) {
		 check112a.value = "50";
	}
	
	if (check112a.value > 250) {
		check112a.value = "250";
	}
	
	
}
    
   //体重
   
   check112b.onblur = function(){
	
	if (!re2.test(check112b.value)) {
		
		check112b.value = "";
	}else if (check112b.value < 25) {
		check112b.value = "25";
	}
	
	if (check112b.value > 150) {
		check112b.value = "150";
	}
	
	
}
    
//腰围
check112c.onblur = function(){
	
	if (!re2.test(check112c.value)) {
		
		check112c.value = "";
	}else if (check112c.value < 50) {
		check112c.value = "50";
	}
	
	if (check112c.value > 150) {
		check112c.value = "150";
	}
	
	
}
    
//臀围  
   check112d.onblur = function(){
	
	if (!re2.test(check112d.value)) {
		
		check112d = "";
	}else if (check112d.value < 50) {
		check112d.value = "50";
	}
	
	if (check112d.value > 150) {
		check112d.value = "150";
	}
	
	
} 
    
   //收缩压
   check112e.onblur = function(){
	
	if (!re2.test(check112e.value)) {
		
		check112e.value = "";
	}else if (check112e.value < 60) {
		check112e.value = "60";
	}
	
	if (check112e.value > 300) {
		check112e.value = "300";
	}
	
	
}
   
   //舒张压
   
    check112f.onblur = function(){
	
	  if (!re2.test(check112f.value)) {
	  	
	  	check112f.value = "";
	  }else if (check112f.value < 40) {
		check112f.value = "40";
	}
	
	if (check112f.value > 200) {
		check112f.value = "200";
	}
	
	
}
   
 //115题女性实验室检查
   
   var sele115a = document.getElementsByClassName("sele115")[0];
    	
    	var sele115Vala0 = sele115a.options[0].value;
    	var sele115Vala1 = sele115a.options[1].value;
       
   
   
   //115
   //总胆固醇
    check115a.onblur = function(){
    	 
    	 if (!re3.test(check115a.value)) {
    	 	
    	 	check115a.value = "";
    	 }else if (sele115a.value == sele115Vala0) {
    	    
    	    if (check115a.value < 0.01) {
    	       check115a.value = "0.01";
            }
    	  	
	        if (check115a.value > 20) {
		       check115a.value = "20";
	     	}
	      	
	      	
	     }else if (sele115a.value == sele115Vala1) {
    	    
    	    if (check115a.value < 0) {
    	       check115a.value = "0";
            }
    	  	
	        if (check115a.value > 800) {
		       check115a.value = "800";
	     	}
    
      }
  
    
 }  
  
 //甘油三脂 
   var sele115b = document.getElementsByClassName("sele115")[1];
    	
    	var sele115Valb0 = sele115b.options[0].value;
    	var sele115Valb1 = sele115b.options[1].value; 
      
    
   //甘油三脂
    check115b.onblur = function(){
    	
    	if (!re3.test(check115b.value)) {
    		
    		check115b.value = "";
    	}else if (sele115b.value == sele115Valb0) {
    		
    		 if (check115b.value < 0.01) {
                check115b.value = "0.01";
             }
    
             if (check115b.value > 20) {
                check115b.value = "20";
             }
    		
    		
    	}else if (sele115b.value == sele115Valb1) {
            
            if (check115b.value < 0) {
               check115b.value = "0";
           }
    
            if (check115b.value > 800) {
             check115b.value = "800";
           }
            
        
        }
    }
    
 //115空腹血糖
 var sele115c = document.getElementsByClassName("sele115")[2];
    	
    	var sele115Valc0 = sele115c.options[0].value;
    	var sele115Valc1 = sele115c.options[1].value; 
       

//空腹血糖
   check115c.onblur = function(){
    	
    	if (!re3.test(check115c.value)) {
    		check115c.value = "";
    	
    	}else if (sele115c.value == sele115Valc0) {
            if (check115c.value < 1.1) {
                
                check115c.value = "1.1";    }
    
            if (check115c.value > 33.3) {
                
                check115c.value = "33.3";
            }
        } else if(sele115c.value == sele115Valc1){
            
             if (check115c.value < 20) {
               
               check115c.value = "20";    }
    
             if (check115c.value > 600) {
                
                check115c.value = "600";
            }
            
        }
    	
    
    }

//115高密度
 var sele115d = document.getElementsByClassName("sele115")[3];
        
        var sele115Vald0 = sele115d.options[0].value;
        var sele115Vald1 = sele115d.options[1].value;
        

   check115d.onblur = function(){
    	 if (!re3.test(check115d.value)) {
            
            check115d.value = "";
            
        }else if (sele115d.value == sele115Vald0) {
            
            if (check115d.value < 0.01) {
               check115d.value = "0.01";
             }
    
            if (check115d.value > 10) {
               check115d.value = "10";
            }
        } else if(sele115d.value == sele115Vald1){
            
            if (check115d.value < 0) {
               check115d.value = "0";
             }
    
            if (check115d.value > 400) {
             check115d.value = "400";
            }
        }
    	
    
    	
    }

//低密度
   var sele115e = document.getElementsByClassName("sele115")[4];
        
        var sele115Vale0 = sele115e.options[0].value;
        var sele115Vale1 = sele115e.options[1].value;
        
   check115e.onblur = function(){
    	 if (!re3.test(check115e.value)) {
            
            check115e.value = "";
        }else if (sele115e.value == sele115Vale0) {
              
              if (check115e.value < 0.01) {
                 check115e.value = "0.01";
                }
    
              if (check115e.value > 20) {
                 check115e.value = "20";
                }
        } else if(sele115e.value == sele115Vale1){
            
                if (check115e.value <= 0) {
                check115e.value = "0";
                }
    
        if (check115e.value > 800) {
           
           check115e.value = "800";
           }
            
        }
    	
    
    	
    }
//血糖
  var sele115f = document.getElementsByClassName("sele115")[5];
        
        var sele115Valf0 = sele115f.options[0].value;
        var sele115Valf1 = sele115f.options[1].value;
       
    check115f.onblur = function(){
    	if (!re3.test(check115f.value)) {
            
            check115f.value = "";
        }else if (sele115f.value == sele115Valf0) {
              
              if (check115f.value <= 1.1) {
                 
                 check115f.value = "1.1";
               }
    
              if (check115f.value > 33.3) {
                
                check115f.value = "33.3";
               }
        
        } else if(sele115f.value == sele115Valf1){
            
              if (check115f.value <= 20) {
               
               check115f.value = "20";
               
              }
    
            if (check115f.value > 600) {
               
               check115f.value = "600";
               
            }
            
         }
    
    	
    }
    
    //血红
       check115g.onblur = function(){
         
         if (!re3.test(check115g.value)) {
            
             check115g.value = "";
             
         }else if (check115g.value <= 1) {
               
               check115g.value = "1";
         }
    
              if (check115g.value > 450) {
               
               check115g.value = "450";
         }
        
    
        
    }
     //谷丙
       check115h.onblur = function(){
        
        if (!re3.test(check115h.value)) {
            
            check115h.value = "";
            
        }else if (check115h.value == 0) {
          
             check115h.value = "0";
        }
    
        if (check115h.value > 600) {
           
           check115h.value = "600";
         }
        
    }
      //谷草转氨酶
      check115i.onblur = function(){
        
        if (!re3.test(check115i.value)) {
            
            check115i.value = "";
            
        }else if (check115i.value == 0) {
          
             check115i.value = "0";
        }
    
        if (check115i.value > 600) {
           
            check115i.value = "600";
         
        }
        
    
        
    } 
    //甲胎蛋白
     check115j.onblur = function(){
        
        if (!re3.test(check115j.value)) {
            
            check115g.value = "";
        }else if (check115j.value <= 0) {
        
            check115j.value = "0";
        }
    
        if (check115j.value > 1000) {
        
           check115j.value = "1000";
        }
         
    
        
    }
     //c反应蛋白
      check115k.onblur = function(){
        
        if (!re3.test(check115k.value)) {
            
            check115k.value = "";
        
        }else if (check115k.value <= 0) {
        
            check115k.value = "0";
        
        }
    
        if (check115k.value > 100) {
        
            check115k.value = "100";
    
        }
        
    
        
    }
    //血肌酐
     check115l.onblur = function(){
        
        if (!re3.test(check115l.value)) {
            
            check115l.value = "";
        
        }else if (check115l.value < 10) {
        
            check115l.value = "10";
       
        }
    
            if (check115l.value > 800) {
        
             check115l.value = "800";
        
        }
        
    
        
    }
    //血尿酸
      check115m.onblur = function(){
        
        if (!re3.test(check115m.value)) {
            
            check115m.value = "";
        
        }else if (check115m.value < 10) {
        
           check115m.value = "10";
         }
    
         if (check115m.value > 1000) {
        
           check115m.value = "1000";
    
        }
    
        
    }
     //癌胚抗原
       check115n.onblur = function(){
        
        if (!re3.test(check115n.value)) {
            
            check115n.value = "";
            
        }else if (check115n.value <= 0) {
        
           check115n.value = "0";
       
        }
    
          if (check115n.value > 50) {
        
           check115n.value = "50";
       
        }
        
    
        
    }
      //骨密度
       check115o.onblur = function(){
        
        if (!re3.test(check115o.value)) {
            
            check115o.value = "";
            
        }else if (check115o.value < 0.01) {
        
            check115o.value = "0.01";
        
        }
    
        if (check115o.value > 10) {
        
            check115o.value = "10";
        
        }
        
    
        
    }
       
     //48题喝酒函数
   	
   	function reDrink(b){
   		b.onblur = function(){	
   			//正则方法：取数字0-9，最少1位，最多四位
   		var reDrink = /^[0-9]{1,4}$/;
   		
   		if (!reDrink.test(b.value)) {
   		
   		b.value = "";
   		//48题所填值范围在0-999之内
   		}else if (b.value > 999) {
   			
   			 b.value = "999";
   		 
   		 }
   		
   		}
   		
   	}

   

       
       
       

//	//十九验证请选择
	function shijiu ( a,b){
		$(a).blur(function () {
		if($(b).val() == '请选择') {
			
			$(this).val('')
		}
	})
}
	
	
	//十九题a验证
	shijiu ( $('.smoke19a'),$('#week_a_dummy'));
	shijiu ( $('.smoke19b'),$('#week_b_dummy'));
	shijiu ( $('.smoke19c'),$('#week_c_dummy'));
	shijiu ( $('.smoke19d'),$('#week_d_dummy'));  
	shijiu ( $('.smoke19e'),$('#week_e_dummy'));
	shijiu ( $('.smoke19f'),$('#week_f_dummy'));

//#########################取值范围判断

//115题取值判断
//function charge(a){
//	a.onblur = function (){
//		if(a.value <= "1" ){
//			a.value = "1"
//		}else if(a.value >= "20"){
//			a.value = "20"
//		}
//		
//	}
//}
//
//charge(check115a);
