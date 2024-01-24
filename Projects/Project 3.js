// Generate a random secret number between 1 and 20
let secret = 7;
 
// Use a while loop to keep prompting until the correct guess is made
while (true) {
  // Prompt the user to guess the secret number
  let answer = prompt("Please guess the secret number (1-20)");

  // Convert the string guess to an integer so that we can compare
  let guess = parseInt(answer);

  // Check if the guess is correct
  if (guess === secret) {
    alert("Correct Guess!");
    break; // Exit the loop if the guess is correct
  } else if (guess < secret) {
    alert("Incorrect, too low");
  } else {
    alert("Incorrect, too high");
  }
}

// The program will reach this point only when the correct guess is made
alert("Congratulations! You guessed the secret number: " + secret);


























