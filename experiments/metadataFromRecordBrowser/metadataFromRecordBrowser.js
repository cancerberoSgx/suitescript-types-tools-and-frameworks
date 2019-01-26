// extract record fields and sublists fields types , names, etc from the record browser html
// just past this in a record browser page dev tools and a json containing all its fields, sublists, searchFilters and columns will be copied in the clipboard.

jQuery.fn.arr = function () { return this.toArray().map(e => jQuery(e)) }

function getRecord() {
  return {
    label: jQuery('#contentPanel h1').arr()[0].text().trim(),
    id: jQuery('#contentPanel h3').arr()[0].text().trim().toLowerCase().split('internal id:')[1].trim(),
    supportCustomFields: jQuery('#contentPanel h3').arr()[1].text().trim().toLowerCase()==='supports custom fields',
    fields: getFields(),
    sublists: getSublists(),
    searchFilters: getSearchFilters(),
    searchColumns: getSearchColumns()
  }
}

function getFields() {
  return jQuery('#contentPanel table').arr()[0].find('tr').arr()
    .filter(tr => tr.attr('id') && tr.attr('id').startsWith('field_'))
    .map(tr => ({
      id: tr.find('td').arr()[0].text().trim(),
      type: tr.find('td').arr()[1].text().trim(),
      nlapiSubmitField: !tr.find('td').arr()[2].text().trim().includes('false'),
      label: tr.find('td').arr()[3].text().trim(),
      required: !tr.find('td').arr()[4].text().trim().includes('false'),
      help: tr.find('td').arr()[5].text().trim(),
    }))
}

function getSublists() {
  return jQuery('#contentPanel h2').arr().find(h => h.text().includes('Sublists'))
    .nextUntil('h2', 'h4').arr()
    .map(h4 => {
      return {
        id: h4.text().trim().split('-')[0].trim(),
        label: h4.text().trim().split('-')[1].trim(),
        fields: h4.next('table').arr()[0].find('tr').arr()
          .filter(tr => tr.attr('id') && tr.attr('id').startsWith('field_'))
          .map(tr => ({
            id: tr.find('td').arr()[0].text().trim(),
            type: tr.find('td').arr()[1].text().trim(),
            label: tr.find('td').arr()[2].text().trim(),
            required: !tr.find('td').arr()[3].text().trim().includes('false'),
            help: tr.find('td').arr()[4].text().trim()
          }))
      }
    })
}
function getSearchFilters() {
  return jQuery('#contentPanel h2').arr()
    .find(h => h.text().includes('Search Filters')).next('table')
    .find('tr').arr()
    .filter((tr, i) => i != 0)
    .map(tr => ({
      id: tr.find('td').arr()[0].text().trim(),
      type: tr.find('td').arr()[1].text().trim(),
      label: tr.find('td').arr()[2].text().trim(),
    }))
}
function getSearchColumns() {
  return jQuery('#contentPanel h2').arr().find(h => h.text().includes('Search Columns')).next('table')
    .find('tr').arr()
    .filter((tr, i) => i != 0)
    .map(tr => ({
      id: tr.find('td').arr()[0].text().trim(),
      type: tr.find('td').arr()[1].text().trim(),
      label: tr.find('td').arr()[2].text().trim(),
    }))
}

copy(JSON.stringify(getRecord(), null, 2))

