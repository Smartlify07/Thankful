import { Link, useNavigate } from 'react-router';
import logo from '/public/images/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="py-5 px-6 md:px-4  rounded-xl flex items-center justify-center font-raleway">
      <div className="w-full md:w-11/12 flex items-center justify-between">
        <Link
          to={'/'}
          className="text-warmorange font-medium font-playfair italic text-4xl "
        >
          <img className="md:hidden" src={logo} alt="Logo" />
          <span className="hidden md:block">Thankful</span>
        </Link>

        <div className="flex items-center gap-4 md:gap-2">
          <button
            onClick={() => navigate('/signin')}
            className="py-2 px-3 rounded-lg md:rounded-full w-auto lg:w-[120px] md:h-[48px] border-[1.5px] text-slate-900 font-medium"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="py-2 px-3 rounded-lg md:rounded-full  w-auto md:w-[120px] md:h-[48px] text-white bg-[#ff4405] md:font-semibold"
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
