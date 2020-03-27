import React from 'react';
import './App.css';
import CommentView from "./CommentView"
import Dagger from "./Dagger"
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <div className="App">
        <Switch>
          <Route exact path="/"><Dagger /></Route>
          <Route exact path="/comments"><CommentView /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
