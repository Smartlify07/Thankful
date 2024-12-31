import type { Message } from '@/types/types';
import { getRandomColor } from '@/utils/getRandomColor';
import { lightenColor } from '@/utils/lightenColor';
import { motion } from 'motion/react';

const Message = ({ content, title }: Message) => {
  const color = getRandomColor();
  const lighterVersion = lightenColor(color, 60);
  return (
    <motion.div
      initial={{
        backgroundColor: lighterVersion,
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px',
      }}
      whileHover={{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 20px -1px',
        scale: 1.02,
      }}
      className="flex flex-col relative items-start px-3 py-3 gap-3  rounded-lg cursor-pointer shadow-md text-outer-space min-h-[200px] h-[250px] max-h-[250px]  lg:col-span-1 "
    >
      <h1 className=" top-3 w-full text-lg lg:text-3xl font-raleway font-medium ">
        Title {title}
      </h1>
      <p className="text-lg font-openSans">
        {content!.length >= 120 ? content?.substring(0, 120) + '...' : content}
      </p>
    </motion.div>
  );
};

export default Message;
