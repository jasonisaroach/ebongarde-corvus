import * as path from 'path'
import * as childProcess from 'child_process'
import * as chalk from 'chalk'
import * as ejs from 'ejs'
import * as fs from 'fs'
import * as _ from 'underscore.string'
import * as Core from './core'

var $ = path.join
var ROOT = require('ebongarde-root')
var json = require($(ROOT, 'package.json'))

var $ = path.join

function mkdir() {
  return fs.mkdirSync($.apply(this, arguments))
}

export default class Generator {
  readonly type: string
  readonly frameworks?: string[]

  constructor(type:string, frameworks?: string[]) {
    if (type == "electron") {
      console.log(chalk.bold.cyan('CORVUS'), chalk.bold.yellow('INFO'), chalk.bold.magenta(type), 'selected')
      this.electron(frameworks)
    } else if (type == "website") {
      console.log(chalk.bold.cyan('CORVUS'), chalk.bold.yellow('INFO'), chalk.bold.magenta(type), 'selected')
      this.website(frameworks)
    } else if (type == "ionic") {
      // console.log(chalk.bold.cyan('CORVUS'), chalk.bold.yellow('INFO'), chalk.bold.magenta(type), 'selected')
      console.error(chalk.bold.cyan('CORVUS'), chalk.bold.red('ERR!'), chalk.bold.magenta(type), 'is currently under development!')
      // this.ionic(frameworks)
    } else {
      console.error(chalk.bold.cyan('CORVUS'), chalk.bold.red('ERR!'), chalk.bold.magenta(`"${type}"`), 'is not yet supported!')
    }
  }

  electron(frameworks: string[]) {
    // frameworks are to be imported as dependencies in package.json
  }

  website(frameworks: string[]) {
    // frameworks are to be imported as <link> tags

    // create json file taht will tell ejs exactly what kinds of tags to add.

    // <% frameworks.forEach(framework => { %>
    //   <%= framework %>
    // <% }); %>
  }

  ionic(frameworks: string[]) {

  }
}
module.exports = Generator


