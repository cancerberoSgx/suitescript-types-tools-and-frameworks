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
  const tool = new Tool()
  return await tool.extractAll(config)
}

class Tool {
  config!: Config;
  browser!: Browser;
  page!: Page;

  public async extractAll(config: Config) {
    this.config = config
    this.browser = await launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    this.page = await this.browser.newPage();
    await this.page.goto(this.config.startUrl)
    await this.visitAllPages(async data => {
      writeFileSync(this.config.outputFolder + '/' + data.id + '.json', JSON.stringify(data, null, 2))
    })
    await this.browser.close()
  }

  protected async extractCurrentPageRecord(): Promise<any> {
    const fnString = `(()=>{${readFileSync('../metadataFromRecordBrowser.js').toString()}; return JSON.stringify(getRecord(), null, 2) })()`
    const data = JSON.parse(await this.page.evaluate(fnString))
    return data
  }

  protected async visitAllPageRecords(fn: (data: any) => Promise<void>) {
    await this.page.waitFor('#contentPanel h1')
    await this.page.waitFor('#recordlist button[name="recordswitch"]')
    let recordCount: number = await this.page.evaluate(() => jQuery('#recordlist button[name="recordswitch"]').length) +1
    // console.log('visitAllPageRecords',recordCount);
    let currentRecord: string = ''
    for (let visitAllPageRecordIndex = 0; visitAllPageRecordIndex < recordCount; visitAllPageRecordIndex++) {
      await this.page.waitFor('#contentPanel h1')
      await this.page.waitFor('#recordlist button[name="recordswitch"]')
      try {
        const data = await this.extractCurrentPageRecord()
        await fn(data)
        console.log('extractCurrentPageRecord ', visitAllPageRecordIndex, data.id, data.label, data.fields.length, data.sublists.length, data.searchFilters.length);
      } catch (error) {
        console.error('ERROR on extractPage for ' + currentRecord, error);
      }
      // console.log(data.fields.length, data.sublists.length)
      currentRecord = await this.page.evaluate((visitAllPageRecordIndex_) => jQuery('#recordlist button[name="recordswitch"]').arr()[visitAllPageRecordIndex_].attr('id'), visitAllPageRecordIndex)
      // console.log(currentRecord, data.id, data.fields.length, data.sublists.length, data.searchFilters.length);
      await this.page.click(`#${currentRecord}`)
      // await this.page.reload({waitUntil: 'networkidle0'})
      await this.page.waitFor('#contentPanel h1')
      await this.page.waitFor('#recordlist button[name="recordswitch"]')
    }
  }
  protected async visitAllPages(fn: (data: any) => Promise<void>) {
    await this.page.waitFor('#contentPanel h1')
    await this.page.waitFor('#alphabetrecordswitch button[name="alphabetswitch"]')
    let letterCount: number = await this.page.evaluate(() => jQuery('#alphabetrecordswitch button[name="alphabetswitch"]').length)
    // console.log(letterCount);
    let currentLetter: string = ''
    for (let visitAllPagesIndex = 0; visitAllPagesIndex < letterCount; visitAllPagesIndex++) {
      await this.page.waitFor('#contentPanel h1')
      await this.page.waitFor('#alphabetrecordswitch button[name="alphabetswitch"]')
      currentLetter = await this.page.evaluate((visitAllPagesIndex_) => { jQuery.fn.arr = function () { return this.toArray().map(e => jQuery(e)) }; return jQuery('#alphabetrecordswitch button[name="alphabetswitch"]').arr()[visitAllPagesIndex_].attr('id') }, visitAllPagesIndex)
      console.log('letter '+currentLetter)
      await this.visitAllPageRecords(fn)
      // console.log('letter '+currentLetter);
      await this.page.click(`#${currentLetter}`)
      // await this.page.reload({waitUntil: 'networkidle0'})
      await this.page.waitFor('#contentPanel h1')
      await this.page.waitFor('#alphabetrecordswitch button[name="alphabetswitch"]')
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

