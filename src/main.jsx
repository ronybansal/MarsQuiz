import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

require('./main.scss');
require('./reset.scss');

// Components
import Test from './components/test';
import Begin from './components/begin';
import Quiz from './components/quiz';

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
        <Route path= '/quiz' component={Quiz} />
      </Router>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));
