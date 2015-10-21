var firstName = "Dani";
var lastName = "r";

var string  = firstName + " " + lastName;
var fullName = `<div>${firstName} 

   ${lastName}</div>`;
   
console.log(fullName);
document.body.innerHTML = fullName;