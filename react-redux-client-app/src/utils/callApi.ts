import { tryTo } from './misc';
import { getUrlApiMock } from './getUrlApiMock';

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
export function fetchJson(method: string, url: string) {
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

const ENABLE_AJAX_MOCK = !location.href.includes('forms.netsuite.com')
if (ENABLE_AJAX_MOCK) {

}
