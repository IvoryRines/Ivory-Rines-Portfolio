// import cfImage from "./assets/CF.png";
// import bbImage from "./assets/BB.jpg";
// import rrImage from "./assets/RR.png";
const projectData = [
  {
    title: "Your Culinary Forecast",
    description: "",
  },
  {
    title: "Bootcamp Banking",
    description: "this is a project",
  },
];
const Project = () => {
  return (
    <div>
      {projectData.map((projectItem) => {
        return <div>{projectItem.title}</div>;
      })}
    </div>
  );
};
export default Project;
{
  /* <div>

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
        <a href="https://movie-review-gclk.onrender.com/" target="_blank">
          <img
            src={rrImage}
            className="project rr"
            alt="screenshot of Reel Ratings application"
          />
        </a>
      </div> */
}
{
  /* <div>
        <a
          href="https://sora0216.github.io/YourCulinaryForecast/"
          target="_blank"
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div> */
}
