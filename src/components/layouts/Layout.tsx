import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { BackgroundBeams } from "../ui/background-beam";
import Detail from "./Detail";

const Layout = () => {
  return (
    <div className="h-screen w-full bg-neutral-950 relative antialiased overflow-auto">
      <div>
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col ml-64">
          <Navbar />
          <main className="pt-20 px-10">
            <Outlet />
          </main>
        </div>
        {/* <Detail /> */}
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Layout;
