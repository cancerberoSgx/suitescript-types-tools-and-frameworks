import { tryTo } from '../../misc/misc';
import { App, Route } from '../app';

export function serveSPAIndexRoute(app: App): Route {
  return {
    name: 'serveSPAIndex',
    handler(o) {
      const jsFiles : string[] = tryTo(()=>JSON.parse(decodeURIComponent(o.params.jsFiles||'[]')))||[]
      const cssFiles : string[]= tryTo(()=>JSON.parse(decodeURIComponent(o.params.cssFiles||'[]')))||[]

      return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <!--
  <link rel="manifest" href="/manifest.298fe654.js">
  <link rel="shortcut icon" href="/favicon.26242483.ico">  -->
  <title>Served Dummy SPA</title>
  ${cssFiles.map(f=>`<link rel="stylesheet" href="${f}">`)}
</head>
<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="root"></div>
  ${jsFiles.map(f=>`<script type="text/javascript" src="${f}"></script>`)}
</body>
</html>
      `.trim()
    }
  };
}

// export function addFile(config: {})
