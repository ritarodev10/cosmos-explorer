import cosmosLogo from "/cosmos.svg";
import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "@/config/sidebarData";
import SidebarItem from "../ui/sidebar-item";
import { Button } from "../ui/button";
import { GithubIcon } from "../icons";
import { Avatar } from "../ui/avatar";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col border-r border-dashed fixed border-neutral-800 backdrop-blur-sm w-64 z-10">
      <div className="p-8">
        <Link to="/">
          <img src={cosmosLogo} alt="Cosmos Logo" className="w-10 h-10" />
        </Link>
      </div>
      <div className="flex-1 flex flex-col justify-between px-5">
        <div>
          {sidebarItems.map((item, idx) => (
            <SidebarItem
              key={item.path}
              item={item}
              idx={idx}
              location={location}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3 items-center py-8 px-8">
          <Avatar
            name="Riza Rohman"
            designation="Software Engineer"
            image="/profile-pict.jpeg"
          />
          <p className="text-slate-500 text-sm">emailme@ritaro.dev</p>
          <Button variant="sidebar">
            <GithubIcon className="w-5 h-5" color="#161c24" />
            Github Repo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
