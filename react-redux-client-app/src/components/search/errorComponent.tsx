/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { ErrorOptions } from '../../store/recordView';
import * as React from 'react';
// import css from '@emotion/css';


export class ErrorComponent extends React.Component<ErrorOptions> {
  public render() {
    // debugger
    return (<div>
      <div>
        Error: {this.props.error && (this.props.error + '')}
      </div>
      <div>
        {(this.props.error && this.props.error.stack || '').replace(/\n/g, '<br>')}
      </div>
      <div>
        {this.props.responseText &&
          <iframe
            css={{ border: 0, width: '100%', height: '400px' }}
            srcDoc={this.props.responseText}>
          </iframe>}
      </div>

    </div>);
  }
}
