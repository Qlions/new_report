window.onload = function()
    {
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
       //第三题
      only_label('#label_radio3 label',"#label_radio3 input");
      //第四题
       only_label('#label_radio4 label',"#label_radio4 input");
       //第五题
       only_label('#label_radio5 label',"#label_radio5 input");
        //第六题
        only_label('#label_radio6 label',"#label_radio6 input");
        //第七题
        only_label('#label_radio7 label',"#label_radio7 input");
        //第八题
        only_label('#label_radio8 label',"#label_radio8 input");
        //第九题
        only_label('#label_radio9 label',"#label_radio9 input");
        //第十题
        only_label('#label_radio10 label',"#label_radio10 input");
      //第十一 -20题
      only_label('#label_radio11 label',"#label_radio11 input");
      only_label('#label_radio12 label',"#label_radio12 input");
      only_label('#label_radio13 label',"#label_radio13 input");
      only_label('#label_radio14 label',"#label_radio14 input");
      only_label('#label_radio15 label',"#label_radio15 input");
      only_label('#label_radio16 label',"#label_radio16 input");
      only_label('#label_radio17 label',"#label_radio17 input");
      only_label('#label_radio18 label',"#label_radio18 input");
      only_label('#label_radio19 label',"#label_radio19 input");
      only_label('#label_radio20 label',"#label_radio20 input");
      //21-30
      only_label('#label_radio21 label',"#label_radio21 input");
      only_label('#label_radio22 label',"#label_radio22 input");
      only_label('#label_radio23 label',"#label_radio23 input");
      only_label('#label_radio24 label',"#label_radio24 input");
      only_label('#label_radio25 label',"#label_radio25 input");
      only_label('#label_radio26 label',"#label_radio26 input");
      only_label('#label_radio27 label',"#label_radio27 input");
      only_label('#label_radio28 label',"#label_radio28 input");
      only_label('#label_radio29 label',"#label_radio29 input");
      only_label('#label_radio30 label',"#label_radio30 input");
      
      //31-40
      
      only_label('#label_radio31 label',"#label_radio31 input");
      only_label('#label_radio32 label',"#label_radio32 input");
      only_label('#label_radio33 label',"#label_radio33 input");
      only_label('#label_radio34 label',"#label_radio34 input");
      only_label('#label_radio35 label',"#label_radio35 input");
      only_label('#label_radio36 label',"#label_radio36 input");
      only_label('#label_radio37 label',"#label_radio37 input");
      only_label('#label_radio38 label',"#label_radio38 input");
      only_label('#label_radio39 label',"#label_radio39 input");
      only_label('#label_radio40 label',"#label_radio40 input");
     
     //41-50
     
      only_label('#label_radio41 label',"#label_radio41 input");
      only_label('#label_radio42 label',"#label_radio42 input");
      only_label('#label_radio43 label',"#label_radio43 input");
      only_label('#label_radio44 label',"#label_radio44 input");
      only_label('#label_radio45 label',"#label_radio45 input");
      only_label('#label_radio46 label',"#label_radio46 input");
      only_label('#label_radio47 label',"#label_radio47 input");
      only_label('#label_radio48 label',"#label_radio48 input");
      only_label('#label_radio49 label',"#label_radio49 input");
      only_label('#label_radio50 label',"#label_radio50 input");
     
     
      //51-60题
      only_label('#label_radio51 label',"#label_radio51 input");
      only_label('#label_radio52 label',"#label_radio52 input");
      only_label('#label_radio53 label',"#label_radio53 input");
      only_label('#label_radio54 label',"#label_radio54 input");
      only_label('#label_radio55 label',"#label_radio55 input");
      only_label('#label_radio56 label',"#label_radio56 input");
      only_label('#label_radio57 label',"#label_radio57 input");
      only_label('#label_radio58 label',"#label_radio58 input");
      only_label('#label_radio59 label',"#label_radio59 input");
      only_label('#label_radio60 label',"#label_radio60 input");
      
      //61-66
      only_label('#label_radio61 label',"#label_radio61 input");
      only_label('#label_radio62 label',"#label_radio62 input");
      only_label('#label_radio63 label',"#label_radio63 input");
      only_label('#label_radio64 label',"#label_radio64 input");
      only_label('#label_radio65 label',"#label_radio65 input");
      only_label('#label_radio66 label',"#label_radio66 input");
   
      
     function Multiselect(a,b){
       var labels_1 = document.querySelectorAll(a);
       var radios_1 = document.querySelectorAll(b);
            for(var i=0;i<labels_1.length;i++){
           labels_1[i].onclick=function(){
               if(this.className=="label_checked_2"){               
                  this.className='label_checked_1';
                  radios_1[j].checked = true;
               }else{
                  this.className='label_checked_2';
                  radios_1[j].checked = false;
                 
               }
           }
       }

	}
     

}  


    