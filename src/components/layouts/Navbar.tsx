import { capitalizePathname } from "@/utils/common.utils";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion as m, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [title, setTitle] = useState<string>(
    capitalizePathname(location.pathname)
  );
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    setIsVisible(false);

    const timeoutId = setTimeout(() => {
      setTitle(capitalizePathname(location.pathname));
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <nav className="h-20 border-r border-dashed fixed border-accent backdrop-blur-md z-50 w-full">
      <div className="container h-full flex items-center">
        <AnimatePresence mode="wait">
          <m.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            className="font-semibold text-foreground text-2xl"
          >
            {title}
          </m.h1>
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
