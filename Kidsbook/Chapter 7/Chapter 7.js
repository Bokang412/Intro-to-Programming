// Creating a hangman game

// // Creating a prompt (= prompt(message))
// let name = prompt("What's your name?");
// console.log("Hello " + name);

// // Using confirm to ask a "yes" or "no" question (= confirm (statement))
// let likesCats = confirm("Do you like cats?");
// if (likesCats) {
//  console.log("You're a cool cat!");
// } else {
//  console.log("Yeah, that's fine. You're still cool!");
// }

// // Using alerts to give a player information
// alert("JavaScript is awesome!");

// // Create an array of words
// let words = [
//     "javascript",
//     "monkey",
//     "amazing",
//     "pancake"
// ];

// // Pick a random word
// let word = words[Math.floor(Math.random() * words.length)];

// // Set up the answer array
// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }

// let remainingLetters = word.length;

// // The game loop
// while (remainingLetters > 0) {
//     // Show the player their progress
//     alert(answerArray.join(" "));

//     // Get a guess from the player
//     guess = prompt("Guess a letter, or click Cancel to stop playing.");
//     if (guess === null) {

//         // Exit the game loop
//         break;
//     } else if (guess.length !== 1) {
//         alert("Please enter a single letter.");
//     } else {

//         // Update the game state with the guess
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }
// // The end of the game loop
// if (guess === null) {
//     alert(answerArray.join(" "));
//     alert("Sorry to see you quit. The answer was " + word);
// } else {

//     // Show the answer and congratulate the player
//     alert(answerArray.join(" "));
//     alert("Good job, you are a genius!");
// }


let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "pen",
    "blue",
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let maxGuesses = 8;
let remainingGuesses = maxGuesses;

while (remainingLetters > 0 && remainingGuesses > 0) {
    alert(answerArray.join(" "));

    let guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        guess = guess.toLowerCase();
        
        let alreadyGuessed = false;

        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            } else if (word[j] === guess && answerArray[j] !== "_") {
                alreadyGuessed = true;
                break;
            }
        }

        if (alreadyGuessed) {
            alert("You already guessed that letter.");
        } else if (word.indexOf(guess) === -1) {
            remainingGuesses--;
        }
    }
}

if (remainingGuesses === 0) {
    alert("Sorry, you're out of guesses. The answer was " + word);
} else if (remainingLetters === 0) {
    alert(answerArray.join(" "));
    alert("Good job, you got it!");
} else {
    alert("Sorry to see you quit. The answer was " + word);
}



























