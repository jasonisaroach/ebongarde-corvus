"use strict";
var Creator = require("./creating/creator");
var Checker = require("./checking/checker");
var Installer = require("./installing/installer");
var Generator = require("./scaffolding/generator");
var Reverter = require("./reverting/reverter");
var Adder = require("./adding/adder");
var tasker = {
    /** Create a new project folder */
    new: function (name) {
        new Creator(name).newApp();
    },
    /** Check and see if all dependencies are installed */
    check: function () {
        new Checker.check();
    },
    /** Install all dependencies */
    install: function () {
        new Installer.install();
    },
    /** Generate a project setup */
    generate: function (type, frameworks) {
        new Generator(type, frameworks).generate();
    },
    revert: function () {
        new Reverter.revert();
    },
    p: function (command) {
    },
    add: function (name, type, val) {
        new Adder(name, type, val).add();
    },
};
module.exports = tasker;
