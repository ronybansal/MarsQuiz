import React from 'react';
import {browserHistory} from 'react-router';

export default class Questions extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    question: 0 }
  }

  _submitAnswer(){
    this.refs.quizInput.value === question[this.state.question].answer ? correct += 1 : correct;
    this.setState({ question: this.state.question += 1});
    console.log(correct);
    console.log(this.refs.quizInput.value);
    this.refs.quizInput.value = '';
  }

  _submitted(e) {
    e.preventDefault();
    {this._submitAnswer()};
  }

  _displaying(){
    if (
      question[this.state.question] === undefined
      &&
      correct === 0) {console.log(correct);console.log('failure');
      browserHistory.push('/fail');
    }  else if (
        question[this.state.question] === undefined
        &&
        correct <= 1) {console.log(correct);console.log('success');
        browserHistory.push('/success');
    } else if (
        question[this.state.question] === undefined
        &&
        correct === question.length) {console.log(correct);console.log('secretsuccess');
        browserHistory.push('/secretsuccess')
    } else {}
  }

  render(){
    return (
      <div>
        {this._displaying()}
          <div className="question-area">
            <p className="question">{question[this.state.question].question}</p>
            <div className="answers">
              <form className="user-answers" name="quizInput" onSubmit={this._submitted.bind(this)}>
                <input type='text' ref="quizInput"/>
              </form>
              <button onClick={this._submitAnswer.bind(this)}>submit answer</button>
            </div>
          </div>
        </div>
    )
  }
}
