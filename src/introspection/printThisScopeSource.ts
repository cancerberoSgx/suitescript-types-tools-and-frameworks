import { getObjectKeys } from './objectExplorer';
import { tryTo } from '../misc/misc';

export function printSource(v: any, printFunctionPrototypes = false): string | undefined {
  if (typeof (v) === 'function') {

    var props = getObjectKeys(v.prototype)
    if (!printFunctionPrototypes || !props.length) {
      return v.toString()
    }
    else {
      return `(function(){
    var F__ = ${v.toString()};
    ${props.map(prop =>
        `F__.prototype.${prop} = ${printSource(v.prototype[prop], false)};`)
          .join('\n    ')}
    return F__;
  })()`
    }
  }
  else if (['number', 'boolean'].indexOf(typeof (v)) !== -1) {
    return v + ''
  }
  else if (typeof (v) === 'undefined') {
    return 'undefined'
  }
  else if (typeof v === 'string') {
    return `"${v.replace(/\"/g, '\\"')}"`
  }
  else if (Array.isArray(v)) {
    return `[${v.map(i => printSource(i, printFunctionPrototypes)).join(', ')}]`
  }
  else if (Object.getPrototypeOf(v) === Object.prototype) {
    return `{\n  ${getObjectKeys(v).map(k => `${k}: ${printSource(v[k], printFunctionPrototypes)}`).join(',\n  ')}\n}`
  }
  else {
    return tryTo(() => JSON.stringify(v))
  }
}


export function printNamespace(v: any, name: string) {
  return `
var ${name} = (function(){
  ${getObjectKeys(v).map(k => `var ${k} = ${printSource(v[k], true)}`).join(';\n  ')}
  return {
    ${getObjectKeys(v).map(k => `${k}: ${k}`).join(',\n    ')}
  };
})();
`
}


export function printObjectAndScope(value: any, printFunctionPrototypes = false, printGlobals = false) {
  const s = `
{
  ${getObjectKeys(value).filter(k => printSource(value[k], printFunctionPrototypes)).map(p => `${p}: ${printSource(value[p], printFunctionPrototypes)}`).join(',\n  ')}
}
    `.trim()

  const globals = printGlobals ? matchGlobalRegex(/\s+([a-z0-1_]+)\./gmi, s)
    .filter(s => s.indexOf('_1') !== -1 || s.indexOf('_2') !== -1)
    .filter((o, i, a) => a.indexOf(o) === i) : []

  const globalsCode = printGlobals ? `
${globals.map(g => `var ${g} = ${tryTo(() => eval(`typeof ${g}==='undefined'? 'undefined' : printSource(${g}, ${printFunctionPrototypes})`)) || 'undefined'};`).join('\n  ')}
    `.trim() : ''

  return `
${s};
${globalsCode};
    `.trim()
}

function matchGlobalRegex(r: RegExp, s: string): string[] {
  var matches, output = [];
  while (matches = r.exec(s)) {
    output.push(matches[1]);
  }
  return output
}
