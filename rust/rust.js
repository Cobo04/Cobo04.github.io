/** Define global variables */

var itemSubmissionData;
var actionSubmissionData;

/** Data from item seleciton */
function submitData() {
    console.log("Submitting Item Selection Data..");
    itemSubmissionData = [document.querySelector('#searching').value, document.querySelector('input[name="radio"]:checked').value];
    console.log("Data Succesfully Submitted!", itemSubmissionData);
    if (!(itemSubmissionData[0] == '')) {
        document.getElementById("arrowItem-Action").style.visibility = "visible";
        document.getElementById("rustActionContainer").style.visibility = "visible";
    } else {
        document.getElementById("arrowItem-Action").style.visibility = "hidden";
        document.getElementById("rustActionContainer").style.visibility = "hidden";
    }
}

/** Data from action selection */
function submitActionData() {
    console.log("Submitting Action Selection Data..");
    actionSubmissionData = String(document.querySelector('#actionSearching').value);
    console.log("Data Succesfully Submitted:", actionSubmissionData);
    actionHandler();
}

/** Determine the action that is required */
function actionHandler() {
    console.log("Determining action . . .")
    if (actionSubmissionData == "") {
        alert("Please select an action!");
    }

    if (actionSubmissionData == "Display Statistics") {
        document.getElementById("arrowItem-next").style.visibility = "visible";
        displayStatistics();
    }

    if (actionSubmissionData == '"I want to use . . ."') {
        wantToUse();
    }

    if (actionSubmissionData == '"I have . . ."') {
        iHave();
    }
}

function displayStatistics() {
    console.log("Displaying Statistics!")
}

function wantToUse() {
    console.log("Calculating (want)!")

}

function iHave() {
    console.log("Calculating (have)!")
}

/** Get the data for the specific item. Probably the worst way to do it but idk how else to do it. plz dont bully me john and foz */
function receieveItemData() {
    var woodWall = {
        "Statistics": {
            "HP": 250,
            "Upkeep": "20-67",
            "Decay": "3 Hours",
            "Cost": "250 Wood"
        },
        "Durability": {
            "Incendiary Rocket": 1,
            "Explosive 5.56 Rifle Ammo": 49,
            "Satchel Charge": 3,
            "Beancan Grenade": 13,
            "High Velocity Rocket": 9,
            "Timed Explosive Charge": 1,
            "Rocket": 2,
            "F1 Grenade": 59,
            "MLRS Rocket": 1,
            "40mm HE Grenade": 8,
            "Fire Arrow": 125,
            "Flame Thrower": 206,
            "Molotov Cocktail": 4
        }
    }
}