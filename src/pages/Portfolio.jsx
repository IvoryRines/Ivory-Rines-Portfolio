import Project from "../components/Project";
import Icons from "../components/Icons";

export default function Portfolio() {
  return (
    <>
      <div className="row py-5">
        <h1 className="text-[#eab300] text-center font-raleway text-4xl font-semibold mb-4">
          Projects
        </h1>
        <Project />
      </div>
      <div className=" px-5 mx-5 object-cover rounded-large">
        {/* <h2 className="text-[#ffe4e6] text-center text-2xl font-semibold mb-4">
          Technical Skills:
        </h2> */}
        <div className="mx-5 px-5">
          <Icons />
        </div>
      </div>
    </>
  );
}
