const fs = require('fs')
const hasha = require('hasha');
// const shell = require('shelljs')
// const glob = require('glob').sync;
const path = require('path')

module.exports = class Tool {

  constructor(initialFiles, parentFolder=process.cwd(), changedHashesJson='.changed_hashes.json') {
    this.parentFolder = parentFolder
    this.changedHashesJson = changedHashesJson
    this.install()
  }

  install(initialFiles=[]){
    if(!fs.existsSync(this.changedHashesJson)){
      this.hashes = {}
      this.save()
    }
    else {
      // this.allHashes = JSON.parse(fs.readFileSync(this.changedHashesJson).toString())
      this.hashes = JSON.parse(fs.readFileSync(this.changedHashesJson).toString())
    }
    initialFiles.map(f=>path.resolve(f)).filter(f=>fs.existsSync(f)).forEach(f=>this.changed(f))
    // if(!this.allHashes[this.parentFolder]){
      // this.allHashes[this.parentFolder] = {}
    // }
    // this.hashes = this.allHashes[this.parentFolder]
  }

  save(){
    // console.log('save()');
    
    fs.writeFileSync(this.changedHashesJson, JSON.stringify(this.hashes, null, 2) )
  }

  changed(file){
    const hash = hasha.fromFileSync(file, { algorithm: 'md5' })
    // console.log('changed '+file);
    
    // if(!this.hashes[file]){
    //   this.hashes[file] = hash
    // }
    if(hash === this.hashes[file]){
      return false
    }
    else {
      this.hashes[file] = hash
      setTimeout(() => {
        this.save()
      }, 10);
      return true      
    }
  }
}