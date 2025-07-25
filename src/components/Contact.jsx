import Card from "./Card";
function Contact() {
  return (
    <>
      <Card>
        <div className="text-center">
          <div className="polaroid-name">
            <span className="block text-[#107373]/90 text-3xl font-bold pt-12">
              Let's Connect!
            </span>
            <div className="playfair-card">
              <span className="block text-lg font-bold text-[#107373]/80">
                <a
                  href="mailto:aashwijathantry613@gmail.com"
                  className="!text-[#107373]/80 !hover:text-gray-800 !visited:text-[#107373]"
                >
                  mail{" "}
                </a>
                |
                <a
                  href="https://www.linkedin.com/in/aashwijat/"
                  className="!text-[#107373]/80 !hover:text-gray-800 !visited:text-[#107373]"
                >
                  {" "}
                  linkedin
                </a>{" "}
                |
                <a
                  href="https://drive.google.com/file/d/1mz_X1nWfR_tmMNx9CTaCi7D8orhqZiW4/view?usp=sharing"
                  className="!text-[#107373]/80 !hover:text-gray-800 !visited:text-[#107373]"
                >
                  {" "}
                  resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Contact;
