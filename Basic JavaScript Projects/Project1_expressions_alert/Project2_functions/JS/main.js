// This function assigns two variables and displays their combined text.
function myFunction() {
    var sentence1 = "Hello, I am Taran!";
    var sentence2 = " I am learning JavaScript functions.";

    document.getElementById("message").textContent =
        sentence1 + sentence2;
}
// Use += to join two strings
function concatenateFunction() {
    var sentence = "I am learning";
    sentence += " JavaScript!";

    document.getElementById("Concatenate").textContent = sentence;
}
// This function joins strings and displays the result.
function concatenateFunction() {
    // Create a variable containing the first part.
    var sentence = "I am learning";

    // Use += to add the second part to the existing string.
    sentence += " JavaScript!";

    // Display the combined string in the matching paragraph.
    document.getElementById("Concatenate").textContent = sentence;
}