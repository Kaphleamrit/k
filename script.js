var s = "Hi, I'm Kaphley";
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
document.addEventListener('DOMContentLoaded', function() {

    typewriter();
   

    var menuImg = document.getElementById("menuImg");
    var toHide = document.getElementById("navbar");
    var welcomeSection = document.getElementById("welcome-section");
    var projects = document.getElementById("projects");

    menu.addEventListener('click', function() {
        toHide.classList.toggle("hidden");
        if(toHide.classList.contains("hidden"))
        menuImg.setAttribute("src","./assets/mm.svg" );
        else 
        menuImg.setAttribute("src","./assets/cross.svg" );

    });

    welcomeSection.addEventListener('click', function() {
        console.log("I'm here");
        toHide.classList.add("hidden");
        isNavActive = false;
        menuImg.setAttribute("src","./assets/mm.svg");
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

//techs


gsap.from('.projectCard',
{
    scrollTrigger: {
       trigger: '#projects',
       start: 'top top'
    },
    x:-1000,
    y: 100,
    rotation:180,
    opacity: 0,
    width: 0,
    duration: 1
});


gsap.from('.projectCard p', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top top'
    },
    y: -1000,
    duration:1.5,
    });


gsap.from('.projectCard a', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top top'
    },
    x:2000,
    y:-100,
    rotation:180,
    duration: 1.5
    });

    gsap.from('.techCard:nth-child(odd)', {
    scrollTrigger: {
        trigger: '#welcome-section',
        start: 'top center'
    },
    x:2000,
    y:-100,
    rotation:180,
    duration: 1.5
    });

    gsap.from('.techCard:nth-child(even)', {
    scrollTrigger: {
        trigger: '#techs',
        start: 'top center'
    },
    x:-2000,
    y:100,
    rotation:180,
    duration: 1.5
    });

    //Typed profession

    setTimeout(function() {
        document.getElementById('showLater').style.visibility = 'visible';


        let typed = new Typed('#profession', {
        strings: ['a web developer.', 'an android developer.'],
        typeSpeed: 80,
        backSpeed: 20,
        loop: true
    });
    }, 2300);
    
function handleSubmit() {
    let url = "https://maker.ifttt.com/trigger/html_form_submit_send_mail/with/key/UUEX5PS4-VLmbOdjp3njK";
    fetch(url);
}
