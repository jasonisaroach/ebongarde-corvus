import * as path from 'path'
import * as childProcess from 'child_process'
import * as process from 'process'
import * as chalk from 'chalk'
import * as ejs from 'ejs'
import * as fs from 'fs'
import * as _ from 'underscore.string'
var ROOT = require('ebongarde-root')

var $ = path.join
var json = require($(ROOT,'package.json'))

var dateObj = new Date()
var month = dateObj.getUTCMonth() + 1
var day = dateObj.getUTCDate()
var year = dateObj.getUTCFullYear()

var currentDate = year + '.' + month + '.' + day

export default class Add {

}
module.exports = Add
