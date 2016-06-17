import React from 'react';
import {browserHistory} from 'react-router';
import ClockHidden from './clockHidden';

export default class Win extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      started: true
    }
  }

  render() {
    if (this.state.started) {
      return (
        <div className="video">
          <iframe width="860" height="615" src="https://www.youtube.com/embed/YI1GLB-byeQ?autoplay=1&controls=0" frameborder="0" allowfullscreen></iframe>
        </div>
      )
    }
  }
}
