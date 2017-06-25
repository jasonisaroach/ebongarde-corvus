'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var program = require('commander');
var task = require('./task');
var json = require('../package.json');
var chalk = require("chalk");
program
    .version(json.version)
    .usage('<command> [options]');
program
    .command('new <name>')
    .alias('n')
    .description('Create a new project.')
    .action(function (name) {
    task.new(name);
});
program
    .command('check')
    .alias('c')
    .description('Check dependencies.')
    .action(function () {
    // task.check()
    console.error(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('check'), 'is not yet ready for usage.');
});
program
    .command('install')
    .alias('i')
    .description('Install dependencies.')
    .action(function () {
    task.install();
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('install'), 'is not yet ready for usage.');
});
program
    .command('generate <type> [frameworks...]')
    .alias('g')
    .description('Scaffolding')
    .action(function (type, frameworks) {
    task.generate(type, frameworks);
    if (frameworks) {
        frameworks.forEach(function (framework) {
            console.log('<script src="https://test.' + framework + '.com">');
        });
    }
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('generate'), 'is not yet ready for usage.');
});
program
    .command('revert')
    .alias('r')
    .description('Revert to initial creation')
    .action(function () {
    task.revert();
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('revert'), 'is not yet ready for usage.');
});
program
    .command('p <command>')
    .description('Git push')
    .action(function (command) {
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold(command), 'is not yet ready for usage.');
});
program
    .command('add <type>')
    .alias('a')
    .description('Add a new field')
    .action(function (type) {
    task.add(type);
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('add'), 'is not yet ready for usage.');
});
program.parse(process.argv);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
