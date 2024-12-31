import { User } from '@/types/types';

const Profile = ({ name }: User) => {
  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <div className="rounded-full w-10 h-10 bg-teal-700 flex items-center justify-center">
        <span className="text-white font-medium text-xl">
          {name?.charAt(0)}
        </span>
      </div>
    </div>
  );
};

export default Profile;
