// let ourFirstFunction = function () {
//     console.log("Hello world!");
//    };
// ourFirstFunction();

// function ourFirstFunction() {
//     console.log("Hello World!");
// }
// ourFirstFunction();

// // Argument (state conditions or set rules)
// function sayHelloTo(name) {
//     console.log("Hello " + name + "!");
// }
// sayHelloTo("Kwanele");

// Use arguments to tell a function how many times to do something
// function drawCats (howManyTimes) {
//     for (let i = 0; i < howManyTimes; i++) {
//     console.log("=^.^=");
//     }
//    }
//    drawCats(3);

// We can use more than one argument in a function
// function drawFaces(HowManyTimes, whatToDraw) {
//     for (let i = 0; i < HowManyTimes; i++) {
//         console.log(whatToDraw);
//     }
// }
// drawFaces(3, "=0^0=");

// Use return value later in code
// console.log(5 + 1.2345);
// console.log(5 + Math.floor(1.2345));

// function double(num) {
//     return num * 2;
// }
// console.log(double(3));
// console.log(double(5) + double(6));
// console.log(double(double(3)));

// function pickRandomWords(words) {
//     return words[Math.floor(Math.random() * words.length)];
// }
// let randomWords = ["Planet", "Worm", "Flower", "Computer"];
// console.log(pickRandomWords(randomWords));
// console.log(pickRandomWords(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]))

// //A random insult generator
// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// // Pick a random body part from the randomBodyParts array:
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// // Pick a random adjective from the randomAdjectives array:
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)]; 
// // Pick a random word from the randomWords array:
// let randomWord = randomWords[Math.floor(Math.random() * 5)];
// // Join all the random strings into a sentence:
// let randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
// console.log(randomString);

//  function pickRandomWords(words) {
//     return words[Math.floor(Math.random() * words.length)];
// }

// function randomInsultGenerator() {
//     let randomBodyParts = ["Face", "Nose", "Hair"];
//     let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//     let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
//     // Pick a random body part from the randomBodyParts array:
//     let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
//     // Pick a random adjective from the randomAdjectives array:
//     let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
//     // Pick a random word from the randomWords array:
//     let randomWord = randomWords[Math.floor(Math.random() * 5)];
//     // Join all the random strings into a sentence:
//     let randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
//     return (randomString);
// }
// console.log(randomInsultGenerator());

// We can use return value to identify information in our strings
// function fifthLetter(name) {
//     if (name.length > 5) {
//         return "The fifth letter of your name is " + name[4];
//     }
//  return "You have no fifth letter in your name!";

// };
// let yourName = prompt("What is your name?");
// alert(fifthLetter(yourName));

// function medalScore(score) {
//     if (score < 3) {
//         return "Bronze";
//     }
//     if (score < 7) {
//         return "Silver";
//     }
//     return "Gold";
// }
// 2
// let yourScore = prompt( "What is your score?");
// alert("You get " + medalScore(yourScore) + ".");

// Programming challenges

// # 1
// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1* num2;
// }

// console.log(add(multiply(36325, 9824), 777));

// # 2

// function areArraysSame(array1, array2) {
//     if (array1.length !== array2.length) {
//         return false;
//     }
//     for (let i = 0; i < array1.legth; i++) {
//         if (array1[i] !== array2[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

// # 3 Hangman, using functions

// Create an array of words

// Pick a random word
// let word = pickWord();

// let answerArray = [];
// setupAnswerArray();

// let remainingLetters = word.length;
// let guess;
// let remainingGuesses = word.length * 2;
// while (remainingLetters > 0 && remainingGuesses > 0) {
//     showPlayerProgress();
//     guess = getGuess();
//     if (guess === null) {
//         break;
//     } else if (guess.length > 1) {
//         alert("Please enter a single letter.");
//     } else {
//         let correctGuesses = updateGameState();
//         remainingLetters -= correctGuesses;
//     }
// };
// showAnswerAndCongratulatePlayer();

// function pickWord() {
//     // Return a random word
//     let words = [
//         "cones",
//         "monkey",
//         "blue",
//         "win"
//     ]

//     return words[Math.floor(Math.random() * words.length)];
// };
// function setupAnswerArray() {
//     // Return the answer array
//     for (let i = 0; i < word.length; i++) {
//         answerArray[i] = "_";
//     }
// };
// function showPlayerProgress() {
//     // Use alert to show the player their progress
//     alert(answerArray.join(" "));
// };
// function getGuess() {
//     // Use prompt to get a guess
//     return prompt("Guess a letter, or click Cancel to stop playing.");
// };
// function updateGameState() {
//     // Update answerArray and return a number showing how many
//     // times the guess appears in the word so remainingLetters
//     // can be updated
//     remainingGuesses--;
//     let correctGuesses = 0;
//     guess = guess.toLowerCase();
//     for (let j = 0; j < word.length; j++) {
//         if (word[j] === guess) {
//             if (answerArray[j] === "_") {
//                 answerArray[j] = guess;
//                 correctGuesses++;
//             } else {
//                 alert("You have already guessed this letter correctly! " + guess);
//                 break;
//             }
//         }
//     }
//     return correctGuesses;
// }
// function showAnswerAndCongratulatePlayer() {
//     // Use alert to show the answer and congratulate the player
//     if (guess === null) {
//         alert(answerArray.join(" "));
//         alert("Sorry to see you quit. The answer was " + word);
//     } else if (remainingLetters > 0 && remainingGuesses === 0) {
//         alert(answerArray.join(" "));
//         alert("Sorry, you're out of guesses. The answer was " + word);
//     } else {
//         alert(answerArray.join(" "));
//         alert("Good job!");
//     }
// };


