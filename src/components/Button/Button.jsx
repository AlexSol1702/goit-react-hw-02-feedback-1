import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export const Button = ({ nameValue, onChangeState }) => {
  return (
    <button
      className={styles.button}
      type="button"
      id={nameValue}
      onClick={() => onChangeState(nameValue)}
    >
      {nameValue}
    </button>
  );
};

Button.propTypes = {
  nameValue: PropTypes.string.isRequired,
  foo: PropTypes.func.isRequired,
};
