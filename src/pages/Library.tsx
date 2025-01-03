import { useState } from 'react';
import { selectUser } from '@/redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Messages from '@/ui/(library)/messages';
import TopNav from '@/ui/(library)/top-nav';
import Button from '@/ui/button';
import { FaPlus } from 'react-icons/fa';
import { AnimatePresence } from 'motion/react';
import { AppDispatch } from '@/redux/store';
import { createMessage } from '@/redux/features/messages/messagesSlice';
import MessagePopout from '@/ui/(library)/message-popout';
import { toast } from 'react-toastify';
import { isErrorWithMessage } from '@/utils/isErrorWithMessage';

const Library = () => {
  const user = useSelector(selectUser);
  const dispatch: AppDispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState('');

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleCreateMessage = async () => {
    try {
      const message = await dispatch(
        createMessage({ title: '', content: '', user_id: user?.$id })
      );
      setId((message.payload as { $id: string }).$id);
    } catch (error) {
      let errorMessage;
      if (isErrorWithMessage(error)) {
        errorMessage = error.message;
      }
      toast.error(errorMessage, {
        hideProgressBar: true,
        style: {
          backgroundColor: '#fee2e2',
          color: '#222',
          border: '1px solid #7f1d1d ',
          padding: '10px',
        },
      });
    }
  };

  return (
    <main className="flex flex-col  2xl:items-center py-6 relative min-h-screen font-inter bg-[#fafafa]">
      <div className="flex flex-col gap-6 2xl:w-[1440px] 2xl:max-w-[1440px] px-5 md:px-10 ">
        <TopNav name={user?.name} />
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-medium font-inter">Your Library</h1>
          <Button
            onClick={() => {
              toggleModal();
              handleCreateMessage();
            }}
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
          <MessagePopout
            title=""
            content=""
            isMessageOpen={isModalOpen}
            setIsMessageOpen={setIsModalOpen}
            $id={id}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Library;
