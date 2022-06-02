import { useState } from "react";
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from "./Notification";
import { Statistics } from "./Statistics";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const names = {
    good,
    neutral,
    bad,
  };

  const total = good + neutral + bad;
  
  const options = Object.keys(names);

  const onLeaveFeedback = name => {
    if (name === 'good') {
      setGood(value => value + 1)
    };
    if (name === 'neutral') {
      setNeutral(value => value + 1)
    };
    if (name === 'bad') {
      setBad(value => value + 1)
    };
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / total) * 100).toFixed(2);
  };

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? <Notification message="There is no feedback" /> : < Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage} />}
      </Section>

    </>
  )
};

// export class App1 extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     return (Object.values(this.state).reduce((totalFeedback, item) => totalFeedback + item, 0))
//   };

//   countPositiveFeedbackPercentage = () => {
//     return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
//   };

//   onLeaveFeedback = name => {
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };
  

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {totalFeedback === 0 ? <Notification message="There is no feedback" /> : < Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positivePercentage={positiveFeedbackPercentage}/>}
//         </Section>

//       </>
//     )
//   }
// };