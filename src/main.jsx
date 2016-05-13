import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

require('./main.scss');
require('./reset.scss');

import Test from './components/test';
import Begin from './components/begin';
import Clock from './components/clock';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history= {browserHistory}>
        <Redirect from='/' to='/test' />
        <Route path='/test' component={Test} />
        <Route path='/begin' component={Begin} />
        <Route path= '/clock' component={Clock} />
      </Router>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));
