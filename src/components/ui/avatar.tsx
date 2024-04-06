import { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const Avatar = ({
  name,
  designation,
  image,
}: {
  name: string;
  designation: string;
  image: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.6,
                transition: { duration: 0.1 },
              }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-[72px] -left-1/2 -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-[#14272A] z-50 shadow-xl px-4 py-2"
            >
              <div className="absolute inset-x-1/2 -translate-x-1/2 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
              <div className="absolute left-1/2 -translate-x-1/2 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent h-px " />
              <div className="font-bold text-slate-400 relative z-30 text-base">
                {name}
              </div>
              <div className="text-slate-400 text-xs">{designation}</div>
            </motion.div>
          )}
        </AnimatePresence>
        <img
          onMouseMove={handleMouseMove}
          height={100}
          width={100}
          src={image}
          alt={name}
          className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-[#395848] hover:border-[#5be49b]  relative transition duration-500"
        />
      </div>
    </>
  );
};
