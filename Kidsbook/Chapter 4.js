// Objects { "key" : value}
// let cat = {
//     "legs": 3,
//     "name": "Harmony",
//     "color": "Tortoiseshell"
//    };
// console.log(cat);

// Quoted keys allows spacing
// let cat = {
//     legs: 3,
//     "full name": "Harmony Philomena Snuggly-Pants Morgan",
//     color: "Tortoiseshell"
//    };
//    console.log(cat);

// let cat = { legs: 3, name: "Harmony", color: "Tortoiseshell" };
//    console.log(cat);
//    console.log(cat["name"]);
//    console.log(cat.name);

// // Identifying all the keys in an object  (Object.keys())
// let dog = { name: "Pancake", age: 6, color: "white", bark: "Yip yap yip!" };
// let cat = { name: "Harmony", age: 8, color: "tortoiseshell" };
// console.log(Object.keys(dog));
// console.log(Object.keys(cat));

// // Ading values to objects (object["key"] = value)
// let cat = {};
// cat["legs"] = 3;
// cat["name"] = "Harmony";
// cat["color"] = "Tortoiseshell";
// console.log(cat);

// // Adding keys with dot notation (object.key = value)
// let cat = {};
// cat.legs = 3;
// cat.name = "Harmony";
// cat.color = "Tortoiseshell";
// console.log(cat);

// // Unknown keys [undefined]
// let dog = {
//     name: "Pancake",
//     legs: 4,
//     isAwesome: true
//    };
//    console.log(dog.isBrown);

// // Combining arrays and objects
// let dinosaurs = [
//     { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
//     { name: "Stegosaurus", period: "Late Jurassic" },
//     { name: "Plateosaurus", period: "Triassic" }
//    ];
// console.log(dinosaurs[0]);
// console.log(dinosaurs[0]["name"]);
// console.log(dinosaurs[0].period);

// // An array of friends
// let anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
// let dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
// let kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };
// let friends = [anna, dave, kate];
// console.log(friends[1]);
// console.log(friends[2].name);
// console.log(friends[0].luckyNumbers[1]);

// // Keeping track of owed money
// let owedMoney = {};
// owedMoney["Jimmy"] = 5;
// owedMoney["Anna"] = 7;
// owedMoney["Jinen"];
// console.log(Object.keys(owedMoney));
// console.log(owedMoney["Jinen"]);
// owedMoney["Jimmy"] += 3;
// console.log(owedMoney);
// console.log(owedMoney["Jimmy"]);

// // Another method for increasing amount owed
// owedMoney["Jimmy"] = owedMoney["Jimmy"] + 3;
// console.log(owedMoney["Jimmy"]);
// console.log(owedMoney);

// // Storing information about a movie
// let movies = {
//     "Finding Nemo": {
//     releaseDate: 2003,
//     duration: 100,
//     actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
//     format: "DVD"
//     },
//     "Star Wars: Episode VI - Return of the Jedi": {
//     releaseDate: 1983,
//     duration: 134,
//     actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
//     format: "DVD"
//     },
//     "Harry Potter and the Goblet of Fire": {
//     releaseDate: 2005,
//     duration: 157,
//     actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
//     format: "Blu-ray"
//     }
//    };
//    let findingNemo = movies["Finding Nemo"];
//    console.log(findingNemo.actors);
//    console.log(findingNemo.format);

//    let cars = {
//     releaseDate: 2006,
//     duration: 117,
//     actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
//     format: "Blu-ray"
//    };
//    movies["Cars"] = cars;
//   console.log(Object.keys(movies));

// Try out 
// #1
// let scores = {};
// scores["Sam"] = 0;
// scores["Grimes"] = 0;
// scores["Billie"] = 0;
// scores["Lorde"] = 0;
// scores["Lorde"] += 1;
// console.log(Object.keys(scores));
// console.log(scores);

// // #2
// let myCrazyObject = {
//     "name": "A ridiculous object",
//     "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
//     "random animal": "Banana Shark"
//    };
//    let someArray = myCrazyObject["some array"]
//    console.log(someArray[2].number);




