// SidebarItem.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/common.utils";

type SidebarItemProps = {
  item: {
    name: string;
    path: string;
    icon: React.ElementType;
  };
  idx: number;
  location: {
    pathname: string;
  };
};

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

const SidebarItem: React.FC<SidebarItemProps> = ({ item, idx, location }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<Direction>("TOP");
  const isActive = location.pathname === item.path;

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex =
      (currentIndex - 1 + directions.length) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prevState) => rotateDirection(prevState));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link
      key={item.path}
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
      to={item.path}
      className="relative group h-14 w-full block"
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-12 w-full bg-neutral-900 bg-opacity-65 backdrop-blur-sm rounded-lg"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <div
        className={`${
          isActive &&
          "bg-neutral-950 backdropblur-[2px] hover:bg-[#0c1e1e] border "
        } flex gap-4 px-3 rounded-xl h-12 items-center relative hover:text-neutral-950 border-[#3a4b42] transition-all duration-100 ease-in-out z-20`}
      >
        <item.icon
          className="w-6 h-6"
          color={isActive ? "#5be49b" : "#737373"}
        />
        <div
          className={`${
            isActive ? "text-[#5be49b]" : "text-neutral-500"
          } text-sm font-semibold`}
        >
          {item.name}
        </div>
      </div>
      {isActive && (
        <motion.div
          className={cn(
            "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
          )}
          style={{
            filter: "blur(2px)",
            position: "absolute",
            width: "100%",
            height: "3rem",
            background: movingMap[direction],
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            background: movingMap[direction],
          }}
          transition={{ ease: "linear", duration: 1 }}
        />
      )}
    </Link>
  );
};

export default SidebarItem;
