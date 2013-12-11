var dataRef = new Firebase ('https://camila-mercado.firebaseio.com/');
var histories = new Firebase ('https://camila-mercado.firebaseio.com/storage/history');


$(".publish").on('click', function(){

		var storage = document.querySelector('.narrative').value;

		if(typeof(Storage)!=="undefined")
		  {
		  if (localStorage.clickcount)
		    {
		    localStorage.clickcount=Number(localStorage.clickcount)+1;
		    }
		  else
		    {
		    localStorage.clickcount=1;
		    }
		  console.log("You have clicked the button " + localStorage.clickcount + " time(s).");
		  }
		else
		  {
		 console.log("Sorry, your browser does not support web storage...");
		  }

		  var count= localStorage.clickcount;
			
			
			histories.push(


				{ 
					'count'	   :    count,
		 			'name'     : 	hName,
		 			'base'     :    triBase,
		 			'upper'    :    triUpper,
		 			'property' : 	hProperty,
		 			'number'   : 	hNumber, 
		 			'trait'    : 	hTrait, 
		 			'date'     : 	today,  
		 			'hour'     : 	hours,  
		 			'narrate'  : 	storage	     
		 			
		 		}

		 	
		);
			

			document.querySelector(".record").value=storage;



});

	
