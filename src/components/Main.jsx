import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";
import { faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <main id="main" className="relative">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        alt="background image"
      ></img>
      <div className="absolute w-full h-screen bg-white/50 top-0 left-0">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl text-[#292929]">
            Hey, I'm <span className="font-bold">Nacho</span>.
          </h1>
          <h2 className="sm:text-3xl text-2xl text-[#292929] pt-4">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer.",
                2000,
                "Coder.",
                2000,
                "Gamer.",
                2000,
                "Tech Enthusiast.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
                fontWeight: "700",
              }}
              repeat={Infinity}
            />
          </h2>
          <div
            id="social-icons-container"
            className="flex justify-between pt-4 max-w-[200px] w-full"
          >
            <a
              href="https://www.linkedin.com/in/ignacio-spreafico"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                className="cursor-pointer hover:text-blue-600 duration-300 text-[#292929]"
              />
            </a>
            <a href="https://www.github.com/nachospreafico">
              <FontAwesomeIcon
                icon={faGithub}
                size="xl"
                className="cursor-pointer hover:text-gray-600 duration-300 text-[#292929]"
              />
            </a>
            <a
              href="https://www.frontendmentor.io/profile/nachospreafico"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faCode}
                size="xl"
                className="cursor-pointer hover:text-red-400 duration-300 text-[#292929]"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
