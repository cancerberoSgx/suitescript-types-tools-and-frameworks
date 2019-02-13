/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react';
// import styled from '@emotion/styled';
import { ReactNodeLike } from 'prop-types';
import { LinkProps, Link as RLink } from 'react-router-dom';
import { encodeOptions } from '../utils/routeUrl/urlOptions';
import { styled } from '../styles/theme';


export type Children = ReactNodeLike
export type Props = { children: Children }


export const I = styled.div`display: inline;`

export const NoWrap = (props: Props) =>
  <I css={{ whiteSpace: 'nowrap', }}>
    {props.children}
    <I css={{ whiteSpace: 'normal' }}>&nbsp;</I>
  </I>


export const Count = (props: Props) =>
  <I css={{ fontWeight: 'normal', fontSize: '0.9em' }}>
    (#{props.children})
  </I>


export function Link<O={}>(props: { options: O } & LinkProps & Props) {
  const to = `${props.to}/${encodeOptions(props.options)}`
  return <RLink to={to}>{props.children}</RLink>
}
