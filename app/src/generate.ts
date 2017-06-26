import * as path from 'path'
import * as childProcess from 'child_process'
import * as process from 'process'
import * as chalk from 'chalk'
import * as ejs from 'ejs'
import * as fs from 'fs'
import * as _ from 'underscore.string'
import * as $ from 'jquery'
import * as util from 'util'
var ROOT = require('ebongarde-root')
var corvus = require('./utils/core')
var mkdir = require('./utils/mkdir')
// const setImmediatePromise = util.promisify(setImmediate)
var dateObj = new Date()
var month = dateObj.getUTCMonth() + 1
var day = dateObj.getUTCDate()
var year = dateObj.getUTCFullYear()
var currentDate = year + '.' + month + '.' + day

var $_ = path.join
var json = require($_(ROOT, 'package.json'))

export default class Generator {
  readonly type: string
  readonly frameworks: string[]

  defaults = {
    /** 
     * The name of the new application
     */
    name: json.name,
    /**
     * The given author name of the new application
     */
    author: json.author,
    /**
     * The GitHub account given by the user
     */
    user: json.user,
    /**
     * The starting version given by the user
     */
    version: json.version,
    /**
     * The descritpion for the new application
     */
    description: json.description,
    /**
     * The license chosen by user for the new application
     */
    license: json.license,
    /**
     * The current year, used for license creation
     */
    year: (new Date()).getFullYear(),

    today: currentDate
  }

  constructor(type:string, frameworks: string[]) {
    this.type = type
    if (type == "electron") {
      corvus('info', 'Give me a moment to setup', type)

      this.electron(frameworks)

    } else if (type == "website") {
      corvus('info', 'Give me a moment to setup', type)
      
      this.website(frameworks)

    } else if (type == "ionic") {
      corvus('info', 'is currently under development', type)
      // corvus('info', 'Give me a moment to setup', type)
      // this.ionic(frameworks)
    } else {
      corvus('err', 'I do not currently support', type)
    }
  }

