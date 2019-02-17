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

export function getUrlApi(method: string, url: string): Promise<any> {
  if (ENABLE_AJAX_MOCK && location.href.startsWith('http://localhost/')) { // jest - run in node domjs
    try {
      const file = `test/${getUrlApiMock(method, url)}`
      const text = require('fs').readFileSync(file).toString()
      const result = JSON.parse(text)
      return Promise.resolve(result)
    } catch (error) {
      throw { error }
    }
  }
  else if (ENABLE_AJAX_MOCK) { // npm start - runs app locally
    url = getUrlApiMock(method, url)
  }
  return fetchJson(method, url)
}

function fetchJson(method: string, url: string): Promise<any> {
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

const ENABLE_AJAX_MOCK = !location.href.includes('forms.netsuite.com')// ? 'ns' : location.host.includes('localhost') ? ''
if (ENABLE_AJAX_MOCK) {

}
