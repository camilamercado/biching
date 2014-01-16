
	document.querySelector(".date").innerHTML=today;
	document.querySelector(".timeD").innerHTML=today;
	document.querySelector(".hours").innerHTML=hours;
	document.querySelector(".timeH").innerHTML=hours;

	document.querySelector('.upper').style.backgroundImage=triUpper;
	document.querySelector('.base').style.backgroundImage=triBase;
	
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

function lead() {

		document.querySelector('.arrow').style.display="block";
		document.querySelector('.narrative').style.border="1px solid tomato";
		document.querySelector('textarea').style="focus";


}

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
	

