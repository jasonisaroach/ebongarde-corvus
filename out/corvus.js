'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var program = require('commander');
var task = require('./task');
var json = require('../package.json');
var corvus = require('./core');
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
    corvus('err', 'I do not yet support the command', 'check|c');
});
program
    .command('install')
    .alias('i')
    .description('Install dependencies.')
    .action(function () {
    task.install();
    corvus('err', 'I do not yet support the command', 'install|i');
});
program
    .command('generate <type> [frameworks...]')
    .alias('g')
    .description('Scaffolding')
    .action(function (type, frameworks) {
    task.generate(type, frameworks);
});
program
    .command('revert')
    .alias('r')
    .description('Revert to initial creation')
    .action(function () {
    task.revert();
    corvus('err', 'I do not yet support the command', 'revert|r');
});
program
    .command('p <command>')
    .description('Git push')
    .action(function (command) {
    corvus('err', 'I do not yet support the git command', command);
});
program
    .command('add <type>')
    .alias('a')
    .description('Add a new field')
    .action(function (type) {
    task.add(type);
    corvus('err', 'I do not yet support the command', 'add|a');
});
program.parse(process.argv);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
