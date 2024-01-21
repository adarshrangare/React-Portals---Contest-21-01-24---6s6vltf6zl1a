import React from "react";
import ReactDOM, { createPortal } from "react-dom";

//complete this function using portals
const PortalButton = ({buttonclick}) => {
  const portalRoot = document.getElementById("portal-button");
  return portalRoot
    ? ReactDOM.createPortal(
        <button id="button" onClick={buttonclick}>
          Click
        </button>,
        portalRoot
      )
    : null;
};
export default PortalButton;

//portal-button id will be used here for portal purpose
