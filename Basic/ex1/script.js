// ex 1 | Temperature v1.0
// Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate. This program should generate a different random number every time, which should be between -5c and 25c. If the temperature is between -5c and 10c print "The weather is cold" otherwise print "The weather is moderate". 

// Hint: Math.random() will give you a random number between 0 and 1, but it will not reach number 0 or 1, so any value between these two numbers (for example 0,315 , 0,91239 0,1) so if you try to multiply it with 10, you can have a random number between 0 and 10 :) .


var randomNum = Math.floor(Math.random()*25);
console.log(randomNum);

if (randomNum > 10){
    document.write("The weather is moderate")
}else{
    document.write("The weather is cold")
}
