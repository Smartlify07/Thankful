import { useEffect } from 'react';
import {
  getMessages,
  selectMessages,
} from '@/redux/features/messages/messagesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import Message from './message';
import { User } from '@/types/types';
import { AnimatePresence } from 'motion/react';

type MessagesProps = {
  user: User;
};
const Messages = ({ user }: MessagesProps) => {
  const messages = useSelector(selectMessages);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getMessages(user.$id!));
    })();
  }, [dispatch, user]);

  return (
    <section className="py-6">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-center gap-8 lg:gap-16 ">
        {messages.map((message) => (
          <AnimatePresence mode="popLayout">
            <Message key={message.$id} {...message} />
          </AnimatePresence>
        ))}
      </ul>
    </section>
  );
};

export default Messages;
