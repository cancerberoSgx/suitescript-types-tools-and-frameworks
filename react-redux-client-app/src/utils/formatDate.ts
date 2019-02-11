export function formatDate(date: Date, format: 'YYYY-MM-DD' | 'MM/DD/YYYY'): string {
  // if (!date) {
  //   return ''
  // }
  if (typeof date === 'string') { // happens when serializing dates to json for testing
    date = new Date(date)
  }
  var dd: any = date.getDay();
  var mm: any = date.getMonth() + 1; //January is 0!
  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  if (format === 'YYYY-MM-DD') {
    return yyyy + '-' + mm + '-' + dd;
  }
  else {
    return `${mm}/${dd}/${yyyy}`;
  }
}

export function formatDateTime(date: Date, format: 'YYYY-MM-DDTHH:MMZ'): string {
  if (typeof date === 'string') { // happens when serializing dates to json for testing
    date = new Date(date)
  }
  let hh = `${date.getHours()}`.length < 2 ? `0${date.getHours()}` : `${date.getHours()}`
  let mm = `${date.getMinutes()}`.length < 2 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
  // let ss = `${date.getSeconds()}`.length == 1 ? `0${date.getSeconds()}` : `${date.getSeconds()}`.length > 2 ? `00` : `${date.getSeconds()}`
  return `${formatDate(date, 'YYYY-MM-DD')}T${hh}:${mm}`
}

