/** @jsx */
// import { css } from 'emotion';
import { complement, readableColor } from 'polished';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '../../styles/theme/definition';
import { LayoutContainer } from './LayoutContainer';
import { Container } from './Container';
import { jsx, css } from '@emotion/core';

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <Wrapper>
    <HeaderInner className="header">
      <HeaderLeft>
        <Title>{title}</Title>
      </HeaderLeft>
      <HeaderNav className="navbar">
        <HeaderNavLink className="home" exact to="/" activeClassName={HeaderLinkActive.name}>
          Home
        </HeaderNavLink>
        <HeaderNavLink className="list-record-types" to="/listRecordTypes/{}" activeClassName={HeaderLinkActive.name}>
          List Types
        </HeaderNavLink>
        <HeaderNavLink className="search" to="/search/{}" activeClassName={HeaderLinkActive.name}>
          Search
        </HeaderNavLink>
        <HeaderNavLink className="example-links" to="/exampleLinks/" activeClassName={HeaderLinkActive.name}>
          Example Links
        </HeaderNavLink>

        <HeaderNavLink className="record-view" to="/recordView/inventoryitem/465/{}" activeClassName={HeaderLinkActive.name}>
          Record
        </HeaderNavLink>

      </HeaderNav>
      <HeaderRight>
        <LayoutContainer>
          {({ theme, setTheme }) => (
            <React.Fragment>
              <ThemeSwitcherButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Switch to {theme === 'light' ? 'dark' : 'light'} theme
              </ThemeSwitcherButton>
            </React.Fragment>
          )}
        </LayoutContainer>
      </HeaderRight>
    </HeaderInner>
  </Wrapper>
)

export default Header

const Wrapper = styled('header')`
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.theme.colors.brand};
  font-family: ${props => props.theme.fonts.headings};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: hidden;
  overflow: hidden;
  & > * * {
    overflow-x: hidden;
    overflow-y: hidden;
    overflow: hidden;
  }

`

const HeaderLeft = styled('div')`
  padding-right: 1rem;
`

const HeaderNav = styled('nav')`
  flex: 1 1 auto;
  margin: 1rem 0;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0;
  }
`

const HeaderNavLink = styled(NavLink)`
  margin: 0 1rem;
  text-decoration: none;
`

const HeaderLinkActive = css`
  text-decoration: underline;
  font-weight: 800;
`

const HeaderRight = styled('div')`
  padding-left: 1rem;
`

const Title = styled('h2')`
  margin: 0;
  font-weight: 500;
`

const ThemeSwitcherButton = styled('button')`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border: 1px solid ${props => props.theme.colors.brand};
  border-radius: 3px;
  background-color: ${props => props.theme.colors.background}
  color: ${props => readableColor(props.theme.colors.background)};
  font-size: 0.8rem;
  text-transform: uppercase;
  -weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color:  ${props => complement(props.theme.colors.background)};
    color: ${props => readableColor(complement(props.theme.colors.background))};
  }
`
