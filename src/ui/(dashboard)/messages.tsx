import { useEffect } from 'react';
import {
  getMessages,
  selectMessages,
} from '@/redux/features/messages/messagesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import Message from './message';

const Messages = () => {
  const messages = useSelector(selectMessages);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getMessages());
    })();
  }, [dispatch]);

  return (
    <section className="py-6 border">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-center gap-8 lg:gap-16 ">
        {messages.map((message) => (
          <Message key={message.$id} content={message.content} />
        ))}
      </ul>
    </section>
  );
};

export default Messages;
