import React, { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
  // const [href, setHref] = useState([]);
  useEffect(() => {
    // handelTime();
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function handelTime() {
    id.current = setInterval(() => {
      setTime((prev) => {
        if (prev.sec == 60) {
          return { ...prev, min: prev.min + 1, sec: 0 };
        }
        if (prev.min == 60) {
          return { ...prev, hr: prev.hr + 1, min: 0, sec: 0 };
        }

        return { ...prev, sec: prev.sec + 1 };
      });
    }, 100);
  }
  return (
    <div>
      <div className="timer">
        <div className="timer__countdown">
          <h1>
            {time.hr.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
            :
            {time.min.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
            :
            {time.sec.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </h1>

          <button className="pause" onClick={() => clearInterval(id.current)}>
            Pause
          </button>
        </div>
      </div>

      <div>
        <button className="start" onClick={() => handelTime()}>
          Start
        </button>
      </div>
    </div>
  );
}
