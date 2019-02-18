import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { decodeOptions, encodeOptions } from '../utils/routeUrl/urlOptions'
import { getPosition } from '../utils/misc'

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
    // console.log('componentWillMount', this.state, this.props, await this.getOptions());
    // debugger
    await this.syncStateWithUrlOptions({ dontUpdateOptionsWithState: true })
  }
  async componentWillUpdate() {
    // console.log('componentWillUpdate', this.state, this.props, await this.getOptions());
    // debugger
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
    // newOptions = { ...newOptions, }
    // debugger
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

  protected async getOptions(): Promise<Options> {
    // console.log('getOptions1', this.props.match.params.options);

    //TODO: look if the string changed from last time, cache!
    const options = await decodeOptions<Options>(this.props.match.params.options)
    // console.log('getOptions', this.props.match.params.options, options);
    return options
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
    let realOptions: Options = options || { ...await this.getOptions(), ...await this.getExtraUrlOptions() }
    const o: Options = {} as any
    Object.keys(realOptions)
      .filter(k => realOptions[k] != this.state[k])
      .forEach(k => {
        o[k] = realOptions[k]
      })
    return o
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
      // console.log('setOptions push', newPath)
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
      .filter(k => realOptions[k] != this.state[k])
      .forEach(k => {
        newOptions[k] = this.state[k]
      })
    return newOptions
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



