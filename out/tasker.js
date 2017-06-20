"use strict";
var Creator = require("./creating/creator");
var tasker = {
    new: function (name) {
        new Creator(name).newApp();
    }
};
module.exports = tasker;
