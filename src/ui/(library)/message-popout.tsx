import { Message } from '@/types/types';
import { getRandomColor } from '@/utils/getRandomColor';
import { lightenColor } from '@/utils/lightenColor';
import { motion } from 'motion/react';
import { FaX } from 'react-icons/fa6';
import Button from '../button';
import { Dispatch, SetStateAction, useState } from 'react';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { editMessage } from '@/redux/features/messages/messagesSlice';
import { useDebounce } from '@/hooks/useDebounce';

type MessagePopoutProps = Message & {
  expand: boolean;
  setExpand: Dispatch<SetStateAction<boolean>>;
};
const MessagePopout = ({
  title,
  content,
  expand,
  setExpand,
  $id,
}: MessagePopoutProps) => {
  const color = getRandomColor();
  const lighterVersion = lightenColor(color, 60);
  // @todo: add prop for color, to prevent change on open

  const [message, setMessage] = useState<Message>({
    title: title,
    content: content,
  });

  const dispatch: AppDispatch = useDispatch();

  const updateMessage = async (title: string, content: string, $id: string) => {
    await dispatch(
      editMessage({
        title,
        content,
        $id,
      })
    );
  };
  const debouncedUpdateMessage = useDebounce(updateMessage, 500);

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
          minHeight: '100vh',
          backgroundColor: lighterVersion,
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px',
          bottom: '-100vh',
        }}
        animate={{
          bottom: '0vh',
        }}
        className="flex flex-col relative w-8/12 items-start px-16 py-5 gap-10 shadow-md text-outer-space lg:col-span-1 2xl:max-w-[1320px]"
      >
        <input
          onChange={async (e) => {
            setMessage((prevState) => ({
              ...prevState,
              title: e.target.value,
            }));
            debouncedUpdateMessage(e.target.value, content!, $id!);
          }}
          className={`top-3 w-full text-lg sm:text-xl md:text-3xl font-openSans font-medium text-center bg-transparent outline-none focus:outline-none focus:border-none`}
          value={message.title}
        />
        <textarea
          onChange={(e) => {
            setMessage((prevState) => ({
              ...prevState,
              content: e.target.value,
            }));
          }}
          value={message.content}
          className={`text-xl bg-transparent w-full flex items-start font-openSans focus:border-none focus:outline-none min-h-[100vh] resize-none`}
        />
      </motion.div>
    </motion.div>
  );
};

export default MessagePopout;
