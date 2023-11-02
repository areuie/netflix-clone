import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import UploadPage from './UploadPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/upload" component={UploadPage} />
      </Switch>
    </Router>
  );
}

export default App;
