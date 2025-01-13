import { NavLink } from "react-router-dom";
import { MdOutlineNotifications } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className="bg-cover bg-center text-white h-[120px] containerM flex items-center px-5 justify-between sticky top-0">
      <div className="flex gap-1 items-center">
        <h1 className="w-[180px] font-serif font-bold text-3xl text-[#FF8C00]">
          Book Shop
        </h1>
      </div>
      <ul className="flex items-center gap-5 text-[20px]">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>

        <li>
          <NavLink to={"/manage"}>Bird</NavLink>
        </li>
        <li className="text-[30px]">
          <MdOutlineNotifications />
        </li>
        <li className="flex flex-col justify-center items-center text-[25px]">
          <RxAvatar />
          <p className="text-xs">Sign in</p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
