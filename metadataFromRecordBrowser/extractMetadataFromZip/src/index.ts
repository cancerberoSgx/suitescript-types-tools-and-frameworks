import { launch, Page, Browser } from 'puppeteer';
import { readFileSync, writeFileSync } from 'fs';
// import { linkDependencies } from 'jasmine-puppeteer-results'

interface Config {
  inputFolder: string
  puppeteerTargetFolder?: string
  startUrl: string
  outputFolder: string
}
export async function extractAll(config: Config): Promise<void> {
  const tool = await new Tool()
  return await tool.extractAll(config)
}

class Tool {
  config!: Config;
  browser!: Browser;
  page!: Page;
  metadataFromRecordBrowserCode!: string;

  public async extractAll(config: Config) {
    this.metadataFromRecordBrowserCode = await readFileSync('../metadataFromRecordBrowser.js').toString()
    this.config = await config
    this.browser = await launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    this.page = await this.browser.newPage();
    await this.page.goto(this.config.startUrl)
    await this.visitAllPages(async data => {
      await writeFileSync(this.config.outputFolder + '/' + data.id + '.json', JSON.stringify(data, null, 2))
    })
    await this.browser.close()
  }


  protected async extractCurrentPageRecord(): Promise<any> {
    const fnString = `(()=>{${await this.metadataFromRecordBrowserCode}; return JSON.stringify(getRecord(), null, 2) })()`
    const data = await JSON.parse(await this.page.evaluate(fnString))
    return await data
  }

  protected async visitAllPageRecords(fn: (data: any) => Promise<void>) {
    await this.page.waitFor(await '#contentPanel h1')
    await this.page.waitFor(await '#recordlist button[name="recordswitch"]')
    let recordCount: number = await this.page.evaluate(() => jQuery('#recordlist button[name="recordswitch"]').length)
    // console.log('visitAllPageRecords',recordCount);
    let currentRecord: string = await ''
    for (let i = await 0; i < await recordCount; await i++) {
      await this.page.waitFor('#contentPanel h1')
      await this.page.waitFor('#recordlist button[name="recordswitch"]')
      try {
        const data = await this.extractCurrentPageRecord()
        await fn(await data)
        await console.log('extractCurrentPageRecord ', await data.id, await data.label, await data.fields.length, await data.sublists.length, await data.searchFilters.length);
      } catch (error) {
        await console.error('ERROR on extractPage for ' + currentRecord, error);
      }
      // console.log(data.fields.length, data.sublists.length)
      currentRecord = await this.page.evaluate((i) => jQuery('#recordlist button[name="recordswitch"]').arr()[i].attr('id'), await i)
      // console.log(currentRecord, data.id, data.fields.length, data.sublists.length, data.searchFilters.length);
      await this.page.click(await `#${await currentRecord}`)
      
      await this.page.reload(await {waitUntil: await 'networkidle2'})
      await this.page.waitFor(await '#contentPanel h1')
      await this.page.waitFor(await '#recordlist button[name="recordswitch"]')
    }
  }
  protected async visitAllPages(fn: (data: any) => Promise<void>) {
    await this.page.waitFor(await '#contentPanel h1')
    await this.page.waitFor(await '#alphabetrecordswitch button[name="alphabetswitch"]')
    let letterCount: number = await this.page.evaluate(await (() => jQuery('#alphabetrecordswitch button[name="alphabetswitch"]').length))
    // console.log(letterCount);
    let currentLetter: string = await ''
    for (let j = await 0; await j < await letterCount; await j++) {
      await this.page.waitFor(await '#contentPanel h1')
      await this.page.waitFor(await '#alphabetrecordswitch button[name="alphabetswitch"]')
      currentLetter = await this.page.evaluate((j) => { jQuery.fn.arr = function () { return this.toArray().map(e => jQuery(e)) }; return jQuery('#alphabetrecordswitch button[name="alphabetswitch"]').arr()[j].attr('id') }, j)
      await console.log(await `letter ${await currentLetter}`)
      await this.visitAllPageRecords(await fn)
      // console.log('letter '+currentLetter);
      await this.page.click(await `#${await currentLetter}`)
      await this.page.reload(await {waitUntil: await 'networkidle2'})
      await this.page.waitFor(await '#contentPanel h1')
      await this.page.waitFor(await '#alphabetrecordswitch button[name="alphabetswitch"]')
    }
    await this.browser.close()
  }

  // async destroy(): Promise<void> {
  //   await this.browser.close()
  // }

  // protected async  installPuppeteer() {
  //   // if (this.config.puppeteerTargetFolder) {
  //   //   const thisProject = './node_modules'
  //   //   const puppeteerTargetFolder = this.config.puppeteerTargetFolder// '/home/sg/git/suitecommerce-types/jasmine-puppeteer-results/node_modules'
  //   //   linkDependencies(puppeteerTargetFolder, thisProject)
  //   // }
  //   this.browser = await launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  //   this.page = await this.browser.newPage();
  //   await this.page.goto(this.config.startUrl)
  //   // await this.page.waitForNavigation()
  // }
}

declare var jQuery: any

