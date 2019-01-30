// import { linkDependencies } from 'jasmine-puppeteer-results'
// const thisProject = './node_modules'
// linkDependencies(puppeteerTargetFolder, thisProject)


// import { join } from "path";
// import { launch } from 'puppeteer';
// import { loadScriptBrowser } from "../src/script";
// import { staticServer } from "./staticServer";
// import { readFileSync, writeFileSync } from 'fs';
import {  extractAll } from '.';

// async function test() {
  
//   // const server = await staticServer(join(__dirname, 'fixtures', 'static1'), 9999)
//   const browser = await launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
//   const page = await browser.newPage();
//   await page.goto('http://127.0.0.1:8080/script/record/account.html')
//   const fnString = readFileSync('src/metadataFromRecordBrowser.js').toString()
//   // const code = `${fnString}; return document.body.innerHTML.length `
//   // const fn = eval(`(${fnString})`)// as any as ((...args: any[])=> string)
//   console.log(await page.evaluate(fnString))
//   await browser.close();
// }

// // test()


const puppeteerTargetFolder = '/home/sg/git/suitecommerce-types/jasmine-puppeteer-results/node_modules'
async function test2(){
  // const tool = new Tool()
  await extractAll({puppeteerTargetFolder, inputFolder: '', startUrl: 'http://127.0.0.1:8080/script/record/account.html', outputFolder: 'extracted'})
  // await tool.installPuppeteer()
  // const data = await tool.extractPage()
  // console.log(data);
  // await tool.visitAllPageRecords(data=>{})
  // await tool.visitAllPages(async data=> {
  //   writeFileSync('extracted/'+data.id+'.json', JSON.stringify(data, null, 2))
  // })
  // await tool.destroy()
}
test2()