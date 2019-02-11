import { tryTo } from './misc';

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
  let aux: any
  const p = fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(res => {
      return res.text()
    })
    .then(text => {
      aux = text
      try {
        return Promise.resolve(JSON.parse(text))
      } catch (error) {
        throw { error, responseText: aux }
      }
    })

  return p
}

export function getUrlApiMock(method: string, url: string) {

  if (url.includes('__app__routeParamName=recordViewJson') && url.includes('__app__type=item')) {
    url = `ajaxResponseMocks/__app__routeParamName=recordViewJson&__app__id=465&__app__type=inventoryitem&__app__showAllFields=&__app__showSublistLines=true&__app__seeValues=true.json`
  }

  else if (url.includes('__app__routeParamName=recordViewJson') && url.includes('__app__seeValues=true')) {
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
