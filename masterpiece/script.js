const units = document.querySelectorAll('.grid-container > *'); // every child item in directly in all the grid containers
const characters = ['/','.','|','&bsol;', '(', ')', '-', '_',':','*',' ']; // array of possible character list in order to cycle through

// for every HTML unit element...
units.forEach(unit => {
  let charNum = 0; // set an initial character counter of 0
  // add a click event to the html unit...
  unit.addEventListener('click', () => {
    unit.innerHTML = characters[charNum]; // on click, replace the html with the characters index that matches the current charNum value. 0, 1, 2, etc.
    charNum = charNum >= characters.length - 1 ? 0 : charNum + 1; // update the counter to increase by 1 unless it's at the end of the characters array, then go back to 0
  });
});

function myFunction() {
  let person = prompt("Entitle your art!");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "'"+ person + "'" + " 2022, text on screen";
  }
}