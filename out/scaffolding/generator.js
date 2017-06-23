"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var json = require('../../package.json');
var $ = path.join;
function mkdir() {
    return fs.mkdirSync($.apply(this, arguments));
}
var Generator = (function () {
    function Generator(type, frameworks) {
    }
    return Generator;
}());
exports.default = Generator;
module.exports = Generator;
