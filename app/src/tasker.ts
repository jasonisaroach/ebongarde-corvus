var Generator = require("./scaffolding/generator");

var tasker:any = {
  new: function (name:string) {
    new Generator(name).generate()
  }
}

module.exports = tasker
