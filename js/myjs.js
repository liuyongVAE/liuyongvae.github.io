

$(document).ready(function(){
// 	$(".return-div").hide();
// 	$(".return-btn").hide();
// 	$("li").click( function(){
		
// 	 $("header").animate({left:"-1050px"},"slow")	
// 	 $(".panel-main").animate({left:"1000",width:"320px"},"slow")
// 	 $("#mainp").hide();
// 	 $(".line-2").hide();
// 	 $(".aboutlist").hide();
// 	 $(".return-div").show();
// 	 $(".return-btn").show();
	 
	 
	 
     });
     
     
// 	 $(".return-div").click(function(){
// 	 	 console.log("hello");
// 	       $("header").animate({left:"0px"},"slow")
// 	   	   $(".panel-main").animate({left:"0px",width:"100%"},"slow")
// 	       $("#mainp").show();
// 	       $(".line-2").show();
// 	       $(".aboutlist").show();
//      });
      $(".return-btn").click(function(){
	 	 console.log("hello");
	       $("header").animate({left:"0px"},"slow")
	   	   $(".panel-main").animate({left:"0px",width:"100%"},"slow")
	       $("#mainp").show();
	       $(".line-2").show();
	       $(".aboutlist").show();
     });
     
     
    $("li").mouseover(function(){
    	//console.log("ss");
    	//$(this).css("background-color","lightgray");
    });
    $("li").mouseout(function(){
    	//$(this).css("background-color","transparent");
    });
    


	
});

