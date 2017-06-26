import * as fs from 'fs'
import * as mkdirp from 'mkdirp'
var corvus = require('./core')

function mkdir(folder:string) {
  if (fs.existsSync(folder)) {
    corvus('warn', 'This folder already exists. Skipping', folder)
  } else {
    mkdirp(folder, function (err) {
      if (err) console.error(err)
      else corvus('write', folder)
    })
  }
}

export = mkdir
