import { RouteComponentProps } from 'react-router';
import * as React from 'react';
import { tryTo } from '../utils/misc';
import { State, getPosition } from '../pages/recordView/index';


export abstract class OptionsUrlPage<P extends RouteComponentProps<{ options?: string }>, S extends any, Options = {}> extends React.Component<P, S> {
  protected decodeOptions(op = this.props.match.params.options): Options {
    if (op) {
      return tryTo(() => JSON.parse(decodeURIComponent(op || '{}'))) || {} as any;
    }
    return {} as any;
  }
  protected encodeOptions(options: Options): string | {} {
    return tryTo(() => encodeURIComponent(JSON.stringify(options))) || {};
  }
  protected updateStateWithOptions(options: Options = this.decodeOptions()) {
    const o: Options = {} as any;
    Object.keys(options).filter(k => options[k] != this.state[k]).forEach(k => { o[k] = options[k]; });
    if (Object.keys(o).length) {
      this.setState({ ...this.state as any, ...o as any });
      // Object.keys(o).forEach(k => this.state[k] = o[k]);
    }
  }
  protected updateOptionsWithState(options: Options = this.decodeOptions()) {
    const newOptions: Options = {} as any
    Object.keys(this.state)
      .filter(k => options[k] != this.state[k] && this.getRouteOptionNames().indexOf(k) !== -1).forEach(k => {
        newOptions[k] = this.state[k];
      });
    if (Object.keys(newOptions).length) {
      const level = Object.keys(this.props.match.params).length;
      const index = getPosition(this.props.match.url, '/', level + 1);
      const prefix = this.props.match.url.substring(0, index);
      const newPath = prefix + '/' + this.encodeOptions({ ...options as any, ...newOptions as any });
      this.props.history.push(newPath);
    }
  }
  abstract getRouteOptionNames(): string[];
}
