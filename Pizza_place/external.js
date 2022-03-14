
//this function allows us to validate the user's username and password
function userValidation(){
	
	//declare variables
	var username = document.getElementById("usern");
	var password = document.getElementById("passw");
	
	//validation 
	if(username.value=="" || password.value==""){
		alert("Please enter user name and password")
		return false;
		}else if(password.value.length !=7){
		alert("Your password MUST contain 7 characters")
		return false;
		}else{
		return true;
		}
}

//this function allows us to calculate the total of the bill including the discount if applied
function billCalculation(){
	
	//declare variables
	var total = 0;
	var number = document.getElementById("num").value;
	var discount = document.getElementById("discount").value;
	
	//calculations
	if(document.getElementById("size").value== ""){
		alert("Please select your size");	
	}else if (document.getElementById("size").value=="lar"){	
		total = number * 5;
		alert('This is you total bill: €'+parseFloat(total));
	}else if (document.getElementById("size").value=="ext"){
		total = number * 7;
		alert('This is you total bill: €'+parseFloat(total));
	}else if (document.getElementById("size").value== "sup"){
		total = number * 17;
		alert("This is you total bill: €"+parseFloat(total));
		if(document.getElementById("size").value=="sup"){ 			//this nested "if" statement allows us to warn the user of a H&S stipulation
		alert("This is a health and safety warning for SUPERSIZE");
		}
	}	
	
	//validate number of pizzas
	if(document.getElementById("num").value==""){
		alert("Please select the number of pizzas");
	}
	
	//apply discount
	if(document.getElementById("discount").value=="extracheese"){
		total = total -((total * 10) / 100);
		alert("It is your lucky day, this is your final total after discount: €"+parseFloat(total));
	}
}
