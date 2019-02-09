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
            <Routes />
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
