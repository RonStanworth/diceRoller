//Set up buttons
var d2Button = document.getElementById("D2");
var d3Button = document.getElementById("D3");
var d4Button = document.getElementById("D4");
var d6Button = document.getElementById("D6");
var d8Button = document.getElementById("D8");
var d10Button = document.getElementById("D10");
var d12Button = document.getElementById("D12");
var d20Button = document.getElementById("D20");
var d100Button = document.getElementById("D100");

//Set up rollsDisplay
var rollsDisplay = document.getElementById("rolls");

//Set reading of number of dice to roll
var readNum = document.getElementById("num");
var numDice =  0;

//Set array to push rolls into
var rolls = [];

//Set up return string
var str = "";


//Set up rolls:

//D2
d2Button.addEventListener("click", function() {
    // Check for no number entered, clear the text and add a warning
    if (readNum.value == "" || readNum.value == 0) {
        rollsDisplay.textContent = "";
        rollsDisplay.textContent = "Enter an amount of dice to roll"
    }   else    {
    // Store the number entered
        numDice = readNum.value;

        //Set up a singular or plural suffix for rolls statement
        var suff = "";
        if (numDice === "1") {
            suff = " was rolled and you rolled: ";
        } else {
            suff = " were rolled and you rolled: ";
        }

        //Start the string with how many and what type of dice was rolled 
        str = numDice + " " + this.id + suff;

        //Roll the dice (Math.random the number after * is the max number hat will be seen)
        for (var i=1; i<=numDice; i++) {
            str += " " + Math.floor((Math.random() * 2) + 1); + " ";
        }

        //Display the rolls
        rollsDisplay.textContent = str;
    }
});

//D3
d3Button.addEventListener("click", function() {
    // Check for no number entered, clear the text and add a warning
    if (readNum.value == "" || readNum.value == 0) {
        rollsDisplay.textContent = "";
        rollsDisplay.textContent = "Enter an amount of dice to roll"
    }   else    {
    // Store the number entered
        numDice = readNum.value;

        //Set up a singular or plural suffix for rolls statement
        var suff = "";
        if (numDice === "1") {
            suff = " was rolled and you rolled: ";
        } else {
            suff = " were rolled and you rolled: ";
        }

        //Start the string with how many and what type of dice was rolled 
        str = numDice + " " + this.id + suff;

        //Roll the dice (Math.random the number after * is the max number hat will be seen)
        for (var i=1; i<=numDice; i++) {
            str += " " + Math.floor((Math.random() * 3) + 1); + " ";
        }

        //Display the rolls
        rollsDisplay.textContent = str;
    }
});

//D4
d4Button.addEventListener("click", function() {
    // Check for no number entered, clear the text and add a warning
    if (readNum.value == "" || readNum.value == 0) {
        rollsDisplay.textContent = "";
        rollsDisplay.textContent = "Enter an amount of dice to roll"
    }   else    {
    // Store the number entered
        numDice = readNum.value;

        //Set up a singular or plural suffix for rolls statement
        var suff = "";
        if (numDice === "1") {
            suff = " was rolled and you rolled: ";
        } else {
            suff = " were rolled and you rolled: ";
        }

        //Start the string with how many and what type of dice was rolled 
        str = numDice + " " + this.id + suff;

        //Roll the dice (Math.random the number after * is the max number hat will be seen)
        for (var i=1; i<=numDice; i++) {
            str += " " + Math.floor((Math.random() * 4) + 1); + " ";
        }

        //Display the rolls
        rollsDisplay.textContent = str;
    }
});

//D6
d6Button.addEventListener("click", function() {
    // Check for no number entered, clear the text and add a warning
    if (readNum.value == "" || readNum.value == 0) {
        rollsDisplay.textContent = "";
        rollsDisplay.textContent = "Enter an amount of dice to roll"
    }   else    {
    // Store the number entered
        numDice = readNum.value;

        //Set up a singular or plural suffix for rolls statement
        var suff = "";
        if (numDice === "1") {
            suff = " was rolled and you rolled: ";
        } else {
            suff = " were rolled and you rolled: ";
        }

        //Start the string with how many and what type of dice was rolled 
        str = numDice + " " + this.id + suff;

        //Roll the dice (Math.random the number after * is the max number hat will be seen)
        for (var i=1; i<=numDice; i++) {
            str += " " + Math.floor((Math.random() * 6) + 1); + " ";
        }

        //Display the rolls
        rollsDisplay.textContent = str;
    }
});

