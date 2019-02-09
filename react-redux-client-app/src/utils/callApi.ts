export default function callApi(method: string, url: string, path: string, data?: any) {
  return fetch(url + '/api' + path, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}


export function getUrlApi(method: string, url: string) {
  if (ENABLE_AJAX_MOCK) {
    return getUrlApiMock(method, url)
  }
  return fetchJson(method, url)
}
function fetchJson(method: string, url: string) {
  return fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
}
export function getUrlApiMock(method: string, url: string) {

  if (url.includes('__app__routeParamName=recordViewJson') && url.includes('__app__seeValues=true')) {
    url = `ajaxResponseMocks/__app__routeParamName=recordViewJson&__app__id=2&__app__type=commercecategory&__app__seeValues=true.json`
  }
  else if (url.includes('__app__routeParamName=recordViewJson') && !url.includes('__app__seeValues=true')) {
    url = `ajaxResponseMocks/__app__routeParamName=recordViewJson&__app__id=2&__app__type=commercecategory.json`
  }
  else if (url.includes('__app__routeParamName=listRecordTypesJson')) {
    url = `ajaxResponseMocks/__app__routeParamName=listRecordTypesJson&__app__type=commercecategory&__app__pageSize=5.json`
  }
  return fetchJson(method, url)
}

const ENABLE_AJAX_MOCK = !location.href.includes('forms.netsuite.com')
if (ENABLE_AJAX_MOCK) {

}
