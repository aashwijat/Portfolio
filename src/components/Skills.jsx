import Card from "./Card";
function Skills() {
  return (
    <>
      <Card>
        <div className="text-center">
          <div className="polaroid-name">
            <span className="block text-[#107373]/90 text-2xl font-bold pt-5">
              Skills
            </span>
            <div className="playfair-card">
              <span className="block text-[#107373]/80 text-base flex justify-center">
                Frontend: React, JavaScript, CSS
              </span>
              <span className="block text-[#107373]/80 text-base flex justify-center">
                Backend: Python, C, Java, SQL
              </span>
              <span className="block text-[#107373]/80 text-base flex justify-center">
                Tools: Git, GitHub, Figma, Tableau
              </span>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Skills;
