define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.examples = [
        { name: 'print fields labels, type and values',
            code: "\n\nrequire(['N/record'], function (record) {\n  LOG('Use LOG()', ['function'], { to: 'print', anyKind: function ofValue() { } })\n  var c = record.load({ id: '8', type: 'commercecategory', isDynamic: true })\n  LOG(printFields(c))\n})\n\nfunction printFields(c) {\n  return '(' + c.type + ', ' + c.id + \") record's fields: <ul><li>\" +  c.getFields()\n    .map(function (fieldId) {\n      return c.getField({fieldId: fieldId })\n    })\n    .filter(function (f) { return f && f.label })\n    .map(function (f) {\n      return '<strong>' + f.label + '</strong> - <em>' + f.id + '</em> (' + \n        f.type + '), value: ' + c.getText({fieldId: f.id })\n    })\n    .join('</li><li>') + '</li></ul>'\n}\n",
            description: ''
        }
    ];
    exports.sampleCode = exports.examples[0].code;
});
