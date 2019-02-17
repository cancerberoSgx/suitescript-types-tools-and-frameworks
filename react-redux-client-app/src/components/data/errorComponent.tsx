/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react';
import { ErrorOptions, ServiceError } from '../../store/commonTypes';
import { If, F } from '../misc';


export class ErrorComponent extends React.Component<ErrorOptions | {
  error: string,
  responseText?: string
}> {
  public render() {
    return <div>
      <If c={this.props.error}>{error =>
        <F>
          <h2 className="error-title">Error</h2>
          <If<string> c={typeof error === 'string'} p={error}>{e =>
            <F>
              <h5 className="error-name">Generic Error</h5>
              <p className="error-message">{e}</p>
            </F>
          }
          </If>
          <If<ErrorOptions> c={typeof error === 'object'} p={error}>{e =>
            <F>
              <h5 className="error-name">{error!.name}</h5>
              <p className="error-message">{error!.message}</p>
              <If<string> c={error.stack}>{s =>
                <ul className='error-stack'>
                  {s.split('\n').map((line, i) =>
                    <li key={i}>{line}</li>)}
                </ul>}
              </If>
            </F>}
          </If>
          <If c={this.props.responseText}>{responseText =>
            <iframe css={{ border: 0, width: '100%', height: '400px' }} srcDoc={responseText}>
            </iframe>}
          </If>
        </F>}
      </If>
    </div>
  }
}
