// Time to overhaul lets do this
// JS Overhaul done! super beautiful now
let mainL =
[
    [

        [
            "Cobo",
            "Chinese numbers 1-10 (English - pinyin)",
            "This flashcard set teaches you the numbers one through ten pronounced in the Chinese pinyin system. This set was also the first set created for this program!"
        ],

        [
            ["One", "yī"],
            ["Two", "èr"],
            ["Three", "sān"],
            ["Four", "sì"],
            ["Five", "wǔ"],
            ["Six", "liù"],
            ["Seven", "qī"],
            ["Eight", "bā"],
            ["Nine", "jiǔ"],
            ["Ten", "shí"]
        ]

    ],

    [

        [
            "Cobo",
            "Chinese numbers 1-10 (English - Hanzi)",
            "This flashcard set teaches you the numbers one through ten displayed in the Chinese character system."
        ],

        [
            ["One", "一"],
            ["Two", "二"],
            ["Three", "三"],
            ["Four", "四"],
            ["Five", "五"],
            ["Six", "六"],
            ["Seven", "七"],
            ["Eight", "八"],
            ["Nine", "九"],
            ["Ten", "十"]
        ]

    ],

    [

        [
            "Cobo",
            "Chinese numbers 1-10 (Pinyin - Hanzi)",
            "This flashcard set teaches you the numbers one through ten, alternating between the Chinese pinyin and character system."
        ],

        [
            ["yī", "一"],
            ["èr", "二"],
            ["sān", "三"],
            ["sì", "四"],
            ["wǔ", "五"],
            ["liù", "六"],
            ["qī", "七"],
            ["bā", "八"],
            ["jiǔ", "九"],
            ["shí", "十"]
        ]

    ]
]

var globalSetIndex = "";
var ind = 0;
var side = 0;

// Before we begin anything, thanks to the brand spankin new overhaul, we now dynamically create the set buttons by iterating through the main list
window.addEventListener("load", (event) => {
    // On window load, draw the sets
    drawSetList();
});

function drawSetList() {
    document.getElementById("allFlashcardSets").innerHTML = "";
    console.log("Beginning set iteration");

    for (let i = 0; i < mainL.length; i++) {
        let setName = mainL[i][0][1];
        let dynamicDiv = `<div class="functionCardContainer" name="` + setName + `" id="flashcard"><button class="functionCard" id="functionCardButton" onclick="processData(` + i.toString() + `)">` + setName + `</button></div>`

        document.getElementById("allFlashcardSets").innerHTML += dynamicDiv;
    }
}

function processData(setIndex) {
    // We are assuming the submitted name is an actual flashcard set lol, i aint checkin allat

    // ind is the card index and side is 0: front or 1: back
    ind = 0;
    side = 0;

    // Turn the temp text in the middle of the top right panel into the set name and remove the centering css to push to top
    document.getElementById("output").classList.remove("centerTemp");
    document.getElementById("flashcardContainer").classList.remove("hidden");

    globalSetIndex = setIndex;

    // Follows structure as defined in create/dataTemplate.txt
    const creatorName = mainL[setIndex][0][0];
    const setName = mainL[setIndex][0][1];
    const setDescription = mainL[setIndex][0][2];

    // Set the panel to the first card front
    const firstCardTemp = mainL[setIndex][1][ind][side];
    const cards = mainL[globalSetIndex][1];

    const setLength = cards.length;

    console.log("Loading", setName, "created by", creatorName);

    document.getElementById("flashcardTitle").innerHTML = setName;

    document.getElementById("setDescription").innerHTML = setName + " by " + creatorName + ": " + setDescription;

    document.getElementById("flashcardContent").innerHTML = firstCardTemp;

    document.getElementById("cardCounter").innerHTML = (ind + 1).toString() + " / " + setLength.toString();
}

function handleCardChange(change) {
    // Determine which of the 3 states are being sent to be handles

    if (globalSetIndex !== "") {

        const cards = mainL[globalSetIndex][1];

        const setLength = cards.length;

        switch(change) {

            case "next": // Display next card

                if (ind < (setLength - 1)) {
                    console.log("Going to next card");
                    ind += 1
                    document.getElementById("flashcardContent").innerHTML = cards[ind][0];
                    document.getElementById("cardCounter").innerHTML = (ind + 1).toString() + " / " + setLength.toString();
                } else {
                    console.log("Cannot go any further forward");
                }
                break;

            case "previous": // Display previous card
                
                if (ind > 0) {
                    console.log("Going to previous card");
                    ind -= 1;
                    document.getElementById("flashcardContent").innerHTML = cards[ind][0];
                    document.getElementById("cardCounter").innerHTML = (ind + 1).toString() + " / " + setLength.toString();
                } else {
                    console.log("Cannot go further back");
                }
                break;

            case "flip": // Flip the card
                console.log("Flipping card");
                if (side === 0) {
                    side = 1;
                    document.getElementById("flashcardContent").innerHTML = cards[ind][1];
                } else {
                    side = 0;
                    document.getElementById("flashcardContent").innerHTML = cards[ind][0];
                }

                break;

            default: // Invalid button request (should not ever be used unless i made a typo)
                console.log("you made a typo somewhere lol");

        }

    }

}

function getTextboxData() {
    const data = document.getElementById("inputText").value;
    const cards = document.querySelectorAll('#flashcard'), len = cards.length;
    if (data !== "") {
        // Display only the sets that have the input inside of the name
        // console.log("Querying flashcard sets for", data.toLowerCase());

        for (var i=0; i<len; i++) {
            currentCard = cards[i];

            if ((currentCard.getAttribute("name").toLowerCase()).includes(data.toLowerCase())) {
                // Flashcard set is one that should be displayed
                currentCard.classList.remove("hidden");
            } else {
                // Flashcard set should not be displayed
                currentCard.classList.add("hidden");
            }
        }

    } else {
        console.log("Displaying all flashcard sets");
        for (var i=0; i<len; i++) {
            currentCard = cards[i];
            currentCard.classList.remove("hidden");
        }
    }
}

function helpMenu() {
    console.log("Opening help menu");

    document.getElementById("page").classList.add("blur");
    document.getElementById("popup").classList.remove("hidden");
}

function closeWindow() {
    console.log("Closing help menu");

    document.getElementById("page").classList.remove("blur");
    document.getElementById("popup").classList.add("hidden");
}

// Key press event listeners and handlers

document.addEventListener("keydown", (event) => {
    // Make sure that the text box is currently not active

    const inputBox = document.getElementById("inputText");
    var isFocused = (document.activeElement === inputBox);

    if (!isFocused) {
        if (event.isComposing || event.keyCode === 39) { // Right arrow press
            console.log("Right arrow pressed");
            handleCardChange('next')
        } if (event.isComposing || event.keyCode === 37) { // Left arrow press
            console.log("Left arrow pressed");
            handleCardChange('previous');
        }if (event.isComposing || event.keyCode === 32) { // Space bar press
            console.log("Space bar pressed");
            handleCardChange('flip');
        }
    }
});

// Import a new dataset
window.addEventListener("load", (event) => {

    document.getElementById("inputfile").addEventListener('change', function() {
  
        var fr = new FileReader();
    
        fr.onload = function() {
            let data = JSON.parse(fr.result);

            // Append imported list to the main list

            mainL.push(data);

            // Redraw the list of flashcard sets
            drawSetList();

        }
        
        fr.readAsText(this.files[0]);
    })

});