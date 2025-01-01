import { useState } from 'react';
import { selectUser } from '@/redux/features/auth/authSlice';
import { useSelector } from 'react-redux';
import Messages from '@/ui/(library)/messages';
import TopNav from '@/ui/(library)/top-nav';
import Button from '@/ui/button';
import { FaPlus } from 'react-icons/fa';
import CreateMessage from '@/ui/(library)/create-message';
import { AnimatePresence } from 'motion/react';

const Library = () => {
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <main className="flex flex-col  2xl:items-center py-6 relative min-h-screen font-inter bg-[#fafafa]">
      <div className="flex flex-col gap-6 2xl:w-[1440px] 2xl:max-w-[1440px] px-5 md:px-10 ">
        <TopNav name={user?.name} />
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-medium font-inter">Your Library</h1>
          <Button
            onClick={toggleModal}
            initial={{
              background: '#c8ef3a',
            }}
            whileHover={{
              background: '#a0bf2e',
            }}
            transition={{
              duration: 0.2,
            }}
            text="Create"
            className="rounded-md py-3 px-5 text-base font-poppins text-black flex items-center gap-2 font-medium"
          >
            <FaPlus />
          </Button>
        </header>
        {user && <Messages user={user!} />}
      </div>

      <AnimatePresence mode="popLayout">
        {isModalOpen && (
          <CreateMessage
            user_id={user?.$id}
            toggleModal={toggleModal}
            isModalOpen={isModalOpen}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Library;
