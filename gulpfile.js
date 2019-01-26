const gulp = require('gulp')
const watch = require('gulp-watch')
const nsutil = require('netsuite-uploader-util')
const shell = require('shelljs')
const path = require('path')

// "Constants"
const basePath = path.resolve('./output')
const watchFilter = basePath + '/**/*.js'

const { account, role, folderPath, applicationId, nsVersion, uploadConcurrency = 1 } = require('./config')

// console.log(shell.ls('-Rl', 'output/*').map(f=>f));

const Changed = require('./scripts/changed')
let changed = new Changed(getOutputJs())
function getOutputJs() {
  // shell.config.silent=true
  return shell.ls('-R', 'output').filter(f => f.endsWith('.js')).map(f => path.resolve(path.join('output', f)))
}

gulp.task('build', () => {
  shell.exec('npx tsc', () => { })
  changed.install(getOutputJs())
  changed.save()
})
gulp.task('default', async cb => {
  const client = new nsutil.SuiteTalk()
  const creds = nsutil.Credentials

  console.log('Configuring SuiteTalk client...')

  await client
    .init(creds.email, creds.password, account, role, applicationId, nsVersion)
    // .then(() => {
      console.log('Successful NetSuite authentication. Now watching changes and uploading files ')
      // console.log('Watching: ' + watchFilter)

      const PQueue = require('p-queue');
const queue = new PQueue({concurrency: uploadConcurrency});


async function uploadFile(file/*, folderPath, basePath, suiteScriptPath*/){
  const suiteScriptPath = folderPath + path.resolve(file.path).substring(basePath.length, path.resolve(file.path).length)

        console.log(`File changed. Uploading File: ${file.path} to file cabinet ${suiteScriptPath} ...`)

        try {
          await client.upload(file.path, suiteScriptPath)
          console.log('  Uploaded File: ' + suiteScriptPath)
        } catch (err) {
          console.error('  Failed to Upload File: ', err + toString(), err, err.stack)
        }
}


      watch(watchFilter, async file => {
        if (!changed.changed(file.path)) {
          return
        }
        queue.add(async()=>{
          await uploadFile(file)
        })

        // const suiteScriptPath = folderPath + path.resolve(file.path).substring(basePath.length, path.resolve(file.path).length)

        // console.log(`File changed. Uploading File: ${file.path} to file cabinet ${suiteScriptPath} ...`)

        // try {
        //   await client.upload(file.path, suiteScriptPath)
        //   console.log('  Uploaded File: ' + suiteScriptPath)
        // } catch (err) {
        //   console.log('  Failed to Upload File: ', err + toString(), err, err.stack)
        // }

        // client
        //   .upload(file.path, suiteScriptPath)
        //   .then(
        //     r => console.log('  Uploaded File: ' + suiteScriptPath),
        //     err =>
        //       console.log('  Failed to Upload File: ', err + toString(), err, err.stack)
        //   )
      })

      shell.exec('npx tsc -w', () => { })
    // })
})
