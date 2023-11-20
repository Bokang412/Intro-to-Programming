// Data types and variables (numbers, strings and Booleans)

// // Types of data
console.log(12345+56789);
console.log(1000-17);
// console.log(123*456);
// console.log(12345/250);
// console.log(1234 + 57 * 3 - 31 / 4);

// // Variables

// let nick;
// console.log(nick);

// let age = 13;
// console.log(age);

// let numberOfSiblings = 1+3;
// let numberOfCandies = 8;
// console.log(numberOfCandies/numberOfSiblings)


// let secondsInAMinute = 60;
// let minutesInAnHour = 60;
// let secondsInAnHour = secondsInAMinute * minutesInAnHour;
// console.log(secondsInAnHour);

// let hoursInADay = 24;
// let secondsInAnDay = secondsInAnHour * hoursInADay;
// console.log(secondsInAnDay);
// let daysInAYear = 365;
// let secondsInAYear = secondsInAnDay * daysInAYear;
// console.log(secondsInAYear);

// let age = 29;
// let secondInMyAge = secondsInAYear * age;
// console.log("I am " + secondInMyAge + " seconds old!");
// console.log(`I am ${secondInMyAge} seconds old!`);

// // Incrementing and decrementing
// // Pre increment and decrement
// let highFives = 0;
// ++highFives;
// console.log(`high fives is ${highFives}`);
// ++highFives;
// console.log(`high fives is ${highFives}`);
// --highFives;
// console.log(`high fives is ${highFives}`);

 // // Post increment and decrement
// highFives = 0;
// console.log(highFives++);
// console.log(highFives);
// console.log(highFives++);
// console.log(highFives);
// console.log(highFives--);
// console.log(highFives);

// let x = 0;
// let y = 0;
// console.log(x++ + ++y);
// console.log(x + --y);

//plus minus equals and minus equals
// let x = 10;
// x = x + 5
// console.log(x);

// x = 10;
// x += 20;
// console.log(x);

// let score = 10;
// score += 7;
// console.log(score);
// score -= 3;
// console.log(score);

// let balloons = 100;
// balloons *= 2;
// console.log(balloons);
// balloons /= 4;
// console.log(balloons);

// //Strings ""
// console.log("Hello world!");
// let myAwesomeString = "Something REALLY awesome!!!";
// console.log(myAwesomeString);

// let numberNine = 9;
// let stringNine = "9";
// console.log(numberNine + numberNine);
// console.log(stringNine + stringNine);
// console.log(stringNine + numberNine);

// let greeting = "Hello";
// let myName = " Nick";
// console.log(greeting +  myName);

// console.log("Supercalifragilisticexpialidocious".length);
// let java = "Java";
// console.log(java.length);
// let script = "Script";
// console.log(script.length);
// let javascript = java + script;
// console.log(javascript.length);

// let myName = "Nick";
// console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName[2]);

// let codeWord1 = "are";
// let codeWord2 = "tubas";
// let codeWord3 = "unsafe";
// let codeWord4 = "?!";
// console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

// let longString = "My long string is long";
// console.log(longString.slice(3, 14));
// console.log(longString.slice(3));

// console.log("Hello there, how are you doing?".toUpperCase());
// console.log("Hello there, how are you doing?".toLowerCase());

// let sillyString = "hELlo THERE, hOW ARE yOu doINg?";
// let lowerString = sillyString.toLowerCase();
// let firstCharacter = lowerString[0];
// let firstCharacterUpper = firstCharacter.toUpperCase();
// let restOfString = lowerString.slice(1);
// console.log(firstCharacterUpper + restOfString);
// let sillyString = "hELlo THERE, hOW ARE yOu doINg?";
// let newString = sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
// console.log(newString);

//Booleans

// let javascriptIsCool = true;
// console.log(javascriptIsCool);

// let hadShower = true;
// let hasBackpack = true;
// let goToSchool = hadShower && hasBackpack;
// console.log(goToSchool);

// let hasApple = false;
// let hasOrange = false;
// let goToSchool = hasApple || hasOrange;
// console.log(goToSchool);

// let isWeekend = true;
// let needToShowerToday = !isWeekend;
// console.log(needToShowerToday);
// console.log(!needToShowerToday);

// let isWeekend = false;
// let hadShower = true;
// let hasApple = false;
// let hasOrange = true;
// let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
// console.log(shouldGoToSchool);

// let height = 60;
// let heightRestriction = 60;
// console.log(height >= heightRestriction);
// let height = 48;
// let heightRestriction = 48;
// console.log(height <= heightRestriction);

// let height = prompt("What is your height?");
// let heightRestriction = 48;
// let allowed = height < heightRestriction;
// alert( "Are you allowed:" + allowed);

// let mySecretNumber = 5;
// let chicoGuess = 3;
// console.log(mySecretNumber === chicoGuess);
// let harpoGuess = 7;
// console.log(mySecretNumber === harpoGuess);
// let grouchoGuess = 5;
// console.log(mySecretNumber === grouchoGuess);

// let stringNumber = "5";
// let actualNumber = 5;
// console.log(stringNumber === actualNumber);
// console.log(stringNumber == actualNumber);

// let age = 13;
// let accompanied = true;
// console.log(age >= 13 || accompanied);

// let age = prompt("What is your age?");
// let accompanied = confirm( "Are you accompanied by an adult?");
// let allowed = (age >= 13) || accompanied;
// alert( 'Are you allowed in? + ${allowed}');

// let myVariable;
// console.log(myVariable);

// myVariable = null;
// console.log(myVariable);
