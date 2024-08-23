import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import jsLogo from "../assets/js.svg";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import nodeLogo from "../assets/node.svg";

import "../App.css";

export default function Icon() {
  const iconData = [
    {
      image: htmlLogo,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      iconName: "html",
      alt: "HTML Logo",
    },
    {
      image: cssLogo,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      iconName: "css",
      alt: "CSS Logo",
    },
    {
      image: jsLogo,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      iconName: "js",
      alt: "JS Logo",
    },
    {
      image: reactLogo,
      link: "https://react.dev",
      iconName: "react",
      alt: "React",
    },
    {
      image: viteLogo,
      link: "https://vitejs.dev",
      iconName: "vite",
      alt: "Vite Logo",
    },
    {
      image: nodeLogo,
      link: "https://nodejs.org",
      iconName: "node",
      alt: "Node Logo",
    },
  ];

  return (
    <div>
      {iconData.map((icon) => (
        <>
          <a href={icon.link} target="_blank">
            <img
              src={icon.image}
              className={`logo ${icon.iconName}`}
              alt={icon.alt}
            />
          </a>
        </>
      ))}
    </div>
  );
}

{
  /* <a
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
      <a href="https://nodejs.org" target="_blank">
        <img src={nodeLogo} className="logo node" alt="Node logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a> */
}

// import htmlLogo from "./assets/html.svg";
// import cssLogo from "./assets/css.svg";
// import jsLogo from "./assets/js.svg";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import nodeLogo from "./assets/node.svg";

// export default function Icons() {
//   return (
//     <div>
//       <a
//         href="https://developer.mozilla.org/en-US/docs/Web/HTML"
//         target="_blank"
//       >
//         <img src={htmlLogo} className="logo html" alt="HTML logo" />
//       </a>
//       <a
//         href="https://developer.mozilla.org/en-US/docs/Web/CSS"
//         target="_blank"
//       >
//         <img src={cssLogo} className="logo css" alt="CSS logo" />
//       </a>
//       <a
//         href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
//         target="_blank"
//       >
//         <img src={jsLogo} className="logo js" alt="JavaScript logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//       <a href="https://nodejs.org" target="_blank">
//         <img src={nodeLogo} className="logo node" alt="Node logo" />
//       </a>
//       <a href="https://vitejs.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//     </div>
//   );
// }
