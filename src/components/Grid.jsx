import Polaroid from "./Polaroid";
import Quote from "./Quote";
import TypePolaroid from "./TypePolaroid";
function Grid() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-1 gap-y-1 pl-105 pr-105 h-screen w-screen items-center justify-center">
        {/* <!-- Column 1 - 2 rows --> */}
        <div className="grid grid-rows-2 gap-3">
          <TypePolaroid />
          <Polaroid />
        </div>

        {/* <!-- Column 2 - 3 rows --> */}
        <div className="grid grid-rows-3 gap-3">
          <Polaroid />
          <Polaroid />
          <Polaroid />
        </div>

        {/* <!-- Column 3 - 4 rows --> */}
        <div className="grid grid-rows-2 gap-3">
          <Polaroid />
          <Quote />
        </div>
      </div>
    </>
  );
}

export default Grid;
