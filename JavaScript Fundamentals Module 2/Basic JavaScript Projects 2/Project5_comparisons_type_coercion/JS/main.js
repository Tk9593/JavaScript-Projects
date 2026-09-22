// TYPEOF: Display the data type of a variable.
var age = 25;
document.write("Data type of age: " + typeof age + "<br>");

// TYPE COERCION: Combining a string and a number converts
// the number to a string, producing "1010".
document.write('String + number: "10" + 10 = ' + ("10" + 10) + "<br>");

// NaN: Zero divided by zero produces Not-a-Number.
document.write("0 / 0 = " + (0 / 0) + "<br>");

// isNaN() returns true when a value cannot convert to a number.
document.write('isNaN("Hello") = ' + isNaN("Hello") + "<br>");

// A numeric string can convert to a number, so this returns false.
document.write('isNaN("25") = ' + isNaN("25") + "<br>");

// INFINITY: These numbers exceed JavaScript's finite number range.
document.getElementById("PositiveInfinity").innerHTML =
    "Positive Infinity: " + 2E310;

document.getElementById("NegativeInfinity").innerHTML =
    "Negative Infinity: " + (-2E310);

// BOOLEAN LOGIC: Use greater-than and less-than comparisons.
document.write("10 > 5 = " + (10 > 5) + "<br>");
document.write("10 < 5 = " + (10 < 5) + "<br>");

// CONSOLE MATH: Display the result of a math operation in DevTools.
console.log(5 + 3); // Displays 8.

// CONSOLE BOOLEAN: Display false using a comparison.
console.log(5 > 10); // Displays false.

// DOUBLE EQUALS: Compare values, allowing type conversion.
document.write('5 == "5" = ' + (5 == "5") + "<br>");
document.write("5 == 10 = " + (5 == 10) + "<br>");

// TRIPLE EQUALS: Compare both data type and value.

// Same data type and same value: true.
document.write("10 === 10 = " + (10 === 10) + "<br>");

// Different data types and different values: false.
document.write('10 === "20" = ' + (10 === "20") + "<br>");

// Different data types but equivalent values: false.
document.write('10 === "10" = ' + (10 === "10") + "<br>");

// Same data type but different values: false.
document.write("10 === 20 = " + (10 === 20) + "<br>");

// AND: Both comparisons must be true to return true.
document.write(
    "10 > 5 AND 8 > 3 = " + (10 > 5 && 8 > 3) + "<br>"
);

// One comparison is false, so AND returns false.
document.write(
    "10 > 5 AND 8 < 3 = " + (10 > 5 && 8 < 3) + "<br>"
);

// OR: At least one comparison must be true to return true.
document.write(
    "10 > 5 OR 8 < 3 = " + (10 > 5 || 8 < 3) + "<br>"
);

// Both comparisons are false, so OR returns false.
document.write(
    "10 < 5 OR 8 < 3 = " + (10 < 5 || 8 < 3) + "<br>"
);

// NOT: Reverse false to true when the paragraph is clicked.
function not_true() {
    document.getElementById("NotTrue").innerHTML =
        "NOT (5 > 10) = " + !(5 > 10);
}

// NOT: Reverse true to false when the paragraph is clicked.
function not_false() {
    document.getElementById("NotFalse").innerHTML =
        "NOT (10 > 5) = " + !(10 > 5);
}