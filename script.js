function updatetime() {
	var miliseconds = Date.now() + 10800000;
	// multiply by 1000 because Date() requires miliseconds
	var date = new Date(miliseconds);
	var hh = date.getUTCHours();
	var mm = date.getUTCMinutes();
	var ss = date.getSeconds();
	if (hh > 12) {hh = hh % 12;}
	// These lines ensure you have two-digits
	if (hh < 10) {hh = "0"+hh;}
	if (mm < 10) {mm = "0"+mm;}
	if (ss < 10) {ss = "0"+ss;}
	// This formats your string to HH:MM:SS
	var t = hh+":"+mm+":"+ss;
	$(document).ready(function() {
	  $("#time").html(t);

	});
}

//setInterval(updatetime(), 999);

setInterval(function(){
	updatetime();
	console.log("this is the update");
}, 1000);





