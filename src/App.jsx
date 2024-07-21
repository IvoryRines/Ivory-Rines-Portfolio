import { useState } from "react";
import htmlLogo from "./assets/html.svg";
import cssLogo from "./assets/css.svg";
import jsLogo from "./assets/js.svg";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import nodeLogo from "./assets/node.svg";

import cfImage from "./assets/CF.png";
import bbImage from "./assets/BB.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Ivory Rines</h1>
      <h2>Junior Full-Stack Deveoper</h2>
      <div>
        <h3>Technical Skills</h3>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
        >
          <img src={htmlLogo} className="logo html" alt="HTML logo" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
        >
          <img src={cssLogo} className="logo css" alt="CSS logo" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
        >
          <img src={jsLogo} className="logo js" alt="JavaScript logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://nodejs.org" target="_blank">
          <img src={nodeLogo} className="logo node" alt="Node logo" />
        </a>
      </div>

      <div>
        <h3>Projects</h3>
        <a
          href="https://sora0216.github.io/YourCulinaryForecast/"
          target="_blank"
        >
          <img
            src={cfImage}
            className="project cf"
            alt="screenshot of Culinary Forecast application"
          />
        </a>
        <a href="https://bootcamp-banking.onrender.com/" target="_blank">
          <img
            src={bbImage}
            className="project bb"
            alt="screenshot of Bootcamp Banking application"
          />
        </a>
      </div>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
