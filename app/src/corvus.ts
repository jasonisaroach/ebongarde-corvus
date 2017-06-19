'use strict'
var program = require('commander')
var tasker = require('./tasker')
var json = require('../package.json')

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
    console.log('working')
  })

program
  .command('install')
  .alias('i')
  .description('Install dependencies.')
  .action(() => {
    // TODO
  })

program
  .command('generate <type> [attribute]')
  .alias('g')
  .description('Scaffolding')
  .action(() => {
    // TODO
  })

program
  .command('revert')
  .alias('r')
  .description('Revert to initial creation')
  .action(() => {
    // TODO
  })

program
  .command('<command>')
  .description('Git functionality')
  .action(() => {
    // TODO
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

    console.log("Added",`\n{\n    "${name}":"${val}",\n} \n as ${t}`)
  })

program.parse(process.argv)

// node script/corvus a newName obj "Corvus"
