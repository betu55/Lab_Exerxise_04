//console.log(window.document)
//console.log(window.location)

//A shorter way of declaring variables
var firstName, lastName, birthYear, job, weight, height; 
let tempAge, isEligibleToVote, noOfFamily, familyMembers = [];

//prompting the user to recieve data to be used by this module.
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?");
birthYear = prompt("Enter Your Age");
noOfFamily = prompt("How many family members do you have: ");

//------------------------------------------------------------------------------------------------------------------------------
//assigning a variables value to another variable
tempAge = parseInt(birthYear);
calcAge(birthYear);

//a basic conditional statment
if (tempAge >= 18) {
    isEligibleToVote = true;
} 
else {
    isEligibleToVote = false;
}
//basic for loop.
for(let i = 0; i<parseInt(noOfFamily); i++){
    familyMembers.push(prompt("family Member no " + (i+1)+":"));
}
weight = prompt("Input your weight");
height = prompt("Enter your height");
//here is where all the data is viewed within the corresponding terminal or console. we dont need them as they are being called in the IIFE
/*
console.log("Here is your Profile ");
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Age : " + birthYear + " years old");
console.log("Is Eligible to Vote : " + isEligibleToVote);
console.log("Family Members:");


familyMembers.forEach(function(Members, i){
    console.log("family Member " + (i+1) + " is " + Members);
});
*/

//regular function.
function calcAge(tempAge){
    return new Date().getFullYear - tempAge;
}

function calcBmi(weight, height){
    let BMI;
    BMI = weight/Math.pow(height, 2);
    console.log("your BMI is: " + BMI.toFixed(2));

    if(BMI < 18.5){
        console.log("You are underweight");
    }

    else if(BMI >=18.5 && BMI <= 24.9){
        console.log("youve got a Healthy Weight");
    }

    else if(BMI >=25 && BMI <= 29.9){
        console.log("You're overweight");
    }

    else if(BMI >=30){
        console.log("Obese");
    }
}
//this is an IIFE (Immediately Invoking Function Expression).
(function() {

    console.log("Here is your Profile ")
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Profession : " + job);
    console.log("Age : " + tempAge + " " + "years old");
    console.log("Is Eligible to Vote : " + isEligibleToVote);
    console.log("Family Members ");

    familyMembers.forEach(function(member, i) {
        console.log("Family Member no " + (i + 1) + " => " + member);
    });
    //calling the calcBmi function within this self invoking function
    calcBmi(weight, height);
})();
