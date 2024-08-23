import { Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
// import Project from "./components/Project";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
      {/* <main className="w-screen d-flex flex-column align-items-center">
        <NavBar />
        <div
          style={{
            maxWidth: "1800px",
            width: "100%",
            height: "100%",
          }}
        >
          
          <Project />
        </div>
      </main> */}
    </>
  );
}

export default App;

// import htmlLogo from "./assets/logos/html.svg";
// import cssLogo from "./assets/logos/css.svg";
// import jsLogo from "./assets/logos/js.svg";
// import reactLogo from "./assets/logos/react.svg";
// import viteLogo from "./assets/logos/vite.svg";
// import nodeLogo from "./assets/logos/node.svg";

{
  /* <div>
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
      </div> */
}
