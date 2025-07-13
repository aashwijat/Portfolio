import Polaroid from "./Polaroid";
import Quote from "./Quote";
import TypePolaroid from "./TypePolaroid";
import Card from "./Card";
import Contact from "./Contact";
import Skills from "./Skills";
function Grid() {
  return (
    <>
      <div className="flex gap-4 h-screen pt-20">
        {/* column 1 has two rows */}
        <div className="flex-1 flex flex-col gap-2 ">
          <TypePolaroid />
          <Polaroid />
        </div>
        {/* column 2 has three rows */}
        <div className="flex-1 flex flex-col gap-2">
          <Skills />
          <Polaroid />
          <Contact />
        </div>
        {/* column 3 has 2 rows */}
        <div className="flex-1 flex flex-col gap-2">
          <Polaroid />
          <Quote />
        </div>
      </div>
    </>
  );
}

export default Grid;
