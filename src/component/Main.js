import React, { useState } from "react";
import Timer from "../common/Timer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGear,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import DisabledApps from "./DisabledApps";

function Main() {
  const [isDistractApps, setIsDistractApps] = useState(false);
  return (
    <div className="main">
      <div className="appbar">
        <FontAwesomeIcon icon={faGear} size="2x" />
        <div
          onClick={() => setIsDistractApps(!isDistractApps)}
          className="link"
        >
          {isDistractApps ? "Timer" : "Disabled Sites"}
        </div>
        <FontAwesomeIcon icon={faChartSimple} size="2x" />
      </div>
      {isDistractApps ? <DisabledApps /> : <Timer />}
    </div>
  );
}

export default Main;
