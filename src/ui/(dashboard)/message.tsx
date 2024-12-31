import type { Message } from '@/types/types';
import { getRandomColor } from '@/utils/getRandomColor';
import { lightenColor } from '@/utils/lightenColor';
import { motion } from 'motion/react';
import { useState } from 'react';

const Message = ({ content, title }: Message) => {
  const color = getRandomColor();
  const lighterVersion = lightenColor(color, 60);
  const [expand, setExpand] = useState(false);
  return (
    <>
      {expand && (
        <motion.div
          initial={{ backgroundColor: 'rgb(37,37,37,0.5)', opacity: 0 }}
          animate={{ opacity: expand ? 1 : 0 }}
          className="w-full z-10 inset-1  absolute
   top-0 left-0 min-h-screen flex items-center justify-center"
        ></motion.div>
      )}
      <motion.div
        onClick={() => {
          setExpand(true);
        }}
        initial={{
          minHeight: '200px',
          height: '250px',
          maxHeight: '250px',
          backgroundColor: lighterVersion,
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px',
        }}
        whileHover={{
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 20px -1px',
          scale: expand ? 1 : 1.02,
        }}
        animate={{
          minHeight: expand ? '80vh' : '',
          width: expand ? '90%' : '',
          position: expand ? 'absolute' : 'relative',
          top: expand ? '10%' : '',
          left: expand ? '5%' : '',
          zIndex: expand ? 100 : '',
          padding: expand ? '40px 20px' : '',
        }}
        className="flex flex-col relative items-start px-3 py-3 gap-3 rounded-lg cursor-pointer shadow-md text-outer-space lg:col-span-1 "
      >
        <h1
          className={`top-3 w-full text-lg lg:text-3xl font-raleway font-medium ${
            expand ? 'text-center' : ''
          }`}
        >
          Title {title}
        </h1>
        <p className="text-lg font-openSans">
          {content!.length >= 120
            ? content?.substring(0, 120) + '...'
            : content}
        </p>
      </motion.div>
    </>
  );
};

export default Message;
