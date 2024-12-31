import { useEffect, useState } from 'react';
import { getUser, selectUser } from '@/redux/features/auth/authSlice';
import { AppDispatch } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Messages from '@/ui/(dashboard)/messages';
import TopNav from '@/ui/(dashboard)/top-nav';
import Button from '@/ui/button';
import { FaPlus } from 'react-icons/fa';
import CreateMessage from '@/ui/(dashboard)/create-message';
import { AnimatePresence } from 'motion/react';

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  useEffect(() => {
    (async () => {
      await dispatch(getUser());
    })();
  }, [dispatch]);

  return (
    <main className="flex flex-col py-6  border min-h-screen font-inter bg-[#fafafa]">
      <div className="flex flex-col gap-6 2xl:max-w-[1440px] px-10 ">
        <TopNav name={user?.name} />
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-medium font-inter">Your Messages</h1>
          <Button
            onClick={toggleModal}
            initial={{
              background: '#115e60',
            }}
            whileHover={{
              background: '#115e59',
            }}
            transition={{
              duration: 0.2,
            }}
            text="Create"
            className="rounded-md py-3 px-5 text-base font-poppins text-white flex items-center gap-2 font-medium"
          >
            <FaPlus />
          </Button>
        </header>
        <Messages />
      </div>

      <AnimatePresence mode="popLayout">
        {isModalOpen && (
          <CreateMessage toggleModal={toggleModal} isModalOpen={isModalOpen} />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Dashboard;
