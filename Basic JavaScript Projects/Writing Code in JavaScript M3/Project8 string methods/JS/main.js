// Join three strings using the concat() method.
function join_Strings() {
    var part1 = "My name is Taran, ";
    var part2 = "and I am learning ";
    var part3 = "JavaScript.";

    var sentence = part1.concat(part2, part3);

    // Display the completed sentence.
    document.getElementById("Joined_Text").innerHTML = sentence;
}

// Extract part of a string using the slice() method.
function slice_String() {
    var sentence = "I am learning JavaScript.";

    // Extract from index 14 up to, but not including, index 24.
    var section = sentence.slice(14, 24);

    document.getElementById("Slice_Result").innerHTML = section;
}

// Return an uppercase version of a string.
function uppercase_String() {
    var text = "I am learning JavaScript.";
    var result = text.toUpperCase();

    document.getElementById("Uppercase_Result").innerHTML = result;
}

// Find the first matching word using the search() method.
function search_String() {
    var text = "I am learning JavaScript.";

    // String positions start at zero. No match would return -1.
    var position = text.search(/JavaScript/);

    document.getElementById("Search_Result").innerHTML =
        "JavaScript starts at index: " + position;
}

// Convert a number into a string using toString().
function number_To_String() {
    var number = 125;
    var result = number.toString();

    document.getElementById("String_Result").innerHTML = result;
}

// Return a number as a string with five significant digits.
function precision_Method() {
    var number = 123.456789;

    // Round the number to five significant digits.
    var result = number.toPrecision(5);

    document.getElementById("Precision_Result").innerHTML = result;
}
