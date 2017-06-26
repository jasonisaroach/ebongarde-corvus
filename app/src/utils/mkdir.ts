import * as fs from 'fs'
import * as mkdirp from 'mkdirp'
var corvus = require('./core')

function mkdir(folder:string) {
  if (fs.existsSync(folder)) {
    corvus('err', 'Moving on. A folder already exists with the name', folder)
  } else {
    // fs.mkdirSync(folder)
    mkdirp(folder, function (err) {
      if (err) console.error(err)
      else corvus('write', folder)
    });
  }
}

export = mkdir
