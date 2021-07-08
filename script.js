var button = document.querySelector(".MainBox button");
var box = document.querySelector(".MainBox .box");
var boxId = document.getElementById("box");

function BoxAnimateFunction(){
    if(box.style.visibility != "visible"){
        box.style.width = "20vw";
        box.style.opacity = "1";
        box.style.zIndex = "1";
        box.style.visibility = "visible"; 
    }
    else {
        box.style.width = "0vw";
        box.style.opacity = "0";
        box.style.zIndex = "0";
        box.style.visibility = "hidden"; 
    }
}

function ButtonAnimateFunction(){
    button.style.zIndex = "2";  
}

button.addEventListener("click", function(){
    ButtonAnimateFunction();
    BoxAnimateFunction();
})
