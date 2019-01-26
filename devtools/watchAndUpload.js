const watch = require('gulp-watch')
const nsutil = require('netsuite-uploader-util')
const shell = require('shelljs')
const path = require('path')

const targetFolder = './output'
const { account, role, folderPath, applicationId, nsVersion, uploadConcurrency = 1 } = require('../account-config/config-awa')

module.exports = async function () {
  const basePath = path.resolve(targetFolder)
  const watchFilter = basePath + '/**/*.js'
  const client = new nsutil.SuiteTalk()
  const creds = nsutil.Credentials

  try {
    await client.init(creds.email, creds.password, account, role, applicationId, nsVersion)
    console.log('Successful NetSuite authentication. Now watching changes and uploading files ')

    watchAndUpload(client, watchFilter, folderPath, basePath, uploadConcurrency)

    shell.exec('npx tsc -w --preserveWatchOutput', () => { })
  }
  catch (ex) {
    console.error(`NetSuite Authentication failed `, ex, ex.toString(), ex.stack)
  }
} 



const Changed = require('./changed')
const PQueue = require('p-queue');
let queue
let changed
async function watchAndUpload(client, watchFilter, folderPath, basePath, uploadConcurrency = 1) {
  if (!queue) {
    queue = new PQueue({ concurrency: uploadConcurrency });
  }
  if (!changed) {
    const filesWatchChange = shell.ls('-R', 'output').filter(f => f.endsWith('.js')).map(f => path.resolve(path.join('output', f)))
    changed = new Changed(filesWatchChange)
  }
  watch(watchFilter, async file => {
    if (!changed.changed(file.path)) {
      return
    }
    queue.add(async () => {
      const relativeLocalPath = path.resolve(file.path).substring(basePath.length, path.resolve(file.path).length)
      const suiteScriptPath = folderPath + relativeLocalPath
      console.log(`File ${relativeLocalPath} changed, uploading to file cabinet ${suiteScriptPath}`)
      await uploadFile(client, file.path, suiteScriptPath)
    })
  })
}


async function uploadFile(client, file, suiteScriptPath) {
  try {
    await client.upload(file, suiteScriptPath)
  } catch (err) {
    console.error(`Upload failed: ${suiteScriptPath}`, err.toString(), err.stack, err)
  }
}

