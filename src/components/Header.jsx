import logo from "../assets/logo.png";
import moment from "moment"

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div className="logo">
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <h2 className="font-normal text-xl text-[#706F6F]">Journalism Without Fear or Favour</h2>
      <p className="font-medium text-xl text-[#403F3F]">{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
