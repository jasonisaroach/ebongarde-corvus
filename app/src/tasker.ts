var Creator = require("./creating/creator");

var tasker:any = {
  new: function (name:string) {
    new Creator(name).newApp()
  }
}

module.exports = tasker
