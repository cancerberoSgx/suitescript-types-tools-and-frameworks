import * as React from 'react'
import { Page } from '../components/layout/Page'
import { Container } from '../components/layout/Container'
import { styled } from '../styles/theme'

export default () => (
  <Page>
    <Container>
      <PageContent className="home">
        <h1>Welcome</h1>
        <p>This is a client app written with React, Redux and TypeScript to test how well it runs in NS
          and experience how easy is to represent NS data in UI using modern HTML technologies and standards
        </p>
        <p>Author: Sebastián Gurin</p>
        <p>Relevant notes:</p>
        <ul>
          <li>Languages: TypeScript / JSX</li>
          <li>Backend: Consumes existing services implemented for app framework in <a href="https://github.com/cancerberoSgx/suitescript-types-tools-and-frameworks">TypeScript tools and app framework</a> - (TypeScript - SuiteLet)</li>
          <li>FrontEnd Technologies:
            <ul>
              <li>React for render markup (no component/UI framework)</li>
              <li>Redux for app state</li>
              <li>react-router for client side url routes</li>
              <li>styled-components for styles</li>
            </ul>
          </li>
          <li>DevTools based on create-react-app, parcel, create-react-app-parcel-typescript</li>
        </ul>
      </PageContent>
    </Container>
  </Page>
)

const PageContent = styled('article')`
  margin: 0 auto;
  line-height: 1.6;
  a {
    color: ${props => props.theme.colors.brand};
  }
  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.5rem;
    font-family: ${props => props.theme.fonts.headings};
    line-height: 1.25;
  }
`
