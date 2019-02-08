define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.examples = [
        {
            name: 'print fields labels, type and values',
            code: "\nrequire(['N/record'], function (record) {\n  LOG('Use LOG()', ['function'], { to: 'print', anyKind: function ofValue() { } })\n  var c = record.load({ id: '8', type: 'commercecategory', isDynamic: true })\n  LOG(printFields(c))\n})\nfunction printFields(c) {\n  return '(' + c.type + ', ' + c.id + \") record's fields: <ul><li>\" +  c.getFields()\n    .map(function (fieldId) {\n      return c.getField({fieldId: fieldId })\n    })\n    .filter(function (f) { return f && f.label })\n    .map(function (f) {\n      return '<strong>' + f.label + '</strong> - <em>' + f.id + '</em> (' + \n        f.type + '), value: ' + c.getText({fieldId: f.id })\n    })\n    .join('</li><li>') + '</li></ul>'\n}\n",
            description: ''
        },
        {
            name: 'simple search',
            description: 'prints all website ids',
            code: "\nrequire(['N/search'], function (search) {\n  search.create({type: 'website'}).run().each(function(r){\n    LOG(r.id); \n    return true\n  })\n})\n      "
        },
        {
            name: 'requiring internal ls() utility',
            description: '',
            code: "\nrequire(['/SuiteScripts/file/ls'], function (ls) {\n  ls.ls({ root: '5226', rootAbsoluteName: '/SuiteScripts/DeployExtensions/AwaLabs' })\n    .sort(function (a, b) { return a.absoluteName.localeCompare(b.absoluteName); })\n    .forEach(function (f) {\n      LOG(f.absoluteName + \" \" + f.type + \" \" + f.id + \" \" + f.parent);\n    })\n})\n    "
        }
    ];
    exports.sampleCode = exports.examples[0].code;
});
