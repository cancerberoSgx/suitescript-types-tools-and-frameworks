import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/index';
import Header from './components/layout/Header';
import { ListRecordTypes } from './pages/listRecordTypes/listRecordTypes';
import { RecordView } from './pages/recordView/recordView';

const Routes = (props: any) => (
  <div>
    <Header title="Mini NetSuite UI" />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/listRecordTypes/:type" component={ListRecordTypes} />
        <Route path="/listRecordTypes" component={ListRecordTypes} />
        <Route path="/recordView/:type/:id/:options" component={RecordView} />
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </HashRouter>
  </div>
)
export default Routes
