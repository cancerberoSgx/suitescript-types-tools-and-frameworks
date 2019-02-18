import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { decodeOptions, encodeOptions } from '../utils/routeUrl/urlOptions'
import { getPosition, tryTo } from '../utils/misc'

/**
 * abstract component supporting options object as route parameter. Extenders must implement method getRouteOptionNames
 */
export abstract class OptionsUrlComponent<P extends RouteComponentProps<{ options?: string }>, S extends any, Options extends Partial<S>> extends React.Component<P, S> {

  constructor(p: P, s: S) {
    super(p, s)
    this.state = s
  }

  protected abstract getRouteOptionNames(): string[]

  protected abstract async executeActionForNewOptions(options: Partial<Options>): Promise<void>

  async componentWillMount() {
    await this.syncStateWithUrlOptions({ dontUpdateOptionsWithState: true })
  }
  async componentWillUpdate() {
    await this.syncStateWithUrlOptions({ dontUpdateStateWithOptions: true })
  }

  private async syncStateWithUrlOptions(config: { dontUpdateOptionsWithState?: boolean, dontUpdateStateWithOptions?: boolean } = {}) {

    let newOptions: Options = {} as Options
    if (!config.dontUpdateStateWithOptions) {
      newOptions = { ...newOptions, ...await this.updateStateWithOptions() }
    }
    if (!config.dontUpdateOptionsWithState) {
      newOptions = { ...newOptions, ...await this.updateOptionsWithState() }
    }
    if (Object.keys(newOptions).length) {
      // console.log('executeActionForNewOptions', newOptions);
      this.executeActionForNewOptions({ ...newOptions })
    }
  }
  /** subclasses can override to add extra options before calling executeActionForNewOptions. For
   * example, if some options are taken from other parts of the url besides :options.
   *
   * Subclasses that consume all its options from the :options route param dont need this.
   *
   * TODO: probably that use case (if ts the only one) we can implement generically */
  protected async getExtraUrlOptions(): Promise<Partial<S>> {
    return {}
  }

  private lastOptionsParams: string | undefined
  private lastOptions: Options | undefined
  protected async getOptions(): Promise<Options> {
    const p = this.props.match.params.options
    if (p !== this.lastOptionsParams || !this.lastOptions) {
      const options = await decodeOptions<Options>(p)
      this.lastOptions = options
      this.lastOptionsParams = p
      return options
    }
    return this.lastOptions
  }

  /** returns options in url not found in state (the state just updated with these) */
  protected async updateStateWithOptions(options?: Options): Promise<Options> {
    const o = await this.getUrlOptionsNotInState(options)
    if (Object.keys(o).length) {
      this.setState({ ...this.state, ...o })
    }
    return o
  }

  protected async getUrlOptionsNotInState(options?: Options): Promise<Options> {
    try {
      // debugger
      const currentOptions = await this.getOptions()
      const extraOptions = await this.getExtraUrlOptions()
      let realOptions: Options = options || { ...currentOptions || {}, ...extraOptions || {} }
      // debugger
      const o: Options = {} as any
      Object.keys(realOptions)
        .filter(k => this.equals(realOptions[k], this.state[k]))//  JSON.stringify(realOptions[k] || '') != JSON.stringify(this.state[k]) || '')
        // .filter(k => realOptions[k] != this.state[k])
        .forEach(k => {
          o[k] = realOptions[k]
        })
      return o
    } catch (error) {
      // debugger
      throw error
    }

  }


  /** returns options in state that were not found in url options (the url options was just updated with these) */
  protected async updateOptionsWithState(options?: Options): Promise<Options> {
    const newOptions = await this.getStateOptionsNotInUrl(options)
    await this.setOptions(newOptions)
    return newOptions
  }

  protected async setOptions(options: Options): Promise<void> {
    const newPath = await this.getOptionsUrlPath(options)
    if (newPath) {
      this.props.history.replace(newPath)
    }
  }

  /** assumes options are already in the current url, and they are the last route fragment: ex: /item/6/{opt:1} */
  protected async getOptionsUrlPath(options: Options): Promise<string | undefined> {
    if (Object.keys(options).length) {
      const level = Object.keys(this.props.match.params).length
      const index = getPosition(this.props.match.url, '/', level + 1)
      const prefix = this.props.match.url.substring(0, index)
      const newPath = prefix + '/' + encodeOptions({ ...await this.getOptions(), ...options })
      return newPath
    }
  }

  protected async getStateOptionsNotInUrl(options?: Options): Promise<Options> {
    let realOptions: Options = options || (await this.getOptions())
    const newOptions: Options = {} as Options
    Object.keys(realOptions)  // remove extraneous options that might be in url
      .filter(k => this.getRouteOptionNames().indexOf(k) === -1)
      .forEach(k => { delete realOptions[k] })
    Object.keys(this.getStateOptions())
      // .filter(k => realOptions[k] != this.state[k])
      .filter(k => this.equals(realOptions[k], this.state[k]))//JSON.stringify(realOptions[k] || '') != JSON.stringify(this.state[k]) || '')
      .forEach(k => {
        newOptions[k] = this.state[k]
      })
    return newOptions
  }
  protected equals(a: any, b: any): boolean {
    const r = tryTo(()=>JSON.stringify(a || '') != JSON.stringify(b || ''))
    if(typeof r ==='undefined'){
      return a!=b
    }
    return r
  }

  protected getStateOptions() {
    const options: Options = {} as Options
    Object.keys(this.state)
      .filter(k => this.getRouteOptionNames().indexOf(k) !== -1)
      .forEach(k => {
        options[k] = this.state[k]
      })
    return options
  }

}



