import { useEffect } from 'react';
import { getUser, selectUser } from '@/redux/features/auth/authSlice';
import { AppDispatch } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMessages,
  selectMessages,
} from '@/redux/features/messages/messagesSlice';
import Messages from '@/ui/(dashboard)/messages';
import TopNav from '@/ui/(dashboard)/top-nav';

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(selectUser);
  const messages = useSelector(selectMessages);
  console.log(messages);
  useEffect(() => {
    (async () => {
      await dispatch(getUser());
      await dispatch(getMessages());
    })();
  }, [dispatch]);
  return (
    <main className="flex flex-col">
      <TopNav />
      <Messages />
    </main>
  );
};

export default Dashboard;
