import React from 'react';
import {browserHistory} from 'react-router';

export default class Test extends React.Component {

  _loadBegin() {
    browserHistory.push('/begin');
  }

  render() {
    return (
      <div className= "button">
        <button>
          <span className= "buttonupcase" onClick= {this._loadBegin}> Take Test </span>
        </button>
      </div>
    )
  }
}
