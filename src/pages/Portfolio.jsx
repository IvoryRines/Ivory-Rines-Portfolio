import Project from "../components/Project";
import Icon from "../components/TechnicalSkills";

export default function Portfolio() {
  return (
    <>
      <div>
        <h1>Projects:</h1>
        <Project />
      </div>
      <div>
        <h1>Technical Skills:</h1>
        <Icon />
      </div>
    </>
  );
}
