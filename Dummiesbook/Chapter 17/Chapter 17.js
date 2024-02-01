// for (let counter = 0; counter < 5; counter++) {
//     console.log(counter + ": Hello, JavaScript!");
//    }

//    for (let i = 5; i > 0; i--) {
//     alert (i);
//    }
//    alert ("Happy New Year!");

//    let myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
//    for (let i = 0; i < myFriends.length; i++){
//     alert(myFriends[i] + " is my friend.");
//    }

// // Use Math.random() to pick a random word in an array
// let myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// let randomFriend = Math.floor(Math.random() *
//     myFriends.length);
// alert(myFriends[randomFriend]);

// Create an array of days ofthe week
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let weather = ["Sunny", "Partly Sunny", "Partly Cloudy",
    "Cloudy", "Raining", "Snowing", "Thunderstorm",
    "Foggy"];

// /* Create two variables — minTemp and maxTemp — to hold the 
// minimum and maximum temperatures that you want the 
// random weather program to output.
// */
minTemp = 0;
maxTemp = 100;

// Start a new function, called generateWeather()
function generateWeather() {
    for (let i = 0; i < days.length; i++) {
        let weatherToday = weather[Math.floor(Math.random() * weather.length)];
        let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        document.getElementById("5DayWeather").innerHTML +=
            "<div id='" + days[i] + "' class='" +
            weatherToday + "'><b>Forecast for " + days[i] +
            ":</b><br><br>" + weatherToday + " and " +
            tempToday + " degrees.</div>";
    }
}
generateWeather();













