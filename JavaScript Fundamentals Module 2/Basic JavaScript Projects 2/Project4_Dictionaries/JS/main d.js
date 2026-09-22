// Define a function that creates and uses a dictionary.
function my_Dictionary() {

    // Create an object containing key-value pairs.
    var Animal = {
        Species: "Dog",
        Color: "Brown",
        Breed: "Labrador",
        Age: 3,
        Sound: "Woof!"
    };

    // Delete the Sound property before displaying its value.
    delete Animal.Sound;

    // The deleted property returns undefined.
    // Display this result in the paragraph with id "Dictionary".
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}