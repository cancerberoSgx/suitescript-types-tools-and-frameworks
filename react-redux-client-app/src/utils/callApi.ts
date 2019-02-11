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
  // try {
  // debugger
  let aux: any
  const p = fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(res => {
      // res2 = res

      // const text = res.
      return res.text()
    })
    .then(text => {
      aux = text
      // debugger
      try {
        return Promise.resolve(JSON.parse(text))
      } catch (error) {

        throw { error, responseText: aux }
        // if ((aux || '').trim().startsWith('<')) {
        // throw aux
        // }
        // throw error
        // throw new Error(aux)
      }
      // const parsed = tryTo(()=>JSON.parse(text))
      // return Promise.resolve()
    })

  //@ts-ignore
  // p.catch((err, a, b) => {
  // console.log(res2);
  // debugger


  // return Promise.reject({ error: aux })
  // })
  //@ts-ignore
  // (e, a, b) => {
  // debugger
  // })
  // } catch (error) {
  //   debugger
  //   Promise.resolve({ error: aux + '' })
  // }
  return p

}
export function getUrlApiMock(method: string, url: string) {

  if (url.includes('__app__routeParamName=recordViewJson') && url.includes('__app__seeValues=true') && url.includes('__app__seeValues=true')) {
    url = `ajaxResponseMocks/__app__routeParamName=recordViewJson&__app__id=2&__app__type=commercecategory&__app__seeValues=true.json`
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
