// import Header from "../../component/Header/Header";
import bg from "../../assets/bg.jpg";

const Home = () => {
  console.log("home");
  return (
    <div>
      {/* <Header /> */}
      <img
        className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none"
        src={bg}
        alt="backgroundImage"
        // preview={false}
      />
    </div>
  );
};

export default Home;
