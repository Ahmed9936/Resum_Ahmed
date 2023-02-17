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
    massasesError = isMobile("#mobile" , massasesError,"mobile must contan number only and must lok like 0500000000")

    if (massasesError.length>0){
        mass.innerHTML = "Tssues found  n ["+massasesError.length +"]:  "+massasesError.join(" ,  ") + ".";
        e.preventDefault();
    }
} )

function isFilled(selctoer , massasesError,mas){
    const element = document.querySelector(selctoer).value.trim()
    if (element.length<1){
        massasesError.push(mas);
    }
    return massasesError;
}
function isEmail(selctoer , massasesError,mas){
    const element = document.querySelector(selctoer).value.trim()
    if(!element.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}")){
        massasesError.push(mas);

    }
    return massasesError;
}
function isMobile(selctoer , massasesError,mas){
    const element = document.querySelector(selctoer).value.trim()
    if(!element.match("[0-9]{10}")){
        massasesError.push(mas);

    }
    return massasesError;
}
