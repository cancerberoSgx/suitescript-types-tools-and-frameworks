import { launch, Page, Browser } from 'puppeteer';
import { readFileSync } from 'fs';
// import { linkDependencies } from 'jasmine-puppeteer-results'

interface Config {
  inputFolder: string
  puppeteerTargetFolder?: string
  startUrl: string
}
export class Tool {
  config: Config;
  browser!: Browser;
  page!: Page;
  constructor(config: Config) {
    this.config = config
    // this.installPuppeteer()
  }
  public async  installPuppeteer() {
    // if (this.config.puppeteerTargetFolder) {
    //   const thisProject = './node_modules'
    //   const puppeteerTargetFolder = this.config.puppeteerTargetFolder// '/home/sg/git/suitecommerce-types/jasmine-puppeteer-results/node_modules'
    //   linkDependencies(puppeteerTargetFolder, thisProject)
    // }
    this.browser = await launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    this.page = await this.browser.newPage();
    await this.page.goto(this.config.startUrl)
    // await this.page.waitForNavigation()
  }

  public async extractPage(): Promise<any> {
    // const server = await staticServer(join(__dirname, 'fixtures', 'static1'), 9999)
    // await this.page.goto(url)
    const fnString = `(()=>{${readFileSync('../metadataFromRecordBrowser.js').toString()}; return JSON.stringify(getRecord(), null, 2) })()`
    // const code = `${fnString}; return document.body.innerHTML.length `
    // const fn = eval(`(${fnString})`)// as any as ((...args: any[])=> string)
    const data = JSON.parse(await this.page.evaluate(fnString))
    // await this.browser.close();
    return data
  }

  async destroy(): Promise<void> {
    await this.browser.close()
  }


  public async visitAllPageRecords(fn?: (data: any) => Promise<any>) {
    let recordCount: number = await this.page.evaluate(() => jQuery('#recordlist button[name="recordswitch"]').length)
    console.log(recordCount);
    
    for (let i = 0; i < recordCount; i++) {
      await this.page.waitFor('#contentPanel h1')
      const data = await this.extractPage()
      // console.log(data.fields.length, data.sublists.length)
      let currentRecord: string = await this.page.evaluate((i) => jQuery('#recordlist button[name="recordswitch"]').arr()[i].attr('id'), i)
      console.log(currentRecord, data.id, data.fields.length, data.sublists.length, data.searchFilters.length);
      await this.page.click(`#${currentRecord}`)
      await this.page.reload()
      // await this.page.waitForNavigation({timeout: 500})
      // await this.page.waitFor(()=>new Promise(resolve=>setTimeout(()=>resolve(), 500)))

    }
  }
  protected async visitAllPages(fn: () => void) {

  }
}

declare function jQuery(...args: any[]): any 