// TERNARY OPERATOR: Choose a message based on the user's height.
function Ride_Function() {
    var input = document.getElementById("Height");
    var Height = Number(input.value);

    // Check that the user entered a valid, nonnegative height.
    if (input.value === "" || !input.checkValidity()) {
        document.getElementById("Ride").innerHTML =
            "Please enter a valid height.";
        return;
    }

    // A ternary expression uses: condition ? true result : false result.
    var Can_ride = Height < 52
        ? "You are too short "
        : "You are tall enough ";

    document.getElementById("Ride").innerHTML =
        Can_ride + "to ride.";
}

// VOTING CHALLENGE: Use a ternary operator to check the user's age.
function Vote_Function() {
    var input = document.getElementById("Age");
    var Age = Number(input.value);

    // Require a nonnegative whole number.
    if (input.value === "" || !input.checkValidity()) {
        document.getElementById("Vote").innerHTML =
            "Please enter a valid whole-number age.";
        return;
    }

    var message = Age < 18
        ? "You are not old enough to vote"
        : "You can vote!";

    document.getElementById("Vote").innerHTML = message;
}

// CONSTRUCTOR: Define the properties of each Vehicle object.
// "this" refers to the new object being constructed.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// NEW KEYWORD: Create three objects using the Vehicle constructor.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Display properties from Erik's constructed object in the HTML.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " +
        Erik.Vehicle_Color +
        "-colored " +
        Erik.Vehicle_Model +
        " manufactured in " +
        Erik.Vehicle_Year +
        ".";
}

// NESTED FUNCTION: Define one function inside another function.
function add_Strings() {
    var start_string = "Hello";

    // This inner function can access the outer function's variable.
    function Adding(str) {
        start_string = start_string + " " + str;
    }

    // Call the inner function, then display the combined string.
    Adding("World");

    document.getElementById("Nested_Function").innerHTML =
        start_string;
}

// RESERVED WORD CHALLENGE:
// A reserved word can be stored as text when it is in quotation marks.
function reserved_Word() {
    var word = "return";
    document.getElementById("Reserved_Word").innerHTML = word;
}

// A reserved word cannot be used as a variable name.
// The following example would cause a SyntaxError if uncommented:
// var return = 10;
// Keep this invalid example commented so the project can run.
