var s = "Hey, I am Kaphley";
var professions = ["a web developer","an android developer"];
var currString ;
var index = 0;
 
function typewriter(){
 
 var destination = document.getElementById("welcomeHeader");

 destination.innerHTML = s.substring(0,index) + "_";
    
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
    var projects = document.getElementById("projects");

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
        menuImg.setAttribute("src","./mm.svg");
    })
    
     changeProfession();

     projects.onscroll = function() {
         if(document.documentElement.scrollTop >100) {
             projects.classList.remove("hideSecondPage");
         }
         else projects.classList.add("hideSecondPage");
     }
});

//GSAP

// var tween1 = gsap.to('#profession', {rotation:300,   duration:5});
var t1 = gsap.timeline();
// t1.addLabel("step2",3);
// t1.to('#profession', {rotation:360, duration:5},1.5)
//   .to('#welcomeHeader', {y:1000, duration:10}, "-=0.75")
//   .from('#projectTitle', {opacity: 0,duration:5},"step2" )
// ;

// tween1.timeScale(2);
// t1.seek("step2");

// tl.to(".box1", {duration: 2, x: 100}) //notice that there's no semicolon!
//   .to(".box2", {duration: 1, y: 200})
//   .to(".box3", {duration: 3, rotation: 360});

t1.from('#pojectTitle', {x:-200, opacity: 0, duration:2});



//scroll Magic
const controller = new scrollMagic.Controller();


const scene = new ScrollMagic.Scene({
    triggerElement:"#projects",
    triggerHook: "onLeave",
    duration: "100%"
})
.setPin("#projects")
.setTween(t1)
.addTo(controller);


