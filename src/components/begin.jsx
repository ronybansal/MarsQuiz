import React from 'react';
import {browserHistory} from 'react-router';

export default class Begin extends React.Component {
  constructor(props) {
    super(props);
  }

  _runQuiz() {
    browserHistory.push('/quiz');
  }

  render() {
    return (
      <div className= "button">
        <button>
          <span className= "buttonupcase" onClick= {this._runQuiz}> Begin Evaluation </span>
        </button>
      </div>
    )
  }
}
