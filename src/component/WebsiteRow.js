import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function WebsiteRow() {
  return (
    <div className="website__row">
      <p className="website__rowText">Website row text</p>
      <FontAwesomeIcon className="deleteIcon" icon={faTrash} size="2x" />
    </div>
  );
}

export default WebsiteRow;
