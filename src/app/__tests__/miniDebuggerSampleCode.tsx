export const examples = [
{name: 'print fields labels, type and values',
code: `

require(['N/record'], function (record) {
  LOG('Use LOG()', ['function'], { to: 'print', anyKind: function ofValue() { } })
  var c = record.load({ id: '8', type: 'commercecategory', isDynamic: true })
  LOG(printFields(c))
})

function printFields(c) {
  return '(' + c.type + ', ' + c.id + ") record's fields: <ul><li>" +  c.getFields()
    .map(function (fieldId) {
      return c.getField({fieldId: fieldId })
    })
    .filter(function (f) { return f && f.label })
    .map(function (f) {
      return '<strong>' + f.label + '</strong> - <em>' + f.id + '</em> (' + 
        f.type + '), value: ' + c.getText({fieldId: f.id })
    })
    .join('</li><li>') + '</li></ul>'
}
`,
description: ''
}
]


export const sampleCode = examples[0].code
