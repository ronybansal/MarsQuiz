import React from 'react';
import {browserHistory} from 'react-router';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  _loadBegin() {
    browserHistory.push('/begin');
  }

  render() {
    return(
      <button>
        <span className= "buttonupcase" onClick= {this._loadBegin}> Take Test </span>
      </button>
    )
  }
}
