import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faX,
  faUserTie,
  faListCheck,
  faPaperPlane,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <nav>
      <FontAwesomeIcon
        icon={nav ? faX : faBars}
        size="2x"
        color="gray"
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="md:hidden flex flex-col z-[20] w-full h-screen bg-white justify-center items-center">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FontAwesomeIcon icon={faHome} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} />
            <span className="pl-4">Skills</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FontAwesomeIcon icon={faListCheck} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FontAwesomeIcon icon={faUserTie} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : null}
      <div
        id="large-nav"
        className="md:block hidden fixed top-[25%] z-10 left-[1%]"
      >
        <div className="flex flex-col">
          <a
            href="#main"
            className="flex flex-col justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FontAwesomeIcon icon={faHome} />
            <span className="text-center text-xs">Home</span>
          </a>
          <a
            href="#skills"
            className="flex flex-col justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} />
            <span className="text-center text-xs">Skills</span>
          </a>
          <a
            href="#projects"
            className="flex flex-col justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FontAwesomeIcon icon={faListCheck} />
            <span className="text-center text-xs">Projects</span>
          </a>
          <a
            href="#work"
            className="flex flex-col justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FontAwesomeIcon icon={faUserTie} />
            <span className="text-center text-xs">Work</span>
          </a>
          <a
            href="#contact"
            className="flex flex-col justify-center items-center rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            <span className="text-center text-xs">Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
