window.onload = startFadeInEffectsTop;

function startFadeInEffectsTop() {

    // Top
    setTimeout(function() {document.getElementById("1").classList.add("fadeInClassStyling") }, 10);
    setTimeout(function() {document.getElementById("2").classList.add("fadeInClassStyling") }, 50);
    setTimeout(function() {document.getElementById("3").classList.add("fadeInClassStyling") }, 100);
    setTimeout(function() {document.getElementById("4").classList.add("fadeInClassStyling") }, 150);

    setTimeout(function() {document.getElementById("5").classList.add("fadeInClassStyling") }, 200);
    setTimeout(function() {document.getElementById("6").classList.add("fadeInClassStyling") }, 250);
    setTimeout(function() {document.getElementById("7").classList.add("fadeInClassStyling") }, 300);
    setTimeout(function() {document.getElementById("8").classList.add("fadeInClassStyling") }, 350);
    setTimeout(function() {document.getElementById("9").classList.add("fadeInClassStyling") }, 400);

    // Middle Left / Right
    setTimeout(function() {document.getElementById("10").classList.add("fadeInClassStyling") }, 50);
    setTimeout(function() {document.getElementById("11").classList.add("fadeInClassStyling") }, 50);

    // Middle Middle
    setTimeout(function() {document.getElementById("12").classList.add("fadeInClassStyling") }, 300);
    setTimeout(function() {document.getElementById("13").classList.add("fadeInClassStyling") }, 500);

    // Bottom
    setTimeout(function() {document.getElementById("14").classList.add("fadeInClassStyling") }, 600);
}

window.addEventListener("load", (event) => {

    let sec1 = document.getElementById('objectives');

    let sec2 = document.getElementById('roster');
    let sec21 = document.getElementById('rosterFounders');
    let sec22 = document.getElementById('rosterAdmin');
    let sec23 = document.getElementById('rosterStaff');

    let sec3 = document.getElementById('apply');

    checkVisibilitySec1 = () => {

        if (sec1.getBoundingClientRect().top < window.innerHeight / 2) {

            console.log("Objectives Section Reached");

            setTimeout(function() {document.getElementById("obj1").classList.add("fadeInClassStyling") }, 200);
            setTimeout(function() {document.getElementById("obj2").classList.add("fadeInClassStyling") }, 400);
            setTimeout(function() {document.getElementById("obj3").classList.add("fadeInClassStyling") }, 600);
            setTimeout(function() {document.getElementById("obj4").classList.add("fadeInClassStyling") }, 800);
            
            window.removeEventListener('scroll', checkVisibilitySec1 );
        
        }

    }

    checkVisibilitySec2 = () => {

        if (sec2.getBoundingClientRect().top < window.innerHeight / 2) {

            console.log("Roster Section Reached");
            
            window.removeEventListener('scroll', checkVisibilitySec2 );
        
        }

    }

    checkVisibilitySec21 = () => {

        if (sec21.getBoundingClientRect().top < window.innerHeight / 2) {

            console.log("Roster Founders Section Reached");

            setTimeout(function() {document.getElementById("p1").classList.add("fadeInClassStyling") }, 200);
            setTimeout(function() {document.getElementById("p2").classList.add("fadeInClassStyling") }, 400);
            
            window.removeEventListener('scroll', checkVisibilitySec21 );
        
        }

    }

    checkVisibilitySec22 = () => {

        if (sec22.getBoundingClientRect().top < window.innerHeight / 2) {

            console.log("Roster Administrators Section Reached");

            setTimeout(function() {document.getElementById("p3").classList.add("fadeInClassStyling") }, 200);
            setTimeout(function() {document.getElementById("p4").classList.add("fadeInClassStyling") }, 350);
            setTimeout(function() {document.getElementById("p5").classList.add("fadeInClassStyling") }, 500);
            setTimeout(function() {document.getElementById("p6").classList.add("fadeInClassStyling") }, 650);
            
            window.removeEventListener('scroll', checkVisibilitySec22 );
        
        }

    }

    checkVisibilitySec23 = () => {

        if (sec23.getBoundingClientRect().top < window.innerHeight / 2) {

            console.log("Roster Administrators Section Reached");

            setTimeout(function() {document.getElementById("p7").classList.add("fadeInClassStyling") }, 200);
            setTimeout(function() {document.getElementById("p8").classList.add("fadeInClassStyling") }, 350);
            setTimeout(function() {document.getElementById("p9").classList.add("fadeInClassStyling") }, 500);
            
            window.removeEventListener('scroll', checkVisibilitySec23 );
        
        }

    }

    checkVisibilitySec3 = () => {

        if (sec3.getBoundingClientRect().top < window.innerHeight / 2) {

            console.log("Application Section Reached");
            
            window.removeEventListener('scroll', checkVisibilitySec3 );
        
        }

    }

    window.addEventListener('scroll', checkVisibilitySec1);

    window.addEventListener('scroll', checkVisibilitySec2);
    window.addEventListener('scroll', checkVisibilitySec21);
    window.addEventListener('scroll', checkVisibilitySec22);
    window.addEventListener('scroll', checkVisibilitySec23);

    window.addEventListener('scroll', checkVisibilitySec3);

});