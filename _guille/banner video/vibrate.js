var myVid=document.getElementById("video1");
var timer= setInterval(function(){myTimer()},1000);
function myTimer()
  {
    if(myVid.currentTime == 3)
    {
       myVid.pause();
	   			$("#example-four .button").vibrate("long"); 
				
							$("#example-four .button").vibrate("long"); 


       window.clearInterval(timer);
    }
  }