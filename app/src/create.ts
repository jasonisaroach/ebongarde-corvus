import * as path from 'path'
import * as childProcess from 'child_process'
import * as process from 'process'
import * as chalk from 'chalk'
import * as ejs from 'ejs'
import * as fs from 'fs'
import * as _ from 'underscore.string'

var ROOT = require('ebongarde-root')
var corvus = require('./utils/core')
var mkdir = require('./utils/mkdir')

var $ = path.join
var json = require($(ROOT, 'package.json'))

var dateObj = new Date()
var month = dateObj.getUTCMonth() + 1
var day = dateObj.getUTCDate()
var year = dateObj.getUTCFullYear()
var currentDate = year + '.' + month + '.' + day

export default class Create {
  readonly name: string
  readonly options: any
  /**
   * Builds the function to handle new projects
   * @param name The name of the project
   * @param options The options that define the new application
   */
  constructor(name: string, options?: any) {
    this.name = _.slugify(name) && (name).toLowerCase()
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

    today: currentDate,
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
    var Prompt = require('./prompt')
    var prompt = new Prompt({name: this.defaults.name})
    prompt.prompt(function (answers:any) {
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
    var author = _.words(this.defaults.author)
    corvus('info', `You'll have to cd into ${chalk.bold.yellow(this.name)} manually and call me. See you there, ${chalk.bold.green(author[0])}!`, ':)')
  }
  /**
   * Create the app structure
   */
  create() {
    corvus('create', `${this.name}/`)
    mkdir(this.name)
  }
  /**
   * Copy all files and fill in the data
   */
  copy() {
    this.copyTpl('.gitignore', '.gitignore')
    this.copyTpl('package.json', 'package.json', this.defaults)
    this.copyTpl('CHANGELOG.md', 'CHANGELOG.md', this.defaults)
    this.copyTpl($('licenses', this.defaults.license), 'LICENSE', this.defaults)
  }
  /**
   * Allow CORVUS to link himself to the project
   */
  link() {
    corvus('attach', this.defaults.name)
    childProcess.spawnSync('npm', [ 'link', 'corvus' ], {
      cwd: './' + this.name,
      shell: true
    })
  }
  /**
   * Let CORVUS install the new application's dependencies (if any)
   */
  install() {
    corvus('install', 'packages')
    childProcess.spawnSync('npm', [ 'install' ], {
      cwd: './' + this.name,
      shell: true,
      stdio: 'inherit'
    })
    
    var output = fs.readFileSync(`${this.name}/log`, 'utf-8')
    var content = /(--)\s([a-z]*-|_*[a-z])*(@)*([0-9].[0-9].)\w/g.exec(output)
    // content.exec(output)
    // var pkg = []
    // pkg.push(content)
    corvus('info', content)
  }
  /**
   * Allow CORVUS to grab template files and pump in the data he's acquired from the user
   * @param src The file acting as a template
   * @param dest The location of the completed template
   * @param data The data acquired by CORVUS from the user
   */
  copyTpl(src?:any, dest?:any, data?:any) {
    if (typeof data === 'undefined') { data = {} }
    var template = $(ROOT, 'app', 'templates', src)
    var destination = $(process.cwd(), this.name, dest)
    var str = fs.readFileSync(template, 'utf8')

    fs.writeFileSync(destination, ejs.render(str, data))
    corvus('write', dest)
  }
}
module.exports = Create
