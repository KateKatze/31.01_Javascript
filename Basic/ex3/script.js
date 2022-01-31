// ex 3 | Temperature v2.0
// Now when you have program Temperature v1.0 done it time to upgrade it to the version 2.0. Now you should create a nice looking responsive front-end for your program (mobile friendly) and create more messages (e.g. if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition.

var randomNum = Math.floor(Math.random()*35);
console.log(randomNum);
if (randomNum >= 32) {
    document.write("The weather is hot")
}
if (randomNum >= 10 && randomNum < 32){
    document.write("The weather is moderate")
}
if (randomNum < 10) {
    document.write("The weather is cold")
}