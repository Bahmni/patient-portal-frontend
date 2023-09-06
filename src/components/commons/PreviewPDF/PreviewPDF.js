import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { ImCancelCircle } from "react-icons/im";
import PropTypes from "prop-types";
import "./PreviewPDF.scss";

const PreviewPDF = ({ isOpen, closeModal, children }) => {
  return (
    <>
      <div
        style={{ display: isOpen ? "block" : "none" }}
        className="overlay"
        onClick={closeModal}
      ></div>
      <div style={{ display: isOpen ? "block" : "none" }} className="modal">
        <div className="modal__button">
          <CustomButton
            text={<ImCancelCircle height="40px" />}
            onClick={closeModal}
          />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

PreviewPDF.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default PreviewPDF;
