import { Avatar } from "antd";
import logo from "../../assets/logo2.png";
import { ROUTES } from "../../utils/route";
import { useNavigate } from "react-router-dom";
// import bg from "../../assets/bg.jpg";

const Header = () => {
  const navigate = useNavigate();
  const menuList = [
    {
      id: 1,
      title: "Home",
      path: ROUTES.HOME,
    },
    // {
    //   id: 2,
    //   title: "What We Do",
    //   path: ROUTES.WHAT_WE_DO,
    // },
    {
      id: 3,
      title: "Donate",
      path: ROUTES.DONATE,
    },
    // {
    //   id: 4,
    //   title: "About Us",
    //   path: ROUTES.ABOUT_US,
    // },
    // {
    //   id: 5,
    //   title: "Contact Us",
    //   path: ROUTES.CONTACT_US,
    // },
  ];
  const currentPath = window.location.pathname;

  return (
    <div className="w-full  overflow-hidden flex justify-center items-center">
      <header
        style={{
          backgroundImage:
            "linear-gradient(rgba(1, 0, 5, 0.6),rgba(4, 1, 17, 0.6))",
        }}
        className="absolute  w-full h-[60px] top-0 z-[999]"
      >
        <nav
          style={{
            backgroundImage:
              "linear-gradient(rgba(34, 9, 133, 0.2),rgba(11, 8, 24, 0.3))",
          }}
          className="w-full fixed flex justify-between items-center px-16 shadow-lg"
        >
          {/* Logo */}
          <button
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            <Avatar size={60} src={logo} alt="logo" />
          </button>

          {/* Menu */}
          <div className="flex gap-2 items-center">
            {menuList.map((ele) => (
              <div
                key={ele.id}
                onClick={() => {
                  navigate(ele.path);
                }}
                className={`text-white text-lg py-2.5 cursor-pointer px-4 rounded-md transition font-medium hover:bg-white hover:text-black ${
                  currentPath === ele.path && "!bg-white !text-black"
                }`}
              >
                {ele.title}
              </div>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
