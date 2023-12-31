"use strict";

const words = [
  "House",
  "Job",
  "Business",
  "Food",
  "Restaurant",
  "Telephone",
  "Address",
  "Money",
  "Friend",
  "Love",
  "Happy",
  "Angry",
  "Excited",
  "Tired",
]; // Array of Random Words
var currentWord; // Store current word

// Various elements
var wordDiv = document.getElementById("word");
var inputBox = document.getElementById("letter");
var startButton = document.getElementById("startGame");
var msgBox = document.getElementById("msgBox");

var correctLetters = 0; // Track how many correct letters there are

function startGame() {
  inputBox.style.display = "block"; // Show Inputbox
  wordDiv.innerHTML = ""; // Clear the word
  msgBox.innerHTML = ""; // Clear the message box
  inputBox.disabled = false; // Enable inputbox
  inputBox.focus(); // Focus input box
  currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); // Set current word to guess
  correctLetters = 0; // Reset correctLetters

  // Create elements for each letter and placing a * in it
  for (let i = 0; i < currentWord.length; i++) {
    var letterDiv = document.createElement("div");
    letterDiv.innerHTML =
      '<div class="wordBox-letter">*</div><div class="wordBox-line"></div>';
    letterDiv.className = "wordBox";
    wordDiv.appendChild(letterDiv);
  }
}
  inputBox.addEventListener("keyup", function() { 
    setTimeout(runGame,300)});  //start running the game, with 300ms delay, whenever a key is pressed

  function runGame() {

      for (let i = 0; i < currentWord.length; i++){
        let divToBeCompared = wordDiv.children[i] // Get div to be compared
        if (inputBox.value.toUpperCase() === currentWord.toUpperCase()[i] && divToBeCompared.innerText === "*") { //compare the letter and ruled out the correct repeated letter
          correctLetters++;
          divToBeCompared.innerHTML = '<div class="wordBox-letter">' + inputBox.value.toUpperCase()+ '</div><div class="wordBox-line"></div>';} //unveil the char
        }//for loop ends
        inputBox.value = ""; //clear the input box to allow the user to try again
      if (currentWord.length === correctLetters) { //end the game if all letters are guessed
        endGame();}
    }

  function endGame() {
    inputBox.style.display = "none"; 
    msgBox.innerHTML = "You guessed the word "+ currentWord+ " correctly!";
  }

/* Event Listeners -- DO NOT REMOVE THIS */

startButton.addEventListener("click", startGame); // Starting game by clicking the start button
