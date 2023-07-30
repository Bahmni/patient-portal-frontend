import React from "react";
import { ToastNotification } from "carbon-components-react";
import PropTypes from "prop-types";
import "./Toaster.scss";

const Toaster = ({ kind, role, title, onClose }) => {
  return (
    <ToastNotification
      data-testid="toaster-notification"
      kind={kind}
      lowContrast={true}
      role={role}
      title={title}
      onClose={onClose}
      timeout={5000}
      className="toaster__notification"
    />
  );
};

Toaster.propTypes = {
  kind: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toaster;
