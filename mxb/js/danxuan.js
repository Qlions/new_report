window.onload = function()
    {
	
    	//预加载
		$("#pagelog").fadeOut();
		$("#pagelogin").delay(350).fadeOut("slow");
    
	
      function only_label(a,b) {
      		var labels = document.querySelectorAll(a);
      		var radios = document.querySelectorAll(b);
//	       console.log(labels.length)
	       for(var i=0;i<labels.length;i++)
	       {
	           labels[i].onclick=function()
	           {
	               if(this.className=="")
	               {
	                    for(var j=0;j<labels.length;j++)
	                    {
	                       labels[j].className = "";
	                       radios[j].checked = false;
	                    }
	                         this.className='label_checked';
	               }
	           }
	       }
      }
      //第一题
      only_label('#label_radio1 label',"#label_radio1 input");
      //第二题
      only_label('#label_radio2 label',"#label_radio2 input");
      //第十一题
      only_label('#label_radio11 label',"#label_radio11 input");
      //第12/13/14/15
      
      only_label('#label_radio9 label',"#label_radio9 input");
      //第十题
     only_label('#label_radio10 label',"#label_radio10 input");

      
      
      //第三题
      only_label('#label_radio3 label',"#label_radio3 input");
      //第五十二题
      only_label('#label_radio52 label',"#label_radio52 input");
      only_label('#label_radio52_1 label',"#label_radio52_1 input");
      only_label('#label_radio52_2 label',"#label_radio52_2 input");
      only_label('#label_radio52_3 label',"#label_radio52_3 input");
      only_label('#label_radio52_4 label',"#label_radio52_4 input");
      //第41/42/43
      only_label('#label_radio41 label',"#label_radio41 input");
      only_label('#label_radio43 label',"#label_radio43 input");
      
      
      // 第11/12/13/14
       only_label('#label_radio12 label',"#label_radio12 input");
       only_label('#label_radio13 label',"#label_radio13 input");
       only_label('#label_radio14 label',"#label_radio14 input");
       only_label('#label_radio15 label',"#label_radio15 input");

	 //第16/17/18
	   only_label('#label_radio16 label',"#label_radio16 input");
       only_label('#label_radio17 label',"#label_radio17 input");
       only_label('#label_radio18 label',"#label_radio18 input");
	//第20/27 28
       only_label('#label_radio20 label',"#label_radio20 input");
       only_label('#label_radio27 label',"#label_radio27 input");
       only_label('#label_radio28 label',"#label_radio28 input");
	//44 58 61
	   only_label('#label_radio44 label',"#label_radio44 input");
       only_label('#label_radio58 label',"#label_radio58 input");
       only_label('#label_radio61 label',"#label_radio61 input");
      
      //63
      only_label('#label_radio63 label',"#label_radio63 input");
      
      //65
      only_label('#label_radio65 label',"#label_radio65 input");
      
      //74
      only_label('#label_radio74 label',"#label_radio74 input");
      
      //第76/78/79
	   only_label('#label_radio76 label',"#label_radio76 input");
       only_label('#label_radio78 label',"#label_radio78 input");
       only_label('#label_radio79 label',"#label_radio79 input");
      
      //80——86
       only_label('#label_radio80 label',"#label_radio80 input");
       only_label('#label_radio81 label',"#label_radio81 input");
       only_label('#label_radio82 label',"#label_radio82 input");
       only_label('#label_radio83 label',"#label_radio83 input");
       only_label('#label_radio84 label',"#label_radio84 input");
       only_label('#label_radio85 label',"#label_radio85 input");
       only_label('#label_radio86 label',"#label_radio86 input");
       only_label('#label_radio87 label',"#label_radio87 input");
       only_label('#label_radio88 label',"#label_radio88 input");
       only_label('#label_radio89 label',"#label_radio89 input");
       only_label('#label_radio90 label',"#label_radio90 input");
	   only_label('#label_radio91 label',"#label_radio91 input");
       only_label('#label_radio92 label',"#label_radio92 input");
       only_label('#label_radio93 label',"#label_radio93 input");
       only_label('#label_radio94 label',"#label_radio94 input");
       only_label('#label_radio95 label',"#label_radio95 input");
       only_label('#label_radio96 label',"#label_radio96 input");
       
       //97/99-100
       only_label('#label_radio97 label',"#label_radio97 input");
       only_label('#label_radio99 label',"#label_radio99 input");
       only_label('#label_radio100 label',"#label_radio100 input");
       
       
       //105-106
      only_label('#label_radio105_a label',"#label_radio105_a input");
      only_label('#label_radio105_b label',"#label_radio105_b input");
      only_label('#label_radio105_c label',"#label_radio105_c input");
      only_label('#label_radio105_d label',"#label_radio105_d input");
      
      only_label('#label_radio106_a label',"#label_radio106_a input");
      only_label('#label_radio106_b label',"#label_radio106_b input");
      only_label('#label_radio106_c label',"#label_radio106_c input");
      only_label('#label_radio106_d label',"#label_radio106_d input");
      
      //35/36
      only_label('#label_radio35 label',"#label_radio35 input");
      only_label('#label_radio36 label',"#label_radio36 input");
       
       //29
      only_label('#label_radio29 label',"#label_radio29 input");
       
      //=======================================================  磊  ===================
      //第一题
      only_label('#label_radio1_lei label',"#label_radio1_lei input");
      //第二题
      only_label('#label_radio2_lei label',"#label_radio2_lei input");
       //第三题
      only_label('#label_radio3_lei label',"#label_radio3_lei input");
       //第三十题
      only_label('#label_radio30_lei label',"#label_radio30_lei input");
      //第45题
      only_label('#label_radio45_lei label',"#label_radio45_lei input");
       //第46题
      only_label('#label_radio46_lei label',"#label_radio46_lei input");
		//第48题
      only_label('#label_radio48_lei #no',"#label_radio48_lei #radio_id_1");
      //第24题
      only_label('#label_radio24 label',"#label_radio24 input");
      //第25题
      only_label('#label_radio25 label',"#label_radio25 input");
      //第26题
      only_label('#label_radio26 label',"#label_radio26 input");
        //第30题
      only_label('#label_radio30 label',"#label_radio30 input");
       //第38题
      only_label('#label_radio38 label',"#label_radio38 input");
       //第40题
      only_label('#label_radio40 label',"#label_radio40 input");
        //第49题
      only_label('#label_radio49 label',"#label_radio49 input");
       //第50题
      only_label('#label_radio50 label',"#label_radio50 input");
       //第51题
      only_label('#label_radio51 label',"#label_radio51 input");
      only_label('#label_radio52_A label',"#label_radio52_A input");
      only_label('#label_radio52_B label',"#label_radio52_B input");
      only_label('#label_radio52_C label',"#label_radio52_C input");
      only_label('#label_radio52_D label',"#label_radio52_D input");
    only_label('#label_radio53 label',"#label_radio53 input");
    only_label('#label_radio54 label',"#label_radio54 input");
    only_label('#label_radio55 label',"#label_radio55  input");
    
    
    only_label('#label_radio72 label',"#label_radio72  input");
    only_label('#label_radio73 label',"#label_radio73  input");
    
    only_label('#label_radio100 label',"#label_radio100  input"); 
    only_label('#label_radio101 label',"#label_radio101  input");
    
    only_label('#label_radio106 label',"#label_radio106  input");
    
    only_label('#label_radio107 label',"#label_radio107  input");
    only_label('#label_radio108 label',"#label_radio108  input");
    only_label('#label_radio109 label',"#label_radio109  input");
     only_label('#label_radio116 label',"#label_radio116  input"); 
     only_label('#label_radio117 label',"#label_radio117  input");
     only_label('#label_radio118 label',"#label_radio118  input");
     only_label('#label_radio119 label',"#label_radio119  input");
       
     //***********************************多选封装******************
     Multiselect('#label_radio74_H label',"#label_radio74_H input");
     Multiselect('#label_radio101_H label',"#label_radio101_H input"); 
     Multiselect('#label_radio102_H label',"#label_radio102_H input"); 
     Multiselect('#label_radio103_H label',"#label_radio103_H input");
     Multiselect('#label_radio104_H label',"#label_radio104_H input");
      //***********************************多选封装   磊******************
    Multiselect('#label_radio4_lei label',"#label_radio4_lei input");
    Multiselect('#label_radio07_ly label',"#label_radio07_ly input");
	Multiselect('#label_radio39_ly label',"#label_radio39_ly input");
      //第48题
    Multiselect('#label_radio48_lei_1 #no',"#label_radio48_lei_1 #radio_id_1");
      
      
      
      
     function Multiselect(a,b){
       var labels_1 = document.querySelectorAll(a);
       var radios_1 = document.querySelectorAll(b);
            for(var i=0;i<labels_1.length;i++){
           labels_1[i].onclick=function(){
               if(this.className=="label_checked_2" ){               
                  this.className='label_checked_1';
            
               }else{
                  this.className='label_checked_2';
                  
                 
               }
           }
       }

	}
     
//***********************************多选封装  8题******************
     Multiselect_8('#label_radio8_lei label',"#label_radio8_lei input");
      
     function Multiselect_8(a,b){
       var labels_1 = document.querySelectorAll(a);
       var radios_1 = document.querySelectorAll(b);
            for(var i=0;i<labels_1.length;i++){
           labels_1[i].onclick=function(){
               if(this.className=="label_checked_4"){               
                  this.className='label_checked_3';
                  
               }else{
                  this.className='label_checked_4';
                  
               }
           }
       }

	} 
}  


    