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
console.log(averSum);

switch (true){
  case (averSum >= 90):
  document.getElementByClassName('string').innerHTML = "It´s an A! <br>"; 
  break;
  case (averSum<=89&&averSum>=80):
  document.getElementsByClassName('string').innerHTML = "It´s a B! <br>";
  break;
  case (averSum<=79&&averSum>=70):
  document.getElementsByClassName('string').innerHTML = "It´s a C! <br>";
  break;
  case (averSum<=69&&averSum>=60):
  document.getElementsByClassName('string').innerHTML = "It´s a D! <br>";
  break;
  case (averSum<60):
  document.getElementByClassName('string').innerHTML = "It´s an F! <br>";
  break;
  }

for (let i=0; i < arr.length; i++){
  switch (true) {
    case (arr[i] >= 90):
    document.write("It´s an A! <br>"); 
    break;
    case (arr [i]<=89&&arr [i]>=80):
    document.write("It´s a B! <br>");
    break;
    case (arr [i]<=79&&arr [i]>=70):
    document.write("It´s a C! <br>");
    break;
    case (arr [i]<=69&&arr [i]>=60):
    document.write("It´s a D! <br>");
    break;
    case (arr [i]<60):
    document.write("It´s an F :( <br>");
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