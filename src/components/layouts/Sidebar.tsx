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
    <div className="h-screen border-r border-dashed fixed border-neutral-800 w-64 z-10">
      <div className="h-full w-full bg-background  bg-dot-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="h-full flex flex-col z-30 relative">
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
              <p className="text-muted text-sm">emailme@ritaro.dev</p>
              <Button variant="sidebar">
                <GithubIcon className="w-5 h-5" color="#161c24" />
                Github Repo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
