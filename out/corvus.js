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
    .action(function () {
    tasker.check();
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('check'), 'is not yet ready for usage.');
});
program
    .command('install')
    .alias('i')
    .description('Install dependencies.')
    .action(function () {
    tasker.install();
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('install'), 'is not yet ready for usage.');
});
program
    .command('generate <type> [frameworks...]')
    .alias('g')
    .description('Scaffolding')
    .action(function (type, frameworks) {
    tasker.generate(type, frameworks);
    if (frameworks) {
        frameworks.forEach(function (framework) {
            console.log(framework);
        });
    }
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('generate'), 'is not yet ready for usage.');
});
program
    .command('revert')
    .alias('r')
    .description('Revert to initial creation')
    .action(function () {
    tasker.revert();
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold('revert'), 'is not yet ready for usage.');
});
program
    .command('p <command>')
    .description('Git push')
    .action(function (command) {
    console.log(chalk.cyan.bold('CORVUS'), chalk.red.bold('ERR!'), chalk.magenta.bold(command), 'is not yet ready for usage.');
});
program
    .command('add <name> <type> <val>')
    .alias('a')
    .description('Add a new field')
    .action(function (name, type, val) {
    tasker.add(name, type, val);
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
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
