export interface DebuggerExample {
  name: string, description: string, code: string
}
export const examples: DebuggerExample[] = [
  {
    name: 'print fields labels, type and values',
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
  },

  {
    name: 'simple search',
    description: 'prints all website ids',
    code: `
require(['N/search'], function (search) {
  search.create({type: 'website'}).run().each(function(r){
    LOG(r.id); 
    return true
  })
})
      `
  },

  {
    name: 'requiring internal ls() utility',
    description: '',
    code: `
require(['/SuiteScripts/file/ls'], function (ls) {
  ls.ls({ root: '5226', rootAbsoluteName: '/SuiteScripts/DeployExtensions/AwaLabs' })
    .sort(function (a, b) { return a.absoluteName.localeCompare(b.absoluteName); })
    .forEach(function (f) {
      LOG(f.absoluteName + " " + f.type + " " + f.id + " " + f.parent);
    })
})
    `
  }
]


export const sampleCode = examples[0].code

