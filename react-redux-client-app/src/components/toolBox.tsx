import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ApplicationState } from '../store';
import styled from '../styles/theme/definition';
import { maxWidth, minWidth } from '../styles/media';
import { lighten, stripUnit, darken, mix } from 'polished';
import { PagePadding } from './layout/Page';

interface P { className?: string }
interface S {
  active?: boolean
}
class ToolBox extends React.Component<P, S> {

  state: S = {}
  public render() {

    return (
      <Wrapper className={(this.state.active ? 'active ' : '') + (this.props.className || '')}>
        <button className="button" onClick={e => this.setState({ ...this.state, active: !this.state.active })}>{this.state.active ? 'Hide Settings' : 'Show Settings'}</button>
        <div className="content">
          {...this.props.children as any[]}
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled(PagePadding)`
  position: fixed;
  z-index: 999;
  border-radius: 3px;
  width: 95%;
  left: 0px;
  top: 0px;

  & .content {
    display: none;
    border-radius: 6px;
    width: 100%;
  }


  & .button {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border: 1px solid ${props => props.theme.colors.white};
    border-radius: 3px;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.brand};
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0.7;
  }

  &.active {
    .content {
      display: block;
      background: ${props => mix(0.4, props.theme.colors.brand, props.theme.colors.background)};
      ${props => minWidth(props).md`1em`}
      padding: 1em;
    }
    .button {
      opacity: 1;
      background-color: ${props => props.theme.colors.brand};
      color: ${props => props.theme.colors.white};
    }
  }

}

`



export default connect(
)(ToolBox)

