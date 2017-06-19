"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var chalk = require("chalk");
var _ = require("underscore.string");
var Prompter = (function () {
    function Prompter(options) {
        this.name = options.name;
    }
    Prompter.prototype.questions = function () {
        return [
            {
                type: 'input',
                name: 'name',
                message: 'What would you like to call this application?',
                default: this.name,
                validate: function (value) {
                    return _.isBlank(value) ? 'I need you to give me a name for this new app' : true;
                }
            }, {
                type: 'input',
                name: 'author',
                message: 'Who would you like to add as the author?',
                default: 'John Doe <johndoe@gmail.com>',
                validate: function (value) {
                    return _.isBlank(value) ? 'I need you to give me a name for the author' : true;
                }
            }, {
                type: 'input',
                name: 'user',
                message: 'What is your GitHub username?',
                default: 'JohnDoe',
                validate: function (value) {
                    return _.isBlank(value) ? 'I need you to give me a name for the author' : true;
                }
            }, {
                type: 'input',
                name: 'version',
                message: 'What version would you like to start off on?',
                default: '0.0.0',
                validate: function (value) {
                    return _.isBlank(value) ? 'I need you to give me a starting version for this new app' : true;
                }
            }, {
                type: 'input',
                name: 'description',
                message: 'How should I describe this application?',
                default: 'An intriging application.',
                validate: function (value) {
                    return _.isBlank(value) ? 'I need you to give me a description for this new app' : true;
                }
            }, {
                type: 'list',
                name: 'license',
                message: 'What license would you like to use?',
                default: 'MIT',
                choices: [
                    'MIT',
                    'ISC'
                ],
                validate: function (value) {
                    return _.isBlank(value) ? 'I need you to choose a license for this new app' : true;
                }
            }
        ];
    };
    Prompter.prototype.prompt = function (callback) {
        console.log(' ');
        console.log('  Hello, I\'m', chalk.cyan('CORVUS'), '!');
        console.log('  You\'re about to start a new', chalk.cyan('CORVUS'), 'application,');
        console.log('  but first allow me to ask some questions.');
        console.log(' ');
        return inquirer.prompt(this.questions()).then(function (answers) {
            callback(answers);
        });
    };
    return Prompter;
}());
exports.default = Prompter;
module.exports = Prompter;
