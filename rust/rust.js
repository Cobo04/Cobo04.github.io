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
        document.getElementById("rustStatsContainer").style.visibility = "hidden";
        document.getElementById("arrowItem-Action2").style.visibility = "hidden";
        const rustStatTable = document.getElementById("itemStats");
        rustStatTable.innerHTML = '';
    } else {
        document.getElementById("arrowItem-Action").style.visibility = "hidden";
        document.getElementById("rustActionContainer").style.visibility = "hidden";
        document.getElementById("rustStatsContainer").style.visibility = "hidden";
        document.getElementById("arrowItem-Action2").style.visibility = "hidden";
        const rustStatTable = document.getElementById("itemStats");
        rustStatTable.innerHTML = '';
    }
}

/** Data from action selection */
function submitActionData() {
    console.log("Submitting Action Selection Data..");
    actionSubmissionData = String(document.querySelector('#actionSearching').value);
    console.log("Data Succesfully Submitted:", actionSubmissionData);

    if (!(actionSubmissionData == '')) {
    if (actionSubmissionData == "Display Statistics") {
        document.getElementById("arrowItem-Action2").style.visibility = "visible";
        document.getElementById("rustStatsContainer").style.visibility = "visible";
        actionHandler();
    }
    } else {
        document.getElementById("arrowItem-Action2").style.visibility = "hidden";
        document.getElementById("rustStatsContainer").style.visibility = "hidden";
        const rustStatTable = document.getElementById("itemStats");
        rustStatTable.innerHTML = '';
    }
}

/** Determine the action that is required */
function actionHandler() {
    console.log("Determining action . . .")
    if (actionSubmissionData == "") {
        alert("Please select an action!");
    }

    if (actionSubmissionData == "Display Statistics") {
        displayStatistics();
    }

    if (actionSubmissionData == '"I want to use . . ."') {
        wantToUse();
    }

    if (actionSubmissionData == '"I have . . ."') {
        iHave();
    }
}

/** This method creates the row element, and appends the 4 spearate data elements to the row, then appends the row to the table.  This is done however many times there are items in the list; typically 13 */
function displayStatistics() {
    console.log("Displaying Statistics!");

    /** Wipe the table before the new one is written */
    const rustStatTable = document.getElementById("itemStats");
    rustStatTable.innerHTML = '';
    
    var item = receieveItemData();
    console.log(item);
    for (var i = 0; i < item[1].length; i++) {
        /** Create a row */
        const trElem = document.createElement("tr");

        /** Create 4 data elements, and append each to row */
        const tool = document.createElement("td");
        const nodeT = document.createTextNode(item[1][i][0]);
        const img = document.createElement("img");
        img.src = item[1][i][4];
        img.classList.add("rustItemStatImage");
        img.style.width = 33.6;
        img.style.height = 28;
        tool.append(img)
        tool.appendChild(nodeT);
        trElem.appendChild(tool);

        const quantity = document.createElement("td");
        const nodeQ = document.createTextNode(item[1][i][1]);
        quantity.appendChild(nodeQ);
        trElem.appendChild(quantity);

        const lowGrade = document.createElement("td");
        const nodeL = document.createTextNode(item[1][i][2]);
        lowGrade.appendChild(nodeL);
        trElem.appendChild(lowGrade);


        const sulfur = document.createElement("td");
        const nodeS = document.createTextNode(item[1][i][3]);
        sulfur.appendChild(nodeS);
        trElem.appendChild(sulfur);

        /** Append row to the table */
        const element = document.getElementById("itemStats");
        element.appendChild(trElem);
    }

}

function wantToUse() {
    console.log("Calculating (want)!")

}

function iHave() {
    console.log("Calculating (have)!")
}

