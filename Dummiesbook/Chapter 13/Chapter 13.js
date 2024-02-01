// Create two Event listeners
let printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);
let addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);

// Create Global variables
let myList = [];
let myListArea = document.getElementById("wishList");

// Create an addTheThing() function
function addTheThing() {
    let theThing = document.getElementById("iWant");
    addToTheList(theThing);
    resetInput(theThing);
   }
   
// Create an addToTheList() function
function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value);
    let newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];

    myListArea.appendChild(newListItem);
   }
   
// Create a Finished resetInput() function
function resetInput(inputToReset) {
    inputToReset.value = "";
   }
   
// Create Finished printView() function
function printView() {
    let listPage = document.getElementById("listPage");
    let formArea = document.getElementById("formArea");
    formArea.style.display = "none";
    listPage.className = "print";
    myListArea.innerHTML = "";
    myList.sort();
    for (let i = 0; i < myList.length; i++) {
    wishList.innerHTML += "<li>" + myList[i] + 
   "</li>";
    }
   
// Open the Print dialog box which print the list to our devices
window.print();
}























