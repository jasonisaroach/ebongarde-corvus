'use strict';
var program = require('commander');
var tasker = require('./tasker');
var json = require('../package.json');
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
    console.log('working');
});
program
    .command('install')
    .alias('i')
    .description('Install dependencies.')
    .action(function () {
    // TODO
});
program
    .command('generate <type> [attribute]')
    .alias('g')
    .description('Scaffolding')
    .action(function () {
    // TODO
});
program
    .command('revert')
    .alias('r')
    .description('Revert to initial creation')
    .action(function () {
    // TODO
});
program
    .command('<command>')
    .description('Git functionality')
    .action(function () {
    // TODO
});
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
    console.log("Added", "\n{\n    \"" + name + "\":\"" + val + "\",\n} \n as " + t);
});
program.parse(process.argv);
