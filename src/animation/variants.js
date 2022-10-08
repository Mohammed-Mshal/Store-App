export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
export const productsVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};
