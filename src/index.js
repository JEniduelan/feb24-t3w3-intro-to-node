const inquirer = require("inquirer");


console.log("Dice roller app is now running!");

/**
 * Generate a random number between 1 and diceSize, inclusive.
 * @param {number} diceSize the maximum that the dice can roll.
 * @returns {number} the number rolled on the dice
 */
function rollDice(diceSize = 20){
    let diceResult = 0;

    diceResult = Math.ceil(Math.random() * diceSize);

    return diceResult;
}

// console.log("random dice roll result is: ", rollDice()); // Roll a 20-sided dice

const prompt = inquirer.createPromptModule();

prompt([
	{
        type: "number",
        name: "dice_size",
        message: "What size of dice do you want to roll?"
    }
]).then((answer) => {
	console.log(answer);
	console.log(rollDice(answer.dice_size))
});

