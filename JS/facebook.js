window.fbAsyncInit = function() {
			  FB.init({
				appId      : '291560897641159', // App ID
				channelUrl : '..\channel.html', // Channel File
				status     : true, // check login status
				cookie     : true, // enable cookies to allow the server to access the session
				xfbml      : true  // parse XFBML
			  });

			  // Here we subscribe to the auth.authResponseChange JavaScript event. This event is fired
			  // for any auth related change, such as login, logout or session refresh. This means that
			  // whenever someone who was previously logged out tries to log in again, the correct case below 
			  // will be handled. 
			  FB.Event.subscribe('auth.authResponseChange', function(response) {
				// Here we specify what we do with the response anytime this event occurs. 
				if (response.status === 'connected') {
				 // In this case, we're handling the situation where they have logged in to the app.
				} else if (response.status === 'not_authorized') {
				  // In this case, the person is logged into Facebook, but not into the app, so we call
				  // FB.login() to prompt them to do so. 
				  // In real-life usage, you wouldn't want to immediately prompt someone to login 
				  // like this, for two reasons:
				  // (1) JavaScript created popup windows are blocked by most browsers unless they 
				  // result from direct user interaction (such as a mouse click)
				  // (2) it is a bad experience to be continually prompted to login upon page load.
				  window.location="../";
				  FB.login();
				} else {
				  // In this case, the person is not logged into Facebook, so we call the login() 
				  // function to prompt them to do so. Note that at this stage there is no indication
				  // of whether they are logged into the app. If they aren't then they'll see the Login
				  // dialog right after they log in to Facebook. 
				  // The same caveats as above apply to the FB.login() call here.
				 window.location="../";
				  FB.login();
				}
			  });
			  };

			  // Load the SDK asynchronously
			  (function(d){
			   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
			   if (d.getElementById(id)) {return;}
			   js = d.createElement('script'); js.id = id; js.async = true;
			   js.src = "//connect.facebook.net/en_US/all.js";
			   ref.parentNode.insertBefore(js, ref);
			  }(document));

			  
			  
function checkLogin(e){
FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
   
  } else {
  e.preventDefault();
	window.location="/ajproject4";
  }
 });

}
	  // Here we run a very simple test of the Graph API after login is successful. 
	  // This testAPI() function is only called in those cases. 
	  function logOut() {
		FB.logout(function(response) {
  // user is now logged out
});
	  }