import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactToPrint from "react-to-print";
import { FcDocument } from "react-icons/fc";
import PreviewPDF from "../commons/PreviewPDF/PreviewPDF";
import CustomButton from "../commons/CustomButton/CustomButton";
import "./RecordTemplate.scss";

function RecordTemplate({ docName, children }) {
  const ref = React.createRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="template__container">
      <div className="template__header">
        <h3 className="template__title">
          <FcDocument />
          {docName}
        </h3>
        <div className="btn__container">
          <CustomButton text="PREVIEW" onClick={openModal} />
          <ReactToPrint
            trigger={() => <CustomButton text="DOWNLOAD" />}
            content={() => ref.current}
          />
        </div>
      </div>
      <div ref={ref} className="template__body">
        <h4>{docName}</h4>
        {children}
      </div>
      <PreviewPDF isOpen={modalIsOpen} closeModal={closeModal}>
        {children}
      </PreviewPDF>
    </div>
  );
}

RecordTemplate.propTypes = {
  docName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default RecordTemplate;
