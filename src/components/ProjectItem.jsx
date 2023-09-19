const ProjectItem = ({ title, image, url, tech }) => {
  return (
    <div className="relative flex justify-center items-center w-fit h-fit col-span-1 shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#292929]">
      <img
        src={image}
        className="rounded-xl group-hover:opacity-10"
        alt="project image"
      ></img>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-white font-bold tracking-wider text-center text-2xl">
          {title}
        </h1>
        <p className="pt-2 pb-4 text-white text-center">{tech}</p>
        <a href={url} target="_blank">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 cursor-pointer text-lg hover:text-white hover:bg-gray-700 duration-300">
            Check it live
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
