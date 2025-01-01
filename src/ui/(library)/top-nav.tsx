import { User } from '@/types/types';
import Profile from './profile';
import Button from '../button';
import { logout } from '@/redux/features/auth/authSlice';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { LuLogOut } from 'react-icons/lu';

const TopNav = ({ name }: User) => {
  const dispatch: AppDispatch = useDispatch();
  const handleLogout = async () => {
    await dispatch(logout());
  };
  return (
    <nav className="flex items-center gap-2 w-full justify-between bg-[#f4f4f4]  py-3 px-6 rounded-3xl border">
      <h1 className="text-outer-space font-medium italic tracking-tight font-playfair-display text-3xl">
        Thankful
      </h1>
      <div className="flex items-center gap-2">
        <Profile name={name} />
        <Button onClick={handleLogout}>
          <LuLogOut className="text-outer-space" size={20} />
        </Button>
      </div>
    </nav>
  );
};

export default TopNav;
