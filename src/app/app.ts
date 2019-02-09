import { ServerRequest, ServerResponse } from 'N/http';

import { find } from "../misc/arrayPrototypeFind";
import { ReactLike } from '../jsx/createElement';
import { redirect } from 'N/redirect';
import { renderBrowserCode, RenderLinkOptions, buildUrl, ROUTEPARAMNAME_NOPREFIX, ROUTEPARAMNAME, ROUTEPARAMPREFIX, SCRIPTLETURLPREFIX, paramsToUrl } from './browserCode';
var f = find// install array.prototype.find

export type Params = {
  [name: string]: any
}

export interface RouteHandlerParams {
  renderLink: typeof App.prototype.renderLink
  currentUrl: string
  currentParams: Params
  // renderLink(config: RenderLinkOptions & { forgetCurrentRouteParams?: boolean }): string
}

interface RouterHandlerOptions extends DispatchOptions {
  params: RouteHandlerParams&Params
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
  dontPrintBrowserJsCode?: boolean
}


export class App implements IApp {
  routes: Route[] = []
  currentDispatchOptions: DispatchOptions | undefined;
  protected noRouteParamRoute: Route | undefined;
  protected noRouteFoundRoute: Route | undefined

  addRoute(r: Route): void {
    this.routes.push(r)
  }

  dispatch(d: DispatchOptions): void {
    this.currentDispatchOptions = d
    const params = {
      ...this.getParamsWithoutPrefix(d.request),
      renderLink: this.renderLink.bind(this),
      currentUrl: encodeURIComponent(this.getCurrentRealUrlSearchFragment()),
    } as RouteHandlerParams&Params
    params.currentParams = { ...params, currentParams: undefined }

    const routeName = params[`${ROUTEPARAMNAME_NOPREFIX}`]
    let route: Route | undefined
    if (!routeName) {
      if (this.noRouteParamRoute) {
        route = this.noRouteParamRoute
      }
      else {
        return this.notFound(d, `no route name given in url`)
      }
    }
    route = route || this.routes.find(r => r.name === routeName)
    if (!route) {
      if (this.noRouteFoundRoute) {
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
      if(!route.dontPrintBrowserJsCode){
        d.response.write(this.getBrowserJsCode())
      }
      d.response.write(result)
    }
  }

  getBrowserJsCode(): string {
    return `<script>
${renderBrowserCode()}
${ReactLike.getClientCode().map(c => c.code).join('\n')}
</script>`;
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
    // const msgParam = `&${ROUTEPARAMPREFIX}messageFromRedirect=`
    // we remove messageFromRedirectParam that we assume is the last one if any
    // const url = (config.redirect.indexOf(msgParam) === -1 || !config.messageFromRedirect) ? config.redirect :
      // config.redirect.substring(config.redirect.indexOf(msgParam), config.redirect.length) + msgParam + config.messageFromRedirect

    // console.log(url+1)

    redirect({ url: `${config.redirect}&${ROUTEPARAMPREFIX}messageFromRedirect=${config.messageFromRedirect}` })
  }

  /** return location.search url server side equivalent with parameters ordered, first NetSuite's SuiteLet parameters, then routeName and then route specific params.  */
  getCurrentRealUrlSearchFragment(): string {
    const params = this.currentDispatchOptions!.request.parameters
    const otherParamsUrl = paramsToUrl(this.getOtherParams())
    const routeNameUrl = paramsToUrl(params, p => p === ROUTEPARAMNAME)
    const routeParamsUrl = paramsToUrl(params, p => p !== ROUTEPARAMNAME && p.indexOf(ROUTEPARAMPREFIX) === 0)
    return `${SCRIPTLETURLPREFIX}?${otherParamsUrl}&${routeNameUrl}&${routeParamsUrl}`
  }

  /** will build a relative link to given route and params - useful to build links to other routes in pages UI / markup/ anchors. */
  renderLink(config: RenderLinkOptions & { forgetCurrentRouteParams?: boolean }): string {
    const otherParamsUrl = paramsToUrl(this.getOtherParams())
    const paramsUrl = this.getParamsUrl(config.params)
    const routeParamsUrl = this.getParamsUrl({ [ROUTEPARAMNAME_NOPREFIX]: config.routeName })
    const currentRouteParamsToMaintain = config.forgetCurrentRouteParams ? {} : this.getCurrentRouteParams(config)
    return buildUrl({
      ...config,
      params: { ...currentRouteParamsToMaintain, ...this.getParamsWithPrefix(config.params) },
      currentUrlSearchFragment: `?${otherParamsUrl}&${routeParamsUrl}&${paramsUrl}`
    })
  }

  /**
   * return current route params without route name (useful to remember current route params to keep in new route url) */
  protected getCurrentRouteParams(config: RenderLinkOptions, dontCleanEmptyParams?: boolean): Params {
    const params: Params = {}
    const currentParams = this.currentDispatchOptions!.request.parameters
    Object.keys(currentParams)
      .filter(p => p.indexOf(ROUTEPARAMPREFIX) === 0 && p !== ROUTEPARAMNAME && (dontCleanEmptyParams || currentParams[p] !== ''))
      .forEach(p => {
        params[p] = currentParams[p]
      })
    return params
  }

  protected getParamsWithoutPrefix(request: ServerRequest): Params {
    const params: Params = {}
    Object.keys(request.parameters)
      .filter(p => p.indexOf(ROUTEPARAMPREFIX) === 0)
      .forEach(p => {
        params[p.substring(ROUTEPARAMPREFIX.length, p.length)] = request.parameters[p]
      })
    return params
  }

  protected getOtherParams(): Params {
    const otherParams: Params = {}
    Object.keys(this.currentDispatchOptions!.request.parameters)
      .filter(p => p.indexOf(ROUTEPARAMPREFIX) !== 0)
      .forEach(p => {
        otherParams[p] = this.currentDispatchOptions!.request.parameters[p]
      })
    return otherParams
  }


  protected getParamsUrl(params: Params, except: string[] = []) {
    return `${Object.keys(params).filter(p => except.indexOf(p) === -1).map(p => `${ROUTEPARAMPREFIX}${p}=${params[p]}`).join('&')}`
  }

  protected getParamsWithPrefix(params: Params, except: string[] = []): Params {
    var params_: Params = {}
    Object.keys(params)
      .filter(p => except.indexOf(p) === -1)
      .forEach(p => {
        params_[ROUTEPARAMPREFIX + p] = params[p]
      })
    return params_
  }

}


