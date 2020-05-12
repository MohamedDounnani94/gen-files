const meow = require('meow');
const chalk = require('chalk');
const green = chalk.green;
const yellow = chalk.yellow;
const cyan = chalk.cyan;
const Table = require('cli-table3')
const table = new Table({
  head: [green('Command'), green('Type'), green('Name'), green('Description')]
})

table.push(
  ['gen-files', 'schema', 'badge', 'Creates GraphQL file graphl-schema with the name badge'],
  ['gen-files', 'vuex-store', 'badge', 'Creates Vuex file store with the name badge'],
  ['gen-files', 'vue-component', 'badge', 'Creates Vue component file with the name badge'],
)

module.exports = meow(
  `
Usage
  ${green(`gen-files`)} ${cyan(`<type>`)} ${yellow(`<name>`)}
Commands
  ${cyan(`type`)}      Type of file that you want to gen (schema, vuex-store, ...)
  ${cyan(`name`)}      Name of schema to generate
Additional Commands
  ${green('gen-files')} ${cyan('help')}
Examples
${table.toString()}
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