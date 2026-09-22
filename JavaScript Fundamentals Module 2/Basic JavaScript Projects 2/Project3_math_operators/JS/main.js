// ADDITION: Add two numbers and display the result.
function addition() {
    var result = 1 + 2;
    document.getElementById("Add").innerHTML = "1 + 2 = " + result;
}

// SUBTRACTION: Subtract one number from another.
function subtraction() {
    var result = 9 - 7;
    document.getElementById("Sub").innerHTML = "9 - 7 = " + result;
}

// MULTIPLICATION: Multiply two numbers.
function multiplication() {
    var result = 12 * 5;
    document.getElementById("Mlt").innerHTML = "12 * 5 = " + result;
}

// DIVISION: Divide one number by another.
function division() {
    var result = 39 / 3;
    document.getElementById("Div").innerHTML = "39 / 3 = " + result;
}

// MULTIPLE OPERATORS: Use parentheses, addition, multiplication,
// division, and subtraction in one expression.
function multiple_operations() {
    var result = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Multiple").innerHTML =
        "(1 + 2) * 10 / 2 - 5 = " + result;
}

// MODULUS: Find the remainder after division.
function modulus_operator() {
    var result = 38 % 4;
    document.getElementById("Mod").innerHTML =
        "38 % 4 = " + result + " (the remainder)";
}

// NEGATION: Reverse the sign of a number using unary minus.
function negation_operator() {
    var number = 10;
    document.getElementById("Neg").innerHTML =
        "The negation of 10 is " + (-number);
}

// Store the counters outside the functions so their values
// are remembered between clicks.
var incrementValue = 0;
var decrementValue = 0;

// INCREMENT: Add one each time the paragraph is clicked.
function increment() {
    incrementValue++;
    document.getElementById("IncrementText").innerHTML =
        "Increment: " + incrementValue;
}

// DECREMENT: Subtract one each time the paragraph is clicked.
function decrement() {
    decrementValue--;
    document.getElementById("DecrementText").innerHTML =
        "Decrement: " + decrementValue;
}

// RANDOM: Math.random() returns a number from 0 up to, but not
// including, 1. Multiplying by 10 gives a number from 0 to below 10.
function random_number() {
    var result = Math.random() * 10;
    document.getElementById("Ran").innerHTML =
        "Random number from 0 to below 10: " + result;
}

// MATH OBJECT: JavaScript's built-in Math object provides
// mathematical constants and methods.
// A method is a function belonging to an object.
// Math.sqrt() returns the square root of a number.
function square_root() {
    var result = Math.sqrt(64);
    document.getElementById("SquareRoot").innerHTML =
        "The square root of 64 is " + result;
}