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
    await this.page.on('console', msg => {
      for (let i = 0; i < msg.args().length; ++i) {
        console.log('console ' + `${msg.args()[i]}`);
      }
    })
    const customRecordId = '<use script id of your desired custom record type>'
    await this.page.goto(this.config.startUrl)
    await this.visitAllPages(async data => {
      data.id = data.id === customRecordId ? 'customrecord' : data.id
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
    let recordCount: number = await this.page.evaluate(() => {
      jQuery.fn.arr = function () { return this.toArray().map(e => jQuery(e)) };
      return jQuery('#recordlist button[name="recordswitch"]').arr().length
    })
    let currentRecord: string = ''
    for (let visitAllPageRecordIndex = 0; visitAllPageRecordIndex < recordCount; visitAllPageRecordIndex++) {
      await this.page.waitFor('#contentPanel h1')
      await this.page.waitFor('#recordlist button[name="recordswitch"]')
      currentRecord = await this.page.evaluate((visitAllPageRecordIndex_) => {
        var b = jQuery('#recordlist button[name="recordswitch"]').arr()[visitAllPageRecordIndex_]
        return b && b.attr('id')
      }, visitAllPageRecordIndex)

      if (!currentRecord) {
        console.error('visitAllPageRecords currentRecord for index ' + visitAllPageRecordIndex + ' not found!')
        continue
      }
      await this.page.click(`#${currentRecord}`)
      await this.page.waitFor(`#${currentRecord}.ui-state-highlight`)
      try {
        const data = await this.extractCurrentPageRecord()
        await fn(data)
        console.log('extractCurrentPageRecord ', visitAllPageRecordIndex, data.id,
          data.label, 'fields: ' + data.fields.length,
          'sublists: ' + data.sublists.length,
          'searchFilters: ' + data.searchFilters.length,
          'searchColumns: ' + data.searchColumns.length,
          'searchJoins: ' + data.searchJoins.length);
      } catch (error) {
        console.error('ERROR on extractPage for ' + currentRecord, error);
      }
      await this.page.waitFor('#contentPanel h1')
      await this.page.waitFor('#recordlist button[name="recordswitch"]')
    }
  }
  protected async visitAllPages(fn: (data: any) => Promise<void>) {
    await this.page.waitFor('#contentPanel h1')
    await this.page.waitFor('#alphabetrecordswitch button[name="alphabetswitch"]')
    let letterCount: number = await this.page.evaluate(() => {
      jQuery.fn.arr = function () { return this.toArray().map(e => jQuery(e)) };
      return jQuery('#alphabetrecordswitch button[name="alphabetswitch"]').arr().length;
    })
    let currentLetter: string = ''
    for (let visitAllPagesIndex = 0; visitAllPagesIndex < letterCount; visitAllPagesIndex++) {
      await this.page.waitFor('#contentPanel h1')
      await this.page.waitFor('#alphabetrecordswitch button[name="alphabetswitch"]')

      currentLetter = await this.page.evaluate((visitAllPagesIndex_) => {
        jQuery.fn.arr = function () { return this.toArray().map(e => jQuery(e)) };
        var b = jQuery('#alphabetrecordswitch button[name="alphabetswitch"]').arr()[visitAllPagesIndex_]
        return b && b.attr('id')
      }, visitAllPagesIndex)

      if (!currentLetter) {
        console.error('ERROR visitAllPages currentLetter for index ' + visitAllPagesIndex + ' not found!')
        continue
      }
      console.log('Visiting letter ' + currentLetter.substring(currentLetter.length - 1, currentLetter.length))
      await this.page.click(`#${currentLetter}`)
      await this.page.waitFor(`#${currentLetter}.ui-state-highlight`)

      await this.page.waitFor('#contentPanel h1')
      await this.page.waitFor('#alphabetrecordswitch button[name="alphabetswitch"]')

      await this.visitAllPageRecords(fn)
    }
    await this.browser.close()
  }
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

