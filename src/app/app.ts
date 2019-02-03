import { ServerRequest, ServerResponse } from 'N/http';

import { find } from '../misc/misc';import { ReactLike } from '../jsx/createElement';
 var f = find// install array.prototype.find



interface RouterHandlerOptions<Params extends string=string> extends DispatchOptions {
  params: { [name in Params]: string }
}
interface Param {
  name: string
  value: string
}
interface DispatchOptions {
  request: ServerRequest
  response: ServerResponse
}

export interface IApp {
  addRoute(r: Route): void
  dispatch(d: DispatchOptions): void
}

interface Route<Params extends string=string> {
  /** the route unique name and it will be used as a param for this route always */
  name: string
  handler(handler: RouterHandlerOptions): any
  contentType?: 'json' | 'html'
}



const ROUTEPARAMNAME_NOPREFIX = 'routeParamName'
const ROUTEPARAMPREFIX = '__app__'
const ROUTEPARAMNAME:string = ROUTEPARAMPREFIX+ROUTEPARAMNAME_NOPREFIX
const SCRIPTLETURLPREFIX = '/app/site/hosting/scriptlet.nl'



export class App implements IApp {
  routes: Route[] = []
  protected paramPrefix = ROUTEPARAMPREFIX
  protected routeParamName = ROUTEPARAMNAME_NOPREFIX
  currentDispatchOptions: DispatchOptions | undefined;
  
  addRoute(r: Route): void {
    this.routes.push(r)
  }
  
  
  dispatch(d: DispatchOptions): void {
    this.currentDispatchOptions = d
    const params = this.getParamsWithoutPrefix(d.request)
    const routeName = params[`${this.routeParamName}`]
    if (!routeName) {
      return this.notFound(d, `no route name given in url`)
    }
    const route = this.routes.find(r => r.name === routeName)
    if (!route) {
      return this.notFound(d, `no route found with name ${routeName}`);
    }
    // TODO: if route params are mandatory , verify that they were provided in url or fail
    if (route.contentType === 'json') {
      d.response.setHeader({ name: 'Content-Type', value: 'application/json; charset=UTF-8' })
    }
    const result = route.handler({ ...d, params })
    if (result && route.contentType === 'json') {
      d.response.write(JSON.stringify(result))
    }
    else if (result && typeof result === 'string' && !route.contentType || route.contentType === 'html') {
      d.response.write(`<script>
${fetchAndRenderHtmlFragmentHandlerString()}
${ReactLike.getClientCode().map(c=>c.code).join('\n')}
</script>`)
      d.response.write(result)
    }
    // else if not result we assume the route already write in the response.
  }

  notFound(d: DispatchOptions, msg = 'Page not found'): any {
    console.log(`App Error: ${msg}`);
  }
  
  protected getParamsWithoutPrefix(request: ServerRequest): Params {
    const params: Params = {}
    Object.keys(request.parameters).filter(p => p.indexOf(this.paramPrefix) === 0).forEach(p => {
      params[p.substring(this.paramPrefix.length, p.length)] = request.parameters[p]
    })
    return params
  }
  
  getOtherParams(): Params {
    const otherParams: Params = {}
    Object.keys(this.currentDispatchOptions!.request.parameters).filter(p => p.indexOf(this.paramPrefix) !== 0).forEach(p => {
      otherParams[p] = this.currentDispatchOptions!.request.parameters[p]
    })
    return otherParams
  }
  
  getParamsUrl(params: Params, except: string[] = []) {
    return `${Object.keys(params).filter(p => except.indexOf(p) === -1).map(p => `${this.paramPrefix}${p}=${params[p]}`).join('&')}`
  }
  
  getParamsWithPrefix(params: Params, except: string[] = []): Params {
    var params_: Params = {}
    Object.keys(params).filter(p => except.indexOf(p) === -1).forEach(p => {
      params_[this.paramPrefix + p] = params[p]
    })
    return params_
  }
  
