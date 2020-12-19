var txtref = document.querySelector("#txt-input");
var outputref = document.querySelector("#output");

var btnref = document.querySelector("#btn");
btnref.addEventListener("click", clickHandler);

function clickHandler() {
    var inputText = txtref.value;
    var formatCheck = checkInputFormat(inputText);

    if (formatCheck == true) {
        
        var leap = isLeapYear(inputText);
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
    var [daycheck, monthcheck, yearcheck] = ip.toString().split("-")

    if (monthcheck === null || monthcheck == " " || yearcheck == " " || yearcheck === null || isNaN(daycheck) ==true|| isNaN(monthcheck)==true||isNaN(yearcheck)||monthcheck <1||monthcheck>12||daycheck<1||daycheck>31) {
        return false;
    } else {

        return true;
    }
}

function isLeapYear(ip) {
    var [day, month, year] = ip.toString().split("-")
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {

        return true;
    } else {

        return false;
    }
}