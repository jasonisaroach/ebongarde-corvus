'use strict'
var program = require('commander')
var task = require('./task')
var json = require('../package.json')
import * as chalk from 'chalk'
var corvus = require('./core')

program
  .version(json.version)
  .usage('<command> [options]')

program
  .command('new <name>')
  .alias('n')
  .description('Create a new project.')
  .action((name:string) => {
    task.new(name)
  })

program
  .command('check')
  .alias('c')
  .description('Check dependencies.')
  .action(() => {
    // task.check()
    corvus('err', 'I do not yet support the command', 'check|c')
  })

program
  .command('install')
  .alias('i')
  .description('Install dependencies.')
  .action(() => {
    task.install()
    corvus('err', 'I do not yet support the command', 'install|i')
  })

program
  .command('generate <type> [frameworks...]')
  .alias('g')
  .description('Scaffolding')
  .action((type:string, frameworks: string[]) => {
    task.generate(type, frameworks)
  })

program
  .command('revert')
  .alias('r')
  .description('Revert to initial creation')
  .action(() => {
    task.revert()
    corvus('err', 'I do not yet support the command', 'revert|r')
  })

program
  .command('p <command>')
  .description('Git push')
  .action((command:string) => {
    corvus('err', 'I do not yet support the git command', command)
  })

program
  .command('add <type>')
  .alias('a')
  .description('Add a new field')
  .action((type:string) => {
    
    task.add(type)

    corvus('err', 'I do not yet support the command', 'add|a')
  })

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
