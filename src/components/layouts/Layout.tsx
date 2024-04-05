import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { BackgroundBeams } from "../ui/background-beam";
import Detail from "./Detail";

const Layout = () => {
  // return (
  //   <div className="h-screen w-full bg-neutral-950 relative antialiased">
  //     {/* <div className="border-neutral-800 w-full relative z-10 bg-neutral-950 placeholder:text-neutral-700"> */}

  //     <BackgroundBeams />
  //   </div>
  // );

  return (
    <div className="h-screen w-full bg-[#161c24] relative antialiased">
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Navbar />
          <Outlet />
        </div>
        {/* <Detail /> */}
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Layout;
