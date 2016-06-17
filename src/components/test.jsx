import React from 'react';
import {browserHistory} from 'react-router';

export default class Test extends React.Component {

  _loadBegin() {
    browserHistory.push('/begin');
  }

  render() {
    return (
      <button className= "button" onClick= {this._loadBegin}>
        Take Test
      </button>
    )
  }
}
