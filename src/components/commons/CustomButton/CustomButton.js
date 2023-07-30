import React from "react";
import { Button } from "carbon-components-react";
import "./CustomButton.scss";
import PropTypes from "prop-types";

const CustomButton = ({ text, onClick }) => {
  return (
    <Button
      data-testid="custom-btn"
      className="primary__button"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
