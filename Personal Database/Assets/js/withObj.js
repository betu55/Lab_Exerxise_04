//This is a person object.
let person = {
    firstname : "",
    lastName : "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    
    ageCalc: function() {
        return this.age = new Date().getFullYear() - this.birthYear;
    },
    
    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },
    
    calcBmi: function(weight, height) {
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
};

person.firstName = prompt("Enter Your First Name");
person.lastName = prompt("Enter Your Last Name");
person.job = prompt("What is Your Profession ?");
person.birthYear = prompt("Enter Your Age");
person.weight = prompt("Your Weight in Kg  ? ");
person.height = prompt("Your Height in M  ? ");
let numberOfFamily = prompt("Number of Family  ? ");

for (let i = 0; i < parseInt(numberOfFamily); i++) {
    person.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}


person.ageCalc();
person.checkVote();

(function() {

    console.log("Here is your Profile ")
    console.log("Full Name: " + person.firstName + " " + person.lastName);
    console.log("Profession : " + person.job);
    console.log("Age : " + person.age + " " + "years old");
    console.log("Is Eligible to Vote : " + person.isEligibleToVote);
    console.log("Family Members ");

    person.familyMembers.forEach(function(member, i) {
        console.log("Family Member  " + (i + 1) + " : " + member);
    });

    person.calcBmi(person.weight, person.height);

})();