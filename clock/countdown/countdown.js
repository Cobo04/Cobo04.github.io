console.log("Countdown System Initiated");

// var currentTime = new Date().getTime();
// var countDownDate = new Date(currentTime + (1/2) * 60 * 60 * 1000 );
var timeleft;
var ms;


// Set the initial time

document.documentElement.style.setProperty('--timer-hours', "'" + 0);
document.documentElement.style.setProperty('--timer-minutes', "'" + 0);
document.documentElement.style.setProperty('--timer-seconds', "'" + 0);

// Timer reset and play logic
var go = true;
var reset = false;
var offset = 0;
var time = new Date();

// Countdown base code

var countdownTimer = function() {
    if (go) {
        time = new Date();
        var now = new Date().getTime();
        timeleft = countDownDate - now + offset;
          
        var hours = Math.floor(timeleft / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
          
        //   document.documentElement.style.setProperty('--timer-day', "'" + days);
        document.documentElement.style.setProperty('--timer-hours', "'" + hours);
        document.documentElement.style.setProperty('--timer-minutes', "'" + minutes);
        document.documentElement.style.setProperty('--timer-seconds', "'" + seconds);

        if (timeleft < 0) {
            document.documentElement.style.setProperty('--timer-hours', "'" + 0);
            document.documentElement.style.setProperty('--timer-minutes', "'" + 0);
            document.documentElement.style.setProperty('--timer-seconds', "'" + 0);
        }
    } if (!go) {
        offset += (new Date()).getTime() - time.getTime();
    }
}


function start() {
    go = true;
    offset = 0;
    currentTime = new Date().getTime();
    countDownDate = new Date(currentTime + ms);
    setInterval(countdownTimer, 1000);
}

// Settings

var selectedRadio = 0;

function settingsClick() {
    var settingsWindow = document.getElementById("settingsWindowAnchor");
    settingsWindow.style = "display:block"

    radios = document.getElementsByName('radio');
    radios[selectedRadio].checked = true;
}

// Mouse timeout code (not really working at the moment, so it is disabled for the time being)

// function mouseMoving() {
//     var t;
//     var a = document.getElementById("settings");

//     a.style = "display:block";
//     document.body.style.cursor = 'auto';
//     clearInterval(t);

//     t = setTimeout(() => {
//         a.style = "display:none";
//         document.body.style.cursor = 'none';
//     }, 2000); // 1 second timeout
// }

// Automatic radio adjustment



// Theme and time settings

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

String.prototype.convertToRGB = function(){
    if(this.length != 6){
        throw "Only six-digit hex colors are allowed.";
    }

    var aRgbHex = this.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}

function themeExit() {

    // Theme radio buttons

    var backgroundGradient = document.getElementById("countdown-container");

    var elements = document.getElementsByName('radio');
    for (i=0;i<elements.length;i++) {
        if(elements[i].checked) {
            console.log(elements[i].id)
            // The element is checked, apply the correct theme
            if(elements[i].id === "CoboRed") {
                // #1870ed -> #f18f88
                selectedRadio = 0;
                backgroundGradient.style = "background: linear-gradient(45deg, #1870ed 0, #f18f88 100%);"
            }

            if(elements[i].id === "Kimjammer") {
                // #596be3 -> #ffa07d
                selectedRadio = 1;
                backgroundGradient.style = "background: linear-gradient(45deg, #596be3 0, #ffa07d 100%);"
            }

            if(elements[i].id === "FozFuncs") {
                // #569E3F -> #565656
                selectedRadio = 2;
                backgroundGradient.style = "background: linear-gradient(45deg, #569E3F 0, #565656 100%);"
            }
        }
    }

    // Slider implementation (finals got me too braindead to comprehend this rn but i will come back to it i SWEAR)

    // good lord this code is so hard

    // Countdown initializer

    acceptable = true;

    var elems = [document.getElementById("hours").value, document.getElementById("minutes").value, document.getElementById("seconds").value];

    // Only pass if the inputs provided are positive, numbers, and filled out
    for (var i = 0; i < 3; i++) {
        console.log(isNumeric(elems[i]));
        if (!isNumeric(elems[i]) || elems[i] < 0 || (elems[i] === "")) {
            acceptable = false;
        }
    }

    // Values are acceptable, initialize the countdown
    if (acceptable) {
        var hours = elems[0];
        var minutes = elems[1];
        var seconds = elems[2];
        ms = ((hours * 60 * 60) + (minutes * 60) + (seconds)) * 100
        console.log(ms);

        var hoursQ = Math.floor(ms / (1000 * 60 * 60));
        var minutesQ = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        var secondsQ = Math.floor((ms % (1000 * 60)) / 1000);
          
        //   document.documentElement.style.setProperty('--timer-day', "'" + days);
        document.documentElement.style.setProperty('--timer-hours', "'" + hoursQ);
        document.documentElement.style.setProperty('--timer-minutes', "'" + minutesQ);
        document.documentElement.style.setProperty('--timer-seconds', "'" + secondsQ);
    }

    // Close the window
    var settingsWindow = document.getElementById("settingsWindowAnchor");
    if (acceptable) {
        settingsWindow.style = "display:none"
    }

}

function isNumeric(str) {
    if (isNaN(str)) {
        return false;
    } else {
        return true;
    }
}

function resetTime() {
    clearInterval(countdownTimer);
    go = false;
    reset = true;
    document.documentElement.style.setProperty('--timer-hours', "'" + 0);
    document.documentElement.style.setProperty('--timer-minutes', "'" + 0);
    document.documentElement.style.setProperty('--timer-seconds', "'" + 0);
}

function playPause() {
    if (go) {
        go = false;
    } else {
        go  = true;
    }

}