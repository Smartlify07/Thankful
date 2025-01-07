import type { Message } from '@/types/types';
import { getRandomColor } from '@/utils/getRandomColor';
import { lightenColor } from '@/utils/lightenColor';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import MessagePopout from './message-popout';
import { FaEllipsisH } from 'react-icons/fa';
import MessageDropdown from './message-dropdown';
const Message = ({ content, title, $id }: Message) => {
  const color = getRandomColor();
  const lighterVersion = lightenColor(color, 60);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [showEllipsis, setShowEllipsis] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleHoverStart = () => {
    setShowEllipsis(true);
  };

  const handleHoverEnd = () => {
    setShowEllipsis(false);
  };

  const handleOpenMessage = () => {
    setIsMessageOpen(true);
  };
  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };
  const handleOpenDropdown = () => {
    setIsDropdownOpen(true);
  };

  return (
    <>
      <motion.div
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        onClick={handleOpenMessage}
        exit={{ opacity: 0 }}
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
        <div
          onMouseLeave={handleCloseDropdown}
          className="absolute right-0 top-0 h-full w-[110px] "
        >
          {showEllipsis && (
            <button
              onMouseEnter={handleOpenDropdown}
              className="rounded-full bg-black flex items-center justify-center bg-opacity-30 w-6 h-6 absolute top-4 right-2"
            >
              <FaEllipsisH size={14} className="text-[#333]" />
            </button>
          )}
          <AnimatePresence mode="popLayout">
            {isDropdownOpen && (
              <MessageDropdown
                $id={$id!}
                setIsDropdownOpen={setIsDropdownOpen}
                setIsMessageOpen={setIsMessageOpen}
              />
            )}
          </AnimatePresence>
        </div>

        <h1
          className={`top-3 text-lg sm:text-xl md:text-xl font-medium overflow-hidden font-poppins w-11/12`}
        >
          {title!.length >= 20 ? title?.substring(0, 20) + '...' : title}
        </h1>
        <p
          style={{ whiteSpace: 'initial', wordWrap: 'break-word' }}
          className={`text-lg whitespace-pre-wrap font-openSans w-full`}
        >
          {content!.length >= 60 ? content?.substring(0, 110) + '...' : content}
        </p>
      </motion.div>

      <AnimatePresence mode="popLayout">
        {isMessageOpen && (
          <MessagePopout
            title={title}
            content={content}
            isMessageOpen={isMessageOpen}
            setIsMessageOpen={setIsMessageOpen}
            $id={$id}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Message;
