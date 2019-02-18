/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react';
// import styled from '@emotion/styled';
import { ReactNodeLike, ReactElementLike } from 'prop-types';
import { LinkProps, Link as RLink } from 'react-router-dom';
import { encodeOptions } from '../utils/routeUrl/urlOptions';
import { styled } from '../styles/theme';
import { Identical } from '../utils/typesUtil';


export type Children = ReactNodeLike
export type Props = { children: Children }


export const I = styled.div`display: inline;`
export const F = React.Fragment

export const NoWrap = (props: Props) =>
  <I css={{ whiteSpace: 'nowrap', }}>
    {props.children}
    <I css={{ whiteSpace: 'normal' }}>&nbsp;</I>
  </I>


export const Count = (props: Props) =>
  <I css={{ fontWeight: 'normal', fontSize: '0.9em' }}>
    (#{props.children})
  </I>


export function Link(props: {to: string} & Props) {
  return <a href={`${location.pathname}${location.search}#${props.to}`}>{props.children}</a>
  // const to = `${props.to}/${encodeOptions(props.options)}`
  // return <a to={to}>{props.children}</a>
}


export function Js(props: {children: (...args: any[]) => any }) {
  const r = props.children()
  console.log(r);

  return r ? <F>{r}</F> : <F></F>
}





/** if as statement. children need to be in a function and the function accepts a parameter which value is given condition `c` but casted to NotFalsy<C> so there's no need of type guards in the body. Example:
```
<If c={type}>{type =>
  <select multiple={true}>{names[type].map(c =>
      <option value={c.id}>{c.label}</option>)}
  </select>
</If>
```

No error thrown on second line because parameter type is not falsy but keep the original type (excluding falsy values)

Other example:

```
export class ErrorComponent extends React.Component<ErrorOptions> {
  public render() {
    return <div>
      <If c={this.props.error}>{error =>
        <React.Fragment>
          <h2>Error</h2>
          <If c={typeof error === 'string'}>{e =>
            <h3>{e}</h3>}
          </If>
          <If c={typeof error === 'object'}>{e =>
            <React.Fragment>
              <h5>{error!.name}</h5>
              <p>{error!.message}</p>
              <If c={error.stack}>{e =>
                <ul>
                  {e.split('\n').map(e =>
                    <li>{e}</li>)}
                </ul>}
              </If>
            </React.Fragment>}
          </If>
          <If c={this.props.responseText}>{responseText =>
            <iframe css={{ border: 0, width: '100%', height: '400px' }} srcDoc={responseText}>
            </iframe>}
          </If>
        </React.Fragment>}
      </If>
    </div>
  }
}

```
*/
export function If<T extends any = any
// , R = any extends T ? (T extends any ? T : T): T
>(props: { c: any, p?: T, children: (...args: NotFalsy<T>[]) => JSX.Element }) {
  const { c, p } = props
  if (isNotFalsy(c))
    return props.children.apply(null, [...(p ? [p] : []), c ])
  else {
    return null
  }
}


type NotFalsy<C=any> = Exclude<C, Falsy>
type Falsy = null | '' | undefined | false
function isNotFalsy<T>(a: T): a is NotFalsy<T> { return !!a }


// export function If<T extends any = undefined, C =Identical<T, undefined> extends true ? NotFalsy<> : T, E = typeof c extends infer TC ? TC : never>(props: { c: E, children: (...args: [C]) => JSX.Element }) {
//   const { c } = props
//   if (isNotFalsy(c))
//     return props.children.apply(null, [c])
//   else {
//     return null
//   }
// }

// type ff = string extends never ? (never extends string ?  true : false) : false



// /** TODO: cast c so in the children isNotFalsy, ex: I should not use ! in :`<If c={type}><select> {{typedSearchColumnValues[type!].length}</select></If>*/
// export function If2<C extends any, N extends string>(props: { c: { [k in N]: C }, children: (this: { [k in N]: NotFalsy<C> }) => JSX.Element }) {
//   const keys = Object.keys(props).filter(p => 'children')
//   if (keys.length) {
//     const key = keys[0]
//     const c = props[key]
//     if (isNotFalsy(c))
//       return props.children.apply({ [key]: c })
//     else {
//       return null
//     }
//   }

// }

// const If = (props: Props&{c: any}) =>
// export function If<C, Children extends ReactNodeLike>(props: { c: C, children: Children }): Children | null {
//   if (isNotFalsy(props.c))
//     return <p>{props.children}</p>
//   else {
//     return null
//   }
// }

// export function If<C>(props: { c: C, children: Exclude<ReactNodeLike, null | undefined> }): Exclude<ReactNodeLike, null | undefined> | null {{typedSearchColumnValues[type!].length}</select></If> */

// type Return<C, R1, R2> = true extends ReturnType<typeof isNotFalsy, > ? R1 : R2
// export function If<C>(props: { c: C } & Props):  Return<C, JSX.Element, null> {
// type R<C>
// export function If<C extends Falsy ? null: JSX.Element >(props: { c: C } & Props): C extends Falsy ? null : JSX.Element {
