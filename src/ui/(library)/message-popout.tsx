import { Message } from '@/types/types';
import { getRandomColor } from '@/utils/getRandomColor';
import { lightenColor } from '@/utils/lightenColor';
import { motion } from 'motion/react';
import { FaX } from 'react-icons/fa6';
import Button from '../button';
import { Dispatch, SetStateAction } from 'react';

type MessagePopoutProps = Message & {
  expand: boolean;
  setExpand: Dispatch<SetStateAction<boolean>>;
};
const MessagePopout = ({
  title,
  content,
  expand,
  setExpand,
}: MessagePopoutProps) => {
  const color = getRandomColor();
  const lighterVersion = lightenColor(color, 60);
  // @todo: add prop for color, to prevent change on open

  return (
    <motion.div
      initial={{ backgroundColor: 'rgb(37,37,37,0.5)', opacity: 0 }}
      animate={{ opacity: expand ? 1 : 0 }}
      className="w-full z-10 absolute
   top-0 left-0 min-h-screen flex items-center justify-center"
    >
      <Button
        onClick={() => setExpand(false)}
        className="rounded-full absolute flex items-center justify-center border w-10 h-10 right-2 top-4"
      >
        <FaX className="text-white" />
      </Button>{' '}
      <motion.div
        initial={{
          minHeight: '80vh',
          backgroundColor: lighterVersion,
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px',
          bottom: '-100vh',
        }}
        animate={{
          bottom: '0vh',
        }}
        className="flex flex-col relative w-11/12 items-start px-5 py-5 gap-3 rounded-lg shadow-md text-outer-space lg:col-span-1 2xl:max-w-[1320px]"
      >
        <h1
          className={`top-3 w-full text-lg sm:text-xl md:text-3xl font-raleway font-medium text-center`}
        >
          {title}
        </h1>
        <p className={`text-lg font-openSans`}>
          {content!.length >= 120
            ? content?.substring(0, 120) + '...'
            : content}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default MessagePopout;