  electron(frameworks: string[]) {
    // frameworks are to be imported as dependencies in package.json
    var self = this
    // var stringToTest = '0.0.0'
    // var regex = /[0-9]*.[0-9]*.[0-9]*/g
    // if (stringToTest != regex) {

    // }
    setImmediate(function create() {
      // Tell the user what operation is being fired
      corvus('info', 'Creating directories')
      mkdir('.github')
      mkdir('.vscode')
      mkdir($_('app', 'src', 'crash', 'styles'))
      mkdir($_('app', 'src', 'lib'))
      mkdir($_('app', 'src', 'main-process', 'menu'))
      mkdir($_('app', 'src', 'models'))
      mkdir($_('app', 'src', 'shared-process'))
      mkdir($_('app', 'src', 'ui'))
      mkdir($_('app', 'static', 'common'))
      mkdir($_('app', 'static', 'logos'))
      mkdir($_('app', 'styles', 'mixins'))
      mkdir($_('app', 'styles', 'ui'))
      mkdir($_('app', 'test'))
      mkdir($_('docs', 'contributing'))
      mkdir($_('docs', 'process'))
      mkdir($_('docs', 'technical'))
      mkdir('script')
      mkdir('tslint-rules')
    })

    setTimeout(function write() {
      // Tell the user what operation is being fired
      corvus('info', 'Writing files')
      self.copyTpl($_('.github', 'ISSUE_TEMPLATE.md'), $_('.github', 'ISSUE_TEMPLATE.md'), self.defaults)
      self.copyTpl($_('.vscode', 'extensions.json'), $_('.vscode', 'extensions.json'))
      self.copyTpl($_('.vscode', 'settings.json'), $_('.vscode', 'settings.json'))
      self.copyTpl($_('app', 'src', 'crash', 'styles', 'crash.scss'), $_('app', 'src', 'crash', 'styles', 'crash.scss'))
      self.copyTpl($_('app', 'src', 'crash', 'index.tsx'), $_('app', 'src', 'crash', 'index.tsx'))
      self.copyTpl($_('app', 'src', 'main-process', 'menu', 'index.ts'), $_('app', 'src', 'main-process', 'menu', 'index.ts'))
      self.copyTpl($_('app', 'src', 'main-process', 'main.ts'), $_('app', 'src', 'main-process', 'main.ts'))
      self.copyTpl($_('app', 'src', 'shared-process', 'index.ts'), $_('app', 'src', 'shared-process', 'index.ts'))
      self.copyTpl($_('app', 'src', 'ui', 'index.tsx'), $_('app', 'src', 'ui', 'index.tsx'))
      self.copyTpl($_('app', 'static', 'error.html'), $_('app', 'static', 'error.html'), self.defaults)
      self.copyTpl($_('app', 'static', 'index.html'), $_('app', 'static', 'index.html'), self.defaults)
      self.copyTpl($_('app', 'styles', 'ui', '_app_menu_bar.scss'), $_('app', 'styles', 'ui', '_app_menu_bar.scss'))
      self.copyTpl($_('app', 'styles', 'ui', '_focus.scss'), $_('app', 'styles', 'ui', '_focus.scss'))
      self.copyTpl($_('app', 'styles', 'ui', '_title-bar.scss'), $_('app', 'styles', 'ui', '_title-bar.scss'))
      self.copyTpl($_('app', 'styles', '_globals.scss'), $_('app', 'styles', '_globals.scss'))
      self.copyTpl($_('app', 'styles', '_mixins.scss'), $_('app', 'styles', '_mixins.scss'))
      self.copyTpl($_('app', 'styles', '_type.scss'), $_('app', 'styles', '_type.scss'))
      self.copyTpl($_('app', 'styles', '_ui.scss'), $_('app', 'styles', '_ui.scss'))
      self.copyTpl($_('app', 'styles', '_variables.scss'), $_('app', 'styles', '_variables.scss'))
      self.copyTpl($_('app', 'styles', '_vendor.scss'), $_('app', 'styles', '_vendor.scss'))
      self.copyTpl($_('app', 'styles', '{appname}.scss'), $_('app', 'styles', json.name + ".scss"))
      self.copyTpl($_('app', 'package.json'), $_('app', 'package.json'))
      self.copyTpl($_('app', 'webpack.common.js'), $_('app', 'webpack.common.js'))
      self.copyTpl($_('app', 'webpack.development.js'), $_('app', 'webpack.development.js'))
      self.copyTpl($_('app', 'webpack.production.js'), $_('app', 'webpack.production.js'))
      self.copyTpl($_('docs', 'contributing', 'setup.md'), $_('docs', 'contributing', 'setup.md'))
      self.copyTpl($_('docs', 'contributing', 'styleguide.md'), $_('docs', 'contributing', 'styleguide.md'))
      self.copyTpl($_('docs', 'contributing', 'tooling.md'), $_('docs', 'contributing', 'tooling.md'))
      self.copyTpl($_('docs', 'contributing', 'troubleshooting.md'), $_('docs', 'contributing', 'troubleshooting.md'))
      self.copyTpl($_('docs', 'process', 'issue-triage.md'), $_('docs', 'contributing', 'issue-triage.md'))
      self.copyTpl($_('docs', 'process', 'releasing-updates.md'), $_('docs', 'contributing', 'releasing-updates.md'))
      self.copyTpl($_('docs', 'process', 'reviews.md'), $_('docs', 'contributing', 'reviews.md'))
      self.copyTpl($_('docs', 'process', 'roadmap.md'), $_('docs', 'contributing', 'roadmap.md'))
      self.copyTpl($_('docs', 'installation.md'), $_('docs', 'installation.md'))
      self.copyTpl($_('docs', 'README.md'), $_('docs', 'README.md'))
      self.copyTpl($_('script', 'build'), $_('script', 'build'))
      self.copyTpl($_('script', 'debug'), $_('script', 'debug'))
      self.copyTpl($_('script', 'dist-info.js'), $_('script', 'dist-info.js'))
      self.copyTpl($_('script', 'package'), $_('script', 'package'))
      self.copyTpl($_('script', 'publish'), $_('script', 'publish'))
      self.copyTpl($_('script', 'run.js'), $_('script', 'run.js'))
      self.copyTpl($_('script', 'start'), $_('script', 'start'))
      self.copyTpl($_('.gitmodules'), $_('.gitmodules'))
      self.copyTpl($_('.travis.yml'), $_('.travis.yml'))
      self.copyTpl($_('appveyor.yml'), $_('appveyor.yml'))
    }, 2000)
    setImmediate(() => {
      corvus('install', 'packages')
      frameworks.forEach(framework => {
        corvus('framework', framework)
        childProcess.spawnSync('npm', [ 'install', '--save', framework ], {
          shell: true,
          stdio: 'inherit'
        })
      })
    })
  }

  website(frameworks: string[]) {
    // frameworks are to be imported as <link> tags
    var self = this
    // create json file that will tell ejs exactly what kinds of tags to add.
    
    corvus('info', 'Creating directories')

    function create() {
      mkdir('img')
      mkdir($_('scripts', 'vendor'))
      mkdir($_('styles'))
    }

    corvus('info', 'Writing files')

    setTimeout(function write() {
      self.copyTpl($_('img', 'apple-touch-icon.png'), $_('img', 'apple-touch-icon.png'))
      self.copyTpl($_('styles', '{appname}.scss'), $_('styles', `${name}.scss`))
    }, 1000)
    // <% frameworks.forEach(framework => { %>
    //   <%= framework %>
    // <% }) %>
  }

  ionic(frameworks: string[]) {

  }

  /**
   * Allow CORVUS to grab template files and pump in the data he's acquired from the user
   * @param src The file acting as a template
   * @param dest The location of the completed template
   * @param data The data acquired by CORVUS from the user
   */
  copyTpl(src?:any, dest?:any, data?:any) {
    if (typeof data === 'undefined') { data = {} }
    var template = $_(ROOT, 'app', 'templates', this.type, src)
    var destination = $_(process.cwd(), dest)
    var str = fs.readFileSync(template, 'utf8')
    fs.writeFileSync(destination, ejs.render(str, data))
    corvus('write', dest)
  }
}
module.exports = Generator


