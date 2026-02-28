const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🧮 Simple Calculator CLI");

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter operator (+, -, *, /): ", (operator) => {
    rl.question("Enter second number: ", (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      switch (operator) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
        default:
          console.log("Invalid operator");
          rl.close();
          return;
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});