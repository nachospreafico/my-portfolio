import HTML5 from "./../assets/HTML5.png";
import CSS3 from "./../assets/CSS3.png";
import JavaScript from "./../assets/JavaScript.png";
import ReactLogo from "./../assets/React.png";
import Vite from "./../assets/Vite.png";
import Tailwind from "./../assets/Tailwind.png";
import Bootstrap from "./../assets/Bootstrap.svg";
import GitHub from "./../assets/GitHub.png";

const Skills = () => {
  return (
    <section id="skills" className="max-w-[1040px] md:pl-20 m-auto p-4 pt-16">
      <h1 className="text-4xl font-bold text-center text-[#292929] mb-16">
        Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 justify-items-center group">
        <div className="flex gap-4 flex-col items-center justify-center max-w-[100px] sm:max-w-[150px] hover:scale-110 duration-300">
          <img src={HTML5} alt="HTML5 logo"></img>
          <h2 className="text-[#292929] font-bold">HTML5</h2>
        </div>
        <div className="flex gap-4 flex-col items-center justify-center max-w-[100px] sm:max-w-[150px] hover:scale-110 duration-300">
          <img src={CSS3} alt="CSS3 logo"></img>
          <h2 className="text-[#292929] font-bold">CSS3</h2>
        </div>
        <div className="flex gap-4 flex-col items-center justify-center max-w-[100px] sm:max-w-[150px] hover:scale-110 duration-300">
          <img src={JavaScript} alt="javascript logo"></img>
          <h2 className="text-[#292929] font-bold">JavaScript</h2>
        </div>
        <div className="flex gap-4 flex-col items-center justify-center max-w-[100px] sm:max-w-[150px] hover:scale-110 duration-300">
          <img src={ReactLogo} alt="react logo"></img>
          <h2 className="text-[#292929] font-bold">React</h2>
        </div>
        <div className="flex gap-4 flex-col items-center justify-center max-w-[100px] sm:max-w-[150px] hover:scale-110 duration-300">
          <img src={Vite} alt="vite logo"></img>
          <h2 className="text-[#292929] font-bold">Vite</h2>
        </div>
        <div className="flex gap-4 flex-col items-center justify-center max-w-[100px] sm:max-w-[150px] hover:scale-110 duration-300">
          <img src={Tailwind} alt="tailwind css logo"></img>
          <h2 className="text-[#292929] font-bold">Tailwind CSS</h2>
        </div>
        <div className="flex gap-4 flex-col items-center justify-center max-w-[100px] sm:max-w-[150px] hover:scale-110 duration-300">
          <img src={Bootstrap} alt="bootstrap logo"></img>
          <h2 className="text-[#292929] font-bold">Bootstrap</h2>
        </div>
        <div className="flex gap-4 flex-col items-center justify-center max-w-[100px] sm:max-w-[150px] hover:scale-110 duration-300">
          <img src={GitHub} alt="github logo"></img>
          <h2 className="text-[#292929] font-bold">GitHub</h2>
        </div>
      </div>
    </section>
  );
};

export default Skills;
