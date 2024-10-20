HOMEWORK 2 - JAVASCRIPT

 /*
Program name: patient-form.html
Author: Hareem Ali
Date created: 10/14
Date last edited: 10/19
Version: 3.0
Description: this is the javascript code for a patient registration form
*/



/* Date code set from W3 Schools */
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

/* code taken from MISSO resources for patient pain slider */
let slider = document.getElementById("range")
    let output = document.getElementById("range-scale")
    output.innerHTML = slider.value;
        slider.oninput = function() {output.innerHTML = this.value;};

// HW2 ADDITIONS 
// Data validations

function validateDateofBirth() {
    dob=document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date()-120);

    if (date > new Date()) {
       document.getElementById("dateofbirth-error)".innerHTML = "Date given is in the future"
       dob.value="";
       return false;
  } else if (date < new Date(maxDate)) {
       document.getElementById("dateofbirth-error).innerHTML = "Date given in more than 120 years ago"
       dob.value="";
       return false;
  } else {
       document.getElementById("dateofbirth-error).innerHTML = "";
       return true
  }
}

function validateSSN() {
    const ssn = document.getElementById("ssn").value;

//REGEX 
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number";
        return false;
  } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
  }
}

function validateAddress1() {
     var ad1 = document.getElementById("address1").value;
     console.log(ad1);
     console.log(ad1.length);

     id (ad1.length <2) {
         document.getElementById("address1-error").innerHTML = "Please enter something on the address line";
         return false;
  } else {
         document.getElementById("address1-error).innerHTML = "";
         return true;
}

function validateZipcode() {
    const zipInput = document.getElementById("zipcode);
    let zip = zipInput.value.replace(/[^\d-]/g,"")  //removes non-number characters

    if (!zip) {
          document.getElementById("zipcode-error).innerHTML= "Zip code field cannot be left blank";
          return false;
  }
    if (zip.length >5) {
          zip = zip.slice(0,5);
  }

zipInput.value=zip;
document.getElementById("zipcode-error").innerHTML ="";
return true;
}

function validateEmail() {
    email = document.getElementById("email".value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email =="") {
           document.getElementById("email-error").innerHTML = "Email field cannot be empty";
           return false;
  } else if (!email.match(emailR)) {
           document.getElementById("email-error").innerHTML = "Please enter a valid email address"
           return false;
  } else {
           document.getElementById("email-error).innerHTML = "";
           return false

}

function validatePhoneNumber() {
     const phoneInput = document.getElementById("phone");
     const phone = phoneInput.value.replace(/\D/g,"");  //removes all non-number characters

     if (phone.length != 10) {
            document.getElementById("phone-error").innerHTML = "Phone number field cannot be left blank";
            return false;
  }

     const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6)
     phoneInput.value = formattedPhone;
     document.getElementById("phone-error).innerHTML = "";
     return true;
}

function validateUsername() {
    username = document.getElementById("username").value;

    //converting username to lowercase now 
    username = username.toLowerCase();

    //display username in lowercase  
    document.getElementById("username").value = username;

    if (username.length == 0) {
           document.getElementById("username-error").innerHTML = "Username field cannot be left blank";
           return false;
  }

//check that username is not starting with a number
     if (!isNaN(username.charAt(0))) {
            document.getElementById("username-error").innerHTML = "Username cannot begin with a number";
            return false;
  }

let regex = /^[a-zA-Z0-9_]+$/;
if !regex.test(username) {
       document.getElementById("username-error).innerHTML = "Username can only contain letters, numbers, or underscores";
//checks that username only contains allowed characters
       return false;
  } else if (username.length < 5) {
       document.getElementById("username-error").innerHTML = "Username must be at least 5 characters long";
  } else if (username.length > 30) {
            document.getElemenyById("username-error").innerHTML = "Username cannot have more than 30 characters";
            return false;
  } else {
       document.getElementById("username-error").innerHTML = "";
       return true;
  }
}

function validate Password() {
     const password = document.getElementById("password").value;
     const username = document.getElementById("username").value;
 
 //setting up and initializing array
     const errorMessage = [];

 //checking for lowercase letter
     if (!password.match(/[a-z]/)) {
             errorMessage.push("Enter at least one lowercase letter");
     }

  //checking for uppercase letter
     if (!password.match(/[A-Z]/)) {
             errorMessage.push("Enter at least one uppercase letter");
     }

 //checking for numbers
     if (!password.match(/[0-9]/)) {
             errorMessage.push("Enter at least one number");
     }

  //checking for special characters
     if (!password.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
             errorMessage.push("Enter at least one special character");
     }

  //checking for duplicate username 
     if password == username || password.includes(username) {
             errorMessage.push("Password cannot be the same as username");
     }

 //display error messages if there are any errors
      const errorContainer = document.querySelector(".password-message");
      errorContainer.innerHTML = errorMessage
      .map((message) => `<span>{$message}</span><br/>`)
      .join("");
}

//confirm password validation js code
 function confirmPassword() {
       password1 = document.getElementById("password").value;
       password2 = document.getElementById("confirmpassword").value;

       if (password1 != password2) {
             docuemnt.getElementById("password2-error").innerHTML = "Passwords do not match";
             return false;
       } else {
             document.getElementById("password2-error").innerHTML = "Password match";
             return true
       }
 }

//building the review button
 function 

 
