import React from 'react';
import {browserHistory} from 'react-router';

// Component
import Clock from './clock';
// import Fail from './lose';
// import Pass from './win';

const questions = [
	{
		question: "There's 8 seconds left on the clock, you're down 2. Do you go for the win or tie?",
		answer: "win"
	},

	{
		question: "You get the ball at the 3 point line, but have a teammate wide open under the hoop. Do you pass or shoot?",
		answer: "shoot"
	},

	{
		question: "You miss but the rebound comes right back out to you. There is now 3 seconds left on the clock and you're back in the same situation. Do you shoot again or pass this time?",
		answer: "shoot again"
	}
]


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
        <Clock starts={this.state.starts} seconds={60} />
      </div>
    )
  }
}
