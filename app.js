var txtref = document.querySelector("#txt-input");
var outputref = document.querySelector("#output");


var btnref = document.querySelector("#btn");
btnref.addEventListener("click", onClickHandler);

function onClickHandler()
{
    var date=document.getElementById("dateip").value;
    var formatCheck = checkInputFormat(date);
    
    if (formatCheck == true) {
        
        var leap = isLeapYear(date);
        if (leap == true) {
            outputref.innerText = "Yes! You are born in a leap year!\n Feel free to share this with your friend circle over social media."
        } else {
            outputref.innerText = "You were not born in a leap year!"
        }
    } else {
        alert("You input is invalid or is not in the required format!\n Required format: DD-MM-YYYY");
    }
}



function checkInputFormat(ip) {
    var [yearcheck, monthcheck, daycheck] = ip.toString().split("-")

    if (monthcheck === null ||
         monthcheck === " " || 
         yearcheck === " " || 
         yearcheck === null || 
         isNaN(daycheck) ===true|| 
         isNaN(monthcheck)===true||
         isNaN(yearcheck)||
         monthcheck <1||
         monthcheck>12||
         daycheck<1||
         daycheck>31||
         monthcheck==""||
         daycheck==""||
         yearcheck==""||(monthcheck==2 && daycheck==30)) {
        return false;
    } else {

        return true;
    }
}

function isLeapYear(ip) {
    var [year, month, day] = ip.toString().split("-")
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {

        return true;
    } else {

        return false;
    }
}