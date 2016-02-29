window.onload = function(){	

	function display() {
		var thing1 = document.getElementById("ID");
		var thing2 = document.getElementById("password")
		thing1.innerHTML = Display_val1;
		thing2.innerHTML = Display_val2; 
	}
	
	
	
	var display_val1 = "";
	var display_val2 = "";
	
	var apple_button = document.getElementById("test1");
	var google_button = document.getElementById("test2");
	var windows_button = document.getElementById("test3"); 
	
	apple_button.onclick = function() {
		Display_val1 = "Enter Your Apple ID";
		Display_val2 = "Enter Your Apple Password";
		display();
	}
	

	google_button.onclick = function() {
		Display_val1 = "Enter Your Google ID";
		Display_val2 = "Enter Your Google Password";
		display();
	}
	

	windows_button.onclick = function() {
		Display_val1 = "Enter Your Windows ID";
		Display_val2 = "Enter Your Windows Password"; 
		display();
	}
}
	
	
