// J AND F, BEFORE YOU SAY ANYTHING, i know i just slapped a json file here instead of in a json file, BUT... idk how to get it to work in an external file i hate web dev plz help ahhhhhhhh
// ALSO IT WORKS, SO COPE + LLLLLLLLLL

const setList = {
    "numPinyin":
    {
        "setTitleData": {
            "setTitle": "Chinese numbers 1-10 (pinyin)",
            "setCreator": "Cobo",
            "setDescription": "This flashcard set teaches you the numbers one through ten pronounced in the Chinese pinyin system. This set was also the first set created for this program!"
        },

        "setCardData": [
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
    },

    "numHanzi":
    {
        "setTitleData": {
            "setTitle": "Chinese numbers 1-10 (Hanzi)",
            "setCreator": "Cobo",
            "setDescription": "This flashcard set teaches you the numbers one through ten displayed in the Chinese character system."
        },

        "setCardData": [
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
    },

    "numHanziPinyin":
    {
        "setTitleData": {
            "setTitle": "Chinese numbers 1-10 (Pinyin - Hanzi)",
            "setCreator": "Cobo",
            "setDescription": "This flashcard set teaches you the numbers one through ten, alternating between the Chinese pinyin and character system."
        },

        "setCardData": [
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
    }

}

var globalSetName = "";
var ind = 0;
var side = 0;

function processData(setName) {
    // We are assuming the submitted name is an actual flashcard set lol, i aint checkin allat

    ind = 0;
    side = 0;

    document.getElementById("output").classList.remove("centerTemp");
    document.getElementById("flashcardContainer").classList.remove("hidden");

    globalSetName = setName;

    const title = setList[setName]["setTitleData"]["setTitle"];
    const creator = setList[setName]["setTitleData"]["setCreator"];
    const description = setList[setName]["setTitleData"]["setDescription"];

    const firstCardTemp = setList[setName]["setCardData"][ind][side];

    const cards = setList[globalSetName]["setCardData"];

    const setLength = cards.length;

    console.log("Loading", title, "created by", creator);

    document.getElementById("flashcardTitle").innerHTML = title;

    document.getElementById("setDescription").innerHTML = title + " by " + creator + ": " + description;

    document.getElementById("flashcardContent").innerHTML = firstCardTemp;

    document.getElementById("cardCounter").innerHTML = (ind + 1).toString() + " / " + setLength.toString();
}

function handleCardChange(change) {
    // Determine which of the 3 states are being sent to be handles

    if (globalSetName !== "") {

        const cards = setList[globalSetName]["setCardData"];

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
        console.log("Querying flashcard sets for", data.toLowerCase());

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