const WorkItem = ({ from, toDate, location, role, company, tasks, skills }) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
      <p className="text-xs md:text-sm">
        <span className="bg-blue-400 rounded-md py-1 px-2 inline-block mb-1">
          <span>{from}</span> / <span>{toDate}</span>
        </span>
        <span className="font-bold pl-2 text-[#292929] text-lg mb-1">
          {role}
        </span>{" "}
        -{" "}
        <span className="my-1 text-sm font-normal leading-none text-stone-500 mb-1">
          {company}, {location}
        </span>
      </p>
      <p className="my-2 text-base font-normal text-stone-600">{tasks}</p>
      <p className="my-2 font-normal text-stone-600 text-xs">
        {skills ? `Skills: ${skills}` : null}
      </p>
    </li>
  );
};

export default WorkItem;
