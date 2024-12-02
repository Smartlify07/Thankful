import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormValues } from '../../types/types';
import { FaArrowLeftLong } from 'react-icons/fa6';
import React, { Dispatch } from 'react';

type SignupFormProps = {
  setSignupWithEmail: Dispatch<React.SetStateAction<boolean>>;
};

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name cannot exceed 50 characters')
    .required(`Name can't be blank`),
  email: Yup.string()
    .email('Invalid email address')
    .required(`Email can't be blank`),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character'
    )
    .required(`Password can't be blank`),
});

const SignupForm = ({ setSignupWithEmail }: SignupFormProps) => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values: FormValues) => {
    console.log('Form Submitted', values);
  };
  const handleGoBack = () => {
    setSignupWithEmail(false);
  };

  const labelClassName =
    'text-base font-normal text-slate-950 font-raleway tracking-[0.2px] text-gray-900';
  const inputClassName =
    'border rounded-lg text-sm placeholder:text-sm py-3 px-3 font-raleway outline-none transition-all  focus:border-2 focus:border-teal';

  const errorClassName = 'text-xs font-normal font-raleway text-red-500 -mt-1';
  return (
    <div className="w-full relative  self-start px-10 ">
      <button
        onClick={handleGoBack}
        className="rounded-full w-10 h-10 border-2  items-center flex justify-center"
      >
        <FaArrowLeftLong className="text-neutral-400" />
      </button>
      <div className="w-[400px] relative max-w-[500px] border  m-auto py-7 px-5 z-[10000] ">
        <div
          className="absolute w-[90%] h-full border-r-[10px] border-[#f0f0f0] border-opacity-80 border-b-[10px] border-teal-500 -z-[1000] 
    translate-y-0 -bottom-2.5 translate-x-0 -right-2.5 "
        ></div>
        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className={labelClassName} htmlFor="name">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your full name"
                  className={inputClassName}
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className={errorClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClassName} htmlFor="email">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className={inputClassName}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className={errorClassName}
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className={labelClassName} htmlFor="password">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className={inputClassName}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={errorClassName}
                />
              </div>

              <button
                className="bg-orange-500  rounded-lg py-3 px-2  text-white font-bold font-raleway mt-4"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;
