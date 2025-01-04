import { deleteMessage } from '@/redux/features/messages/messagesSlice';
import { AppDispatch } from '@/redux/store';
import { isErrorWithMessage } from '@/utils/isErrorWithMessage';
import { motion } from 'motion/react';
import { Dispatch, forwardRef, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
type MessageDropdownProps = {
  $id: string;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
  setIsMessageOpen: Dispatch<SetStateAction<boolean>>;
};
const MessageDropdown = forwardRef<HTMLDivElement, MessageDropdownProps>(
  function MessageDropdown({ $id, setIsMessageOpen, setIsDropdownOpen }, ref) {
    const dispatch: AppDispatch = useDispatch();
    const handleDeleteMessage = async () => {
      try {
        await dispatch(deleteMessage($id)).unwrap();
      } catch (error) {
        let message;
        if (isErrorWithMessage(error)) {
          message = error.message;
        }
        console.error(error);
        toast(message, {});
      }
    };
    const handleOpenMessage = async () => {
      setIsMessageOpen(true);
    };
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1, delay: 0 }}
        className="bg-white rounded-md absolute shadow-lg border flex w-[110px] flex-col gap-0 py-3 -right-5 top-14"
        onMouseLeave={() => {
          setIsDropdownOpen(false);
        }}
      >
        <Option label="Open" action={handleOpenMessage} />
        <Option label="Share" />
        <Option
          label="Delete"
          action={handleDeleteMessage}
          className="text-red-500"
        />
      </motion.div>
    );
  }
);

const Option = ({
  label,
  className,
  action,
}: {
  label: string;
  className?: string;
  action?: () => void;
}) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        action!();
      }}
      className={`px-3 py-2 text-base text-left font-poppins text-outer-space hover:bg-neutral-100 ${className}`}
    >
      {label}
    </button>
  );
};

export default MessageDropdown;
