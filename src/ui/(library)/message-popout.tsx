import { Message } from '@/types/types';
import { getRandomColor } from '@/utils/getRandomColor';
import { lightenColor } from '@/utils/lightenColor';
import { motion } from 'motion/react';
import Button from '../button';
import { Dispatch, forwardRef, SetStateAction, useState } from 'react';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { editMessage } from '@/redux/features/messages/messagesSlice';
import { useDebounce } from '@/hooks/useDebounce';
import { PiX } from 'react-icons/pi';

type MessagePopoutProps = Message & {
  isMessageOpen: boolean;
  setIsMessageOpen: Dispatch<SetStateAction<boolean>>;
};
const MessagePopout = forwardRef<HTMLDivElement, MessagePopoutProps>(
  function MessagePopout(
    { isMessageOpen, setIsMessageOpen, title, content, $id },
    ref
  ) {
    const color = getRandomColor();
    const lighterVersion = lightenColor(color, 60);
    // @todo: add prop for color, to prevent change on open

    const [message, setMessage] = useState<Message>({
      title: title,
      content: content,
    });

    const dispatch: AppDispatch = useDispatch();

    const updateMessage = async (
      title: string,
      content: string,
      $id: string
    ) => {
      await dispatch(
        editMessage({
          title,
          content,
          $id,
        })
      );
    };
    const debouncedUpdateMessage = useDebounce(updateMessage, 300);
    return (
      <motion.div
        ref={ref}
        initial={{ backgroundColor: 'rgb(37,37,37,0.5)', opacity: 0 }}
        animate={{ opacity: isMessageOpen ? 1 : 0 }}
        exit={{
          opacity: 0,
        }}
        className="w-full z-10 fixed
   top-0 left-0 min-h-screen flex items-center justify-center"
      >
        <motion.div
          initial={{
            minHeight: '100vh',
            backgroundColor: lighterVersion,
            boxShadow:
              'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px',
            translateY: '100%',
          }}
          animate={{
            translateY: '0%',
          }}
          transition={{
            duration: 0.5,
          }}
          exit={{
            translateY: '100%',
          }}
          className="flex flex-col relative w-8/12 items-start px-16 py-5 gap-10 shadow-md text-outer-space lg:col-span-1 2xl:max-w-[1320px]"
        >
          <Button
            onClick={() => setIsMessageOpen(false)}
            className="rounded-full absolute flex items-center justify-center right-6 top-6"
          >
            <PiX size={24} className="text-charcoal-gray" />
          </Button>{' '}
          <input
            placeholder="Title"
            onChange={async (e) => {
              setMessage((prevState) => ({
                ...prevState,
                title: e.target.value,
              }));
              debouncedUpdateMessage(e.target.value, message.content!, $id!);
            }}
            className={`top-3 w-full text-lg sm:text-xl md:text-3xl font-openSans font-medium text-center bg-transparent outline-none focus:outline-none focus:border-none placeholder:text-neutral-600`}
            value={message.title}
          />
          <textarea
            onChange={(e) => {
              setMessage((prevState) => ({
                ...prevState,
                content: e.target.value,
              }));
              debouncedUpdateMessage(message.title!, e.target.value, $id!);
            }}
            value={message.content}
            className={`text-xl bg-transparent w-full flex items-start font-openSans focus:border-none focus:outline-none min-h-[100vh] resize-none`}
          />
        </motion.div>
      </motion.div>
    );
  }
);

export default MessagePopout;
