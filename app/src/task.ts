var Create = require("./create");
var Check = require("./check");
var Install = require("./install");
var Generate = require("./generate");
var Revert = require("./revert");
var Add = require("./add");

var task:any = {
  /** Create a new project folder */
  new: (name:string) => {
    new Create(name).newApp()
  },
  /** Check and see if all dependencies are installed */
  check: () => {
    new Check.check()
  },
  /** Install all dependencies */
  install: () => {
    new Install.install()
  },
  /** Generate a project setup */
  generate: (type:string, frameworks: string[]) => {
    new Generate(type, frameworks)
  },

  revert: () => {
    new Revert.revert()
  },

  p: (command:string) => {
  
  },

  add: (type:string) => {
    new Add(type).add()
  },
}

module.exports = task
