import type { Message } from '@/types/types';
import { getRandomColor } from '@/utils/getRandomColor';
import { lightenColor } from '@/utils/lightenColor';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import MessagePopout from './message-popout';
const Message = ({ content, title, $id }: Message) => {
  const color = getRandomColor();
  const lighterVersion = lightenColor(color, 60);
  const [expand, setExpand] = useState(false);
  return (
    <>
      <motion.div
        onClick={() => {
          setExpand(true);
        }}
        initial={{
          minHeight: '200px',
          width: 'auto',
          height: '250px',
          maxHeight: '250px',
          backgroundColor: lighterVersion,
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px',
        }}
        whileHover={{
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 20px -1px',
          scale: 1.02,
        }}
        className="flex flex-col relative items-start   px-3 py-5 gap-3 rounded-lg cursor-pointer shadow-md text-outer-space lg:col-span-1 "
      >
        <h1
          className={`top-3 w-full text-lg sm:text-xl md:text-2xl font-raleway font-medium`}
        >
          {title}
        </h1>
        <p className={`text-lg font-openSans overflow-hidden`}>{content}</p>
      </motion.div>

      <AnimatePresence mode="popLayout">
        {expand && (
          <MessagePopout
            title={title}
            content={content}
            expand={expand}
            setExpand={setExpand}
            $id={$id}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Message;
