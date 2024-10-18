import { Avatar } from "antd";
import logo from "../../assets/logo.png";
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
    {
      id: 2,
      title: "What We Do",
      path: ROUTES.WHAT_WE_DO,
    },
    {
      id: 3,
      title: "Get Involved",
      path: ROUTES.GET_INVOLVED,
    },
    {
      id: 4,
      title: "About Us",
      path: ROUTES.ABOUT_US,
    },
    {
      id: 5,
      title: "Contact Us",
      path: ROUTES.CONTACT_US,
    },
  ];

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center">
      <header
        style={{
          backgroundImage:
            "linear-gradient(rgba(1, 0, 5, 0.6),rgba(4, 1, 17, 0.6))",
        }}
        className="relative z-10 w-full h-screen "
      >
        <nav
          style={{
            backgroundImage:
              "linear-gradient(rgba(34, 9, 133, 0.2),rgba(11, 8, 24, 0.3))",
          }}
          className="w-full fixed flex justify-between items-center px-16 shadow-lg"
        >
          {/* Logo */}
          <div>
            <Avatar size={60} src={logo} alt="logo" />
          </div>

          {/* Menu */}
          <div className="flex gap-2 items-center">
            {menuList.map((ele) => (
              <div
                key={ele.id}
                onClick={() => {
                  navigate(ele.path);
                }}
                className="text-white text-lg py-2.5 cursor-pointer px-4 rounded-md transition font-medium hover:bg-white hover:text-black"
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
