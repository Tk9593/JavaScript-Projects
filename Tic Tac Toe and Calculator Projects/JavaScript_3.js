function showHabitat(animal) {
    var habitat = animal.getAttribute("data-habitat");
    alert(animal.textContent + " lives in " + habitat + ".");
}