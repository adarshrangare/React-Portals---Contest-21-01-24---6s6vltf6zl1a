import React, { useState } from "react";
import ReactDOM, { createPortal } from "react-dom";

//complete this function using portals
const PortalTextArea = ({textareaRef}) => {
//   const [textValue, setTextValue] = useState("");

//   const handleTextChange = (value) => {
//     setTextValue(value);
//   };

  const portalRoot = document.getElementById("portal-textarea");
  return portalRoot
    ? ReactDOM.createPortal(
        <textarea
        ref={textareaRef}
          id="textarea"
          
          onChange={(e) => {
            handleTextChange(e.target.value);
          }}
        />,

        portalRoot
      )
    : null;
};
export default PortalTextArea;
//portal-textarea id will be used here for portal purpose
