import { readFileSync } from 'fs';
let s = readFileSync('dist/index.html').toString()
let js: string = ''
let css: string = ''
s.split('\n').forEach(l => {
  if (l.includes('<link rel="stylesheet" href="')) {
    css = /href="([^"]+)/.exec(l)![1]
  }
  if (l.includes('<script type="text/javascript" src="')) {
    js = /src="([^"]+)/.exec(l)![1]
  }
})

// console.log({ js, css });

const jsFiles = encodeURIComponent(JSON.stringify([`http://localhost:1234${js}`]))
const cssFiles = encodeURIComponent(JSON.stringify([`http://localhost:1234${css}`]))

const url = `https://forms.netsuite.com/app/site/hosting/scriptlet.nl?whence=&compid=TSTDRV1844288&h=192074825c3ca8751438&script=293&deploy=1&__app__routeParamName=serveSPAIndex&__app__cssFiles=${cssFiles}&__app__jsFiles=${jsFiles}`

console.log(url);
