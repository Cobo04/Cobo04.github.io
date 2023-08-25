function submitData() {
    console.log("Attempting to submit data...");

    const inputData = document.getElementById("inputText").value;

    console.log("Submission request: ", inputData);

    // Check if input request is valid

    if (inputData === "") {
        alert("Cannot process empty request!");
    }
}