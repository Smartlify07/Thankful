import { useEffect } from 'react';
import { getUser, selectUser } from '../redux/features/auth/authSlice';
import { AppDispatch } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  useEffect(() => {
    (async () => {
      const user = await dispatch(getUser());
      console.log(user);
    })();
  }, [dispatch]);
  return <div>Dashboard</div>;
};

export default Dashboard;
