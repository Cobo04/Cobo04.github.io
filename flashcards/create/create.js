let globalIdCounter = 0;

// imma keep it so on the real, i have no freaking clue why any of this is working im so over web design
// LIKE, CARDPRIME?? WHAT IS THIS, A TRANSFORMERS MOVIE?

function newCard() {
    let originalCard = document.getElementById("card");

    let cardPrime = originalCard.cloneNode(true);

    // set the id to the specific child number id and wipe all text

    cardPrime.removeAttribute('id');
    cardPrime.id = globalIdCounter.toString();

    let container = document.getElementById("testONCEMOREAGAIN");
    container.appendChild(cardPrime);

    // Wipe the submitted text of the newest card

    let newCard = document.getElementById(globalIdCounter.toString());
    let term = newCard.childNodes[1].childNodes[3].childNodes[1].childNodes[3].childNodes[1].childNodes[1];
    let definition = newCard.childNodes[1].childNodes[3].childNodes[3].childNodes[3].childNodes[1].childNodes[1];

    term.value = "";
    definition.value = "";

    // Add the button to remove the specific card

    let exitButton = newCard.childNodes[1].childNodes[1].childNodes[1];

    exitButton.setAttribute("onclick", ("deleteCard(" + globalIdCounter.toString() + ");"));

    // Update the id counter
    globalIdCounter += 1;
}

function deleteCard(cardId) {
    document.getElementById(cardId).remove();
}

function parseData() {
    // Get set name, creator name, and description

    let creatorName = document.getElementById("creatorName").value;
    let setName = document.getElementById("setName").value;
    let setDescription = document.getElementById("description").value;

    let descriptorData = [ creatorName, setName, setDescription ]

    // get the number of child elements

    let parent = document.getElementById("testONCEMOREAGAIN");
    let childrenArray  = [...parent.children];

    let mainArray = [];

    childrenArray.forEach(element => {
        let tempArray = [ ];

        tempArray.push(element.childNodes[1].childNodes[3].childNodes[1].childNodes[3].childNodes[1].childNodes[1].value, element.childNodes[1].childNodes[3].childNodes[3].childNodes[3].childNodes[1].childNodes[1].value)

        mainArray.push(tempArray);
    });

    // Construct the final set that will be output in the correct format

    let finalSet = [ ];
    finalSet.push(descriptorData);
    finalSet.push(mainArray);

    console.log(JSON.stringify(finalSet));

    // and just like that, we done :D

    download_file("setOutput.txt", JSON.stringify(finalSet));
}

// TY STACK OVERFLOW <3
function download_file(name, contents, mime_type) {
    mime_type = mime_type || "text/plain";

    var blob = new Blob([contents], {type: mime_type});

    var dlink = document.createElement('a');
    dlink.download = name;
    dlink.href = window.URL.createObjectURL(blob);
    dlink.onclick = function(e) {
        // revokeObjectURL needs a delay to work properly
        var that = this;
        setTimeout(function() {
            window.URL.revokeObjectURL(that.href);
        }, 1500);
    };

    dlink.click();
    dlink.remove();
}