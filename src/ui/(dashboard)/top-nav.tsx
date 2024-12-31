import { User } from '@/types/types';
import Profile from './profile';

const TopNav = ({ name }: User) => {
  return (
    <nav className="flex items-center gap-2 w-full justify-between bg-[#f4f4f4]  py-3 px-6 rounded-3xl border">
      <h1 className="text-outer-space font-medium italic tracking-tight font-playfair-display text-3xl">
        Thankful
      </h1>
      <Profile name={name} />
    </nav>
  );
};

export default TopNav;
