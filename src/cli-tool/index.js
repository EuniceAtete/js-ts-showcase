"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/cli-tool/index.ts
var readline = require("node:readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("🧮 Simple Calculator CLI (TypeScript)");
// Helper function to parse number
function parseNumber(input) {
    var value = parseFloat(input);
    return isNaN(value) ? null : value;
}
// Prompt user for input
rl.question("Enter first number: ", function (num1Input) {
    var num1 = parseNumber(num1Input);
    if (num1 === null) {
        console.log("Invalid number!");
        rl.close();
        return;
    }
    rl.question("Enter operator (+, -, *, /): ", function (operator) {
        rl.question("Enter second number: ", function (num2Input) {
            var num2 = parseNumber(num2Input);
            if (num2 === null) {
                console.log("Invalid number!");
                rl.close();
                return;
            }
            var result;
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 === 0) {
                        console.log("Cannot divide by zero!");
                        rl.close();
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    console.log("Invalid operator!");
                    rl.close();
                    return;
            }
            console.log("Result: ".concat(result));
            rl.close();
        });
    });
});
