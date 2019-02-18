import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import IndexPage from '../pages/home';
import Header from '../components/layout/Header';
import { ListRecordTypes } from '../pages/listRecordTypes/listRecordTypes';
import { RecordView } from '../pages/recordView/recordView';
import { SearchView } from '../pages/search/searchView';
import { parseRouteUrl } from '../utils/routeUrl/parseRouteUrl';
import { routeRequestToOptions } from '../utils/routeUrl/routeRequestToOptions';
import { ExampleLinks } from '../pages/exampleLinks/exampleLinks';

const Routes = (props: any) => (
  <div>
    <Header title="Mini NetSuite UI" />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/listRecordTypes/:options" component={ListRecordTypes} />
        {/* <Route path="/listRecordTypes" component={ListRecordTypes} /> */}
        <Route path="/recordView/:type/:id/:options" component={RecordView} />
        <Route path="/search/:options" component={SearchView} />
        <Route path="/exampleLinks" component={ExampleLinks} />
        <Route path="/api/:routeParams" render={props => {
          const routeUrlParams = decodeURIComponent(props.match.params.routeParams)
          const request = parseRouteUrl(routeUrlParams)
          const newPath = routeRequestToOptions(request)
          props.history.push(newPath)
          return ''// <div></div>
        }} />
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </HashRouter>
  </div>
)
export default Routes
