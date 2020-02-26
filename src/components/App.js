import React, {Component} from "react";
import Layout from "./Layout/Layout"
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Section from "./Section/Section";
import Notification from "./Notification/Notification"

export default class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleClick = ({target: {name}}) => {
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1,
            };
        })
    };

    countTotalFeedback = () => Object.values(this.state).reduce((sum, current) => sum + current, 0);

    countPositiveFeedbackPercentage = () => Math.round(this.state.good / this.countTotalFeedback() * 100);

    render() {
        const {good, neutral, bad} = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const options = Object.keys(this.state);

        return (
            <Layout>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={options} onLeaveFeedback={this.handleClick}/>
                </Section>
                <Section title="Statistic">
                    {(total > 0)
                    ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
                    : <Notification message="No feedback given"/>}
                </Section>
            </Layout>
        )
    }
}