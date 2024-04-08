export const motionVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: {
        duration: 0.5,
        ease: "easeInOut",
      },
      y: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      opacity: {
        duration: 0.2,
        ease: "easeInOut",
      },
      scale: {
        duration: 0.5,
      },
    },
  },
};
