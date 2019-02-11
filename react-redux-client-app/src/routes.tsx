import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/index';
import ListRecordTypesPage from './pages/listRecordTypes';
import Header from './components/layout/Header';
import recordView from './pages/recordView';

const Routes = () => (
  <div>
    <Header title="Mini NetSuite UI" />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/listRecordTypes/:type" component={ListRecordTypesPage} />
        <Route path="/listRecordTypes" component={ListRecordTypesPage} />
        <Route path="/recordView/:type/:id/:options" component={recordView} />
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </HashRouter>
  </div>
)
export default Routes
