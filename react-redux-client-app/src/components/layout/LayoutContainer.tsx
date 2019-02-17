import * as React from 'react'
import { connect } from 'react-redux'

import { ApplicationState } from '../../store'
import { ThemeColors } from '../../store/layout'
import * as layoutActions from '../../store/layout/actions'
import { Dispatch } from 'redux';

interface PropsFromState {
  theme: ThemeColors
}

interface PropsFromDispatch {
  setTheme: typeof layoutActions.setTheme
}

interface OtherProps {
  children: (props: LayoutContainerProps) => React.ReactNode
}

type LayoutContainerProps = PropsFromState & PropsFromDispatch

class LayoutContainer_ extends React.Component<LayoutContainerProps & OtherProps> {
  public render() {
    const { children, ...rest } = this.props
    return children({ ...rest })
  }
}

const mapStateToProps = ({ layout }: ApplicationState) => ({
  theme: layout.theme
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTheme: (theme: ThemeColors) => dispatch(layoutActions.setTheme(theme))
})

export const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutContainer_)
