// Global variable: available throughout this script.
var global_Number = 10;

// Demonstrate a local variable and use the global variable.
function local_Example() {
    // This variable is available only inside this function.
    var local_Number = 5;

    document.getElementById("Scope_Result").innerHTML =
        "The total is " + (global_Number + local_Number);

    console.log("Global number:", global_Number);
    console.log("Local number:", local_Number);
}

// Intentionally access a variable outside its scope.
function error_Example() {
    // Debugging messages explain why the following line fails.
    console.log("global_Number is available:", global_Number);
    console.log("local_Number belongs only to local_Example().");

    // Intentional ReferenceError: this variable is unavailable here.
    console.log(local_Number);
}

// Use the current hour in an if statement.
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML =
            "How are you today?";
    } else {
        document.getElementById("Greeting").innerHTML =
            "Good evening!";
    }
}

// Check the entered score using if and else.
function check_Score() {
    var input = document.getElementById("Student_Score").value;
    var score = Number(input);

    // Reject an empty entry or a score outside the allowed range.
    if (input === "" || !Number.isFinite(score) || score < 0 || score > 100) {
        document.getElementById("Score_Result").innerHTML =
            "Please enter a score between 0 and 100.";
        return;
    }

    if (score >= 50) {
        document.getElementById("Score_Result").innerHTML =
            "You passed!";
    } else {
        document.getElementById("Score_Result").innerHTML =
            "You did not pass. Keep practising!";
    }
}

// Use if, else if, and else to choose a time greeting.
function Time_function() {
    // getHours() returns an hour from 0 to 23.
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12) {
        Reply = "It is morning time!";
    } else if (Time < 18) {
        Reply = "It is afternoon!";
    } else {
        Reply = "It is evening time!";
    }

    document.getElementById("Time_of_day").innerHTML = Reply;
}