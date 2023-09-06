import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function DocumentDisplay({ mimetype, base64String }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (base64String) {
      if (mimetype === "image/png") {
        setContent(
          <img
            src={`data:${mimetype};base64,${base64String}`}
            alt="Image"
            style={{ width: "200px" }}
          />
        );
      } else if (mimetype === "application/pdf") {
        setContent(
          <iframe
            title="PDF Viewer"
            src={`data:${mimetype};base64,${base64String}`}
            width="200px"
          ></iframe>
        );
      } else {
        setContent(<p>Unsupported mimetype: {mimetype}</p>);
      }
    }
  }, [base64String, mimetype]);

  return <div>{content ? content : <p>No content to display</p>}</div>;
}

DocumentDisplay.propTypes = {
  mimetype: PropTypes.string.isRequired,
  base64String: PropTypes.string.isRequired,
};

export default DocumentDisplay;
