import React from 'react';
import {browserHistory} from 'react-router';
import ClockHidden from './clockHidden';

export default class Lose extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      started: true
    }
  }

  _startClock() {
     this.setState({started: true})
   }

  _stopClock() {
    this.setState({started: false});
  }

  _loadQuiz(){
    browserHistory.push('/quiz');
  }

  render() {
    if (this.state.started) {
      return (
        <div className="video">
          <iframe width="920" height="615" src="https://www.youtube.com/embed/bNNIUbsvIL8?autoplay=1&controls=0" frameborder="0" allowfullscreen></iframe>
          <ClockHidden
            className="clockHidden"
            started={this.state.started}
            stopClock={this._stopClock.bind(this)}
            seconds="15"
          />
        </div>
      )
    }
    return (
      <button className="button" onClick={this._loadQuiz}>
        Click to Retry
      </button>
    )
  }
}
