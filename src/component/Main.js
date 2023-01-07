import React, { useState } from "react";
import Timer from "../common/Timer";
import DisabledApps from "./DisabledApps";
import AppBar from "../common/AppBar";

function Main() {
  const [isDistractApps, setIsDistractApps] = useState(false);
  return (
    <div className="main">
      <AppBar
        isDistractApps={isDistractApps}
        setIsDistractApps={setIsDistractApps}
      />
      {isDistractApps ? <DisabledApps /> : <Timer />}
    </div>
  );
}

export default Main;
