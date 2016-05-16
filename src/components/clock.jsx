import * as React from 'react';
import {browserHistory} from 'react-router';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 60
    }
  }

  _countdown() {
    this.setState({seconds: this.state.seconds - 1});
  }

  _renderMinutes() {
    let minutes = Math.floor(this.state.seconds / 60);
    let seconds = this.state.seconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return (<div>{minutes}:{seconds}</div>)
  }

  _fail() {
    this.props.navigate("fail")
  }

  componentDidMount() {
    this.interval = setInterval(this._countdown.bind(this), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if( this.state.secondsElapsed === 0 ) {
      clearInterval(this.interval);
      this._rejected();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className= "clock">
        <span>
          {this._renderMinute()}
        </span>
      </div>
    )
  }
}
