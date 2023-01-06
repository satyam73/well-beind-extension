import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./component/Hello";
// import chrome from "chrome";
// import Hello from "./components/Hello";
function App() {
  const [url, setUrl] = useState("");
  // const [href, setHref] = useState([]);
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };
    console.log(chrome.tabs);
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        console.log(url);
        setUrl(url);
        // setHref([...tabs]);
      });

    // console.log(href);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> {url} </p>
        <Hello />
        {/* <p> {href} </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
