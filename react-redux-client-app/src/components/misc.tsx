/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react';
import styled from 'react-emotion';
import { ReactNodeLike } from 'prop-types';

export const I = styled.div`display: inline`

export type Children = ReactNodeLike
export type Props = { children: Children }

export const NoWrap = (props: Props) =>
  <I css={{ whiteSpace: 'nowrap', }}>
    {props.children}
    <I css={{ whiteSpace: 'normal' }}>&nbsp;</I>
  </I>


export const Count = (props: Props) =>
  <I css={{ fontWeight: 'normal', fontSize: '0.9em' }}>
    (#{props.children})
  </I>

