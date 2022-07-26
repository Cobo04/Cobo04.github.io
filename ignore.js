function handleInput(document) {
    var statement = document.getElementById("submission").value;

    // Check to see if the submission input was a correct secret statement

    // If the submission input is a correct statement, open the selected video and show the reset button

    if (statement === "hawaii" || statement === "there goes hawaii") {
        document.getElementById("hawaii").classList.remove("hidden");

    }
    if (statement === "my little kentucky fried boy" || statement === "no boners on molympus" || statement === "sonk ponkle") {
        document.getElementById("mod").classList.remove("hidden");

    }

    // If the submission input was an incorrect statement, reset the text entry field;

    else {
        document.getElementById("submission").value = "";
    }
}