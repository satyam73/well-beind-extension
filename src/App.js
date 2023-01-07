import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./component/Main";
// import chrome from "chrome";
function App() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };
    console.log(chrome.tabs);
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        console.log(url);
        setUrl(url);
        chrome.storage.local.set({ key: url }).then(() => {
          console.log("Value is set to " + url);
        });
      });
  });
  return (
    <div className="App">
      {url}
      <Main />
    </div>
  );
}

export default App;
