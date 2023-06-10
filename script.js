function validateForm() {
    var titleInput = document.getElementById("titleInput");
    var descriptionInput = document.getElementById("descriptionInput");
    var submittedTitle = document.getElementById("submittedTitle");
    var submittedDescription = document.getElementById("submittedDescription");

    if (titleInput.value.trim() === "" || descriptionInput.value.trim() === "") {
        alert("Please fill in all the required fields.");
    } else {
        submittedTitle.innerText = "Submitted Title:\n " + titleInput.value;
        submittedDescription.innerText = "Submitted Description: \n" + descriptionInput.value;
    }
}
