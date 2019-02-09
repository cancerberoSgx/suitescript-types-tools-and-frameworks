interface RenderLinkOptions {
  routeName: string;
  params: { [k: string]: any };
}
declare function buildRouteUrl(config: RenderLinkOptions): string;

function getRoute<T=any>(config: RenderLinkOptions): Promise<T> {
  const url = buildRouteUrl(config)
  return fetch(url)
    .then(res => res.json())
}


export function callApi2(method: string, url: string) {
  return fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
}
