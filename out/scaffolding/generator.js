"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var childProcess = require("child_process");
var chalk = require("chalk");
var ejs = require("ejs");
var fs = require("fs");
var _ = require("underscore.string");
var json = require('../../package.json');
var $ = path.join;
function mkdir() {
    return fs.mkdirSync($.apply(this, arguments));
}
var Generator = (function () {
    function Generator(name, options) {
        this.defaults = {
            name: 'corvusapp',
            version: '0.1.0',
            description: 'A Corvus application',
            user: 'TheGrimSilence',
            author: 'Adrian Roach',
            license: 'MIT',
            year: (new Date()).getFullYear(),
            corvusVersion: json.version
        };
        this.name = _.underscored(name);
        this.defaults.name = _.classify(name);
        this.options = options;
    }
    /**
     * Generate a new application and prompt the user
     */
    Generator.prototype.generate = function () {
        var self = this;
        var Prompter = require('./prompter');
        var prompter = new Prompter({ name: this.defaults.name });
        prompter.prompt(function (answers) {
            self.defaults.name = _.classify(answers.name);
            self.defaults.version = answers.version;
            self.defaults.description = answers.description;
            self.defaults.user = answers.user;
            self.defaults.author = answers.author;
            self.defaults.license = answers.license;
            self.setup();
        });
    };
    /**
     * Setup the new application
     */
    Generator.prototype.setup = function () {
        this.create();
        this.copy();
        this.link();
        this.install();
    };
    /**
     * Create the app structure
     */
    Generator.prototype.create = function () {
        mkdir(this.name);
        // mkdir(this.name, 'app')
    };
    /**
     * Copy all files and fill in the data
     */
    Generator.prototype.copy = function () {
        this.copyTpl($('package.json'), 'package.json', this.defaults);
    };
    /**
     * Allow CORVUS to link himself to the project
     */
    Generator.prototype.link = function () {
        console.log('  Linking', chalk.cyan('myself') + ' to your application');
        childProcess.spawnSync('npm', ['link', 'bozon'], {
            cwd: './' + this.name,
            shell: true
        });
    };
    /**
     * Let CORVUS install the new application's dependencies (if any)
     */
    Generator.prototype.install = function () {
        console.log('  Installing', chalk.cyan('packages'));
        childProcess.spawnSync('npm', ['install'], {
            cwd: './' + this.name,
            shell: true,
            stdio: 'inherit'
        });
    };
    /**
     * Allow CORVUS to grab template files and pump in the data he's acquired from the user
     * @param src The file acting as a template
     * @param dest The location of the completed template
     * @param data The data acquired by CORVUS from the user
     */
    Generator.prototype.copyTpl = function (src, dest, data) {
        if (typeof data === 'undefined') {
            data = {};
        }
        var template = $(__dirname, '../..', 'app', src);
        var destination = $(process.cwd(), this.name, dest);
        var str = fs.readFileSync(template, 'utf8');
        fs.writeFileSync(destination, ejs.render(str, data));
        console.log('  ', chalk.green('create'), dest);
    };
    return Generator;
}());
exports.default = Generator;
module.exports = Generator;
