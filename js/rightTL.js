var date = new Firebase('https://camila-mercado.firebaseio.com/storage/history/date');
var hour = new Firebase('https://camila-mercado.firebaseio.com/storage/history/hour');
var namer = new Firebase('https://camila-mercado.firebaseio.com/storage/history/name');
var number = new Firebase('https://camila-mercado.firebaseio.com/storage/history/number');
var trait = new Firebase('https://camila-mercado.firebaseio.com/storage/history/trait');
var narrate = new Firebase('https://camila-mercado.firebaseio.com/storage/history/narrate');

date.on('value', function(date){

	console.log(date.val())


	document.getElementById("dateR3").innerHTML=date.val();


})

hour.on('value', function(hour){

	console.log(hour.val())


	document.getElementById("hourR3").innerHTML=hour.val();


})


namer.on('value', function(namer){

	console.log(namer.val())


	document.getElementById("hexName3").innerHTML=namer.val();


})

number.on('value', function(number){

	console.log(number.val())


	document.getElementById("hexNum3").innerHTML=number.val();


})

trait.on('value', function(trait){

	console.log(trait.val())


	document.getElementById("hexTrait3").innerHTML=trait.val();


})


narrate.on('value', function(narrate){

	console.log(narrate.val())


	document.getElementById("narrative3").innerHTML=narrate.val();


})




