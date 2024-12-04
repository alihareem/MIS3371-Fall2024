 /*HOMEWORK 4 - JAVASCRIPT*/

/*
Program name: patient-form.html
Author: Hareem Ali
Date created: 11/5
Date last edited: 12/3
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

function validateFirstName() {
    let fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;

    //checks if first name field is empty
    if (fname == ""){
            document.getElementById("fname-error").innerHTML = "First name cannot be empty";
            return false;

        }else if (fname != ""){
            if (!fname.match(namePattern)) {
            document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only";
            return false;

    // checks if name is less than 2 characters
        }else if (fname.length < 2) {
            document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters";
            return false;

     // checks if name is more than 30 characters
        }else if (fname.length > 30) {
            document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters long";
            return false;
        } else {
                document.getElementById("fname-error").innerHTML = "";
                return true;
        }
}
}
    
function validateMiddleInitial() {
    let middleinitial = document.getElementById("middleinitial").value;
    var namePattern = /^[A-Z]+$/;

//if no middle initial then validation can be bypassed
if (middleinitial === "") {
        document.getElementById("middleinitial-error").innerHTML = ""; // Clear any existing errors
        return true;
}

    //makes middle iniital uppercase
    middleinitial = middleinitial.toUpperCase();
    document.getElementById("middleinitial").value = middleinitial;

   // checks that middle initial is one character and matches pattern
        if (!middleinitial.match(namePattern)) {
            document.getElementById("middleinitial-error").innerHTML = "Middle initial must be a single uppercase letter";
            return false;

        }else {
         
                document.getElementById("middleinitial-error").innerHTML = "";
                return true;
        }
}

function validateLastName() {
    let lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;

    //checks if last name field is empty
    if (lname == ""){
            document.getElementById("lname-error").innerHTML = "Last name cannot be empty";
            return false;

        }else if (lname != ""){
            if (!lname.match(namePattern)) {
            document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only";
            return false;

    // checks if last name is less than 2 characters
        }else if (lname.length < 2) {
            document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters";
            return false;

     // checks if name is more than 30 characters
        }else if (lname.length > 30) {
            document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters long";
            return false;
        } else {
                document.getElementById("lname-error").innerHTML = "";
                return true;
        }
}
}

//adding validations so dob is not in the future nor more than 120 years ago
function validateDateofBirth() {
    let dateofbirth = document.getElementById("dateofbirth");
    let dateValue = dateofbirth.value;
    if (!dateValue) {
          document.getElementById("dateofbirth-error").innerHTML = "Please enter a valid date";
          return false;
    }

    let date = new Date(dateValue);
    let currentDate = new Date();
    let maxDate = new Date();
    maxDate.setFullYear(currentDate.getFullYear() - 120);

    if (date > currentDate) {
       document.getElementById("dateofbirth-error").innerHTML = "Date given is in the future"
       dateofbirth.value="";
       return false;
  } else if (date < maxDate) {
       document.getElementById("dateofbirth-error").innerHTML = "Date given in more than 120 years ago";
       dateofbirth.value="";
       return false;
  } else {
       document.getElementById("dateofbirth-error").innerHTML = "";
       return true;
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

     if (ad1.length <2) {
         document.getElementById("address1-error").innerHTML = "Please enter something on the address line";
         return false;
  } else {
         document.getElementById("address1-error").innerHTML = "";
         return true;
  }
}

function validateCity() {
        city = document.getElementById("city").value.trim();

        if (!city) {
                document.getElementById("city-error").innerHTML = "City cannot be left blank";
                return false;
        } else {
                document.getElementById("city-error").innerHTML = "";
                return true;
        }
}


function validateZipcode() {
    const zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "")  //removes non-number characters

    if (!zip) {
          document.getElementById("zipcode-error").innerHTML= "Zip code field cannot be left blank";
          return false;
  }

    if (zip.length < 5) {               //makes sure we have minimum 5 digits
          document.getElementById("zipcode-error").innerHTML= "Zip code field should contain at least 5 digits";
          return false;
   }

    if (zip.length > 5) {         //gets rid of any numbers after 5 but less than 9
          zip = zip.slice(0,5);
  }

zipInput.value=zip;
document.getElementById("zipcode-error").innerHTML ="";
return true;
}

function validateEmail() {
    let email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email =="") {
           document.getElementById("email-error").innerHTML = "Email field cannot be empty";
           return false;
  } else if (!email.match(emailR)) {
           document.getElementById("email-error").innerHTML = "Please enter a valid email address";
           return false;
  } else {
           document.getElementById("email-error").innerHTML = "";
           return true;
}
}

function validatePhoneNumber() {
     const phoneInput = document.getElementById("phone");
     const phone = phoneInput.value.replace(/\D/g,"");  //removes all non-number characters

     if (phone.length == 0) {
            document.getElementById("phone-error").innerHTML = "Phone number field cannot be left blank";
            return false;
  }

     const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
     phoneInput.value = formattedPhone;
     document.getElementById("phone-error").innerHTML = "";
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
if (!regex.test(username)) {
       document.getElementById("username-error").innerHTML = "Username can only contain letters, numbers, or underscores";
//checks that username only contains allowed characters
       return false;
  } else if (username.length < 5) {
       document.getElementById("username-error").innerHTML = "Username must be at least 5 characters long";
       return false;
  } else if (username.length > 30) {
        document.getElementById("username-error").innerHTML = "Username cannot have more than 30 characters";
        return false;
  } else {
       document.getElementById("username-error").innerHTML = "";
       return true;
  }
}


function validatePassword() {
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
     if (password == username || password.includes(username)) {
             errorMessage.push("Password cannot be the same as username");
     }

 //display error messages if there are any errors
      const errorContainer = document.querySelector(".password-message");
      errorContainer.innerHTML = errorMessage
      .map((message) => `<span>${message}</span><br/>`)
      .join("");

      if (errorMessage.length > 0) {
        return false;
    } else {
        return true;
    }
}

//confirm password validation js code
 function validateConfirmPassword() {
       const password1 = document.getElementById("password").value;
       const password2 = document.getElementById("confirmpassword").value;

//gives error message if either of the fields are empty
        if (password1 === "" || password2 === "") {
        document.getElementById("password2-error").innerHTML = ""; 
        return false;
        }

       if (password1 !== password2) {
             document.getElementById("password2-error").innerHTML = "Passwords do not match";
             return false;
       } else {
             document.getElementById("password2-error").innerHTML = "";
             return true;
       }
 }

//adding labels so it is easy to review input through the input button
const fieldLabels = {
    fname: "First Name",
    middleinitial: "Middle Initial",
    lname: "Last Name",
    patientsex: "Patient's Sex",
    dateofbirth: "Date of Birth",
    ssn: "Social Security",
    address1: "Address",
    address2: "Address",
    city: "City",
    state: "State",
    zipcode: "Zip Code",
    email: "Email Address",
    phone: "Phone Number",
    patienthistory: "Patient History",
    notes: "Notes",
    range: "Pain Scale",
    username: "Username",
    password: "Password",
    confirmpassword: "Confirm Password",
}


//building the review button
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class = 'output'><th colspan = '3'>Your information:</th>";
    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !="") {
            const name = formcontent.elements[i].name;
            const label = fieldLabels[name] || name;
            const datatype = formcontent.elements[i].type;

            switch(datatype) {
                case "checkbox": 
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr> <td align= 'right'>" + label + "</td>";
                        formoutput += "<td class = 'outputdata'>&#x2713; </td></tr>"; 
                    }
                    break; 
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr> <td align = 'right'>" + label + "</td>";
                        formoutput += "<td class = 'outputdata'>" +formcontent.elements[i].value + "</td> </tr>";
                    }
                    break;
                    case "button":
                    case "submit":
                    case "reset":
                    break;
                    default:
                    formoutput +=  "<tr> <td align = 'right'>" + label + "</td>";
                    formoutput +=  "<td class ='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    if (formoutput.length > 0){
        formoutput += "</table>";
        document.getElementById("showInput").innerHTML = formoutput; 
    }
}


//removes user input
 function removeReview() {
  document.getElementById("showInput").innerHTML = "";
 }


 //shows alert box when necessary 
 function showAlert() {
        var alertBox = document.getElementById("alert-box");
        var closeAlert = document.getElementById("close-alert");
        
        alertBox.style.display = "block";
        closeAlert.onclick = function () {
                alertBox.style.display = "none";
        }
 }


 //validate everything on the form
function validateEverything() {
        let valid = true;

        if (!validateFirstName()) {
                valid = false;
        }
        if (!validateMiddleInitial()) {
                valid = false;
        }
        if (!validateLastName()) {
                valid = false;
        }
        if (!validateDateofBirth()) {
                valid = false;
        }
        if (!validateSSN()) {
                valid = false;
        }
        if (!validateAddress1()) {
                valid = false;
        }
        if (!validateCity()) {
                valid = false;
        }
        if (!validateZipcode()) {
                valid = false;
        }
        if (!validateEmail()) {
                valid = false;
        }
        if (!validatePhoneNumber()) {
                valid = false;
        }
        if (!validateUsername()) {
                valid = false;
        }
        if (!validatePassword()) {
                valid = false;
        }
        if (!validateConfirmPassword()) {
                valid = false;
        }
        if (valid) {
                document.getElementById("submit").style.display = "inline";
                return true;
        } else {
                showAlert();
                return false;
        }
}

//cookie for remembering info input on form//
function setCookie (name, cvalue, expiryDays) {
  var day = new Date();
  day.setTime(day.getTime() + (expiryDays*24*60*60*1000));
  var expires = "expires=" + day.toUTCString();
  document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie {
 var cookieNmae = name + "=";
 var cookies = document.cookie.split(';');

 for (var i=0; i < cookies.length; i++) {
  var cookie = cookies[i].trim();
  while (cookue.charAt (0) == ' '{
   cookie = cookie.substring(1);
  }
  if (cookie.indexOf(cookieName) == 0{
   return cookie.substring(cookieName.length, cookie.length);
  }
 }
  return " ";
}

var inputs = [
 {id: "fname", cookieName: "firstName"},




