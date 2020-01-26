const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const n1 = Math.floor((Math.random() * 10) + 1);
const n2 = Math.floor((Math.random() * 10) + 1);
const answer = n1 + n2;

rl.question(
  `What is the ${n1} + ${n2}? \n`,
  (input) => {
    if (parseInt(input.trim(), 10) === answer) {
      console.log('Correct!');
      rl.close();
    } else {
      rl.setPrompt('Your answer was incorrect please try again! \n');
      rl.prompt();
      rl.on('line', (newInput) => {
        if (parseInt(newInput.trim(), 10) === answer) {
          console.log('Correct!');
          rl.close();
        } else {
          rl.setPrompt('Your answer is incorrect please try again');
          rl.prompt();
        }
      })
    }
  }
)
rl.on('close', () => {
  console.log('Bye Bye!')
})
