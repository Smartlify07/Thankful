import { useState } from 'react';
import SignupForm from './signup-form';
import SignupOptions from './signup-options';

const SignUp = () => {
  const [signupWithEmail, setSignupWithEmail] = useState(false);
  const toggleSignUpForm = () => {
    setSignupWithEmail((prevState) => !prevState);
  };
  return (
    <div className="rounded-xl  w-full  flex flex-col items-center  px-2 py-5 ">
      {signupWithEmail && (
        <SignupForm setSignupWithEmail={setSignupWithEmail} />
      )}

      {!signupWithEmail && (
        <SignupOptions toggleSignUpForm={toggleSignUpForm} />
      )}

      <p className="text-sm mt-10 text-center text-gray-500 font-normal">
        Already have an account?{' '}
        <span className="text-sm text-slate-950 font-normal underline">
          Sign in
        </span>
      </p>
    </div>
  );
};

export default SignUp;
