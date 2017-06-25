'use strict'
var program = require('commander')
var task = require('./task')
var json = require('../package.json')
import * as chalk from 'chalk'

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
    console.error(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('check'), 'is not yet ready for usage.')
  })

program
  .command('install')
  .alias('i')
  .description('Install dependencies.')
  .action(() => {
    task.install()
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('install'), 'is not yet ready for usage.')
  })

program
  .command('generate <type> [frameworks...]')
  .alias('g')
  .description('Scaffolding')
  .action((type:string, frameworks: string[]) => {
    task.generate(type, frameworks)
    if (frameworks) {
      frameworks.forEach(framework => {
        console.log('<script src="https://test.'+framework+'.com">');
      });
    }
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('generate'), 'is not yet ready for usage.')
  })

program
  .command('revert')
  .alias('r')
  .description('Revert to initial creation')
  .action(() => {
    task.revert()
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('revert'), 'is not yet ready for usage.')
  })

program
  .command('p <command>')
  .description('Git push')
  .action((command:string) => {
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold(command), 'is not yet ready for usage.')
  })

program
  .command('add <type>')
  .alias('a')
  .description('Add a new field')
  .action((type:string) => {
    
    task.add(type)

    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('add'), 'is not yet ready for usage.')
  })

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
