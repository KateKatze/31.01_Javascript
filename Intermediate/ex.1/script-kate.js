// ex 1 | Compare two numbers

// Create a JavaScript program that will show the average grade for each student. Here are the points for each student:
// Martin = 76
// Thomas = 85
// Klaus = 65
// Maria = 93
// David = 81
// Based on their points, output the grade, according to the following table:
// < 60 F
// < 70 D
// < 80 C
// < 90 B
// < 100 A
// Finally, calculate the class average and output it (e.g. if the class average is 74 points, their average grade will be C).

var arr = [76, 85, 65, 93, 81];
var start = 0;
for (var i in arr) {
  start += arr[i];
}

var averSum = start / arr.length;

switch (true){
  case (averSum >= 90):
  document.getElementByClassName("string")[0].innerHTML = "It´s an A! <br>"; 
  document.getElementsByClassName("string")[0].style.background = "green";
  break;
  case (averSum<=89&&averSum>=80):
  document.getElementsByClassName("string")[0].innerHTML = "It´s a B! <br>";
  document.getElementsByClassName("string")[0].style.background = "green";
  break;
  case (averSum<=79&&averSum>=70):
  document.getElementsByClassName("string")[0].innerHTML = "It´s a C! <br>";
  document.getElementsByClassName("string")[0].style.background = "yellow";
  break;
  case (averSum<=69&&averSum>=60):
  document.getElementsByClassName("string")[0].innerHTML = "It´s a D! <br>";
  document.getElementsByClassName("string")[0].style.background = "red";
  break;
  case (averSum<60):
  document.getElementByClassName("string")[0].innerHTML = "It´s an F! <br>";
  document.getElementsByClassName("string")[0].style.background = "red";
  break;
  }

for (let i=0; i < arr.length; i++){
  switch (true) {
    case (arr[i] >= 90):
      document.getElementById("notes").innerHTML += "It´s an A! <br>";
    break;
    case (arr [i]<=89&&arr [i]>=80):
      document.getElementById("notes").innerHTML += "It´s an B! <br>";
    break;
    case (arr [i]<=79&&arr [i]>=70):
      document.getElementById("notes").innerHTML += "It´s an C! <br>";
    break;
    case (arr [i]<=69&&arr [i]>=60):
      document.getElementById("notes").innerHTML += "It´s an D! <br>";
    break;
    case (arr [i]<60):
      document.getElementById("notes").innerHTML += "It´s an F! <br>";
    break;
  }
}

// Second try:

// var arr = [76, 85, 65, 93, 81];
// for (let i=0; i < arr.length; i++){
// if(arr [i] >= 90) {
// document.write("It´s an A! <br>");
// }
// if(arr [i]<=89&&arr [i]>=80) {
// document.write("It´s a B! <br>");
// }
// if(arr [i]<=79&&arr [i]>=70) {
// document.write("It´s a C! <br>");
// }
// if(arr [i]<=69&&arr [i]>=60) {
// document.write("It´s a D! <br>");
// }
// if(arr [i]<60) {
// document.write("It´s an F :( <br>");
// }
// }


// Third example:

// var arr = [76, 85, 65, 93, 81];
// var start = 0;
// function displayGrades(grade, isAverage = false) {
//   if (isAverage) {
//     var text = "The average is ";
//   } else {
//     var text = "It´s an ";
//   }
//   console.log("grade", grade);
//   switch (true) {
//     case grade >= 90:
//       document.write(`${text} A! <br>`);
//       break;
//     case grade <= 89 && grade >= 80:
//       document.write(`${text} B! <br>`);
//       break;
//     case grade <= 79 && grade >= 70:
//       document.write(`${text} C! <br>`);
//       break;
//     case grade <= 69 && grade >= 60:
//       document.write(`${text} D! <br>`);
//       break;
//     case grade < 60:
//       document.write(`${text} F! <br>`);
//       break;
//   }
// }
// for (var i in arr) {
//   start += arr[i];
// }
// var averSum = start / arr.length;
// displayGrades(averSum, true);
// for (let i = 0; i < arr.length; i++) {
//   displayGrades(arr[i], false);
// }