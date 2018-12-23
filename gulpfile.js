var gulp = require('gulp')
var watch = require('gulp-watch')
var nsutil = require('netsuite-uploader-util')
var shell = require('shelljs')
var path = require('path')

// "Constants"
var basePath = path.resolve('./output')
var watchFilter = basePath + '/**/*.js'

const { account, role, folderPath, applicationId, nsVersion, initialCompile = false } = require('./config')

gulp.task('default', () => {
  var client = new nsutil.SuiteTalk()
  var creds = nsutil.Credentials

  console.log('Configuring SuiteTalk client...')

  // shell.exec('npx tsc -w', () => { })

  client
    .init(creds.email, creds.password, account, role, applicationId, nsVersion)
    .then(() => {
      console.log('SuiteTalk client configured.')
      console.log('Watching: ' + watchFilter)

      watch(watchFilter, file => {
        var suiteScriptPath = folderPath + path.resolve(file.path).substring(basePath.length, path.resolve(file.path).length)

        console.log(
          `File changed. Uploading File: ${
          file.path
          } to file cabinet ${suiteScriptPath} ...`
        )

        client
          .upload(file.path, suiteScriptPath)
          .then(
            r => console.log('  Uploaded File: ' + suiteScriptPath),
            err =>
              console.log('  Failed to Upload File: ', err + toString(), err, err.stack)
          )
      })

      // if (initialCompile) {
        // setTimeout(() => {
          shell.exec('npx tsc', () => { })
        // }, 200);
      // }
    })
})
