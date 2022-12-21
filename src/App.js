import { Component } from "react";
import "./App.css";
import { Feedback } from "./components/Feedback/Feedback";
import { Statistics } from "./components/Statistics/Statistics";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  changeState = (nameValue) =>
    this.setState({ [nameValue]: this.state[nameValue] + 1 });

  totalCount() {
    return Object.values(this.state).reduce((acc, stat) => {
      acc += stat;
      return acc;
    }, 0);
  }

  positivePercentage() {
    return Math.round((this.state.good / this.totalCount()) * 100);
  }

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div className="App">
        <h2 className="title">Please leave feedback</h2>
        <div className="box">
          <Feedback options={Object.keys(this.state)} onChangeState={this.changeState} />
        </div>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          percentage={this.positivePercentage()}
          total={this.totalCount()}
        />
      </div>
    );
  }
}

export default App;
