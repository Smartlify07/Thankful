import { useEffect } from 'react';
import {
  getMessages,
  selectMessages,
} from '@/redux/features/messages/messagesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';

const Messages = () => {
  const messages = useSelector(selectMessages);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getMessages());
    })();
  }, [dispatch]);

  return (
    <div>
      <ul className="flex flex-col gap-1">
        {messages.map((message) => (
          <li key={message.$id}>{message.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
