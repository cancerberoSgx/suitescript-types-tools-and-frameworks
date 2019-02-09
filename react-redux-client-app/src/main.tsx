import * as React from 'react'
import { Provider, connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Store } from 'redux'
import { History } from 'history'
import { ThemeProvider } from 'emotion-theming'
import Routes from './routes'
import { ApplicationState } from './store'
import { ThemeColors } from './store/layout'
import * as themes from './styles/theme'
import styled from './utils/styled';

interface PropsFromState {
  theme: ThemeColors
}

interface PropsFromDispatch {
  [key: string]: any
}

interface OwnProps {
  store: Store<ApplicationState>
  history: History
}

type AllProps = PropsFromState & PropsFromDispatch & OwnProps

class Main extends React.Component<AllProps> {
  public render() {
    const { store, history, theme } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={themes[theme]}>
            <Root>
              <Routes />
            </Root>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    )
  }
}

const mapStateToProps = ({ layout }: ApplicationState) => ({
  theme: layout.theme
})

export default connect<PropsFromState, PropsFromDispatch, OwnProps, ApplicationState>(
  mapStateToProps
)(Main)



// the Root component is important to make the theme work!

interface RootProps {
  className?: string
}
const Root: React.SFC<RootProps> = ({ children }) => <Wrapper>{children}</Wrapper>
const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.body};
  font-family: ${props => props.theme.fonts.body};
`
