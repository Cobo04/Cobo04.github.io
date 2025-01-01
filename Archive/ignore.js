function handleInput(document) {

    // <!-- Jiggle Jiggle, Chrissy Wake Up, Holey Moley, Alligator Skin Boots, Raccoon (Jacoby), Monkey Type Beat, im a businessman-->

    var statement = document.getElementById("submission").value;

    // Check to see if the submission input was a correct secret statement

    // If the submission input is a correct statement, open the selected video and show the reset button

    if (statement === "hawaii" || statement === "there goes hawaii") {
        document.getElementById("hawaii").classList.remove("hidden");
    }
    else if (statement === "my little kentucky fried boy" || statement === "no boners on molympus" || statement === "sonk ponkle") {
        document.getElementById("mod").classList.remove("hidden");
    }
    else if (statement === "jiggle jiggle" || statement === "my money dont jiggle jiggle") {
        document.getElementById("jiggle").classList.remove("hidden");
    }
    else if (statement === "chrissy" || statement === "chrissy wake up") {
        document.getElementById("chrissy").classList.remove("hidden");
    }
    else if (statement === "holey moley" || statement === "we just made history on uranus" || statement === "uranus is the hardest hole" || statement === "rob" || statement === "course marshall joe") {
        document.getElementById("holey").classList.remove("hidden");
    }
    else if (statement === "alligator skin boots") {
        document.getElementById("alligator").classList.remove("hidden");
    }
    else if (statement === "jacoby" || statement === "raccoon") {
        document.getElementById("raccoon").classList.remove("hidden");
    }
    else if (statement === "monka" || statement === "monke" || statement === "monkey" || statement === "monkey type beat") {
        document.getElementById("monkey").classList.remove("hidden");
    }
    else if (statement === "im a businessman") {
        document.getElementById("businessman").classList.remove("hidden");
    }
    else if (statement === "its fine") {
        document.getElementById("itsfine").classList.remove("hidden");
    }
    else if (statement === "everything is fine") {
        document.getElementById("everythingisfine").classList.remove("hidden");
    }
    else if (statement === "im fine") {
        document.getElementById("imfine").classList.remove("hidden");
    }
    else if (statement === "bronchitis" || statement === "pneumonia" || statement === "allergies") {
        document.getElementById("bronchitis").classList.remove("hidden");
    }
    else if (statement === "take your meds" || statement === "meds") {
        document.getElementById("meds").classList.remove("hidden");
    }

    // If the submission input was an incorrect statement, reset the text entry field;

    else {
        document.getElementById("submission").value = "";
    }
}
