import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HeroesPage from './pages/heroes';
import IndexPage from './pages/index';
import ListRecordTypesPage from './pages/listRecordTypes';
import TeamsPage from './pages/teams';
import Header from './components/layout/Header';
import recordView from './pages/recordView';

const Routes = () => (
  <div>
    <Header title="Example App" />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/listRecordTypes/:type" component={ListRecordTypesPage} />
        <Route path="/listRecordTypes" component={ListRecordTypesPage} />
        <Route path="/recordView/:type/:id" component={recordView} />
        <Route path="/heroes" component={HeroesPage} />
        <Route path="/teams" component={TeamsPage} />
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </HashRouter>
  </div>
)
export default Routes
