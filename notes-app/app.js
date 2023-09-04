const chalk = require('chalk');
const getNotes = require('./notes.js');
const yargs = require('yargs');
// const inquirer = require('inquirer');

const msg = getNotes();

// console.log(chalk.green.inverse.bold(msg));

// console.log(chalk.blue('Hello') + chalk.red(' World') + chalk.red('!'));

// console.log(process.argv)
console.log(yargs.argv);
yargs.version('1.0.0');

const promise1 = yargs(process.argv.splice(2))
  .command(
    (command = 'remove'),
    (description = 'Removing the note'),
    (handler = (argv) => {
      console.log('Removing the module.', argv);
    }),
    (builder = (argv) => {
      console.log('Removed the module.', argv);
    })
  )
  .command(
    'add',
    'Adding note Command',
    () => {
      console.log('Adding a note...');
    },
    () => {
      console.log('Added the module.');
    }
  )
  .demandCommand(1, 1, 'choose a command: add or remove')
  .help('h').argv;

// const argv = yargs(process.argv.splice(2))
//   .command('ask', 'use inquirer to prompt for your name', () => {}, askName)
//   .command('sing', 'a classic yargs command without prompting', () => {}, sing)
//   .demandCommand(1, 1, 'choose a command: ask or sing')
//   .strict()
//   .help('h').argv;

// console.log(argv);
