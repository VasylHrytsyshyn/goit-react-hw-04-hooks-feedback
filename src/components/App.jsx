import { Component } from "react";
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from "./Notification";
import { Statistics } from "./Statistics";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return (Object.values(this.state).reduce((totalFeedback, item) => totalFeedback + item, 0))
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
  };

  onLeaveFeedback = event => {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? <Notification message="There is no feedback" /> : < Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}/>}
        </Section>

      </>
    )
  }
};