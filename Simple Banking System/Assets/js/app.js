var sentinelVal = false;
var isAccountNoReciever = false;
var counter = 0;
var tempAccountSender;
var tempAccountReciever;

while (sentinelVal == false){
    (function(){
        let input1 = prompt("Choose (1) to deposit, (2) to withdraw, (3) to check balance (4) to transfer and (q) to cancel.");
        if (input1 == "1"){
            let input2 = prompt("Enter your passcode please: ");
            if(input2 == me.accountpass){
                let input3 = parseFloat(prompt("enter Ammount to deposit: "));
                deposit(parseFloat(input3));
            }
            else{
                console.log("Wrong input, please try again");
                window.alert("Wrong input, please try again");
                stayOrQuit();
            }
            
        }
        else if (input1 == "2"){
            let input2 = prompt("Enter your passcode please: ");
            if(input2 == me.accountpass){
                let input3 = prompt("enter Ammount to withdraw: ");
                if(parseInt(input3) < 50 | parseInt(input3) > 5000){
                    console.log("You can't Withdraw that much money (min = 50, max = 5000)");
                    window.alert("You can't Withdraw that much money (min = 50, max = 5000)");
                    stayOrQuit();
                }
                else if(parseInt(input3) > 50 && parseInt(input3) < 5000){
                    withdraw(parseFloat(input3));
                }
                else{
                    console.log("invalid Input!!");
                    window.alert("invalid input!!");
                    stayOrQuit();
                }

            }
            else{
                console.log("Wrong input, please try again");
                window.alert("Wrong input, please try again");
                stayOrQuit();
            }

        }
        else if (input1 == "3"){
            let input2 = prompt("Enter your passcode please: ");
            if(input2 == me.accountpass){
                balance();
            }
            else{
                console.log("Wrong input, please try again");
                window.alert("Wrong input, please try again");
                stayOrQuit();
            }
        }

        else if(input1 == "4"){
            let input2 = prompt("Enter your passcode please: ");
            if(input2 == me.accountpass){
                tempAccountSender = me;
                let recieversAccount = parseInt(prompt("Enter recieveres account number:"));
                let ammount = parseFloat(prompt("Enter ammount to be transfered."));

                for (let i = 1; i < dataContainer.length; i++) {
                    isAccountNoReciever = (parseInt(dataContainer[i].accountNo) == recieversAccount);
                    if(isAccountNoReciever == true){
                        counter += 1;
                        tempAccountReciever = dataContainer[i]
                    }
                }

                if(counter == 1) {
                    transfer(ammount);    
                }

                else{
                    console.log("Sorry The reciever account number doesn't seem to exist.");
                    window.alert("Sorry The reciever account number doesn't seem to exist.");
                    stayOrQuit();
                }
                

            }
            else{
                console.log("Wrong input, please try again");
                window.alert("Wrong input, please try again");
                stayOrQuit();    
            }
        }

        else if (input1 == "q" | input1 == "Q"){
            stayOrQuit();
        }

        else{
            console.log("Wrong input.");
            window.alert("Wrong input.");
            
        }
    })();
    
    function deposit(ammount){
        me.accountBalance += ammount;
        console.log("You have sucessfully deposited " + parseFloat(ammount).toFixed(2) + "birr to your account number:" + me.accountNo);
        console.log("Current balance: " + parseFloat(me.accountBalance).toFixed(2));
        window.alert("You have sucessfully deposited " + parseFloat(ammount).toFixed(2) + "birr to your account number:" + me.accountNo);
    
    }
    
    function withdraw(ammount){
        me.accountBalance -= ammount;
        console.log("You have sucessfully withdrawn " + parseFloat(ammount).toFixed(2) + "birr from your account number:" + me.accountNo);
        console.log("Current balance: " + parseFloat(me.accountBalance).toFixed(2));
        window.alert("You have sucessfully withdrawn " + parseFloat(ammount).toFixed(2) + "birr from your account number:" + me.accountNo);
        
    }
    
    function balance(){
        console.log("Your current balance is: " + me.accountBalance);
        window.alert("Your current balance is: " + me.accountBalance)
    }
    
    function transfer(ammount){
        counter = 0;
        tempAccountSender.accountBalance -= ammount;
        tempAccountReciever.accountBalance += ammount;
        console.log("You have successfuly transfered " + parseFloat(ammount).toFixed(2) + "birr \nFrom Account no: " + tempAccountSender.accountNo + "\nTo Account no: " + tempAccountReciever.accountNo + "\nYour Balance is:" + tempAccountSender.accountBalance);
    }

    function stayOrQuit(){
        let inp1 = prompt("Press (q) to quit or any other key to continue");
        if(inp1 == "q" | inp1 == "Q"){
            sentinelVal = true;
        }
        else{
            sentinelVal = false;
        }
    }
}