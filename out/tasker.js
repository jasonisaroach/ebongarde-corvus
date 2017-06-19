"use strict";
var Generator = require("./scaffolding/generator");
var tasker = {
    new: function (name) {
        new Generator(name).generate();
    }
};
module.exports = tasker;
