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

export default class Creator {
  readonly name: string
  readonly options: any
  /**
   * Builds the function to handle new projects
   * @param name The name of the project
   * @param options The options that define the new application
   */
  constructor(name: string, options?: any) {
    this.name = _.underscored(name)
    this.defaults.name = name.toLowerCase()
    this.options = options
  }
  /**
   * The default settings for a CORVUS application
   */
  defaults = {
    name: 'corvusapp',
    version: '0.1.0',
    description: 'A Corvus application',
    user: 'TheGrimSilence',
    author: 'Adrian Roach',
    license: 'MIT',
    year: (new Date()).getFullYear(),
    corvusVersion: json.version
  }
  /**
   * Generate a new application and prompt the user
   */
  newApp() {
    var self = this
    var Prompter = require('./prompter')
    var prompter = new Prompter({name: this.defaults.name})
    prompter.prompt(function (answers:any) {
      self.defaults.name = _.classify(answers.name)
      self.defaults.version = answers.version
      self.defaults.description = answers.description
      self.defaults.user = answers.user
      self.defaults.author = answers.author
      self.defaults.license = answers.license
      self.setup()
    })
  }
  /**
   * Setup the new application
   */
  setup() {
    this.create()
    this.copy()
    this.link()
    this.install()
  }
  /**
   * Create the app structure
   */
  create() {
    mkdir(this.name)
  }
  /**
   * Copy all files and fill in the data
   */
  copy() {
    this.copyTpl($('package.json'), 'package.json', this.defaults)
  }
  /**
   * Allow CORVUS to link himself to the project
   */
  link() {
    console.log('  Linking', chalk.cyan('myself') + ' to your application')
    childProcess.spawnSync('npm', [ 'link', 'corvus' ], {
      cwd: './' + this.name,
      shell: true
    })
  }
  /**
   * Let CORVUS install the new application's dependencies (if any)
   */
  install() {
    console.log('  Installing', chalk.cyan('packages'))
    childProcess.spawnSync('npm', [ 'install' ], {
      cwd: './' + this.name,
      shell: true,
      stdio: 'inherit'
    })
  }
  /**
   * Allow CORVUS to grab template files and pump in the data he's acquired from the user
   * @param src The file acting as a template
   * @param dest The location of the completed template
   * @param data The data acquired by CORVUS from the user
   */
  copyTpl(src?:any, dest?:any, data?:any) {
    if (typeof data === 'undefined') { data = {} }
    var template = $(__dirname, '../..', 'app', src)
    var destination = $(process.cwd(), this.name, dest)
    var str = fs.readFileSync(template, 'utf8')

    fs.writeFileSync(destination, ejs.render(str, data))
    console.log('  ', chalk.green('create'), dest)
  }
}
module.exports = Creator
