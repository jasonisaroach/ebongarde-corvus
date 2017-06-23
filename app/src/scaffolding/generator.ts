import * as path from 'path'
import * as childProcess from 'child_process'
import * as chalk from 'chalk'
import * as ejs from 'ejs'
import * as fs from 'fs'
import * as _ from 'underscore.string'

var json = require('../../package.json')

var $ = path.join

function mkdir() {
  return fs.mkdirSync($.apply(this, arguments))
}

export default class Generator {
  readonly type: string
  readonly frameworks?: string[]

  constructor(type:string, frameworks?: string[]) {
  }
}
module.exports = Generator
