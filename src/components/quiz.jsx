import React from 'react';
import {browserHistory} from 'react-router';

// Component
import Clock from './clock';
import Questions from './questions';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       question: 0
     }
  }

  _win(){
		this.props.navigate("win")
	}

  _lose(){
		this.props.navigate("lose")
	}

  _startClock() {
     this.setState({starts: true})
   }

  _stopClock() {
    this.setState({started: false})
  }

  render() {
    return (
      <div>
        <Clock starts={this.state.starts} seconds= {60} />
				<Questions />
      </div>
    )
  }
}
