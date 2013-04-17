function load()
{
var signup = document.getElementById("signupform");
signup.addEventListener("submit", function(event){
event.preventDefault();
var bool = validateName();
if(bool)
{bool = validatePswd();};
if(bool)
{signup.submit();}
}, false);
}


function validatePswd()
{
var box=document.getElementById("error"); 
var x=document.getElementById("password").value;
var y=document.getElementById("confirm").value; 
if (x==null || x=="" || x=="Password" || x!=y )
  {
	box.firstChild.replaceData(0, 50,"Passwords must match");
	box.style.border="2px solid red";
	return false;
  }
  else
  {
	box.firstChild.replaceData(0, 50,"")
	box.style.border="0px solid red";
	return true;
 }
}

function validateEmail()
{
var box=document.getElementById("error");
var x=document.getElementById("email").value; 
var string= x.indexOf("@");
if (x==null || x=="" || x=="Example@gmail.com" || string==-1 )
  {
	box.firstChild.replaceData(0, 50,"E-mail must contain an @");
	box.style.border="2px solid red";
	return false;
  }
  else
  {
	box.firstChild.replaceData(0, 50,"")
	box.style.border="0px solid red";
	return true;
 }
}

function validateName()
{

var box=document.getElementById("error");
var x=document.getElementById("username").value; 
if (x==null || x=="" || x=="Username" )
  {
	box.firstChild.replaceData(0, 50,"Username cannot be empty");
	box.style.border="2px solid red";
	return false;
  }
  else
  {
	box.firstChild.replaceData(0, 50,"")
	box.style.border="0px solid red";
	return true;
 }
}