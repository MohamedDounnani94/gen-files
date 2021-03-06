#!/usr/bin/env node

const { createFile, writeFile } = require('./fsHandler')
const templates = require('./templates')
const cli = require('./cli')
const start = require('./start')

const logsym = require('log-symbols');

const input = cli.input;

start()

if(input[0] === 'help' || input.length < 2) {
  cli.showHelp(0)
}

if(input[0] === 'list' || input.length < 2) {
  cli.showList(0)
}

const [type, name] = cli.input;

if(!templates[`${type}`]) {
  console.log(`${logsym.error} ${type} not found`)
  process.exit(0)
}

const file = createFile({fileName: name, extension: templates[`${type}`].ex})
writeFile(file, templates[`${type}`].name.fillTemplate(name))


console.log(`${logsym.success} ${type}: ${name}, created successfully!`)