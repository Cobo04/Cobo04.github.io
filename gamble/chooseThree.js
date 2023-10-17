// Global Declerations
balance = 100; // Give the player $100 to start, this will save once i figure out how cookies work
difficulties = ['Easy', 'Medium', 'Hard', 'John-like'];
currentDifficultyInd = 0;
currentBet = 0;
correctInd = 0;
allowUpdateChange = true;

options = [0, 1, 2];
easyWeights = [0.33, 0.33, 0.33];
mediumWeights = [0.4, 0.3, 0.3];
hardWeights = [0.15, 0.425, 0.425];
johnWeights = [0.7, 0.2, 0.1];
correctOption = 0;

runningIncrement = 0;
incTowerAmt = 0;

beginInc = 1.7;
BEGINNINGAMOUNT = 0;

// Init Functions

window.addEventListener("load", (event) => {
    updateBalance(balance);
    document.getElementById("difficultyText").innerHTML = "Difficulty - " + difficulties[currentDifficultyInd];
});

function gameSetup(game) {
    switch(game) {
        case 'chooseThree':
            chooseThreeInit();
        default:
            break;
      }
}

function chooseThreeInit() {
    console.log("Initializing chooseThree")

    selectionContainer = document.getElementById("gameSelectionContainer").classList.add("hidden");
    document.getElementById("guessOneOfThreeContainer").classList.remove("hidden");
}

function updateBalance(balance) {
    balanceDisplay = document.getElementById("balance");

    // If there is no remainder, add a '.00' to the end
    if (balance % 1 === 0) {
        balanceDisplay.innerHTML = "$ " + balance.toString() + ".00";
    } else { // If there is a remainder, do not add a fake '.00' to the end
        balanceDisplay.innerHTML = "$ " + Math.round(balance).toString();
    }
}

// Choose Three Functions

function updateDifficulty(direction) {
    difficultyText = document.getElementById("difficultyText");

    if (direction == "right" && allowUpdateChange) {

        if ((currentDifficultyInd + 1) <= (difficulties.length - 1)) {
            currentDifficultyInd += 1
            difficultyText.innerHTML = "Difficulty - " + difficulties[currentDifficultyInd];
        }
        
    } 
    
    if (direction == "left") {

        if ((currentDifficultyInd - 1) >= 0) {
            currentDifficultyInd -= 1;
            difficultyText.innerHTML = "Difficulty - " + difficulties[currentDifficultyInd];
        }

    }

}

function getDifficulty() {
    return difficulties[currentDifficultyInd];
}

function processBalChange(value) {

    if (allowUpdateChange) {

        if (typeof value == "number") {
            if (value <= balance) {
                currentBet += value;
                balance -= value;
        
                document.getElementById("guessOTRightTopBalance").innerHTML = "$" + currentBet.toString();
                updateBalance(balance);
            }
        } else {
            if (value == "0") {
                balance += currentBet;
                currentBet = 0;
        
                document.getElementById("guessOTRightTopBalance").innerHTML = "$" + currentBet.toString();
                updateBalance(balance);
            }
    
            if (value == "x2") { // DOES NOT WORK
                if ((currentBet / 2) <= balance) {
                    currentBet *= 2;
                    balance -= (currentBet / 2);
            
                    document.getElementById("guessOTRightTopBalance").innerHTML = "$" + currentBet.toString();
                    updateBalance(balance);
                }
            }
    
            if (value == "max") {
                currentBet += balance;
                balance = 0;
        
                document.getElementById("guessOTRightTopBalance").innerHTML = "$" + currentBet.toString();
                updateBalance(balance);
            }
        }

    }

}

function giveNewAmount() {
    newGain = BEGINNINGAMOUNT * beginInc;
    console.log("newgain", newGain);
    beginInc += 0.4;
    return newGain;
}

function checkRange(difficulty) {
    start = difficulty[0];
    middle = difficulty[1];
    end = difficulty[2];

    selec = Math.random();

    if (selec > 0 && selec <= middle) {
        return 0;
    }

    else if (selec > middle && selec <= (start + middle)) {
        return 1;
    }

    else if (selec > (start + middle) && selec <= 1) {
        return 2;
    }
}

