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

//Set up var to hold the roll
var roll = 0;

//Set up rolls:

//D2
d2Button.addEventListener("click", rolling); {
    rolling(2);
};

//D3
d3Button.addEventListener("click", rolling); {
    rolling(3);
};

//D4
d4Button.addEventListener("click", rolling); {
    rolling(4);
};

//D6
d6Button.addEventListener("click", rolling); {
    rolling(6);
};

//D8
d8Button.addEventListener("click", rolling); {
    rolling(8);
};

//D10
d10Button.addEventListener("click", rolling); {
    rolling(10);
};

//D12
d12Button.addEventListener("click", rolling); {
    rolling(12);
};

//D20
d20Button.addEventListener("click", rolling); {
    rolling(20);
};

//D100
d100Button.addEventListener("click", rolling); {
    rolling(100);
};

///////// FUNCTIONS /////////

function rolling () {
    //Set up var to hold the sum
    var sum = 0;

    // Check for no number entered, clear the text and add a warning
    if (readNum.value == "" || readNum.value == 0) {
        rollsDisplay.textContent = "";
        rollsDisplay.textContent = "Enter an amount of dice to roll"
    }   else    {

    //Set up sides of the die
        var sides = this.id;
        sides = sides.split("");
        sides = sides.splice(1,sides.length).join("");
        sides = Number(sides);

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
            roll = Math.floor((Math.random() * sides) + 1);
            str += " " + roll + " ";
            sum += roll;
        }

        str = str + "-- and your total was " + sum;

        //Display the rolls
        rollsDisplay.textContent = str;
    }
}