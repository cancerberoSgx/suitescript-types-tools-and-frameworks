import { mix } from 'polished';
import * as React from 'react';
import { connect } from 'react-redux';
import { minWidth } from '../styles/media';
import styled from '../styles/theme/definition';
import { PagePadding, PagePaddingTopLeft } from './layout/Page';

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

const Wrapper = styled(PagePaddingTopLeft)`
  position: fixed;
  z-index: 2;
  border-radius: 3px;
  width: 95%;
  pointer-events: painted;

  & .content {
    display: none;
    border-radius: 6px;
    width: 5%;
    padding: 0;
    margin: 0;
  }

  & .button {
    position: absolute;
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
    opacity: 0.8;
  }

  &.active {
    .content {
      width: 100%;
      display: block;
      background: ${props => mix(0.4, props.theme.colors.brand, props.theme.colors.background)};
      ${props => minWidth(props).md`1em`}
      padding: 1em;
      margin: 0.3em;
    }
    .button {
      position: static;
      opacity: 1;
      background-color: ${props => props.theme.colors.brand};
      color: ${props => props.theme.colors.white};
    }
  }

}

`



export default connect(
)(ToolBox)

