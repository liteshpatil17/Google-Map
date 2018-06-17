
var mainText=document.getElementById("mainText");
var submitBtn=document.getElementById("submitBtn");

function submitClick()
{
	var firebaseRef=firebase.database().ref().child("Text");
	var msgText=mainText.value;
	firebaseRef.push().set(msgText);
 
}

