import * as React from 'react';
import {browserHistory} from 'react-router';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    }
  }

  _countdown() {
    this.setState({seconds: this.state.seconds - 1});
    if (this.state.seconds <= 0) {
      clearInterval(this.clock);
      browserHistory.push('/lose');
    }
  }

  _renderMinutes() {
    let minutes = Math.floor(this.state.seconds / 60);
    let seconds = this.state.seconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return (<div>{minutes}:{seconds}</div>)
  }

  componentDidMount() {
    this.setState({ seconds: this.props.seconds });
    this.clock = setInterval(this._countdown.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    return (
      <div className= "clock">
        <span>
          {this._renderMinutes()}
        </span>
      </div>
    )
  }
}
