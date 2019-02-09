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
  // debugger
  return fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
}
