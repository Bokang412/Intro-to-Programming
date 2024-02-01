// document.getElementById("lefteye").style.background = "purple"
// document.getElementById("head").style.transform = "rotate(-15deg)"
// // Put a 2‐pixel‐wide, solid black border around his body.
// document.getElementById("body").style.border = "2px black solid";
// // Round the corners of his mouth.
// document.getElementById("mouth").style.borderRadius = "40px";
// // Put yellow dots around his right eye.
// document.getElementById("righteye").style.border = "4px yellow dotted";
// // Change his left arm’s color.
//  document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// // Change the text color.
// document.getElementById("body").style.color = "#FF0000";
// // Give Douglas hair.
//  document.getElementById("head").style.borderTop = "5px black solid";

// // Activity
// document.getElementById("rightarm").style.backgroundColor = "green";
// document.getElementById("head").style.transform = "rotate(-15deg)"
// document.getElementById("nose").style.borderRadius = "2px";
// document.getElementById("mouth").style.backgroundColor = "pink";

// We can make Douglas bounce his eye
let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown (e) {
    let robotPart = e.target;
    let top = 0;
    let animation = setInterval(frame, 10) // draw every 10ms

    function frame() {
       robotPart.style.top = top + '%';
       top++;

       if (top === 20) {
       clearInterval(animation);
       }
       
    }
   
}

// let rightEye = document.getElementById("righteye");
// rightEye.addEventListener("click", moveRightLeft);

// function moveRightLeft (e) {
//     let robotPart = e.target;
//     let left = 0;
//     let animation = setInterval(frame, 10) // draw every 10ms

//     function frame() {
//        robotPart.style.left = left + '%';
//        left++;

//        if (left === 10) {
//        clearInterval(animation);
//        }
       
//     }
   
// }