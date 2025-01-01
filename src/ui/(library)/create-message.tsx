import { createMessage } from '@/redux/features/messages/messagesSlice';
import { AppDispatch } from '@/redux/store';
import { Message, User } from '@/types/types';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { motion } from 'motion/react';
import Button from '../button';
import { FaX } from 'react-icons/fa6';

type CreateMessageProps = {
  isModalOpen: boolean;
  toggleModal: () => void;
  user_id: User['$id'];
};
const CreateMessage = ({
  isModalOpen,
  toggleModal,
  user_id,
}: CreateMessageProps) => {
  const initialValues: Message = {
    title: '',
    content: '',
  };

  const dispatch: AppDispatch = useDispatch();

  const handleCreateMessage = async (values: Message) => {
    await dispatch(createMessage({ ...values, user_id }));
    toggleModal();
  };

  return (
    <motion.div
      initial={{ backgroundColor: 'rgb(37,37,37,0.5)', opacity: 0 }}
      animate={{ opacity: isModalOpen ? 1 : 0 }}
      className="w-full z-10 inset-1  absolute
   top-0 left-0 min-h-screen flex items-center justify-center"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
          handleCreateMessage(values);
        }}
      >
        <div className="relative">
          <Form className="rounded-md bg-white px-6 py-6 min-h-[300px] w-[300px] md:w-[350px] flex flex-col gap-4">
            <InputField
              label="Title"
              name="title"
              type="text"
              placeholder="Feeling thankful"
            />
            <InputField
              label="Content"
              name="content"
              type="text"
              placeholder="Thank you so much for the..."
              textarea
            />

            <button className="bg-teal-800 text-white font-inter font-semibold mt-2 rounded-md py-3 px-2 text-center">
              Submit
            </button>
          </Form>
          <Button
            onClick={toggleModal}
            className="rounded-full absolute flex items-center justify-center border w-10 h-10 -top-12 -right-5  md:-top-8 md:-right-14"
          >
            <FaX className="text-white" />
          </Button>
        </div>
      </Formik>
    </motion.div>
  );
};

const labelClassName =
  'text-base font-normal text-neutral-700 font-inter text-gray-900';
const inputClassName =
  'border rounded-md text-sm placeholder:text-sm py-3 px-3 font-inter outline-none transition-all focus:border focus:border-neutral-500';

type InputFieldProps = {
  name: string;
  type: string;
  placeholder: string;
  label: string;
  textarea?: boolean;
};
const InputField = ({
  name,
  placeholder,
  type,
  label,
  textarea,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>

      <Field
        as={textarea ? 'textarea' : ''}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputClassName}
      />
    </div>
  );
};
export default CreateMessage;
