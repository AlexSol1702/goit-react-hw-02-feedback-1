import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

export class Statistics extends Component {

  render() {
    const good = this.props.good
    const neutral = this.props.neutral
    const bad = this.props.bad
    const percentage = this.props.percentage
    const total = this.props.total
    return (
      <>
        <h2 className={styles.title}>Statistics</h2>
        <div className={styles.box}>
          {total ? (<><p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Positive feedback: {percentage}%</p>
          <p>Total: {total}</p></>) :
          <p>No feedback</p>
          }
        </div>
      </>
    );
  }
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}
