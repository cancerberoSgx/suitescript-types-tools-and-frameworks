
import { ls, pwd } from 'shelljs';
const Jasmine = require('jasmine')
// let specFiles = ls('-R', './src/spec').map(f => `${__dirname}/../src/spec/${f}`).filter(f => f.indexOf('Spec.ts')!==-1)
// console.log(pwd());

const specFiles = ['./spec/specSpec.ts']
const jasmineRunner = new Jasmine()
jasmineRunner.specFiles = specFiles
jasmineRunner.execute()