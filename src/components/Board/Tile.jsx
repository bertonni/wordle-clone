import { motion } from 'framer-motion';

const keyVariant = {
  initial: { scale: 1 },
  animation: { scale: 1.1 }
}

export default function Tile({ value, state, animate }) {
  const bg = state === "correct" ? 'bg-correct'
    : state === 'present' ? 'bg-present'
    : state === 'absent' ? 'bg-absent'
    : state === 'tdb' ? 'border-2 border-[#565758]' : 'border-2 border-[#3a3a3c]';
  return (
    <motion.div
      variants={keyVariant}
      className={`w-full h-full inline-flex justify-center items-center text-3xl font-bold align-middle
        uppercase select-none text-gray-250 ${bg}`}>
        { value }
    </motion.div>
  );
}
