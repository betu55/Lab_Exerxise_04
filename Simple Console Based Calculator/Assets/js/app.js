var arrSum = new Array();
var arrMul = new Array();

(function(){
    let input1 = prompt("choose from(+, -, *, /):")
    if(input1 == "+"){
        let input2 = prompt("how many numbers are you gonna add:")
        for(let i = 0; i < parseInt(input2); i++){
            let input3 = prompt("Input No " + (i+1) +": ");
            arrSum.push(parseInt(input3));
        }
        add();
    }
    else if(input1 == "-"){
        let num1 = prompt("enter first number:")
        let num2 = prompt("enter second number:")
        sub(num1, num2);
    }

    else if(input1 == "*"){
        let input2 = prompt("how many numbers are you gonna multiply:")
        for(let i = 0; i < parseInt(input2); i++){
            let input3 = prompt("Input No " + (i+1) +": ")
            arrMul.push(parseInt(input3));
        }
        mul();
    }
    
    else if(input1 == "/"){
        let num1 = prompt("enter first number: ")
        let num2 = prompt("enter second number")
        div(num1, num2)
    }
    else{
        console.log("Wrong input");
    }

})();

function add(){
    let sum = 0;
    for (let i = 0; i < arrSum.length; i++){
        sum += arrSum[i];
    }
    console.log("The sum is: " + sum);
    window.alert("The sum is: " + sum);
}

function sub(num1, num2){
    let diff = num1-num2
    console.log("The difference is: " + diff);
    window.alert("The difference is: " + diff);
}
function mul(){
    let prod = 1;
    for (let i = 0; i < arrMul.length; i++){
        prod *= arrMul[i];
    }
    console.log("The product is: " + prod);
    window.alert("The product is: " + prod);
}
function div(num1, num2){
    if (num2 == 0){
        console.log("Cant have 0 as denominator");
        window.alert("Cant have 0 as denominator");
    }
    else{
        let quot = num1/num2;
        console.log("The quotient is: " + quot.toFixed(2));
        window.alert("The quotient is: " + quot.toFixed(2));
    }
    

}