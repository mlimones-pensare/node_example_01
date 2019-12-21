const chalk = require('chalk');
 
console.log(chalk.red('Hello world!'));

setTimeout(() => {
console.log(chalk.blue('Hello world!'));
}, 1000);
