'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var program = require('commander');
var tasker = require('./tasker');
var json = require('../package.json');
var chalk = require("chalk");
program
    .version(json.version)
    .usage('[options]');
program
    .command('new <name>')
    .alias('n')
    .description('Create a new project.')
    .action(function (name) {
    tasker.new(name);
});
program
    .command('check')
    .alias('c')
    .description('Check dependencies.')
    .action(function () { return console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('check'), 'is not yet ready for usage.'); });
program
    .command('install')
    .alias('i')
    .description('Install dependencies.')
    .action(function () { return console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('install'), 'is not yet ready for usage.'); });
program
    .command('generate <type> [attribute]')
    .alias('g')
    .description('Scaffolding')
    .action(function () { return console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('generate'), 'is not yet ready for usage.'); });
program
    .command('revert')
    .alias('r')
    .description('Revert to initial creation')
    .action(function () { return console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('revert'), 'is not yet ready for usage.'); });
program
    .command('p <command>')
    .alias('ps')
    .description('Git push')
    .action(function (command) { return console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold(command), 'is not yet ready for usage.'); });
program
    .command('add <name> <type> <val>')
    .alias('a')
    .description('Add a new field')
    .action(function (name, type, val) {
    var t;
    switch (type) {
        case "str" || "string":
            t = "string";
            break;
        case "obj" || "object":
            t = "object";
            break;
        case "arr" || "array":
            t = "string";
            break;
        default:
            break;
    }
    // console.log("Added",`\n{\n    "${name}":"${val}",\n} \n as ${t}`)
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('add'), 'is not yet ready for usage.');
});
program.parse(process.argv);
