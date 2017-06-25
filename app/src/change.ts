import * as inquirer from 'inquirer'
import * as chalk from 'chalk'
import * as _ from 'underscore.string'

export default class Prompter {
  type: string

  constructor(type: string) {
  }

  questions() {
    return [
      {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        default: 'change',
        choices: [
          'change',
          'dependency',
          'devDependency',
          'pair'
        ],
        validate: function (value: any) {
          return _.isBlank(value) ? 'I need you to choose a license for this new app' : true
        }
      }, {
        type: 'input',
        name: 'description',
        message: 'How should I describe this application?',
        default: 'An intriging application.',
        validate: function (value: any) {
          return _.isBlank(value) ? 'I need you to give me a description for this new app' : true
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
