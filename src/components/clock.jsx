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
    if (this.state.seconds === 0 && this.clock) {
      clearInterval(this.Clock)
      //  this.props._stopClock();
    };
  }

  _renderMinute() {
    let minutes = Math.floor(this.state.seconds / 60);
    let seconds = this.state.seconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return (<div>{minutes}:{seconds}</div>)
  }

  componentDidMount() {
      if (this.props.start && !this.clock) {
        this.setState({seconds: this.props.seconds});
        this.clock = setInterval(this._countdown.bind(this), 1000);
      }
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




// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
//
// require('./main.scss');
// require('./reset.scss');
//
// class Timer extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       secondsRemaining: 60
//     }
//   }
//
//   _countdown() {
//     this.setState({secondsRemaining: this.state.secondsRemaining - 1});
//     if (this.state.secondsRemaining === 0 && this.timer) {
//       clearInterval(this.timer);
//       this.props.stopTimer();
//       this.timer = null;
//     }
//   }
//
//   _renderMinute() {
//     let minutes = Math.floor(this.state.secondsRemaining / 60);
//     let seconds = this.state.secondsRemaining % 60;
//     seconds = seconds < 10 ? '0' + seconds : seconds;
//
//     return (<div>{minutes}:{seconds}</div>)
//   }
//
//   componentDidMount() {
//     if (this.props.started && !this.timer) {
//       this.setState({ secondsRemaining: this.props.secondsRemaining });
//       this.timer = setInterval(this._countdown.bind(this), 1000);
//     }
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }
//
//   render(){
//     return (
//       <div className="timer">
//         {this._renderMinute()}
//       </div>
//     )
//   }
// }
//
// class Quiz extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       started: false
//     }
//   }
//
//   _startTimer() {
//     this.setState({started: true})
//   }
//
//   _stopTimer() {
//     this.setState({started: false})
//   }
//
//   _showQuiz() {
//     return(
//       <div>
//         <Timer
//         started={this.state.started}
//         stopTimer={this._stopTimer.bind(this)}
//         secondsRemaining="60"
//         />
//
//         <QuestionBox />
//       </div>
//     )
//   }
//
//   render(){
//     return (
//       <div className="quiz-area">
//         {this.state.started ?
//           this._showQuiz() :
//
//           <button
//           className="start-button"
//           onClick={this._startTimer.bind(this)}>
//             Start Test
//           </button>}
//
//       </div>)
//     }
//   }
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       completed: false
//     }
//   }
//
//   render() {
//     return(
//       <div className="question-box">
//         <input type="text"/>
//
//         <button>
//           <span className="uppercase">Submit Answer</span>
//         </button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App/>, document.getElementById('react-app'));

// REVIEW MAP AND FILTER
//
// const list = [1,2,3,4,5,6,7,8,9];
//
// const greaterThanFive = list.filter(item => item > 5);
// console.log(list, greaterThanFive);
//
// const elementsTimesTwo = list.map(item => item * 2);
// console.log(list, elementsTimesTwo);
