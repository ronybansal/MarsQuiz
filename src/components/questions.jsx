import React from 'react';
import {browserHistory} from 'react-router';

let correct = 0;

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

export default class Questions extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    question: 0 }
  }

  _submitAnswer(){
    this.refs.quizInput.value === questions[this.state.question].answer ? answer += 1 : correct;

		if (!this._isFinished()) {
    	this.setState({ question: this.state.question += 1});
		}

		this.refs.quizInput.value = '';
  }

  _submitted(e) {
    e.preventDefault();
    {this._submitAnswer()};
  }

  _displaying(){
    if (
      questions[this.state.question] === undefined
      &&
      correct === 0) {
      browserHistory.push('/lose');
    } else if (
        questions[this.state.question] === undefined
        &&
        correct <= 1) {
        browserHistory.push('/lose');
    } else if (
        questions[this.state.question] === undefined
        &&
        correct === questions.length) {
        browserHistory.push('/win')
    }
  }

	_isFinished() {
		return this.state.question >= questions.length
	}

  render(){
		if (this._isFinished()) {
			return null;
		}
		const {question} = questions[this.state.question];
    return (
      <div>
        {this._displaying()}
          <div className="question-area">
            <p className="question">{question}</p>
            <div className="answers">
              <form className="user-answers" name="quizInput" onSubmit={this._submitted.bind(this)}>
                <input type='text' ref="quizInput"/>
              </form>
              <button className="submitbox" onClick={this._submitAnswer.bind(this)}>submit answer</button>
						</div>
          </div>
        </div>
    )
  }
}
