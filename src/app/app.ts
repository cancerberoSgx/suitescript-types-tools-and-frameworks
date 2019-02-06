import { ServerRequest, ServerResponse } from 'N/http';

import { find } from '../misc/misc';
import { ReactLike } from '../jsx/createElement';
import { redirect } from 'N/redirect';
import { renderBrowserCode, RenderLinkOptions, buildUrl, ROUTEPARAMNAME_NOPREFIX, ROUTEPARAMNAME, ROUTEPARAMPREFIX, SCRIPTLETURLPREFIX } from './browserCode';
var f = find// install array.prototype.find

export type Params = { [name: string]: any }

interface RouterHandlerOptions extends DispatchOptions {
  params: Params
}

interface DispatchOptions {
  request: ServerRequest
  response: ServerResponse
}

interface IApp {
  addRoute(r: Route): void
  dispatch(d: DispatchOptions): void
}

export interface Route {
  /** the route unique name and it will be used as a param for this route always */
  name: string
  handler(handler: RouterHandlerOptions): any
  contentType?: 'json' | 'html'
}


export class App implements IApp {
  routes: Route[] = []
  currentDispatchOptions: DispatchOptions | undefined;
  protected noRouteParamRoute: Route|undefined;
  protected noRouteFoundRoute: Route|undefined

  addRoute(r: Route): void {
    this.routes.push(r)
  }

  dispatch(d: DispatchOptions): void {
    this.currentDispatchOptions = d
    const params = this.getParamsWithoutPrefix(d.request)
    const routeName = params[`${ROUTEPARAMNAME_NOPREFIX}`]
    let route: Route|undefined
    if (!routeName) {
      if(this.noRouteParamRoute){
        route = this.noRouteParamRoute
      }
      else {
        return this.notFound(d, `no route name given in url`)
      }
    }
    route = route || this.routes.find(r => r.name === routeName)
    if (!route) {
      if(this.noRouteFoundRoute){
        route = this.noRouteFoundRoute
      }
      else {
        return this.notFound(d, `no route found with name ${routeName}`);
      }
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
${renderBrowserCode()}
${ReactLike.getClientCode().map(c => c.code).join('\n')}
</script>`)
      d.response.write(result)
    }
  }

  /** set a default route in case url has no routeName param */
  setNoRouteParamRoute(r: Route): any {
    this.noRouteParamRoute = r
  }
  
  /** set a default route in case no route is found with given routeName param */
  setNoRouteFoundRoute(r: Route): any {
    this.noRouteFoundRoute = r
  }

  /** default route not found handler - when noRouteParamRoute or no RouteFoundRoute is installed and no route installed matches the url */
  notFound(d: DispatchOptions, msg = 'Page not found'): any {
    console.log(`App Error: ${msg}`);
  }

  /** default redirect implementation. Routes needing to redirect to other routes can call this method */
  redirect(config: { redirect: string, messageFromRedirect?: string }) {
    redirect({ url: `${config.redirect}&${ROUTEPARAMPREFIX}messageFromRedirect=${config.messageFromRedirect || ''}`, })
  }

  /** return location.search url serverside equivalent with parameters ordered, first netsuite's suitelet parameters, then routeName and then route specific params.  */
  getCurrentRealUrlSearchFragment(): string {
    const params = this.currentDispatchOptions!.request.parameters
    const otherParams = this.getOtherParams()
    const otherParamsUrl = Object.keys(otherParams).map(p => `${p}=${otherParams[p]}`).join('&')
    const routeNameUrl = Object.keys(params).filter(p => p === ROUTEPARAMNAME).map(p => `${p}=${params[p]}`).join('&')
    const routeParamsUrl = Object.keys(params).filter(p => p !== ROUTEPARAMNAME && p.indexOf(ROUTEPARAMPREFIX) === 0).map(p => `${p}=${params[p]}`).join('&')
    return `${SCRIPTLETURLPREFIX}?${otherParamsUrl}&${routeNameUrl}&${routeParamsUrl}`
  }

  /** will build a relative link to given route and params - useful to build links to other routes in pages UI / markup/ anchors. */
  renderLink(config: RenderLinkOptions): string {
    const otherParams = this.getOtherParams()
    const otherParamsUrl = Object.keys(otherParams).map(p => `${p}=${otherParams[p]}`).join('&')
    const paramsUrl = this.getParamsUrl(config.params)
    const routeParamsUrl = this.getParamsUrl({ [ROUTEPARAMNAME_NOPREFIX]: config.routeName })
    const currentUrlSearchFragment = `?${otherParamsUrl}&${routeParamsUrl}&${paramsUrl}`
    return buildUrl({
      ...config,
      params: this.getParamsWithPrefix(config.params),
      currentUrlSearchFragment: currentUrlSearchFragment
    })
  }

  protected getParamsWithoutPrefix(request: ServerRequest): Params {
    const params: Params = {}
    Object.keys(request.parameters).filter(p => p.indexOf(ROUTEPARAMPREFIX) === 0).forEach(p => {
      params[p.substring(ROUTEPARAMPREFIX.length, p.length)] = request.parameters[p]
    })
    return params
  }

  protected getOtherParams(): Params {
    const otherParams: Params = {}
    Object.keys(this.currentDispatchOptions!.request.parameters).filter(p => p.indexOf(ROUTEPARAMPREFIX) !== 0).forEach(p => {
      otherParams[p] = this.currentDispatchOptions!.request.parameters[p]
    })
    return otherParams
  }

  protected getParamsUrl(params: Params, except: string[] = []) {
    return `${Object.keys(params).filter(p => except.indexOf(p) === -1).map(p => `${ROUTEPARAMPREFIX}${p}=${params[p]}`).join('&')}`
  }

  protected getParamsWithPrefix(params: Params, except: string[] = []): Params {
    var params_: Params = {}
    Object.keys(params).filter(p => except.indexOf(p) === -1).forEach(p => {
      params_[ROUTEPARAMPREFIX + p] = params[p]
    })
    return params_
  }

}


