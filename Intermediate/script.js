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



// if ( < 60){
//     console.log( + "F");
// }
// if ( < 70){
//     console.log( + "D");
// }
// if ( < 80){
//     console.log( + "C");
// }
// if ( < 90){
//     console.log( + "B");
// }
// if ( < 100){
//     console.log( + "A");
// }


var Mart = 76;
var Thom = 85;
var Klaus = 65;
var Mar = 93;
var Dav = 81;


var arr = [76, 85, 65, 93, 81]

function toLetterGrade(arr) {
    var textG = '';
    var result = [];
    for (i = 0; i < arr.length; i++) {
      textG = '';
      if (arr[i] <= 100) {
        textG = "A";
      } else if (arr[i] <= 90) {
        textG = "B";
      } else if (arr[i] <= 80) {
        textG = "c";
      } else if (arr[i] >= 70) {
        textG = "D";
      } else {
        textG = "F";
      }
      result.push(textG);
    }
    return result;
  }
  
  document.write(toLetterGrade(arr));