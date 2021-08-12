import React from 'react';
import './style.css';
import { Route, Switch } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

export default function App() {
  return (
    <div>
      <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetups />
        </Route>

        <Route path="/NewMeetup">
          <NewMeetup />
        </Route>

        <Route path="/Favorites">
          <Favorites />
        </Route>
      </Switch>
      </Layout>
    </div>
  );
}
