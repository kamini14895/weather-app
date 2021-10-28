import './App.css';
import LocationList from './components/LocationList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout';
import LocationDetails from './components/LocationDetails';
import { Redirect, Route, Switch } from 'react-router';
import React from 'react';

//for lazy loading
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Switch>
          <Route path="/" exact>
            <Redirect to="/cities" />
          </Route>
          <Route path="/cities" exact>
            <LocationList />
          </Route>
          <Route path="/cities/:woeid" >
            <LocationDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Layout>
    
  );
}

export default App;
