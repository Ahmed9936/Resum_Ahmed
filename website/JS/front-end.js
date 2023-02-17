const from = document.querySelector("#my_form");
const mass = document.querySelector("#mas");

from.addEventListener('submit', e=>{
    let massasesError =[];
    
    massasesError = isFilled("#name" , massasesError,"Name is missing")
    massasesError = isFilled("#mobile" , massasesError,"mobile is missing")
    massasesError = isFilled("#email" , massasesError,"Email is missing")
    massasesError = isFilled("#massig" , massasesError,"detailes are missing")
    massasesError = isFilled("#date" , massasesError,"Due date is missing")
    massasesError = isEmail("#email" , massasesError,"Email format is rong")
    massasesError = isMobile("#mobile" , massasesError,"mobile must contan number only and must lok like 500000000")


    if (massasesError.length>0){
        mass.innerHTML = "Tssues found  n ["+massasesError.length +"]:  "+massasesError.join(" ,  ") + ".";
        e.preventDefault();
    }
} )

function validateName() {
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
      var lettersAndSpaces = /^[a-zA-Z\s]+$/;

    if (!name.match(lettersAndSpaces)) {
      nameInput.setCustomValidity("Please enter a valid name (letters and spaces only).");
    } else {
      nameInput.setCustomValidity("");
    }
  }

  function validateMobile() {
    var mobileInput = document.getElementById("mobile");
  
    var mobile = mobileInput.value;
  
    var digits = /^\d+$/;
    if (!mobile.match(digits)) {
      mobileInput.setCustomValidity("Please enter a valid mobile number (digits only).");
    } else {
      mobileInput.setCustomValidity("");
    }
  }
  function showEmailInfo() {
    alert("Please enter your email address in the format 'example@example.com'.");
  }


function isFilled(selctoer , massasesError,mas){
    const element = document.querySelector(selctoer).value
    if (element.length<1){
        massasesError.push(mas);
    }
    return massasesError;
}
function isEmail(selctoer , massasesError,mas){
    const element = document.querySelector(selctoer).value
    if(!element.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}")){
        massasesError.push(mas);

    }
    return massasesError;
}
function isMobile(selctoer , massasesError,mas){
    const element = document.querySelector(selctoer).value
    if(!element.match("[0-9]{9}")){
        massasesError.push(mas);

    }
    return massasesError;
}

$(document).ready(function() {
    $("#lang").change(function() {
        var selectedValue = $(this).val();
        alert("The selected language is: " + selectedValue);
    });
});

function handleGenderChange(radio) {
    alert("Selected gender: " + radio.value);
}