import React from "react";
import cosmosLogo from "/cosmos.svg";
import { Link } from "react-router-dom";
const sidebarItems = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "/ic_dashboard.svg",
  },
  {
    path: "/proposals",
    name: "Proposals",
    icon: "/ic_proposal.svg",
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: "/ic_transaction.svg",
  },
  {
    path: "/validators",
    name: "Validators",
    icon: "/ic_validator.svg",
  },
  {
    path: "/blocks",
    name: "Blocks",
    icon: "/ic_block.svg",
  },
];

const Sidebar = () => {
  return (
    <div className="h-screen border-r border-dashed fixed border-neutral-800 backdrop-blur-sm w-64 z-10">
      <div className="p-8">
        <img src={cosmosLogo} alt="Cosmos Logo" className="w-10 h-10" />
      </div>
      <div className="px-5">
        <ul className="flex flex-col gap-8">
          {sidebarItems.map((item) => (
            <li
              key={item.path}
              className={` flex gap-4 px-3 bg-[#5be49b0d] rounded-lg py-3 items-center hover:bg-[#5be49b] hover:text-neutral-950 transition-colors duration-300 ease-in-out`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-6 h-6 fill-current text-red-400"
              />
              <Link to={item.path} className={`text-sm text-[#5be49b]`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
