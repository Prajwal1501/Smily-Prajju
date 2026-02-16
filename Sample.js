console.log("Prajwal Gowda");

console.log("Node.js Version:", process.version);

console.log("Platform:", process.platform);

console.log("Hello World");

console.log("Current User:", process.env.USER || process.env.USERNAME);

const companyName = "Geek Wick Techmedia";
const domain = "Full stack development";
const startDate = "01-Feb-2026";
const duration = "4 Months";

console.log("Internship Details");
console.log("-------------------");
console.log("Company Name:", companyName);
console.log("Domain:", domain);
console.log("Start Date:", startDate);
console.log("Duration:", duration);

//**************Simple Calculator****************

console.log("**************Simple Calculator****************");

import readline from "readline";
import { Readline } from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Select Operation:");
console.log("1. Addition (+)");
console.log("2. Subtraction (-)");
console.log("3. Multiplication (*)");
console.log("4. Division (/)");

rl.question("Enter operation number (1-4): ", function(choice) {

  rl.question("Enter first number: ", function(num1) {
    rl.question("Enter second number: ", function(num2) {

      num1 = Number(num1);
      num2 = Number(num2);
      let result;

      if (choice == "1") {
        result = num1 + num2;
      } else if (choice == "2") {
        result = num1 - num2;
      } else if (choice == "3") {
        result = num1 * num2;
      } else if (choice == "4") {
        result = num1 / num2;
      } else {
        console.log("Invalid choice");
        rl.close();
        return;
      }

      console.log("Result:", result);
      rl.close();
    });
  });
});
