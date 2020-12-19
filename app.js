var inputref = document.querySelector("#input");

var btnref =document.querySelector("#btn");

var outputref =document.querySelector("#result");

console.log ("you are here");

btnref.addEventListener("click",clickHandler);

function clickHandler(){
    console.log ("button is clicked");
    var inputvalue= inputref.value;
    outputref.innerText=inputvalue;
}