import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faChartSimple,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
function AppBar({ isDistractApps, setIsDistractApps }) {
  return (
    <div className="appbar">
      <FontAwesomeIcon className="icon" icon={faGear} size="2x" />
      <div onClick={() => setIsDistractApps(!isDistractApps)} className="link">
        {isDistractApps ? "Timer" : "Disabled Sites"}
        <FontAwesomeIcon
          className="icon"
          style={{ marginLeft: "5px" }}
          icon={faArrowUpRightFromSquare}
        />
      </div>
      <FontAwesomeIcon className="icon" icon={faChartSimple} size="2x" />
    </div>
  );
}

export default AppBar;
