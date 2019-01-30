// extract record fields and sublists fields types , names, etc from the record browser html
// just past this in a record browser page dev tools and a json containing all its fields, sublists, searchFilters and columns will be copied in the clipboard.

jQuery.fn.arr = function () { return this.toArray().map(e => jQuery(e)) }
jQuery.fn.containsText = function (text) { return this.text().toLowerCase().includes(text.toLowerCase()) }

// jQuery.fn.findContainingTextOr = function (text) { return this.text().toLowerCase().includes(text.toLowerCase()) }

// TODO: search data. some records define how they are searched with a link to another record : <a href="item.html">Item</a>


function getRecord() {
  return {
    label: jQuery('#contentPanel h1').arr()[0].text().trim(),
    id: jQuery('#contentPanel h3').arr()[0].text().trim().toLowerCase().split('internal id:')[1].trim(),
    supportCustomFields: !!jQuery('#contentPanel h3').arr().find(h => h.containsText('supports custom fields')), searchOnly: !!jQuery('#contentPanel h3').arr().find(h => h.containsText('Search Only')),
    supportDeletedRecordSearch: !!jQuery('#contentPanel h3').arr().find(h => h.containsText('Supports Deleted Record Search')),
    fields: getFields(),
    sublists: getSublists(),
    searchFilters: getSearchFilters(),
    searchColumns: getSearchColumns(),
    searchJoins: getSearchJoins(),
    searchData: getSearchData(),
    tabs: getTabs(),
    transformTypes: getTransformTypes(),
  }
}

function getFields() {
  const h2 = jQuery('#contentPanel h2').arr().find(h => h.containsText('Fields'))
  if (!h2) { return [] }
  return h2.next('table').find('tr').arr()
    .filter(tr => tr.attr('id') && tr.attr('id').startsWith('field_'))
    .map(tr => ({
      id: tr.find('td').arr()[0].text().trim(),
      type: tr.find('td').arr()[1].text().trim(),
      nlapiSubmitField: !tr.find('td').arr()[2].containsText('false'),
      label: tr.find('td').arr()[3].text().trim(),
      required: !tr.find('td').arr()[4].containsText('false'),
      help: tr.find('td').arr()[5].text().trim(),
    }))
}

function getSublists() {
  const h2 = jQuery('#contentPanel h2').arr().find(h => h.containsText('Sublists'))
  if (!h2) { return [] }
  return h2
    .nextUntil('h2', 'h4').arr()
    .filter(h4 => h4.next('table').arr().length)
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
            required: !tr.find('td').arr()[3].containsText('false'),
            help: tr.find('td').arr()[4].text().trim()
          }))
      }
    })
}

function getTabs() {
  const h2 = jQuery('#contentPanel h2').arr().find(h => h.text().toLowerCase().trim() === 'Tabs'.toLowerCase())
  if (!h2) { return [] }
  return h2
    .next('table')
    .find('tr').arr()
    .filter((tr, i) => i != 0)
    .map(tr => ({
      name: tr.find('td').arr()[0].text().trim(),
      label: tr.find('td').arr()[1].text().trim(),
    }))
}

function getSearchJoins() {
  if (getSearchData()) {
    return []
  }
  const h2 = jQuery('#contentPanel h2').arr().find(h => h.containsText('Search Joins'))
  if (!h2) { return [] }
  return h2
    .next('table')
    .find('tr').arr()
    .filter((tr, i) => i != 0)
    .map(tr => ({
      id: tr.find('td').arr()[0].text().trim(),
      description: tr.find('td').arr()[1].text().trim(),
      actualName: tr.find('td').arr()[2].text().trim(),
    }))
}

function getSearchFilters() {
  if (getSearchData()) {
    return []
  }
  const h2 = jQuery('#contentPanel h2').arr().find(h => h.containsText('Search Filters'))
  if (!h2) { return [] }
  return h2
    .next('table')
    .find('tr').arr()
    .filter((tr, i) => i != 0)
    .map(tr => ({
      id: tr.find('td').arr()[0].text().trim(),
      type: tr.find('td').arr()[1].text().trim(),
      label: tr.find('td').arr()[2].text().trim(),
    }))
}

function getSearchColumns() {
  if (getSearchData()) {
    return []
  }
  const h2 = jQuery('#contentPanel h2').arr().find(h => h.containsText('Search Columns'))
  if (!h2) { return [] }
  return h2.next('table')
    .find('tr').arr()
    .filter((tr, i) => i != 0)
    .map(tr => ({
      id: tr.find('td').arr()[0].text().trim(),
      type: tr.find('td').arr()[1].text().trim(),
      label: tr.find('td').arr()[2].text().trim(),
    }))
}

function getTransformTypes() {
  const h2 = jQuery('#contentPanel h2').arr().find(h => h.containsText('Transform Types'))
  if (!h2) { return [] }
  return h2
    .next('table')
    .find('tr').arr()
    .filter((tr, i) => i != 0)
    .map(tr => ({
      targetRecordType: tr.find('td').arr()[0].text().trim(),
      fieldDefaults: tr.find('td').arr()[1].text().trim(),
    }))
}

function getSearchData() {
  // return
  const h2 = jQuery('#contentPanel h2').arr().find(h => h.text().trim() === 'Search Data')
  if (h2) {
    const a = h2.next('h3').arr()[0].find('a').arr()
    if (a && a.length) {
      // console.log('getSearchData', '!a || !a.length')
      return a[0].attr('href').split('.html')[0]
    }
    else {
      // console.log('getSearchData', '!a || !a.length')
    }
  }
}

// if (typeof copy === 'function') {
//   copy(JSON.stringify(getRecord(), null, 2))
// }

