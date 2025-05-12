import { useNavigate } from "react-router-dom";
import bg from "../../assets/bg.jpg";
import FoodManagement from "./FoodManagement";
import FoodWaste from "./FoodWaste";
import TogetherWeCan from "./TogetherWeCan";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      {/* Container with relative positioning */}
      <div className="relative h-screen">
        {/* Overlay div positioned absolutely over the image */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#111] opacity-60 z-10" />

        {/* Centered Content */}
        <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center pt-5">
          <h1 className="text-6xl main-title font-bold text-center inline-block">
            Food Rescue
          </h1>
          <p className="text-white text-3xl text-center my-5">
            “If you’re throwing away food, you’re throwing away life.” – Anthony
            Bourdain
          </p>
          <button
            className="text-black  bg-white rounded-full px-6 py-4 text-2xl transition-all duration-300 hover:scale-110"
            type="button"
            onClick={() => {
              navigate("/donate");
            }}
          >
            Donate Food!
          </button>
        </div>

        {/* Background image */}
        <img
          className="block w-full h-screen object-cover "
          src={bg}
          alt="backgroundImage"
        />
      </div>
      <div className="p-4">
        <FoodWaste />
        <FoodManagement />
        <TogetherWeCan />
      </div>
    </div>
  );
};

export default Home;
