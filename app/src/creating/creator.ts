import * as path from 'path'
import * as childProcess from 'child_process'
import * as process from 'process'
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
    /**
     * The name of the new application
     */
    name: 'corvusapp',
    /**
     * The given author name of the new application
     */
    author: 'Adrian Roach',
    /**
     * The given author email of the new application
     */
    email: 'adrianroach@ebongarde.com',
    /**
     * The GitHub account given by the user
     */
    user: 'TheGrimSilence',
    /**
     * The starting version given by the user
     */
    version: '0.1.0',
    /**
     * The descritpion for the new application
     */
    description: 'A Corvus application',
    /**
     * The license chosen by user for the new application
     */
    license: 'MIT',
    /**
     * The current year, used for license creation
     */
    year: (new Date()).getFullYear(),
    /**
     * The current CORVUS operating version
     */
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
      self.defaults.name = answers.name.toLowerCase()
      self.defaults.author = answers.author
      self.defaults.email = answers.email
      self.defaults.user = answers.user
      self.defaults.version = answers.version
      self.defaults.description = answers.description
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
    console.log('\n' + chalk.cyan.bold('  CORVUS'), chalk.yellow.bold('INFO'), 'You\'ll have to',chalk.green.bold('cd'),`into your application manually and then call me from there. See you there, ${this.defaults.author}!`,chalk.magenta.bold(':)'))
  }
  /**
   * Create the app structure
   */
  create() {
    console.log(' ', chalk.cyan.bold('CORVUS'), chalk.green.bold('CREATE'), `${this.name}/`)
    mkdir(this.name)
    // fs.mkdirSync($.apply(this.name))
  }
  /**
   * Copy all files and fill in the data
   */
  copy() {
    this.copyTpl($('package.json'), 'package.json', this.defaults)
    this.copyTpl($('licenses', this.defaults.license), 'LICENSE', this.defaults)
  }
  /**
   * Allow CORVUS to link himself to the project
   */
  link() {
    console.log(' ', chalk.cyan.bold('CORVUS'), chalk.green.bold('ATTACH'), this.defaults.name)
    childProcess.spawnSync('npm', [ 'link', 'corvus' ], {
      cwd: './' + this.name,
      shell: true
    })
  }
  /**
   * Let CORVUS install the new application's dependencies (if any)
   */
  install() {
    console.log(' ', chalk.cyan.bold('CORVUS'), chalk.green.bold('INSTALL'), 'packages')
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
    console.log(' ', chalk.cyan.bold('CORVUS'), chalk.green.bold('WRITE'), dest)
  }
}
module.exports = Creator
