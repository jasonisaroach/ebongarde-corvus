import * as inquirer from 'inquirer'
import * as chalk from 'chalk'
import * as _ from 'underscore.string'

export default class Prompter{
  name: any
  options: any

  constructor(options:any) {
    this.name = options.name
  }

  questions() {
    return [
      {
        type: 'input',
        name: 'name',
        message: 'What would you like to call this application?',
        default: this.name,
        validate: function (value: any) {
          return _.isBlank(value) ? 'I need you to give me a name for this new app' : true
        }
      }, {
        type: 'input',
        name: 'author',
        message: 'Who would you like to add as the author?',
        default: 'John Doe',
        validate: function (value: any) {
          return _.isBlank(value) ? 'I need you to give me a name for the author' : true
        }
      }, {
        type: 'input',
        name: 'email',
        message: 'What would you like to add as the author email?',
        default: 'johndoe@gmail.com',
        validate: function (value: any) {
          return _.isBlank(value) ? 'I need you to give me an email for the author' : true
        }
      }, {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username?',
        default: 'JohnDoe',
        validate: function (value: any) {
          return _.isBlank(value) ? 'I need you to give me a name for the author' : true
        }
      }, {
        type: 'input',
        name: 'version',
        message: 'What version would you like to start off on?',
        default: '0.0.0',
        validate: function (value: any) {
          return _.isBlank(value) ? 'I need you to give me a starting version for this new app' : true
        }
      }, {
        type: 'input',
        name: 'description',
        message: 'How should I describe this application?',
        default: 'An intriging application.',
        validate: function (value: any) {
          return _.isBlank(value) ? 'I need you to give me a description for this new app' : true
        }
      }, {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        default: 'MIT',
        choices: [
          'AFL-3.0',
          'AGPL-3.0',
          'Apache-2.0',
          'Artistic-2.0',
          'BSD-2-Clause',
          'BSD-3-Clause',
          'BSD-3-Clause-Clear',
          'BSL-1.0',
          'CC-BY-4.0',
          'CC-BY-SA-4.0',
          'CC0-1.0',
          'ECL-2.0',
          'EPL-1.0',
          'EUPL-1.1',
          'GPL-2.0',
          'GPL-3.0',
          'ISC',
          'LGP2.1',
          'LGPL-3.0',
          'LPPL-1.3C',
          'MIT',
          'MPL-2.0',
          'MS-PL',
          'MS-RL',
          'NCSA',
          'OFL-1.1',
          'OSL-3.0',
          'Unlicense',
          'WTFPL',
          'ZLIB',
        ],
        validate: function (value: any) {
          return _.isBlank(value) ? 'I need you to choose a license for this new app' : true
        }
      }
    ]
  }

  prompt(callback:any) {
    console.log(' ')
    console.log('  Hello, I\'m', chalk.cyan('CORVUS') + '!')
    console.log('  You\'re about to start a new', chalk.cyan('CORVUS'), 'application,')
    console.log('  but first allow me to ask some questions.')
    console.log(' ')
    return inquirer.prompt(this.questions()).then(function (answers) {
      callback(answers)
    })
  }
}

module.exports = Prompter
