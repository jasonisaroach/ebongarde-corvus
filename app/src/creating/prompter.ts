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
        default: 'John Doe <johndoe@gmail.com>',
        validate: function (value: any) {
          return _.isBlank(value) ? 'I need you to give me a name for the author' : true
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
          'MIT',
          'ISC'
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
