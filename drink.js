var quotes = [
    "zesty strawberry ants",
    "THE JESUS HITLER DUO", 
    "did you know that you cant sell your eyes in texas", 
    "rip boner", 
    "you gotta consume all the bagels and mustard", 
    "soggy stuffed animal 💀", 
    "Bro those tiny pumpkins be the same height as Calvin 💀", 
    "i also look so emo today its not even funny 💀", 
    "you could buy a lobster and then keep it in the family as a family lobster and pass it down for generations", 
    "HAVE YOU EVER SMELLED A BOOK", 
    "BRO MIDWEST SKY KDYR CAME ONE", 
    "TINY TERRIFYING DOLL CHILDREN :ph1lStonks:", 
    "NAH FRIDGES BE MY NATURAL PREDATOR NOW 💀", 
    "DID YOU SEE THE ASS", 
    "METAL ASS LETS GOOOOO", 
    "THATS NOT MOTHMANS ASS 🧐🧐🧐",
    "IM LIKE A WASHING MACHINE", 
    "boners on molympus 💀", 
    "LITTLE KENTUCKY FRIED BOY 😩", 
    "'there are too many balls on my screen -cohen 2022'", 
    "LEMME JJST GO AND GET THESPINE OUT OF MY BANANA"
]

function startTimer() {
    var countDownDate = new Date().getTime() + 15 * 60 * 1000;

    var x = setInterval(function() {

        var now = new Date().getTime();
      
        var distance = countDownDate - now;
      
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("time").innerHTML =  hours + ":"
        + minutes + ":" + seconds;
        
        // Choose random quote every minute
        if ((minutes === 12 && seconds === 59) || (minutes === 10 && seconds === 59) || (minutes === 8 && seconds === 59) || (minutes === 6 && seconds === 59) || (minutes === 4 && seconds === 59) || (minutes === 2 && seconds === 59) || (minutes === 0 && seconds === 0)) {
            var selection = quotes[Math.floor(Math.random() * quotes.length)];
            document.getElementById("quoteText").innerHTML = selection;
        }
    
        // Check if finished
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("time").innerHTML = "DRINK TIME!!!!!";
          splash();
          
        }
      }, 1000);
}

function splash() {
    var sound = new Audio("splash.mp3");
    sound.play();
}