/** Get the data for the specific item. Probably the worst way to do it but idk how else to do it. plz dont bully me john and foz */
function receieveItemData() {
    var item;
    console.log(itemSubmissionData[0]);
    if (itemSubmissionData[0] == "Wooden Wall") {
        item = [
            [
                ["HP", 250],
                ["Upkeep", "20-67"],
                ["Decay", "3 Hours"],
                ["Cost", "250 Wood"]
            ],
            [
                ["Incendiary Rocket", 1, 253, 610, "images/ammo.rocket.fire.png"],
                ["Explosive 5.56 Rifle Ammo", 49, 0, "1,225", "images/ammo.rifle.explosive.png"],
                ["Satchel Charge", 3, 0, "1,440", "images/explosive.satchel.png"],
                ["Beancan Grenade", 13, 0, "1,800", "images/grenade.beancan.png"],
                ["High Velocity Rocket", 9, 0, "2,160", "images/ammo.rocket.hv.png"],
                ["Timed Explosive Charge", 1, 60, "2,200", "images/explosive.timed.png"],
                ["Rocket", 2, 60, "2,800", "images/ammo.rocket.basic.png"],
                ["F1 Grenade", 189, 0, "11,340", "images/grenade.f1.png"],
                ["MLRS Rocket", 1, 0, 0, "images/ammo.rocket.mlrs.png"],
                ["40mm HE Grenade", 8, 0, 0, "images/ammo.grenadelauncher.he.png"],
                ["Fire Arrow", 125, 625, 0, "images/arrow.fire.png"],
                ["Flame Thrower", 206, 206, 0, "images/flamethrower.png"],
                ["Molotov Cocktail", 4, 200, 0, "images/grenade.molotov.png"]
            ]
        ]
    }
    else if (itemSubmissionData[0] == "Metal Wall") {
        item = [
            [
                ["HP", 1000],
                ["Upkeep", "20-67"],
                ["Decay", "8 Hours"],
                ["Cost", "200 Metal"]
            ],
            [
                ["Explosive 5.56 Rifle Ammo", 400, 0, "10,000", "images/ammo.rifle.explosive.png"],
                ["Satchel Charge", 21, 0, "10,080", "images/explosive.satchel.png"],
                ["Beancan Grenade", 131, 0, "15,720", "images/grenade.beancan.png"],
                ["High Velocity Rocket", 67, 0, "13,400", "images/ammo.rocket.hv.png"],
                ["Timed Explosive Charge", 4, 60, "8,800", "images/explosive.timed.png"],
                ["Rocket", 8, 60, "11,200", "images/ammo.rocket.basic.png"],
                ["F1 Grenade", 9,639, 0, "578,340", "images/grenade.f1.png"],
                ["MLRS Rocket", 6, 0, 0, "images/ammo.rocket.mlrs.png"],
                ["40mm HE Grenade", 57, 0, 0, "images/ammo.grenadelauncher.he.png"]
            ]
        ]
    }
    else if (itemSubmissionData[0] == "Stone Wall") {
        item = [
            [
                ["HP", 500],
                ["Upkeep", "30-100"],
                ["Decay", "5 Hours"],
                ["Cost", "300 Stone"]
            ],
            [
                ["Explosive 5.56 Rifle Ammo", 185, 0, "4,625", "images/ammo.rifle.explosive.png"],
                ["Satchel Charge", 10, 0, "4,800", "images/explosive.satchel.png"],
                ["Beancan Grenade", 64, 0, "7,680", "images/grenade.beancan.png"],
                ["High Velocity Rocket", 32, 0, "6,400", "images/ammo.rocket.hv.png"],
                ["Timed Explosive Charge", 2, 120, "4,400", "images/explosive.timed.png"],
                ["Rocket", 4, 120, "5,600", "images/ammo.rocket.basic.png"],
                ["F1 Grenade", 870, 0, "52,200", "images/grenade.f1.png"],
                ["MLRS Rocket", 3, 0, 0, "images/ammo.rocket.mlrs.png"],
                ["40mm HE Grenade", 29, 0, 0, "images/ammo.grenadelauncher.he.png"]
            ]
        ]
    }
    else if (itemSubmissionData[0] == "Armored Wall") {
        item = [
            [
                ["HP", 2000],
                ["Upkeep", "3-8"],
                ["Decay", "12 Hours"],
                ["Cost", "25 HQM"]
            ],
            [
                ["Explosive 5.56 Rifle Ammo", 779, 0, "19,975", "images/ammo.rifle.explosive.png"],
                ["Satchel Charge", 41, 0, "19,680", "images/explosive.satchel.png"],
                ["Beancan Grenade", 262, 0, "31,440", "images/grenade.beancan.png"],
                ["High Velocity Rocket", 134, 0, "26,800", "images/ammo.rocket.hv.png"],
                ["Timed Explosive Charge", 8, 480, "17,600", "images/explosive.timed.png"],
                ["Rocket", 15, 450, "21,000", "images/ammo.rocket.basic.png"],
                ["F1 Grenade", "19,278", 0, "1,156,680", "images/grenade.f1.png"],
                ["MLRS Rocket", 12, 0, 0, "images/ammo.rocket.mlrs.png"],
                ["40mm HE Grenade", 114, 0, 0, "images/ammo.grenadelauncher.he.png"]
            ]
        ]
    }

    else {
        item = null;
    }

    return item;

}