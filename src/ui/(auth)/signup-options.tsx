import { FcGoogle } from 'react-icons/fc';

type SignupOptionsProps = {
  toggleSignUpForm: () => void;
};
const SignupOptions = ({ toggleSignUpForm }: SignupOptionsProps) => {
  return (
    <div className="w-11/12  md:w-[400px] flex flex-col gap-6">
      <button className="bg-slate-950 rounded-full h-[60px] py-3 text-center font-medium text-white flex items-center justify-center gap-4">
        <FcGoogle size={30} /> Sign up with Google
      </button>

      <div className="flex items-center gap-4">
        <hr className="border w-full " />
        <p className="text-sm font-normal text-gray-500 ">Or</p>
        <hr className="border w-full " />
      </div>

      <button
        onClick={toggleSignUpForm}
        className="bg-white border-[1.5px] rounded-full h-[60px] py-3 text-center font-medium text-slate-950 flex items-center justify-center gap-4"
      >
        Continue with email
      </button>
    </div>
  );
};

export default SignupOptions;
