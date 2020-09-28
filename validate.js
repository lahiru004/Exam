function formvalidation() {
			
			var email=document.getElementById('email').value;
			
			var a=/[\da-zA-Z0-9._!]@[\da-zA-Z].[A-Za-z]/;

			}

				else if (email.trim() == " ") {

					alert("Valid email");

						return false;  
		

				if (a.test(email)) {

					
				}else{
					alert("Invalid email");
					return false;
				}

			}

		}