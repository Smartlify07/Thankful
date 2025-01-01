import { Navigate, useNavigate } from 'react-router';
import SigninForm from './signin-form';
import { useSelector } from 'react-redux';
import { selectUser } from '@/redux/features/auth/authSlice';

const Signin = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  if (!user)
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
  else {
    return <Navigate to="/library" />;
  }
};

export default Signin;
