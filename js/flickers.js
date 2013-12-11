$(document).ready(function() {
    
    $('#publish').on('click', function() {

         console.log("clicked");
         
   //       // $('#TimeN').addClass('flicker', 200);

   //       $("#TimeN")addClass("flicker");
		 // $("#TimeN").removeClass("flicker", 10000);
	    $('#TimeN').flicker(
	{
		'reps': 5, 
		'pause': 200, 
		'delay': 800, 
		'color': '#e55'
	}
);
	});
	       
    
});

// function flicker() {

// 	document.querySelector('#TimeN').style.color="magenta";
// 	document.querySelector('#TimeN').style.color="cyan";

// }
