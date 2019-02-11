import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ApplicationState } from '../store';
import styled from '../styles/theme/definition';
import { media } from '../styles/media';

interface P { }
interface S {
  active?: boolean
}
class ToolBox extends React.Component<P, S> {

  state: S = {}
  public render() {

    return (
      <Wrapper className={this.state.active ? 'active' : ''}>
        <Button onClick={e => this.setState({ ...this.state, active: !this.state.active })}>{this.state.active ? 'Hide Settings' : 'Show Settings'}</Button>
        <div className="content">
          {...this.props.children as any[]}
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled('div')`
  position: fixed;

  ${props => media(props).md`top: 10px`}
  z-index: 2;
  border-radius: 3px;
  width: 100%;

  & .content {
    display: none;
    padding: 0.6em;
    border-radius: 6px;
    background-color: ${props => props.theme.colors.background};
    li {
      display: inline;
      padding-right: 1em;
    }
  }

  &.active .content {
    display: block;
  }
  $.active button {
    opacity: 1
  }
`

const Button = styled('button')`
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
  opacity: 0.6;
  &:hover,
  &:focus {
    opacity: 1;
    background-color: ${props => props.theme.colors.brand};
    color: ${props => props.theme.colors.white};
  }
`


export default connect(
)(ToolBox)