  getCurrentRealUrlSearchFragment(): string{
    const params = this.currentDispatchOptions!.request.parameters
    const otherParams = this.getOtherParams()
    const otherParamsUrl = Object.keys(otherParams).map(p => `${p}=${otherParams[p]}`).join('&')
    const routeNameUrl = Object.keys(params).filter(p => p === ROUTEPARAMNAME).map(p=>`${p}=${params[p]}`).join('&')
    const routeParamsUrl = Object.keys(params).filter(p => p !== ROUTEPARAMNAME && p.indexOf(ROUTEPARAMPREFIX)===0).map(p=>`${p}=${params[p]}`).join('&')
    return `${SCRIPTLETURLPREFIX}?${otherParamsUrl}&${routeNameUrl}&${routeParamsUrl}`
  }

  renderLink(config: RenderLinkOptions): string {
    const otherParams = this.getOtherParams()
    const otherParamsUrl = Object.keys(otherParams).map(p => `${p}=${otherParams[p]}`).join('&')
    const paramsUrl = this.getParamsUrl(config.params)
    const routeParamsUrl = this.getParamsUrl({ [this.routeParamName]: config.routeName })
    const currentUrlSearchFragment = `?${otherParamsUrl}&${routeParamsUrl}&${paramsUrl}`
    return buildUrl({
      ...config,
      params: this.getParamsWithPrefix(config.params),
      // routeParamName: `${this.paramPrefix}${this.routeParamName}`,
      currentUrlSearchFragment: currentUrlSearchFragment
    })
  }
}

type Params = { [name: string]: string }

export interface RenderLinkOptions {
  routeName: string,
  params: Params,
}
interface BuildUrlOptions extends RenderLinkOptions {
  /** the part of the current url with the search query with a routeParamName parameter present like `?script=293&deploy=1&compid=TSTDRV1844288&h=192074825c3ca8751438&routeParamName=mainPage&name=lau` */
  currentUrlSearchFragment: string
  // routeParamName: string
}
export interface RenderFragmentOptions extends RenderLinkOptions {
  selector: string
  // routeParamName: string
}



/** this function is meant to be evaluated in the browser and also in the server! */
function buildUrl(config: BuildUrlOptions) {
  const clean = `${SCRIPTLETURLPREFIX}${config.currentUrlSearchFragment.substring(0, config.currentUrlSearchFragment.indexOf(`&${ROUTEPARAMNAME}=`))}&${ROUTEPARAMNAME}=${config.routeName}`
  const newParams = `${clean}&${Object.keys(config.params).map(p => `${p}=${config.params[p]}`).join('&')}`
  return newParams
}


/** this function is meant to be evaluated in the browser! */
function fetchAndRenderHtmlFragment(config: RenderFragmentOptions) {
  const url = buildRouteUrl(config)
  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      const parent = document.querySelector(config.selector)
      if (parent) {
        parent.innerHTML = html
      }
    });
}


function buildRouteUrl(config: RenderLinkOptions): string{
  const params : Params = {}
  Object.keys(config.params).map(p=>{params[`${ROUTEPARAMPREFIX}${p}`] = config.params[p]})
  const url = buildUrl({ ...config, currentUrlSearchFragment: location.search, params})
  return url
}

function fetchAndRenderHtmlFragmentHandlerString() {
  // @ts-ignore
  const assign = __assign.toString()
  const  s = `
var ROUTEPARAMNAME = "${ROUTEPARAMNAME}";
var ROUTEPARAMPREFIX = "${ROUTEPARAMPREFIX}";
var SCRIPTLETURLPREFIX = "${SCRIPTLETURLPREFIX}"; 
var __assign = ${assign}
${buildRouteUrl.toString()}
${buildUrl.toString()}
${fetchAndRenderHtmlFragment.toString()}
function fetchAndRenderHtml(config){
  return fetchAndRenderHtmlFragment(config)
}
function buildLink(config){
  return buildRouteUrl(config)
}
var a = 1
  `
  return s
  // console.log(`<textarea>${s}</textarea>`);
  // return ()=>{}
  // return eval(`(${s})`)
}