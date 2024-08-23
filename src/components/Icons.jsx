import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import jsLogo from "../assets/js.svg";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import nodeLogo from "../assets/node.svg";

import "../App.css";

export default function Icons() {
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
    <div className="flex flex-wrap justify-center bg-white gap-4 mx-4 p-3">
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
