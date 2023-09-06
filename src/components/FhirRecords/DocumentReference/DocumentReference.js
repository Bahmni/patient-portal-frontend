import React from "react";
import PropTypes from "prop-types";
import DocumentDisplay from "./DocumentDisplay";

function DocumentReference({ itemList }) {
  return (
    <div>
      {itemList?.map((item) => (
        <div key={item.id}>
          <p>Description : {item.description}</p>
          <p>
            Status : <span className="status">{item.status}</span>
          </p>
          <div>
            <p>Content</p>
            {item.content.map((content) => (
              <DocumentDisplay
                key={content.id}
                mimetype={content.attachment.contentType}
                base64String={content.attachment.data}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

DocumentReference.propTypes = {
  itemList: PropTypes.array.isRequired,
};

export default DocumentReference;
