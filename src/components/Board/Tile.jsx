import { AnimatePresence, motion } from "framer-motion";

const variant = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 1, scale: [1, 1.1, 1], transition: { duration: 0.1 } },
  exit: { opacity: 1, scale: 1 },
};

export default function Tile({ letter = "", state, animate, exit = {}, test }) {
  const bg =
    state === "correct"
      ? "bg-correct"
      : state === "present"
      ? "bg-present"
      : state === "absent"
      ? "bg-absent"
      : state === "tdb"
      ? "border-2 border-[#565758]"
      : "border-2 border-[#3a3a3c]";

  return animate ? (
    // <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={variant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`w-full h-full inline-flex justify-center items-center text-3xl font-bold align-middle
          uppercase select-none text-gray-250 ${bg}`}
      >
        {letter}
      </motion.div>
    // </AnimatePresence>
  ) : (
    <div
      className={`w-full h-full inline-flex justify-center items-center text-3xl font-bold align-middle
        uppercase select-none text-gray-250 ${bg}`}
    >
      {letter}
    </div>
  );
}
