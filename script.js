var s = "Hey, I am Kaphley";
var professions = ["a web developer","an android developer"];
var currString ;
var index = 0;
 
function typewriter(){
 
    currString = ' ';

 var destination = document.getElementById("welcomeHeader");

 destination.innerHTML = currString + s.substring(0,index) + "_";
    
 if(index++ >= s.length) {
     return; 
 }

 setTimeout("typewriter()",100);
 
}

function changeProfession() {
    var destination = document.getElementById("profession");
    var isFirst = true;

    setInterval(function() {
        if(isFirst) {
            isFirst = false;
            destination.innerHTML = professions[0];
        } else {
            isFirst = true;
            destination.innerHTML = professions[1];
        }

    },2000);
}





document.addEventListener('DOMContentLoaded', function() {
    typewriter();
   

    var menuImg = document.getElementById("menuImg");
    var toHide = document.getElementById("navbar");
    var welcomeSection = document.getElementById("welcome-section");


    menu.addEventListener('click', function() {
        toHide.classList.toggle("hidden");
        if(toHide.classList.contains("hidden"))
        menuImg.setAttribute("src","./mm.svg" );
        else 
        menuImg.setAttribute("src","./cross.svg" );

    });

    welcomeSection.addEventListener('click', function() {
        console.log("I'm here");
        toHide.classList.add("hidden");
        isNavActive = false;
    })
    
     changeProfession();
});

