import { Avatar } from "antd";
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.jpg";

const Header = () => {
  const menuList = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "What We Do",
      path: "/",
    },
    {
      id: 3,
      title: "Get Involved",
      path: "/",
    },
    {
      id: 4,
      title: "About Us",
      path: "/",
    },
    {
      id: 5,
      title: "Contact Us",
      path: "/",
    },
  ];

  console.log(menuList);
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center">
      <img
        className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none"
        src={bg}
        alt="backgroundImage"
        // preview={false}
      />

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
