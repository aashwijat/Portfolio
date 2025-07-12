import profileImage from "../assets/profile.png";

function Polaroid() {
  return (
    <>
      <div className="polaroid-film bg-white p-6 pb-16 w-80 h-100 rounded-lg shadow-xl max-w-sm transform">
        <div className="polaroid-image bg-gray-100 mb-4">
          <img
            src={profileImage}
            alt="profile picture"
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="text-center">
          <h3 className="text-xl polaroid-name text-gray-800 font-serif">
            Aashwija Thantry
          </h3>
        </div>
      </div>
    </>
  );
}

export default Polaroid;
