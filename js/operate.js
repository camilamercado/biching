

// begin by finding date and time

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 

var yyyy = today.getFullYear();
var hh = today.getHours();
var mn = today.getMinutes();
var ss = today.getSeconds();

var hours = hh + ":" + mn ;
	
	if(dd<10){dd='0'+dd} 
	if(mm<10){mm='0'+mm} 
	today = mm+'/'+dd+'/'+yyyy;

	// output to html

	document.querySelector(".date").value=today;
	document.querySelector(".timeD").value=today;
	document.querySelector(".hours").value=hours;
	document.querySelector(".timeH").value=hours;
	console.log(today);
	console.log(dd);
	console.log(mm);
	console.log(yyyy);
	console.log(hh);
	console.log(ss);


	for(var i = 0; i < earthlyBranches.length; i++) {
		if(earthlyBranches[i].year === yyyy) {
			
			// console.log(earthlyBranches[i].number);
			// console.log(earthlyBranches[i].branch);
			var y1 = earthlyBranches[i].number
			console.log(y1);
		}
	}


	//find hour branch

	for(var i = 0; i < earthlyBranches.length; i++) {
		if(earthlyBranches[i].hour1 === hh || earthlyBranches[i].hour2 === hh) {
			
			console.log(earthlyBranches[i].number);
		}

	}

		// trigram calculations

		// upper trigram calculation
		// year + month + day

		var upper = (y1 + mm + dd)%8;
		console.log("upper trigram =");
		

		for(var i = 0; i < trigrams.length; i++) {
			if(trigrams[i].number === upper) {
				
				console.log(trigrams[i].number);
				var tUpper = trigrams[i].chingName;
				console.log(tUpper);
				
				var triUpper = "url(img/trigrams/" + trigrams[i].number + ".png)"
				
				document.querySelector('.upper').style.backgroundImage=triUpper;
				// document.querySelector('.TLupper').style.backgroundImage=triUpper;
			}

		}

		
		// base trigram calculation
		// upper value + day

		var base = (upper + hh)%8;
		console.log(base);
		console.log("base trigram =");


		for(var i = 0; i < trigrams.length; i++) {
			if(trigrams[i].number === base) {
				
				console.log(trigrams[i].number);
				var tBase = trigrams[i].chingName;
				console.log(tBase);

				var triBase = "url(img/trigrams/" + trigrams[i].number + ".png)"
				
				document.querySelector('.base').style.backgroundImage=triBase;
				// document.querySelector('.TLbase').style.backgroundImage=triBase;


			}

		}


			//hexagram calulation 
			//+store data for timeline

			for(var i = 0; i < hexagrams.length; i++) {
				if(hexagrams[i].upperTrigram === tUpper || hexagrams[i].baseTrigram === tBase ) {
					
					console.log("Hexagram =")
					console.log(hexagrams[i].name);
					console.log(hexagrams[i].number);
					console.log(hexagrams[i].trait);
					console.log(hexagrams[i].property);

					var hName = hexagrams[i].name;
					var hNumber = hexagrams[i].number;
					var hTrait = hexagrams[i].trait;
					var hProperty = hexagrams[i].property;

					document.querySelector(".hexName").value=hName;
					document.querySelector(".hexNum").value=hNumber;
					document.querySelector(".hexTrait").value=hexagrams[i].trait;

					var text = "divinations/" + hexagrams[i].number + ".html";
					console.log(text);

					// document.getElementById("hexText").value=text;
					var iframe = document.querySelector(".myiframe"); 

	               	var url = text;
	                iframe.src = url;
	                
          
					var Hex = hexagrams[i].property;
					console.log(Hex);
				}

			}

			// hexagram visual output 
			//firm / yeilding / bridge


				// if(Hex === "firm") {
				// 		document.querySelector('#firm').style.display="block";
				// 		document.querySelector('#yeilding').style.display="none";
				// 		document.querySelector('#bridge').style.display="none";
				// 	}

				// 	else if(Hex === "yeilding") {
				// 		document.querySelector('#yeilding').style.display="block";
				// 		document.querySelector('#firm').style.display="none";
				// 		document.querySelector('#bridge').style.display="none";
				// 	}

				// 	else {
				// 		document.querySelector('#bridge').style.display="block";
				// 		document.querySelector('#firm').style.display="none";
				// 		document.querySelector('#yeilding').style.display="none";
				// 	}

// end calculations




// page display functions



// function narrate() {

// 		document.querySelector('.narrative').style.display="block";
// 		document.querySelector('.publish').style.display="block";
// 		document.querySelector('#yeilding').style.display="none";
// 		document.querySelector('#firm').style.display="none";
// 		document.querySelector('#bridge').style.display="none";

// }

// function describe() {

// 		document.querySelector('.narrative').style.display="none";
// 		document.querySelector('.myiframe').style.display="block";
// 		document.querySelector('.publish').style.display="none";

// }

document.querySelector(".entryCount").value="xxx";


function cover() {

		document.querySelector('#cover').style.display="block";
		document.querySelector('#timeline').style.display="none";
		document.querySelector('#hexagram').style.display="none";

		document.querySelector('.zero').style.color="deepskyblue";
		document.querySelector('.one').style.color="orchid";
		document.querySelector('.two').style.color="orchid";


}

function timeline() {

		document.querySelector('#timeline').style.display="block";
		document.querySelector('#cover').style.display="none";
		document.querySelector('#hexagram').style.display="none";

		document.querySelector('.one').style.color="deepskyblue";
		document.querySelector('.zero').style.color="orchid";
		document.querySelector('.two').style.color="orchid";

}

// function show() {

// 		document.querySelector('#right3').style.display="block";


// }

function hexagram() {

		document.querySelector('#hexagram').style.display="block";
		document.querySelector('#cover').style.display="none";
		document.querySelector('#timeline').style.display="none";
		document.querySelector('.myiframe').style.display="block";
		document.querySelector('.record').style.display="none";
		document.querySelector('.entered').style.display="none";

		document.querySelector('.two').style.color="deepskyblue";
		document.querySelector('.one').style.color="orchid";
		document.querySelector('.zero').style.color="orchid";
}

function narrative() {

		document.querySelector('.record').style.display="block";
		document.querySelector('.myiframe').style.display="none";
		document.querySelector('.entered').style.display="block";

}

function hopper() {
		document.querySelector('.grassHopper' ).style.display="block";
}
	

