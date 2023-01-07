import React from "react";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function AddInput() {
  return (
    <div className="add__input">
      <input type="text" name="site" />
      <FontAwesomeIcon className="icon addIcon" icon={faSquarePlus} />
    </div>
  );
}

export default AddInput;
