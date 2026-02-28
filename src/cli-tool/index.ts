// src/cli-tool/index.ts
import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🧮 Simple Calculator CLI (TypeScript)");

// Helper function to parse number
function parseNumber(input: string): number | null {
  const value = parseFloat(input);
  return isNaN(value) ? null : value;
}

// Prompt user for input
rl.question("Enter first number: ", (num1Input: string) => {
  const num1 = parseNumber(num1Input);
  if (num1 === null) {
    console.log("Invalid number!");
    rl.close();
    return;
  }

  rl.question("Enter operator (+, -, *, /): ", (operator: string) => {
    rl.question("Enter second number: ", (num2Input: string) => {
      const num2 = parseNumber(num2Input);
      if (num2 === null) {
        console.log("Invalid number!");
        rl.close();
        return;
      }

      let result: number;

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

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});