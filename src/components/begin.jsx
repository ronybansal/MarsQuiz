import * as React from 'react';
import {browserHistory} from 'react-router';

export default class Begin extends React.Component {
  constructor(props) {
    super(props);
  }

  _runClock() {
    browserHistory.push('/clock');
  }

  render() {
    return (
      <button>
        <span className= "buttonupcase" onClick= {this._runClock}> Begin Evaluation </span>
      </button>
    )
  }
}