function makeBet() {
    if (currentBet > 0 && allowUpdateChange) {
        document.getElementById("guessOTRightMiddle").classList.add("dim");
        document.getElementById("guessOTRightBottomContainer").classList.add("dim");
        allowUpdateChange = false;

        document.getElementById("betButton").innerHTML = "Take 0 Coins";

        BEGINNINGAMOUNT = currentBet;

        newAmt = Math.round(giveNewAmount());

        document.getElementById("mainButton1").innerHTML = (newAmt).toString();
        document.getElementById("mainButton2").innerHTML = (newAmt).toString();
        document.getElementById("mainButton3").innerHTML = (newAmt).toString();

        document.getElementById("PlaceHoldButton4").innerHTML = (Math.round(BEGINNINGAMOUNT * (beginInc + 0.8) + 4)).toString();
        document.getElementById("PlaceHoldButton5").innerHTML = (Math.round(BEGINNINGAMOUNT * (beginInc + 0.8) + 4)).toString();
        document.getElementById("PlaceHoldButton6").innerHTML = (Math.round(BEGINNINGAMOUNT * (beginInc + 0.8) + 4)).toString();

        document.getElementById("PlaceHoldButton1").innerHTML = (Math.round(BEGINNINGAMOUNT * (beginInc + 2) + 4)).toString();
        document.getElementById("PlaceHoldButton2").innerHTML = (Math.round(BEGINNINGAMOUNT * (beginInc + 2) + 4)).toString();
        document.getElementById("PlaceHoldButton3").innerHTML = (Math.round(BEGINNINGAMOUNT * (beginInc + 2) + 4)).toString();

        document.getElementById("mainButtonCont1").classList.add("whiteShadow");
        document.getElementById("mainButtonCont2").classList.add("whiteShadow");
        document.getElementById("mainButtonCont3").classList.add("whiteShadow");

        // Create the correct selection option
        if (difficulties[currentDifficultyInd] == "Easy") {
            correctOption = checkRange(easyWeights);
        }

        else if (difficulties[currentDifficultyInd] == "Medium") {
            correctOption = checkRange(mediumWeights);
        }

        else if (difficulties[currentDifficultyInd] == "Hard") {
            correctOption = checkRange(hardWeights);
        }

        else if (difficulties[currentDifficultyInd] == "John-like") {
            correctOption = checkRange(johnWeights);
        }

        console.log(correctOption);

    }

    else if (allowUpdateChange == false) {
        document.getElementById("mainButtonCont1").classList.remove("whiteShadow");
        document.getElementById("mainButtonCont2").classList.remove("whiteShadow");
        document.getElementById("mainButtonCont3").classList.remove("whiteShadow");

        document.getElementById("guessOTRightMiddle").classList.remove("dim");
        document.getElementById("guessOTRightBottomContainer").classList.remove("dim");
        allowUpdateChange = true;

        document.getElementById("betButton").innerHTML = "Place Bet";

        document.getElementById("mainButton1").innerHTML = "0";
        document.getElementById("mainButton2").innerHTML = "0";
        document.getElementById("mainButton3").innerHTML = "0";

        balance += runningIncrement;
        runningIncrement = 0;
        currentBet = 0;
        BEGINNINGAMOUNT = 0;
        beginInc = 1.7;
        updateBalance(balance);
        document.getElementById("guessOTRightTopBalance").innerHTML = "$0";
    }
}

function transitionOut() {
    document.getElementById("mainButtonCont1").classList.add("transitionOut");
    document.getElementById("mainButtonCont2").classList.add("transitionOut");
    document.getElementById("mainButtonCont3").classList.add("transitionOut");

    setTimeout(function() {
        document.getElementById("PlaceHoldButtonCont4").classList.add("transitionOut");
        document.getElementById("PlaceHoldButtonCont5").classList.add("transitionOut");
        document.getElementById("PlaceHoldButtonCont6").classList.add("transitionOut");
    }, 200);

    setTimeout(function() {
        document.getElementById("PlaceHoldButtonCont1").classList.add("transitionOut");
        document.getElementById("PlaceHoldButtonCont2").classList.add("transitionOut");
        document.getElementById("PlaceHoldButtonCont3").classList.add("transitionOut");
    }, 400);
    
    setTimeout(function(){document.getElementById("mainButtonCont1").classList.remove("transitionOut")}, 1000);
    setTimeout(function(){document.getElementById("mainButtonCont2").classList.remove("transitionOut")}, 1000);
    setTimeout(function(){document.getElementById("mainButtonCont3").classList.remove("transitionOut")}, 1000);

    setTimeout(function(){document.getElementById("PlaceHoldButton4").classList.remove("transitionOut")}, 1200);
    setTimeout(function(){document.getElementById("PlaceHoldButton5").classList.remove("transitionOut")}, 1200);
    setTimeout(function(){document.getElementById("PlaceHoldButton6").classList.remove("transitionOut")}, 1200);

    setTimeout(function(){document.getElementById("PlaceHoldButton1").classList.remove("transitionOut")}, 1400);
    setTimeout(function(){document.getElementById("PlaceHoldButton2").classList.remove("transitionOut")}, 1400);
    setTimeout(function(){document.getElementById("PlaceHoldButton3").classList.remove("transitionOut")}, 1400);
}

