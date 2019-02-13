import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { decodeOptions, encodeOptions } from '../utils/routeUrl/urlOptions';
import { getPosition } from '../utils/misc';

/**
 * abstract component supporting options object as route parameter. Extenders must implement method getRouteOptionNames
 */
export abstract class OptionsUrlComponent<P extends RouteComponentProps<{ options?: string }>, S extends any, Options = {}> extends React.Component<P, S> {
  constructor(p: P, s: S) { super(p, s); this.state = s }

  abstract getRouteOptionNames(): string[];

  async componentWillMount() {
    await this.updateStateWithOptions()
  }

  async componentWillUpdate() {
    await this.updateOptionsWithState()
  }

  protected getOptions(): Promise<Options> {
    return decodeOptions(this.props.match.params.options)
  }

  protected async updateStateWithOptions(options?: Options) {
    let realOptions: Options = options || (await decodeOptions(this.props.match.params.options))
    // if (!options) { }
    // const realOptions = options || (await decodeOptions(this.props.match.params.options))
    const o: Options = {} as any;
    Object.keys(realOptions).filter(k => realOptions[k] != this.state[k]).forEach(k => { o[k] = realOptions[k]; });
    if (Object.keys(o).length) {
      this.setState({ ...this.state as any, ...o as any });
    }
  }

  protected async updateOptionsWithState(options?: Options) {
    let realOptions: Options = options || (await decodeOptions(this.props.match.params.options))
    const newOptions: Options = {} as any
    // remove extraneous options
    Object.keys(realOptions).filter(k => this.getRouteOptionNames().indexOf(k) === -1).forEach(k => { delete realOptions[k] })
    Object.keys(this.state)
      .filter(k => realOptions[k] != this.state[k] && this.getRouteOptionNames().indexOf(k) !== -1)
      .forEach(k => {
        newOptions[k] = this.state[k];
      });
    if (Object.keys(newOptions).length) {
      const level = Object.keys(this.props.match.params).length;
      const index = getPosition(this.props.match.url, '/', level + 1);
      const prefix = this.props.match.url.substring(0, index);
      const newPath = prefix + '/' + encodeOptions({ ...realOptions as any, ...newOptions as any });
      // console.log('optionsUrlComponent push', newPath);
      this.props.history.replace(newPath);
    }
  }
}



