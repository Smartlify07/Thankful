import { useNavigate } from 'react-router';
import SignupForm from './signup-form';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl w-full  flex flex-col items-center px-2 py-5 ">
      <SignupForm />

      <div className="flex items-center gap-2 h-lg:mt-5">
        <p className="text-sm  text-center text-[#555] font-normal">
          Already have an account?{' '}
        </p>
        <button
          onClick={() => navigate('/signin')}
          className="text-sm text-black font-normal underline"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignUp;
