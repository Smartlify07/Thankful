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

      <div className="flex items-center gap-2 mt-10">
        <p className="text-sm  text-center text-[#555] font-normal">
          Already have an account?{' '}
        </p>
        <button className="text-sm text-black font-normal underline">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignUp;
