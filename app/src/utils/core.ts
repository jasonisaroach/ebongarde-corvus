import * as chalk from 'chalk'
/**
 * We decided to make everyone's life easier and export corvus as an independent function for talking to the user.
 * @param type This tells the user what the situation is. Can be: 'info', 'update', 'err'
 * @param info This tells the user why CORVUS has reached them
 * @param mod This tells the user what caused CORVUS to reach them if present. Must be declared at the end of a sentence.
 */

function corvus(type:string, info:string, mod?:string) {
  if (mod == undefined) {mod = ''}
  switch(type) {
    case "info":
      console.log(' ', chalk.bold.cyan('CORVUS'), chalk.bold.blue(type.toUpperCase()), info, chalk.bold.magenta(mod))
      break
    case "update":
      console.log(' ', chalk.bold.cyan('CORVUS'), chalk.bold.magenta(type.toUpperCase()), info, chalk.bold.magenta(mod))
      break
    case "err":
      console.log(' ', chalk.bold.cyan('CORVUS'), chalk.bold.red(type.toUpperCase()+'!'), info, chalk.bold.magenta(mod))
      break
    case "warn":
      console.log(' ', chalk.bold.cyan('CORVUS'), chalk.bold.dim.yellow(type.toUpperCase()+'!'), info, chalk.bold.magenta(mod))
      break
    default:
      console.log(' ', chalk.bold.cyan('CORVUS'), chalk.bold.green(type.toUpperCase()), info, chalk.bold.magenta(mod))
      break
  }
}

export = corvus
