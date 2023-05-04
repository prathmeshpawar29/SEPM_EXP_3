function validateForm(){
	let x = document.forms["myForm"]["fName"].value;
  if (x == "") {
    alert("First name must be filled out.");
    document.myForm.fName.focus();
    return false;
  }
  let y = document.forms["myForm"]["lName"].value;
  if (y == "") {
    alert("Last name must be filled out.");
    document.myForm.lName.focus();
    return false;
  }
  let z = document.forms["myForm"]["phNo"].value;
  if (z.length != 10) {
    alert("Number should be of 10 digits.");
    document.myForm.phNo.focus();
    return false;
  }
  let a = document.forms["myForm"]["mailId"].value;
  if (a == "") {
    alert("Email must be filled out.");
    document.myForm.mailId.focus();
    return false;
  }  
  let pw1 = document.forms["myForm"]["pass1"].value;
  if (pw1 == "") {
    alert("Please enter password.");
    document.myForm.pass1.focus();
    return false;
  }
  if (pw1.length < 8) {
    alert("Password should consist minimum 8 characters.");
    document.myForm.pass1.focus();
    return false;
  }
  let pw2 = document.forms["myForm"]["pass2"].value;
  if (pw2 !== pw1) {
    alert("Passwords do no match.");
    document.myForm.pass1.focus();
    return false;
  }
  return true;
}
// DOM manipulation
tn = document.getElementsByTagName('div');
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a new para";
// tn[1].appendChild(createdElement);
// tn[0].removeChild(createdElement);

// sel = document.querySelectorAll('.child1');
// console.log(sel);

// JS Event
// para.addEventListener('click', function(){
//   document.querySelectorAll('.child1')[0].innerHTML = "<b> Hello World </b>"
//   console.log("Click hua");
// })