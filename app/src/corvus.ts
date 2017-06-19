'use strict'
var program = require('commander')
var tasker = require('./tasker')
var json = require('../package.json')
import * as chalk from 'chalk'

program
  .version(json.version)
  .usage('[options]')

program
  .command('new <name>')
  .alias('n')
  .description('Create a new project.')
  .action((name:string) => {
    tasker.new(name)
  })

program
  .command('check')
  .alias('c')
  .description('Check dependencies.')
  .action(() => {
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), ' This command is not yet ready for usage.')
  })

program
  .command('install')
  .alias('i')
  .description('Install dependencies.')
  .action(() => {
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), ' This command is not yet ready for usage.')
  })

program
  .command('generate <type> [attribute]')
  .alias('g')
  .description('Scaffolding')
  .action(() => {
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), ' This command is not yet ready for usage.')
  })

program
  .command('revert')
  .alias('r')
  .description('Revert to initial creation')
  .action(() => {
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), ' This command is not yet ready for usage.')
  })

program
  .command('<command>')
  .description('Git functionality')
  .action(() => {
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), ' This command is not yet ready for usage.')
  })

program
  .command('add <name> <type> <val>')
  .alias('a')
  .description('Add a new field')
  .action((name:string, type:string, val:string) => {
    var t;
    
    switch (type) {
      case "str"||"string":
        t = "string"
        break;
      
      case "obj"||"object":
        t = "object"
        break;

      case "arr"||"array":
        t = "string"
        break;
      default:
        break;
    }

    // console.log("Added",`\n{\n    "${name}":"${val}",\n} \n as ${t}`)
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), ' This command is not yet ready for usage.')
  })

program.parse(process.argv)

// node script/corvus a newName obj "Corvus"
