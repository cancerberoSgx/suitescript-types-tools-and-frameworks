var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports", "./createElement", "./renderInHtml", "../misc/misc"], function (require, exports, createElement_1, renderInHtml_1, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * intelligent render of given element and .js files so their content (modified by fixDefine())
     * get embedded in the output and also almond library for define() support.
     *
     * Note, if extraCode referenced function has a renderFileDependencies in its prototype it can declare it's own files by itself, so there's no need for the renderer to know about its dependencies.
     * Example:
    ```
      const Comp1 = (props: { foo: string }) => <div>
        <button onClick={e => {
          renderInDOM(<select onChange={e=>{
            alert('changed')
          }}>
          <option>change me</option>
          <option>please</option>
          </select>, '#placeholder1')
        }}>{props.foo}</button>
        <div id="placeholder1"></div>
      </div>
      const html = renderWithAmdFiles(<Comp1 foo="bar"></Comp1>, {
        files: [
          'output/jsx/createElement.js',
          'output/jsx/elementImpl.js',
          'output/jsx/renderInHtml.js',
        ],
        asHtmlDocument: true,
      });
    ```
    */
    function renderWithAmdFiles(e, config) {
        var extraCodeFiles = [];
        (config.extraCode || []).filter(function (e) { return typeof e === 'function' && typeof e.prototype.renderFileDependencies !== 'undefined'; })
            .forEach(function (e) {
            (e
                .prototype.renderFileDependencies() || [])
                .forEach(function (f) { return extraCodeFiles.push(f); });
        });
        var files = misc_1.dedup(extraCodeFiles.concat(config.files || []).map(function (f) { return typeof f === 'string' ? { name: f.substring(f.lastIndexOf('/') + 1, f.lastIndexOf('.')), path: f } : f; }), function (a, b) { return a.name === b.name; });
        var s = "\n<script>\n" + almond() + "\n" + files.map(function (f) { return fixDefine(readFile(f, config.basePath), files.map(function (f) { return f.name; }), f.name); }).join(';\n\n') + ";\n" + (config.extraCode || []).map(function (c) { return typeof c === 'function' ? c.toString() : c; }).join(';\n') + "\n</script>\n" + createElement_1.ReactLike.render(e, __assign({}, config, { renderClientCode: true }));
        return config.asHtmlDocument ? renderInHtml_1.wrapInHtml(s) : s;
    }
    exports.renderWithAmdFiles = renderWithAmdFiles;
    function readFile(f, basePath) {
        if (basePath === void 0) { basePath = ''; }
        if (typeof process !== 'undefined' && typeof process.exit !== 'undefined') {
            return require('fs').readFileSync(basePath + "/" + f.path).toString();
        }
        else {
            throw 'readFile not implemented in netsuite TODO';
        }
    }
    /**
     * Will add a name to given antonymous define() declaration in given source code. Also will change those
     * dependency names (of given names) in the define() declaration to remove their paths and use simple names.
     *
     * Used by renderWithAmdFiles().
     *
     * Example:
    ```
    const s = fixDefine(`define(['./sd/foo'], (foo)=>{})`, ['foo', 'bar'], 'foo');
    equal(s, `define("foo", ["foo"], (foo)=>{})`);
    ```
    */
    function fixDefine(s, names, thisName) {
        s = s.split('\n').map(function (l) {
            names.forEach(function (name) {
                if (l.indexOf('define([') !== -1) {
                    var i = l.indexOf(name + "\"");
                    if (i === -1) {
                        i = l.indexOf(name + "'");
                    }
                    if (i === -1) {
                        i = l.indexOf("" + name);
                    }
                    var previousQuoteIndex = i;
                    for (var j = i; j >= 0; j--) {
                        if (l[j] === '"' || l[j] === '\'') {
                            previousQuoteIndex = j;
                            break;
                        }
                    }
                    var nextQuoteIndex = i;
                    for (var j = i; j < l.length; j++) {
                        if (l[j] === '"' || l[j] === '\'') {
                            nextQuoteIndex = j;
                            break;
                        }
                    }
                    if (previousQuoteIndex !== -1 && nextQuoteIndex < l.length) {
                        l = (l.substring(0, previousQuoteIndex) + '"' + name + '"' + l.substring(nextQuoteIndex + 1, l.length));
                    }
                }
            });
            l = l.replace('define([', "define(\"" + thisName + "\", [");
            return l;
        }).join('\n');
        return s + ";\nrequire([\"" + thisName + "\"], function(thisName){\n    " + thisName + "_1 = thisName;\n    " + thisName + "_2 = thisName;\n});\n";
    }
    exports.fixDefine = fixDefine;
    function almond() {
        return "\n    var requirejs,require,define;!function(e){function n(e,n){return m.call(e,n)}function r(e,n){var r,i,t,o,u,f,l,c,s,p,a,d=n&&n.split(\"/\"),h=g.map,m=h&&h[\"*\"]||{};if(e){for(u=(e=e.split(\"/\")).length-1,g.nodeIdCompat&&y.test(e[u])&&(e[u]=e[u].replace(y,\"\")),\".\"===e[0].charAt(0)&&d&&(e=d.slice(0,d.length-1).concat(e)),s=0;s<e.length;s++)if(\".\"===(a=e[s]))e.splice(s,1),s-=1;else if(\"..\"===a){if(0===s||1===s&&\"..\"===e[2]||\"..\"===e[s-1])continue;s>0&&(e.splice(s-1,2),s-=2)}e=e.join(\"/\")}if((d||m)&&h){for(s=(r=e.split(\"/\")).length;s>0;s-=1){if(i=r.slice(0,s).join(\"/\"),d)for(p=d.length;p>0;p-=1)if((t=h[d.slice(0,p).join(\"/\")])&&(t=t[i])){o=t,f=s;break}if(o)break;!l&&m&&m[i]&&(l=m[i],c=s)}!o&&l&&(o=l,f=c),o&&(r.splice(0,f,o),e=r.join(\"/\"))}return e}function i(n,r){return function(){var i=v.call(arguments,0);return\"string\"!=typeof i[0]&&1===i.length&&i.push(null),c.apply(e,i.concat([n,r]))}}function t(e){return function(n){a[e]=n}}function o(r){if(n(d,r)){var i=d[r];delete d[r],h[r]=!0,l.apply(e,i)}if(!n(a,r)&&!n(h,r))throw new Error(\"No \"+r);return a[r]}function u(e){var n,r=e?e.indexOf(\"!\"):-1;return r>-1&&(n=e.substring(0,r),e=e.substring(r+1,e.length)),[n,e]}function f(e){return e?u(e):[]}var l,c,s,p,a={},d={},g={},h={},m=Object.prototype.hasOwnProperty,v=[].slice,y=/.js$/;s=function(e,n){var i,t=u(e),f=t[0],l=n[1];return e=t[1],f&&(i=o(f=r(f,l))),f?e=i&&i.normalize?i.normalize(e,function(e){return function(n){return r(n,e)}}(l)):r(e,l):(f=(t=u(e=r(e,l)))[0],e=t[1],f&&(i=o(f))),{f:f?f+\"!\"+e:e,n:e,pr:f,p:i}},p={require:function(e){return i(e)},exports:function(e){var n=a[e];return void 0!==n?n:a[e]={}},module:function(e){return{id:e,uri:\"\",exports:a[e],config:function(e){return function(){return g&&g.config&&g.config[e]||{}}}(e)}}},l=function(r,u,l,c){var g,m,v,y,j,q,x,b=[],w=typeof l;if(c=c||r,q=f(c),\"undefined\"===w||\"function\"===w){for(u=!u.length&&l.length?[\"require\",\"exports\",\"module\"]:u,j=0;j<u.length;j+=1)if(y=s(u[j],q),\"require\"===(m=y.f))b[j]=p.require(r);else if(\"exports\"===m)b[j]=p.exports(r),x=!0;else if(\"module\"===m)g=b[j]=p.module(r);else if(n(a,m)||n(d,m)||n(h,m))b[j]=o(m);else{if(!y.p)throw new Error(r+\" missing \"+m);y.p.load(y.n,i(c,!0),t(m),{}),b[j]=a[m]}v=l?l.apply(a[r],b):void 0,r&&(g&&g.exports!==e&&g.exports!==a[r]?a[r]=g.exports:v===e&&x||(a[r]=v))}else r&&(a[r]=l)},requirejs=require=c=function(n,r,i,t,u){if(\"string\"==typeof n)return p[n]?p[n](r):o(s(n,f(r)).f);if(!n.splice){if((g=n).deps&&c(g.deps,g.callback),!r)return;r.splice?(n=r,r=i,i=null):n=e}return r=r||function(){},\"function\"==typeof i&&(i=t,t=u),t?l(e,n,r,i):setTimeout(function(){l(e,n,r,i)},4),c},c.config=function(e){return c(e)},requirejs._defined=a,(define=function(e,r,i){if(\"string\"!=typeof e)throw new Error(\"See almond README: incorrect module build, no module name\");r.splice||(i=r,r=[]),n(a,e)||n(d,e)||(d[e]=[e,r,i])}).amd={jQuery:!0}}();\n\n";
    }
});
