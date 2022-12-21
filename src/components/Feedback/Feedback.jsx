import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";


export const Feedback = ({ options, onChangeState }) =>   
  options.map((nameValue) => 
    <Button nameValue={nameValue} key={nameValue}  onChangeState={onChangeState}/>
  );


Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onChangeState: PropTypes.func.isRequired,
};
