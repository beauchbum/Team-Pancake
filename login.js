$(document).ready(function() {
	$('.parallax').parallax();
	$('.sign-up').on('click', function() {
		console.log("Hello");
		document.location.href = "new_user_homepage.html";
	});

});