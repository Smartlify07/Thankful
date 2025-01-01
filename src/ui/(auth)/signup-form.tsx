import { FcGoogle } from 'react-icons/fc';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormValues } from '@/types/types';
import Button from '../button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { googleLogin, login, signup } from '@/redux/features/auth/authSlice';
import { signupSchema } from '@/validation/authValidationSchema';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { isErrorWithMessage } from '@/utils/isErrorWithMessage';

const SignupForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSignUp = async (values: FormValues): Promise<void> => {
    try {
      await dispatch(signup(values)).unwrap();
      await dispatch(login(values));
      navigate('/library');
    } catch (error) {
      let message;
      if (isErrorWithMessage(error)) {
        message = error.message;
      }
      toast.error(message, {
        hideProgressBar: true,

        style: {
          backgroundColor: '#fee2e2',
          color: '#222',
          border: '1px solid #7f1d1d ',
          padding: '10px',
        },
      });
      console.error(error);
    }
  };

  const handleGoogleSignUp = async () => {
    if (navigator.cookieEnabled) {
      await dispatch(googleLogin());
    } else {
      toast.error('You need to enable cookies to use this platform', {
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

  const labelClassName =
    'text-base font-normal text-slate-950 font-inter text-gray-900';
  const inputClassName =
    'border border-outer-space rounded-lg text-sm placeholder:text-sm py-3 px-3 font-inter outline-none transition-all focus:border-2 focus:border-lime';

  const errorClassName = 'text-xs font-normal font-poppins text-red-500 -mt-1';
  return (
    <div className="w-full relative self-start px-3 md:px-10 ">
      <div className="flex flex-col gap-2 h-lg:gap-4 w-full bg-white relative m-auto py-7 px-5 lg:max-w-[450px] ">
        <h1 className="text-outer-space mb-1 text-3xl font-medium font-inter">
          Sign up
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={handleSignUp}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className={labelClassName} htmlFor="email">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="E.g John Doe"
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
              className="bg-lime rounded-md py-2.5 px-2  text-outer-space font-semibold font-inter mt-4"
              type="submit"
            >
              Sign up
            </button>
          </Form>
        </Formik>
        <div className="flex flex-col gap-2 h-lg:gap-4">
          <div className="flex items-center gap-1">
            <hr className="border-[0.5px] w-6/12 border-neutral-200" />
            <p className="text-center text-neutral-400 text-sm">OR</p>
            <hr className="border w-6/12 border-neutral-200" />
          </div>
          <Button
            onClick={handleGoogleSignUp}
            text="Sign up with google"
            className="flex border justify-center flex-row-reverse font-inter font-semibold text-black items-center gap-2 py-2.5 px-4 text-center rounded-md"
          >
            <FcGoogle size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