//D8
d8Button.addEventListener("click", function() {
    // Check for no number entered, clear the text and add a warning
    if (readNum.value == "" || readNum.value == 0) {
        rollsDisplay.textContent = "";
        rollsDisplay.textContent = "Enter an amount of dice to roll"
    }   else    {
    // Store the number entered
        numDice = readNum.value;

        //Set up a singular or plural suffix for rolls statement
        var suff = "";
        if (numDice === "1") {
            suff = " was rolled and you rolled: ";
        } else {
            suff = " were rolled and you rolled: ";
        }

        //Start the string with how many and what type of dice was rolled 
        str = numDice + " " + this.id + suff;

        //Roll the dice (Math.random the number after * is the max number hat will be seen)
        for (var i=1; i<=numDice; i++) {
            str += " " + Math.floor((Math.random() * 8) + 1); + " ";
        }

        //Display the rolls
        rollsDisplay.textContent = str;
    }
});

//D10
d10Button.addEventListener("click", function() {
    // Check for no number entered, clear the text and add a warning
    if (readNum.value == "" || readNum.value == 0) {
        rollsDisplay.textContent = "";
        rollsDisplay.textContent = "Enter an amount of dice to roll"
    }   else    {
    // Store the number entered
        numDice = readNum.value;

        //Set up a singular or plural suffix for rolls statement
        var suff = "";
        if (numDice === "1") {
            suff = " was rolled and you rolled: ";
        } else {
            suff = " were rolled and you rolled: ";
        }

        //Start the string with how many and what type of dice was rolled 
        str = numDice + " " + this.id + suff;

        //Roll the dice (Math.random the number after * is the max number hat will be seen)
        for (var i=1; i<=numDice; i++) {
            str += " " + Math.floor((Math.random() * 10) + 1); + " ";
        }

        //Display the rolls
        rollsDisplay.textContent = str;
    }
});

//D12
d12Button.addEventListener("click", function() {
    // Check for no number entered, clear the text and add a warning
    if (readNum.value == "" || readNum.value == 0) {
        rollsDisplay.textContent = "";
        rollsDisplay.textContent = "Enter an amount of dice to roll"
    }   else    {
    // Store the number entered
        numDice = readNum.value;

        //Set up a singular or plural suffix for rolls statement
        var suff = "";
        if (numDice === "1") {
            suff = " was rolled and you rolled: ";
        } else {
            suff = " were rolled and you rolled: ";
        }

        //Start the string with how many and what type of dice was rolled 
        str = numDice + " " + this.id + suff;

        //Roll the dice (Math.random the number after * is the max number hat will be seen)
        for (var i=1; i<=numDice; i++) {
            str += " " + Math.floor((Math.random() * 12) + 1); + " ";
        }

        //Display the rolls
        rollsDisplay.textContent = str;
    }
});

//D20
d20Button.addEventListener("click", function() {
    // Check for no number entered, clear the text and add a warning
    if (readNum.value == "" || readNum.value == 0) {
        rollsDisplay.textContent = "";
        rollsDisplay.textContent = "Enter an amount of dice to roll"
    }   else    {
    // Store the number entered
        numDice = readNum.value;

        //Set up a singular or plural suffix for rolls statement
        var suff = "";
        if (numDice === "1") {
            suff = " was rolled and you rolled: ";
        } else {
            suff = " were rolled and you rolled: ";
        }

        //Start the string with how many and what type of dice was rolled 
        str = numDice + " " + this.id + suff;

        //Roll the dice (Math.random the number after * is the max number hat will be seen)
        for (var i=1; i<=numDice; i++) {
            str += " " + Math.floor((Math.random() * 20) + 1); + " ";
        }

        //Display the rolls
        rollsDisplay.textContent = str;
    }
});

//D100
d100Button.addEventListener("click", function() {
    // Check for no number entered, clear the text and add a warning
    if (readNum.value == "" || readNum.value == 0) {
        rollsDisplay.textContent = "";
        rollsDisplay.textContent = "Enter an amount of dice to roll"
    }   else    {
    // Store the number entered
        numDice = readNum.value;

        //Set up a singular or plural suffix for rolls statement
        var suff = "";
        if (numDice === "1") {
            suff = " was rolled and you rolled: ";
        } else {
            suff = " were rolled and you rolled: ";
        }

        //Start the string with how many and what type of dice was rolled 
        str = numDice + " " + this.id + suff;

        //Roll the dice (Math.random the number after * is the max number hat will be seen)
        for (var i=1; i<=numDice; i++) {
            str += " " + Math.floor((Math.random() * 100) + 1); + " ";
        }

        //Display the rolls
        rollsDisplay.textContent = str;
    }
});