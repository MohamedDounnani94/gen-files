const meow = require('meow');
const chalk = require('chalk');
const green = chalk.green;
const yellow = chalk.yellow;
const cyan = chalk.cyan;

module.exports = meow(
  `
	Usage
	  ${green(`gen-cli`)} ${cyan(`<schema>`)} ${yellow(`<name>`)}
	Commands
	  ${cyan(`schema`)}    Generate schema
	  ${cyan(`name`)}      Name of schema to generate
	Examples
	${green(`gen-cli`)} ${cyan(`schema`)} ${yellow(`badge`)}
	${green(`gen-cli`)} ${cyan(`help`)}
`,
  {
    booleanDefault: undefined,
    hardRejection: false,
    inferType: false,
    flags: {
      all: {
        type: 'boolean',
        default: false,
        alias: 'a'
      }
    }
  }
);