import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { BackgroundBeams } from "../ui/background-beam";
import Detail from "./Detail";

const Layout = () => {
  return (
    <div className="h-screen w-full bg-[#161c24] relative antialiased overscroll-y-none">
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Navbar />
          <Outlet />
        </div>
        {/* <Detail /> */}
        {/* <BackgroundBeams /> */}
      </div>
    </div>
  );
};

export default Layout;
