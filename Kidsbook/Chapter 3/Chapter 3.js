// Arrays []

// let myTopThreeDinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus"];
// console.log(myTopThreeDinosaurs);

// let dinasours = ["T-Rex", "Velociraptor", "Stegosaurus",
// "Triceratops", "Brachiosaurus", "Pteranodon", "Apatosaurus",
// "Diplodocus", "Compsognathus"];
// console.log(dinasours);

// let dinosaurs = [
//     "T-Rex",
//     "Velociraptor",
//     "Stegosaurus",
//     "Triceratops",
//     "Brachiosaurus",
//     "Pteranodon",
//     "Apatosaurus",
//     "Diplodocus",
//     "Compsognathus"
//    ];
//    console.log(dinosaurs);

// // Accessing an array element
//    console.log(dinosaurs[3]);

// // Changing naming of element
//    dinosaurs[0] = "Tyrannosaurus Rex";
//    console.log(dinosaurs);

// // Adding new element
// dinosaurs[33] = "Philasoraptor";
// console.log(dinosaurs);

// // Mixing data types in an array
// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops",
// "stegosaurus", 3627.5], 10];
// console.log(dinosaursAndNumbers[2]);
// console.log(dinosaursAndNumbers[2][1]);
// console.log(dinosaursAndNumbers[2][0]);
// console.log(dinosaursAndNumbers[3]);

// // Finding the length of an array (.length)
// let maniacs = ["Yakko", "Wakko", "Dot"];
// console.log(maniacs[0]);
// console.log(maniacs[1]);
// console.log(maniacs[2]);
// console.log(maniacs.length);
// console.log(maniacs[maniacs.length - 1]);

// // Adding elements to an array (.push()) [show numbers]
// let animals = [];
// console.log(animals.push("Cat"));
// console.log(animals.push("Dog"));
// console.log(animals.push("Llama"));
// console.log(animals);
// console.log(animals.length);
// console.log(animals[1]);

// // Adding element at the beginning of an array (.unshift()) [show numbers]
// console.log(animals.unshift("Monkey"));
// console.log(animals);
// console.log(animals.unshift("Polar Bear"));
// console.log(animals);
// // console.log(animals[0]);
// // console.log(animals[2]);

// // Removing elements in an array (.pop()) [show names]
// let lastAnimal = animals.pop();
// console.log(lastAnimal);
// console.log(animals);
// console.log(animals.pop());
// console.log(animals);
// console.log(animals.unshift("Llama"));
// console.log(animals);

// // // Removing elementsat the beginning of an array (.shift()) [show names]
// let firstAnimal = animals.shift();
// console.log(firstAnimal);
// console.log(animals);
// console.log(animals.shift());
// console.log(animals);

// // Adding arrays (.concat())
// let furryAnimals =  ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
// console.log(furryAndScalyAnimals);
// console.log(furryAnimals);
// console.log(scalyAnimals);

// // // Joining multiple arrays (.concat())
// let featheredAnimals = ["Macaw", "Dodo"];
// let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
// console.log(allAnimals);

// // // Finding the index of an element in an array (.indexOf())
// let colors = ["red", "green", "blue"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("green"));
// console.log(colors[0]);

// // // If you search for an element that is not in the array using .indexOf (-1)
// console.log(colors.indexOf("purple"));
// console.log(colors.indexOf("grey"));

// Repeated elements will be identified using the first index
// let insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
// console.log(insects.indexOf("Bee"));

// // Turning an array into a string (.join())
// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// console.log(boringAnimals.join());
// console.log(boringAnimals);
// console.log(boringAnimals.join("-"));
// console.log(boringAnimals.join("*"));

// // Spacing 
// let myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
// console.log(myNames.join(" "));
// console.log(myNames[0] + " " + myNames[1] + " " + myNames[2] + " " + myNames[3]);
// // let ages = [11, 14, 79];
// // console.log(ages.join(" "));

// // Building the array with (.push()) [think of going somewhere you've never been]
// let landmarks = [];
// console.log(landmarks.push("My house"));
// console.log(landmarks.push("Front path"));
// console.log(landmarks.push("Flickering streetlamp"));
// console.log(landmarks.push("Leaky fire hydrant"));
// console.log(landmarks.push("Fire station"));
// console.log(landmarks.push("Cat rescue center"));
// console.log(landmarks.push("My old school"));
// console.log(landmarks.push("My friend's house"));

// // Going in reverse with (.pop()) [think of tracing back to your house]
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());

// // Decision maker using (Math.random()) [answers less than 1]
// console.log(Math.random());
// // console.log(Math.random());
// // console.log(Math.random());

// // Decision maker using (Math.random()) [answers between 0 and 10, multiply]
// console.log(Math.random() * 10);
// console.log(Math.random() * 15);
// // console.log(Math.random() * 10);

// // Rounding down with (Math.floor()) [answers in whole numbers]
// console.log(Math.floor(3.7463463));
// console.log(Math.floor(9.9999));
// console.log(Math.floor(0.793423451963426));

// // // Round down for a given range (Math.floor(Math.random()) [whole numbers less than 4]
// // console.log(Math.floor(Math.random() * 4));
// // console.log(Math.floor(Math.random() * 4));
// // console.log(Math.floor(Math.random() * 4));

// // Use random math to identify index
// let randomWords = ["Explosion", "Cave", "Princess", "Pen"];
// let randomIndex = Math.floor(Math.random() * 4);
// console.log(randomWords[randomIndex]);
// console.log(randomWords[Math.floor(Math.random() * 4)]);

// // Complete decision maker
// let phrases = [
//     "That sounds good",
//     "Yes, you should definitely do that",
//     "I'm not sure that's a great idea",
//     "Maybe not today?",
//     "Computer says no."
// ];
// // Should I have another milkshake?
// console.log(phrases[Math.floor(Math.random() * 5)]);
// // Should I do my homework?
// console.log(phrases[Math.floor(Math.random() * 5)]);

// Creating a random insult generator
let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// Pick a random body part from the randomBodyParts array:
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Pick a random adjective from the randomAdjectives array:
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)]; 
// Pick a random word from the randomWords array:
// let randomWord = randomWords[Math.floor(Math.random() * 5)];
// Join all the random strings into a sentence:
// let randomInsult = "Your " + randomBodyPart + " is like a " +
// randomAdjective + " " + randomWord + "!!!";
// console.log(randomInsult);

// Try it out!
let randomWord = randomWords[Math.floor(Math.random() * 
    randomWords.length)];
// Join all the random strings into a sentence:
let randomInsult = ["Your ", randomBodyPart, " is like a ",
randomAdjective, " ", randomWord, "!!!"].join(" ");
console.log(randomInsult);
