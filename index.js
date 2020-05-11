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

const [type, name] = cli.input;

const file = createFile({fileName: name, extension: 'js'})
writeFile(file, templates[`${type}`].fillTemplate(name))
console.log(`${logsym.success} ${type}: ${name}, created successfully!`)