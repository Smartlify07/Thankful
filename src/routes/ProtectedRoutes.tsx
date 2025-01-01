import { selectUser } from '@/redux/features/auth/authSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector(selectUser);
  if (user) {
    return children;
  } else {
    <Navigate to="/signin" />;
  }
};

export default ProtectedRoute;
