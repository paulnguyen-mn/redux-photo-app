import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';

Photo.propTypes = {};

function Photo(props) {
  const match = useRouteMatch();
  console.log({ match });

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Photo;