import { useNavigate } from 'react-router';
import SigninForm from './signin-form';

const Signin = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl w-full  flex flex-col items-center px-2 py-5 ">
      <SigninForm />

      <div className="flex items-center gap-2 mt-5">
        <p className="text-sm  text-center text-[#555] font-normal">
          New here ?
        </p>
        <button
          onClick={() => navigate('/signup')}
          className="text-sm text-black font-normal underline"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Signin;
