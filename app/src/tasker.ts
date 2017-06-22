var Creator = require("./creating/creator");
var Checker = require("./checking/checker");
var Installer = require("./installing/installer");
var Generator = require("./scaffolding/generator");
var Reverter = require("./reverting/reverter");
var Adder = require("./adding/adder");

var tasker:any = {
  /** Create a new project folder */
  new: (name:string) => {
    new Creator(name).newApp()
  },
  /** Check and see if all dependencies are installed */
  check: () => {
    new Checker.check()
  },
  /** Install all dependencies */
  install: () => {
    new Installer.install()
  },
  /** Generate a project setup */
  generate: (type:string, frameworks: string[]) => {
    new Generator(type, frameworks).generate()
  },

  revert: () => {
    new Reverter.revert()
  },

  p: (command:string) => {
  
  },

  add: (name:string, type:string, val:string) => {
    new Adder(name, type, val).add()
  },
}

module.exports = tasker