function handleInput(buttonIndex) {
    // Determine the mode that the game is on

    // Only allow edits when the game is actually active
    if (!allowUpdateChange) {

        // Easy Mode:

        if (difficulties[currentDifficultyInd] == "Easy") {

            // FOR THIS CASE ONLY we use != so that we have 2 options for the correct answer. This is not the case for any other ones
            if (buttonIndex != correctOption) {
                console.log("Correct Choice! Continuing...");
                // The guess is correct

                runningIncrement = giveNewAmount();
                currentBet = giveNewAmount();

                document.getElementById("betButton").innerHTML = "Take " + Math.round(runningIncrement.toString()) + " Coins";
                document.getElementById("guessOTRightTopBalance").innerHTML = "$" + Math.round(runningIncrement.toString());

                setTimeout(function(){document.getElementById("mainButtonCont" + (buttonIndex + 1).toString()).classList.remove("pulsingGreen")}, 1500);
                document.getElementById("mainButtonCont" + (buttonIndex + 1).toString()).classList.add("pulsingGreen");

                pulseBalanceColorGreen();

                newAmt = Math.round(giveNewAmount());

                document.getElementById("mainButton1").innerHTML = (newAmt + 4).toString();
                document.getElementById("mainButton2").innerHTML = (newAmt + 4).toString();
                document.getElementById("mainButton3").innerHTML = (newAmt + 4).toString();

                document.getElementById("PlaceHoldButton4").innerHTML = (Math.round(BEGINNINGAMOUNT * (beginInc + 0.8) + 4)).toString();
                document.getElementById("PlaceHoldButton5").innerHTML = (Math.round(BEGINNINGAMOUNT * (beginInc + 0.8) + 4)).toString();
                document.getElementById("PlaceHoldButton6").innerHTML = (Math.round(BEGINNINGAMOUNT * (beginInc + 0.8) + 4)).toString();

                document.getElementById("PlaceHoldButton1").innerHTML = (Math.round(BEGINNINGAMOUNT * (beginInc + 1.6) + 4)).toString();
                document.getElementById("PlaceHoldButton2").innerHTML = (Math.round(BEGINNINGAMOUNT * (beginInc + 1.6) + 4)).toString();
                document.getElementById("PlaceHoldButton3").innerHTML = (Math.round(BEGINNINGAMOUNT * (beginInc + 1.6) + 4)).toString();

                transitionOut();

                console.log("Running Increment: " + runningIncrement.toString());
                console.log("Current Bet: " + currentBet.toString());

                // Create a new correct button

                correctOption = checkRange(easyWeights);
                console.log(correctOption);

                // Update the amount that will be gained the next time

            } else {
                console.log("Incorrect Choice! Resetting...");
                // The guess is incorrect

                runningIncrement = 0;
                currentBet = 0;

                document.getElementById("mainButtonCont1").classList.remove("whiteShadow");
                document.getElementById("mainButtonCont2").classList.remove("whiteShadow");
                document.getElementById("mainButtonCont3").classList.remove("whiteShadow");
                
                setTimeout(function(){document.getElementById("mainButtonCont" + (buttonIndex + 1).toString()).classList.remove("pulsingRed")}, 1500);
                document.getElementById("mainButtonCont" + (buttonIndex + 1).toString()).classList.add("pulsingRed");

                document.getElementById("guessOTRightMiddle").classList.remove("dim");
                document.getElementById("guessOTRightBottomContainer").classList.remove("dim");
                allowUpdateChange = true;

                document.getElementById("betButton").innerHTML = "Place Bet";

                document.getElementById("mainButton1").innerHTML = "0";
                document.getElementById("mainButton2").innerHTML = "0";
                document.getElementById("mainButton3").innerHTML = "0";

                document.getElementById("guessOTRightTopBalance").innerHTML = "$0";

                BEGINNINGAMOUNT = 0;
                beginInc = 1.7;

                pulseBalanceColorRed();
            }

        } else {

            // No other difficulties have been implemented yet

        }

    }

}

function pulseBalanceColorRed() {
    setTimeout(function(){document.getElementById("guessOTRightTopBalance").classList.remove("pulsingRed")}, 1500);
    document.getElementById("guessOTRightTopBalance").classList.add("pulsingRed");
}

function pulseBalanceColorGreen() {
    setTimeout(function(){document.getElementById("guessOTRightTopBalance").classList.remove("pulsingGreen")}, 1500);
    document.getElementById("guessOTRightTopBalance").classList.add("pulsingGreen");
}