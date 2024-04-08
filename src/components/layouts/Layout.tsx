import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { BackgroundBeams } from "../ui/background-beam";

const Layout = () => {
  return (
    <div className="h-screen w-full bg-background relative antialiased overflow-auto">
      <div>
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col lg:ml-64">
          <Navbar />
          <main className="container pt-20 pb-10 px-4 md:px-10">
            <Outlet />
          </main>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Layout;
