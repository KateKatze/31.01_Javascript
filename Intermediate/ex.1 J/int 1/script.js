var Martin = 76
var Thomas = 85
var Klaus = 65
var Maria = 93
var David = 81 

// function avgGrade(stdGrade){
//     if (stdGrade > 90){console.log("A")}
//     if (stdGrade > 80 && stdGrade < 90){console.log("B")}
//     if (stdGrade > 70 && stdGrade < 80){console.log("C")}
//     if (stdGrade > 60 && stdGrade < 70){console.log("D")}
//     if (stdGrade < 60){console.log("F")}
// }

// console.log(avgGrade(Martin));
// console.log(avgGrade(Thomas));
// console.log(avgGrade(Klaus));
// console.log(avgGrade(Maria));
// console.log(avgGrade(David));

let grades =[Martin,Thomas,Klaus,Maria,David];

grades.forEach(function avgGrade(stdGrade){
    check(stdGrade);
});

var sum = grades.reduce(function(a,b){
    return a+b;
},0 );

console.log(sum)

function check(stdGrade){
    if (stdGrade > 90){console.log("A")}
    if (stdGrade > 80 && stdGrade < 90){console.log("B")}
    if (stdGrade > 70 && stdGrade < 80){console.log("C")}
    if (stdGrade > 60 && stdGrade < 70){console.log("D")}
    if (stdGrade < 60){console.log("F")}
}

var avgclassG = sum / grades.length;

console.log(avgclassG)

function avgGrade(classGrade){
    check(classGrade);
}

avgGrade(avgclassG);

