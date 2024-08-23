import cfImage from "../assets/CF.png";
import bbImage from "../assets/BB.jpg";
import rrImage from "../assets/RR.png";

const projectData = [
  {
    title: "Reel Ratings",
    description: "",
    image: rrImage,
    link: "https://movie-review-gclk.onrender.com",
    name: "reelRatings",
  },
  {
    title: "Bootcamp Banking",
    description: "",
    image: bbImage,
    link: "https://bootcamp-banking-smcq.onrender.com",
    name: "bootcampBanking",
  },
  {
    title: "Your Culinary Forecast",
    description: "",
    image: cfImage,
    link: "https://sora0216.github.io/YourCulinaryForecast/",
    name: "culinaryForecast",
  },
];

const Project = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {projectData.map((project) => (
        <a
          key={project.name}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <img
            src={project.image}
            alt={`screenshot of ${project.title}`}
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </a>
      ))}
    </div>
  );
};

export default Project;
