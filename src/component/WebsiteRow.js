import {
  faTrash,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function WebsiteRow() {
  return (
    <div className="website__row">
      <p className="website__rowText">Website row text</p>
      <FontAwesomeIcon className="icon deleteIcon" icon={faTrash} />
    </div>
  );
}

export default WebsiteRow;
