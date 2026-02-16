const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Choose Operation: +  -  *  /");

rl.question("Enter operator: ", (operator) => {
  rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {

      num1 = Number(num1);
      num2 = Number(num2);
      let result;

      if (operator === "+") result = num1 + num2;
      else if (operator === "-") result = num1 - num2;
      else if (operator === "*") result = num1 * num2;
      else if (operator === "/") result = num1 / num2;
      else {
        console.log("Invalid operator");
        rl.close();
        return;
      }

      console.log("Result:", result);
      rl.close();
    });
  });
});