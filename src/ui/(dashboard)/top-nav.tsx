import { User } from '@/types/types';

const TopNav = ({ name }: User) => {
  console.log(name);
  return <nav className="flex items-center gap-2">{name}</nav>;
};

export default TopNav;
