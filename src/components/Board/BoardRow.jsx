import { motion } from 'framer-motion';
import Tile from './Tile';

// const container = {
//   hidden: { opacity: 1, scale: 1 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   }
// }

// const item = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 }
// }

export default function BoardRow({ values, animation }) {
  const word = ['', '', '', '', ''];

  for (let i = 0; i < values.length; i++) {
    word[i] = values[i];
  }

  return (
    <motion.div
      className='flex items-center gap-[5px]'
    >
      {word.map((value, index) => {
        return <Tile animate key={index} value={value} state={'empty'} />
      })}
    </motion.div>
  );
}
